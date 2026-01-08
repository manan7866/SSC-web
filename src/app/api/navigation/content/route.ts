import { NextRequest } from 'next/server';
import { readCmsContent, readSpecificCmsContent } from '@/lib/cmsReader';

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

    let content;
    if (slug) {
      // Fetch specific content with timeout
      console.log(`Attempting to fetch specific content from CMS: ${section}/${slug}`);
      const contentPromise = readSpecificCmsContent(section, slug);
      const timeoutPromise = timeout(5000); // 5 second timeout
      content = await Promise.race([contentPromise, timeoutPromise]) as any;
    } else {
      // Fetch content list for section with timeout
      console.log(`Attempting to fetch content list from CMS: ${section}`);
      const contentPromise = readCmsContent(section);
      const timeoutPromise = timeout(5000); // 5 second timeout
      content = await Promise.race([contentPromise, timeoutPromise]) as any;
    }

    console.log('Content fetch successful from CMS:', content.status);

    // Return the data from the CMS
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error fetching content from CMS:', error);

    // Log the specific error for debugging
    console.error('Content fetch error details:', {
      message: error.message,
      stack: error.stack
    });

    // Return error response
    return new Response(JSON.stringify({
      success: false,
      message: error.message || 'Failed to fetch content from CMS',
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