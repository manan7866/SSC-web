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

        const [explorerResult, academyResult] = await Promise.allSettled([
          navigationServices.getExplorerRoutes(),
          navigationServices.getAcademyRoutes()
        ]);

        // Handle explorer routes result
        if (explorerResult.status === 'fulfilled') {
          setExplorerRoutes(explorerResult.value || []);
        } else {
          console.error("Explorer routes fetch failed:", explorerResult.reason);
          setExplorerRoutes([]); // Ensure we set an empty array instead of undefined
        }

        // Handle academy routes result
        if (academyResult.status === 'fulfilled') {
          setAcademyRoutes(academyResult.value || []);
        } else {
          console.error("Academy routes fetch failed:", academyResult.reason);
          setAcademyRoutes([]); // Ensure we set an empty array instead of undefined
        }
      } catch (err) {
        setError("Failed to fetch navigation data");
        console.error("Navigation fetch error:", err);
        // Ensure we set empty arrays to prevent undefined values
        setExplorerRoutes([]);
        setAcademyRoutes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigationData();
  }, []);

  return {
    explorerRoutes: explorerRoutes || [],
    academyRoutes: academyRoutes || [],
    loading,
    error
  };
};
