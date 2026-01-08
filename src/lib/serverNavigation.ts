// Server-side helper to fetch navigation data
import { NavigationItem } from "@/hooks/navigationServices";

export interface NavigationData {
  explorerRoutes: NavigationItem[];
  academyRoutes: NavigationItem[];
}

// Predefined fallback data in case server fetch fails
const FALLBACK_EXPLORER_ROUTES: NavigationItem[] = [
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

const FALLBACK_ACADEMY_ROUTES: NavigationItem[] = [
  { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
  { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
  { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
  { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
];

// Server-side function to get navigation data
export async function getNavigationData(): Promise<NavigationData> {
  try {
    // Try to fetch from the deployed CMS server-side
    const [explorerRes, academyRes] = await Promise.allSettled([
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ssc-web-pearl.vercel.app'}/api/navigation/explorer/routes`),
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ssc-web-pearl.vercel.app'}/api/navigation/academy/routes`)
    ]);

    let explorerRoutes: NavigationItem[] = [];
    let academyRoutes: NavigationItem[] = [];

    if (explorerRes.status === 'fulfilled' && explorerRes.value.ok) {
      const explorerData = await explorerRes.value.json();
      explorerRoutes = explorerData.data?.items || FALLBACK_EXPLORER_ROUTES;
    } else {
      console.error('Failed to fetch explorer routes:', explorerRes.status === 'rejected' ? explorerRes.reason : 'HTTP error');
      explorerRoutes = FALLBACK_EXPLORER_ROUTES;
    }

    if (academyRes.status === 'fulfilled' && academyRes.value.ok) {
      const academyData = await academyRes.value.json();
      academyRoutes = academyData.data?.items || FALLBACK_ACADEMY_ROUTES;
    } else {
      console.error('Failed to fetch academy routes:', academyRes.status === 'rejected' ? academyRes.reason : 'HTTP error');
      academyRoutes = FALLBACK_ACADEMY_ROUTES;
    }

    return {
      explorerRoutes,
      academyRoutes
    };
  } catch (error) {
    console.error('Error fetching navigation data server-side:', error);
    // Return fallback data in case of any error
    return {
      explorerRoutes: FALLBACK_EXPLORER_ROUTES,
      academyRoutes: FALLBACK_ACADEMY_ROUTES
    };
  }
}