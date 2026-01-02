import { NextRequest } from 'next/server';
import axios from 'axios';
import { config } from '@/lib/config';

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

    let apiUrl;
    if (slug) {
      // Fetch specific content
      apiUrl = `${config.API_BASE_URL}/content/${section}/${slug}`;
    } else {
      // Fetch content list for section
      apiUrl = `${config.API_BASE_URL}/content/${section}`;
    }

    console.log('Attempting to fetch content from:', apiUrl);

    // Make server-side request to external API
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      // Add timeout to prevent hanging requests
      timeout: 10000,
    });

    console.log('Content fetch successful:', response.status);

    // Return the data from the external API
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error fetching content:', error);

    // Log the specific error for debugging
    console.error('Content fetch error details:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data
    });

    // If there's a network error, try to make the request without some headers that might cause issues
    if (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      try {
        console.log('Retrying content fetch with minimal headers...');

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

        let apiUrl;
        if (slug) {
          // Fetch specific content
          apiUrl = `${config.API_BASE_URL}/content/${section}/${slug}`;
        } else {
          // Fetch content list for section
          apiUrl = `${config.API_BASE_URL}/content/${section}`;
        }

        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 15000, // Slightly longer timeout for retry
        });

        console.log('Content fetch successful on retry:', response.status);

        return new Response(JSON.stringify(response.data), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        });
      } catch (retryError) {
        console.error('Retry also failed for content:', retryError);
      }
    }

    // Return error response
    return new Response(JSON.stringify({
      success: false,
      message: error.message || 'Failed to fetch content',
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