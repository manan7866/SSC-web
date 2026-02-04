import { NextRequest } from 'next/server';
import axios from 'axios';

// Helper function to create a timeout promise
function timeout(ms: number) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

export async function GET(request: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.sufisciencecenter.info/v1';
    

    // Fetch content from backend with timeout to prevent hanging requests
    const contentPromise = axios.get(`${backendUrl}/content/academy`, {
      timeout: 8000, // 8 second timeout
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
    const timeoutPromise = timeout(8000); // Increased timeout for deployment

    const response = await Promise.race([contentPromise, timeoutPromise]) as any;
    const content = response.data;

    

    // Return the data from the backend
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    console.error('Error fetching academy routes from backend:', error);

    // Log the specific error for debugging
    console.error('Academy routes error details:', {
      message: error.message,
      stack: error.stack
    });

    // Return fallback data in case of error
    const fallbackData = {
      success: true,
      status: 200,
      message: 'Using fallback data due to backend connection issue',
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
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
