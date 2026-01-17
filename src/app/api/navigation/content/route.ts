import { NextRequest } from 'next/server';
import axios from 'axios';

// Helper function to create a timeout promise
function timeout(ms: number) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    const slug = searchParams.get('slug');

    if (!section) {
      return new Response(JSON.stringify({ error: 'Section parameter is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ssc-backend-production-3b8f.up.railway.app/v1';

    let content;
    if (slug) {
      // Fetch specific content with timeout
      console.log(`Attempting to fetch specific content from deployed backend: ${section}/${slug}`);
      const contentPromise = axios.get(`${backendUrl}/content/${section}/${slug}`, {
        timeout: 5000, // 5 second timeout
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
      const timeoutPromise = timeout(5000); // 5 second timeout
      const response = await Promise.race([contentPromise, timeoutPromise]) as any;
      content = response.data;
    } else {
      // Fetch content list for section with timeout
      console.log(`Attempting to fetch content list from backend: ${section}`);
      const contentPromise = axios.get(`${backendUrl}/content/${section}`, {
        timeout: 5000, // 5 second timeout
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
      const timeoutPromise = timeout(5000); // 5 second timeout
      const response = await Promise.race([contentPromise, timeoutPromise]) as any;
      content = response.data;
    }

    console.log('Content fetch successful from backend:', content.status || 'OK');

    // Return the data from the backend
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error fetching content from backend:', error);

    // Log the specific error for debugging
    console.error('Content fetch error details:', {
      message: error.message,
      stack: error.stack
    });

    // Return error response
    return new Response(JSON.stringify({
      success: false,
      message: error.message || 'Failed to fetch content from backend',
      data: null
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}