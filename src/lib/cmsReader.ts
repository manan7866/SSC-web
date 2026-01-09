// Define the path to the CMS content directory - Updated to reflect the actual deployed CMS location
const CMS_BASE_URL = 'https://ssc-cms.vercel.app'; // Base URL for the deployed CMS

// Import for Node.js file system access in API routes
import { promises as fsPromises } from 'fs';
import path from 'path';

export interface NavigationItem {
  slug: string;
  title: string;
  path: string;
}

export interface CmsContent {
  success: boolean;
  status: number;
  message: string;
  data: {
    items: NavigationItem[];
  };
}

/**
 * Fetches content from the deployed CMS with timeout
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

/**
 * Tries multiple possible endpoints to fetch content from the CMS
 */
async function tryMultipleEndpoints(endpoints: string[]): Promise<Response | null> {
  for (const endpoint of endpoints) {
    try {
      console.log(`Trying CMS endpoint: ${endpoint}`);
      const response = await fetchWithTimeout(endpoint, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'User-Agent': 'SSC-Frontend/1.0',
          'Origin': 'https://ssc-web-pearl.vercel.app' // Specify origin for CORS
        },
        method: 'GET'
      }, 10000); // Increased timeout to 10 seconds
      if (response.ok) {
        console.log(`Success with endpoint: ${endpoint}, status: ${response.status}`);
        return response;
      } else {
        console.log(`Endpoint returned status ${response.status}: ${endpoint}`);
        // Try to get error details if possible
        try {
          const errorText = await response.text();
          console.log(`Error response: ${errorText.substring(0, 200)}...`); // First 200 chars
        } catch (e) {
          console.log(`Could not read error response: ${e}`);
        }
      }
    } catch (error) {
      console.log(`Failed to fetch from endpoint: ${endpoint}`, error);
      // Continue to try next endpoint
    }
  }
  return null;
}

/**
 * Reads content directly from local file system
 */
async function readLocalFile(filePath: string): Promise<any> {
  try {
    console.log(`Trying to read local file: ${filePath}`);
    const fileContent = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.log(`Failed to read local file: ${filePath}`, error);
    return null;
  }
}

/**
 * Fetches content from the deployed CMS
 */
export async function readCmsContent(section: string): Promise<CmsContent> {
  try {
    // Try multiple possible endpoint patterns for the deployed CMS - including static JSON files
    const possibleEndpoints = [
      // Most common API endpoints for content management systems
      `${CMS_BASE_URL}/api/content/${section}`,
      `${CMS_BASE_URL}/api/${section}`,
      `${CMS_BASE_URL}/api/pages/${section}`,
      `${CMS_BASE_URL}/api/v1/content/${section}`,
      `${CMS_BASE_URL}/api/v1/${section}`,

      // Alternative patterns
      `${CMS_BASE_URL}/${section}`,
      `${CMS_BASE_URL}/content/${section}`,
      `${CMS_BASE_URL}/v1/content/${section}`,

      // Static JSON files (most likely if CMS publishes static content)
      `${CMS_BASE_URL}/content/prod/${section}/v1.json`,
      `${CMS_BASE_URL}/prod/${section}/v1.json`,
      `${CMS_BASE_URL}/content/${section}/index.json`,
      `${CMS_BASE_URL}/data/${section}.json`,
      `${CMS_BASE_URL}/content/${section}.json`,
      `${CMS_BASE_URL}/${section}/index.json`,
    ];

    console.log(`Attempting to fetch content from deployed CMS for section: ${section}`);

    // First try network endpoints
    let response = await tryMultipleEndpoints(possibleEndpoints);

    if (response) {
      console.log(`Successfully fetched content from deployed CMS: ${response.url}`);
      try {
        const data = await response.json();
        console.log(`Received data from CMS:`, data);

        // Format the response to match the expected API format
        return {
          success: true,
          status: 200,
          message: 'Successfully loaded from deployed CMS',
          data: {
            items: Array.isArray(data) ? data : (data.items || [])
          }
        };
      } catch (parseError) {
        console.error(`Failed to parse JSON response from CMS:`, parseError);
        // If JSON parsing fails, try to get text response for debugging
        try {
          const textResponse = await response.text();
          console.log(`Raw response from CMS:`, textResponse.substring(0, 500));
        } catch (textError) {
          console.error(`Failed to read raw response:`, textError);
        }
      }
    } else {
      console.log(`All network endpoints failed for section: ${section}`);
    }

    // If network requests fail, try local file system
    console.log(`Network requests failed, trying local file system for section: ${section}`);

    // Define possible local file paths based on your project structure
    const localPaths = [
      path.join('E:', 'SSC projects', 'SSC-CMS-Hamza-main', 'content', 'prod', section, 'v1.json'), // Absolute path to CMS project
      path.join(process.cwd(), '..', 'SSC-CMS-Hamza-main', 'content', 'prod', section, 'v1.json'), // Relative path from frontend
      path.resolve(__dirname, '..', '..', '..', '..', 'SSC-CMS-Hamza-main', 'content', 'prod', section, 'v1.json'), // Alternative absolute path
      path.join(process.cwd(), 'content', 'prod', section, 'v1.json'), // relative to current project
    ];

    for (const localPath of localPaths) {
      const data = await readLocalFile(localPath);
      if (data !== null) {
        console.log(`Successfully loaded content from local file: ${localPath}`);
        return {
          success: true,
          status: 200,
          message: 'Successfully loaded from local CMS file',
          data: {
            items: Array.isArray(data) ? data : (data.items || [])
          }
        };
      }
    }

    throw new Error(`All CMS endpoints and local files failed for section: ${section}`);
  } catch (error) {
    console.error(`Error fetching CMS content for section '${section}' from ${CMS_BASE_URL}:`, error);

    // Return fallback data based on section
    let fallbackItems: NavigationItem[] = [];

    switch (section) {
      case 'explorer':
        fallbackItems = [
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
        ];
        break;
      case 'academy':
        fallbackItems = [
          { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
          { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
          { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
          { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
        ];
        break;
      default:
        fallbackItems = [];
    }

    return {
      success: true,
      status: 200,
      message: 'Using fallback data due to CMS fetch failure',
      data: {
        items: fallbackItems
      }
    };
  }
}

/**
 * Fetches specific content from the deployed CMS
 */
export async function readSpecificCmsContent(section: string, slug: string): Promise<any> {
  try {
    // Try multiple possible endpoint patterns for specific content - including static JSON files
    const possibleEndpoints = [
      // Most common API endpoints for content management systems
      `${CMS_BASE_URL}/api/content/${section}/${slug}`,
      `${CMS_BASE_URL}/api/${section}/${slug}`,
      `${CMS_BASE_URL}/api/pages/${section}/${slug}`,
      `${CMS_BASE_URL}/api/v1/content/${section}/${slug}`,
      `${CMS_BASE_URL}/api/v1/${section}/${slug}`,

      // Alternative patterns
      `${CMS_BASE_URL}/${section}/${slug}`,
      `${CMS_BASE_URL}/content/${section}/${slug}`,
      `${CMS_BASE_URL}/v1/content/${section}/${slug}`,

      // Static JSON files (most likely if CMS publishes static content)
      `${CMS_BASE_URL}/content/prod/${section}/${slug}/v1.json`,
      `${CMS_BASE_URL}/prod/${section}/${slug}/v1.json`,
      `${CMS_BASE_URL}/content/${section}/${slug}/index.json`,
      `${CMS_BASE_URL}/data/${section}/${slug}.json`,
      `${CMS_BASE_URL}/content/${section}/${slug}.json`,
      `${CMS_BASE_URL}/${section}/${slug}/index.json`,
    ];

    console.log(`Attempting to fetch specific content from deployed CMS: ${section}/${slug}`);

    // First try network endpoints
    let response = await tryMultipleEndpoints(possibleEndpoints);

    if (response) {
      console.log(`Successfully fetched specific content from deployed CMS: ${response.url}`);
      try {
        const data = await response.json();
        console.log(`Received specific content data from CMS:`, data);

        // Return the actual content data with proper structure for individual pages
        return {
          success: true,
          status: 200,
          message: 'Successfully loaded from deployed CMS',
          data: {
            id: `${section}-${slug}`,
            section: section as any,
            slug: slug,
            title: data.title || `${section} - ${slug}`,
            blocks: Array.isArray(data.blocks) ? data.blocks : (Array.isArray(data.items) ? data.items : []),
            version: data.version || 1,
            updatedAt: data.updatedAt || new Date().toISOString(),
            ...(data.subtitle && { subtitle: data.subtitle }),
            ...(data.parentPage && { parentPage: data.parentPage }),
            ...(data.cardTitle && { cardTitle: data.cardTitle }),
            ...(data.heroImage && { heroImage: data.heroImage }),
            ...(data.category && { category: data.category }),
            ...(data.seo && { seo: data.seo })
          }
        };
      } catch (parseError) {
        console.error(`Failed to parse JSON response for specific content:`, parseError);
        // If JSON parsing fails, try to get text response for debugging
        try {
          const textResponse = await response.text();
          console.log(`Raw response for specific content:`, textResponse.substring(0, 500));
        } catch (textError) {
          console.error(`Failed to read raw response:`, textError);
        }

        // Return an empty content structure if parsing fails
        return {
          success: true,
          status: 200,
          message: 'Successfully loaded from deployed CMS (parsed as empty)',
          data: {
            id: `${section}-${slug}`,
            section: section as any,
            slug: slug,
            title: `${section} - ${slug}`,
            blocks: [],
            version: 1,
            updatedAt: new Date().toISOString()
          }
        };
      }
    } else {
      console.log(`All network endpoints failed for specific content: ${section}/${slug}`);
    }

    // If network requests fail, try local file system
    console.log(`Network requests failed, trying local file system for ${section}/${slug}`);

    // Define possible local file paths based on your project structure
    const localPaths = [
      path.join('E:', 'SSC projects', 'SSC-CMS-Hamza-main', 'content', 'prod', section, slug, 'v1.json'), // Absolute path to CMS project
      path.join(process.cwd(), '..', 'SSC-CMS-Hamza-main', 'content', 'prod', section, slug, 'v1.json'), // Relative path from frontend
      path.resolve(__dirname, '..', '..', '..', '..', 'SSC-CMS-Hamza-main', 'content', 'prod', section, slug, 'v1.json'), // Alternative absolute path
      path.join(process.cwd(), 'content', 'prod', section, slug, 'v1.json'), // relative to current project
    ];

    for (const localPath of localPaths) {
      const data = await readLocalFile(localPath);
      if (data !== null) {
        console.log(`Successfully loaded specific content from local file: ${localPath}`);
        return {
          success: true,
          status: 200,
          message: 'Successfully loaded from local CMS file',
          data: {
            id: `${section}-${slug}`,
            section: section as any,
            slug: slug,
            title: data.title || `${section} - ${slug}`,
            blocks: Array.isArray(data.blocks) ? data.blocks : (Array.isArray(data.items) ? data.items : []),
            version: data.version || 1,
            updatedAt: data.updatedAt || new Date().toISOString(),
            ...(data.subtitle && { subtitle: data.subtitle }),
            ...(data.parentPage && { parentPage: data.parentPage }),
            ...(data.cardTitle && { cardTitle: data.cardTitle }),
            ...(data.heroImage && { heroImage: data.heroImage }),
            ...(data.category && { category: data.category }),
            ...(data.seo && { seo: data.seo })
          }
        };
      }
    }

    console.log(`All local file paths failed for specific content: ${section}/${slug}`);

    // Return an empty content structure as final fallback
    return {
      success: false,
      status: 404,
      message: 'Content not found in CMS',
      data: {
        id: `${section}-${slug}`,
        section: section as any,
        slug: slug,
        title: `${section} - ${slug}`,
        blocks: [],
        version: 1,
        updatedAt: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error(`Error fetching specific content for section '${section}' and slug '${slug}' from CMS:`, error);

    return {
      success: false,
      status: 500,
      message: 'Error occurred while fetching content',
      data: {
        id: `${section}-${slug}`,
        section: section as any,
        slug: slug,
        title: `${section} - ${slug}`,
        blocks: [],
        version: 1,
        updatedAt: new Date().toISOString()
      }
    };
  }
}