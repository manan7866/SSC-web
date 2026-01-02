import { NextRequest } from 'next/server';
import axios from 'axios';
import { config } from '@/lib/config';

export async function GET(request: NextRequest) {
  try {
    // Get the API URL for academy routes
    const apiUrl = `${config.API_BASE_URL}/content/academy`;

    console.log('Attempting to fetch academy routes from:', apiUrl);

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

    console.log('Academy routes fetch successful:', response.status);

    // Return the data from the external API
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error fetching academy routes:', error);

    // Log the specific error for debugging
    console.error('Academy routes error details:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data
    });

    // If there's a network error, try to make the request without some headers that might cause issues
    if (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      try {
        console.log('Retrying academy routes fetch with minimal headers...');

        const apiUrl = `${config.API_BASE_URL}/content/academy`;
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 15000, // Slightly longer timeout for retry
        });

        console.log('Academy routes fetch successful on retry:', response.status);

        return new Response(JSON.stringify(response.data), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        });
      } catch (retryError) {
        console.error('Retry also failed for academy routes:', retryError);
      }
    }

    // Return fallback data in case of error
    const fallbackData = {
      success: true,
      status: 200,
      message: 'Using fallback data',
      data: {
        items: [
          { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
          { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
          { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
          { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
        ]
      }
    };

    return new Response(JSON.stringify(fallbackData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}