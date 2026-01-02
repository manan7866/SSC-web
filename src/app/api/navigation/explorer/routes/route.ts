import { NextRequest } from 'next/server';
import axios from 'axios';
import { config } from '@/lib/config';

export async function GET(request: NextRequest) {
  try {
    // Get the API URL for explorer routes
    const apiUrl = `${config.API_BASE_URL}/content/explorer`;

    console.log('Attempting to fetch explorer routes from:', apiUrl);

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

    console.log('Explorer routes fetch successful:', response.status);

    // Return the data from the external API
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error fetching explorer routes:', error);

    // Log the specific error for debugging
    console.error('Explorer routes error details:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data
    });

    // If there's a network error, try to make the request without some headers that might cause issues
    if (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      try {
        console.log('Retrying explorer routes fetch with minimal headers...');

        const apiUrl = `${config.API_BASE_URL}/content/explorer`;
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 15000, // Slightly longer timeout for retry
        });

        console.log('Explorer routes fetch successful on retry:', response.status);

        return new Response(JSON.stringify(response.data), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        });
      } catch (retryError) {
        console.error('Retry also failed for explorer routes:', retryError);
      }
    }

    // Return fallback data in case of error
    const fallbackData = {
      success: true,
      status: 200,
      message: 'Using fallback data',
      data: {
        items: [
          { slug: "foundationalmatrices", title: "Foundational Matrices", path: "prod/explorer/foundationalmatrices/v1.json" },
          { slug: "ecologicalintelligence", title: "Ecological Intelligence", path: "prod/explorer/ecologicalintelligence/v1.json" },
          { slug: "consciousnessgeometries", title: "Consciousness Geometries", path: "prod/explorer/consciousnessgeometries/v1.json" },
          { slug: "perceptualgateways", title: "Perceptual Gateways", path: "prod/explorer/perceptualgateways/v1.json" },
          { slug: "realityframeworks", title: "Reality Frameworks", path: "prod/explorer/realityframeworks/v1.json" },
          { slug: "cosmicharmonics", title: "Cosmic Harmonics", path: "prod/explorer/cosmicharmonics/v1.json" },
          { slug: "energeticarchitectures", title: "Energetic Architectures", path: "prod/explorer/energeticarchitectures/v1.json" },
          { slug: "characteralchemy", title: "Character Alchemy", path: "prod/explorer/characteralchemy/v1.json" },
          { slug: "unitysciences", title: "Unity Sciences", path: "prod/explorer/unitysciences/v1.json" },
          { slug: "healingmysteries", title: "Healing Mysteries", path: "prod/explorer/healingmysteries/v1.json" },
          { slug: "wisdomtransmission", title: "Wisdom Transmission", path: "prod/explorer/wisdomtransmission/v1.json" },
          { slug: "sacredartistry", title: "Sacred Artistry", path: "prod/explorer/sacredartistry/v1.json" },
          { slug: "advancedtechnologies", title: "Advanced Technologies", path: "prod/explorer/advancedtechnologies/v1.json" }
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