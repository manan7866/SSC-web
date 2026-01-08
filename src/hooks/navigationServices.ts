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
    console.log("Starting to fetch explorer routes from client-side");
    try {
      // Use the internal API route to avoid CORS issues
      const response = await fetch('/api/navigation/explorer/routes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Explorer routes response status:", response.status);
      console.log("Explorer routes response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Explorer response raw data:", result);

      const items = result.data?.items || [];
      console.log("Explorer routes extracted items:", items);
      console.log("Explorer routes items count:", items.length);

      return items;
    } catch (error) {
      console.error("Error fetching explorer routes:", error);
      console.log("Returning fallback data for explorer routes");
      // Fallback to default routes if API fails
      const fallbackItems = [
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
      console.log("Explorer fallback items count:", fallbackItems.length);
      return fallbackItems;
    }
  },

  // Fetch academy routes from backend
  async getAcademyRoutes(): Promise<NavigationItem[]> {
    console.log("Starting to fetch academy routes from client-side");
    try {
      // Use the internal API route to avoid CORS issues
      const response = await fetch('/api/navigation/academy/routes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Academy routes response status:", response.status);
      console.log("Academy routes response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Academy response raw data:", result);

      const items = result.data?.items || [];
      console.log("Academy routes extracted items:", items);
      console.log("Academy routes items count:", items.length);

      return items;
    } catch (error) {
      console.error("Error fetching academy routes:", error);
      console.log("Returning fallback data for academy routes");
      // Fallback to default routes if API fails
      const fallbackItems = [
        { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
        { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
        { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
        { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
      ];
      console.log("Academy fallback items count:", fallbackItems.length);
      return fallbackItems;
    }
  }
};
