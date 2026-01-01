import { useState, useEffect } from "react";
import { navigationServices, NavigationItem } from "./navigationServices";

export const useNavigation = () => {
  const [explorerRoutes, setExplorerRoutes] = useState<NavigationItem[]>([]);
  const [academyRoutes, setAcademyRoutes] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [explorer, academy] = await Promise.all([
          navigationServices.getExplorerRoutes(),
          navigationServices.getAcademyRoutes()
        ]);
        
        setExplorerRoutes(explorer);
        setAcademyRoutes(academy);
      } catch (err) {
        setError("Failed to fetch navigation data");
        console.error("Navigation fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigationData();
  }, []);

  return {
    explorerRoutes,
    academyRoutes,
    loading,
    error
  };
};
