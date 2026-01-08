import { contentServices } from "./contentServices";

export interface NavigationItem {
  slug: string;
  title: string;
  path: string;
}

export interface NavigationData {
  data: {
    items: NavigationItem[];
  };
}

export const navigationServices = {
  // Fetch explorer routes from backend
  async getExplorerRoutes(): Promise<NavigationItem[]> {
    try {
      // Use the internal API route to avoid CORS issues
      const response = await fetch('/api/navigation/explorer/routes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Explorer response:", result);
      return result.data?.items || [];
    } catch (error) {
      console.error("Error fetching explorer routes:", error);
      console.log("Returning fallback data for explorer routes");
      // Fallback to default routes if API fails
      return [
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
    }
  },

  // Fetch academy routes from backend
  async getAcademyRoutes(): Promise<NavigationItem[]> {
    try {
      // Use the internal API route to avoid CORS issues
      const response = await fetch('/api/navigation/academy/routes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Academy response:", result);
      return result.data?.items || [];
    } catch (error) {
      console.error("Error fetching academy routes:", error);
      console.log("Returning fallback data for academy routes");
      // Fallback to default routes if API fails
      return [
        { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
        { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
        { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
        { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
      ];
    }
  }
};
