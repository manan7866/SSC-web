import apiClient from "../lib/apiClient";
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
      console.log("Fetching explorer routes from:", `${apiClient.defaults.baseURL}/content/explorer`);
      const data = await contentServices.getContentList("explorer");
      console.log("Explorer response:", data);
      return data?.items || [];
    } catch (error) {
      console.error("Error fetching explorer routes:", error);
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
      console.log("Fetching academy routes from:", `${apiClient.defaults.baseURL}/content/academy`);
      const data = await contentServices.getContentList("academy");
      console.log("Academy response:", data);
      return data?.items || [];
    } catch (error) {
      console.error("Error fetching academy routes:", error);
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
