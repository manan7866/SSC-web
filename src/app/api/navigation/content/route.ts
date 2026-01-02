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
      apiUrl = `${config.API_BASE_URL}/content/${section}/${slug}?_t=${Date.now()}`;
    } else {
      // Fetch content list for section
      apiUrl = `${config.API_BASE_URL}/content/${section}?_t=${Date.now()}`;
    }

    // Make server-side request to external API
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

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