import { NextRequest } from 'next/server';
import { readCmsContent } from '@/lib/cmsReader';

// Helper function to create a timeout promise
function timeout(ms: number) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

export async function GET(request: NextRequest) {
  try {
    console.log('Attempting to fetch academy routes from deployed CMS at https://ssc-cms.vercel.app');

    // Fetch content from CMS with timeout to prevent hanging requests
    const contentPromise = readCmsContent('academy');
    const timeoutPromise = timeout(8000); // Increased timeout for deployment

    const content = await Promise.race([contentPromise, timeoutPromise]) as any;

    console.log('Academy routes fetch successful from CMS:', content.status, content.message);
    console.log('Academy routes data length:', content.data?.items?.length || 0);

    // Return the data from the CMS
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    console.error('Error fetching academy routes from CMS:', error);

    // Log the specific error for debugging
    console.error('Academy routes error details:', {
      message: error.message,
      stack: error.stack
    });

    // Return fallback data in case of error
    const fallbackData = {
      success: true,
      status: 200,
      message: 'Using fallback data due to CMS connection issue',
      data: {
        items: [
          { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
          { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
          { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
          { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
        ]
      }
    };

    console.log('Returning fallback data for academy routes:', fallbackData.data.items.length);

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