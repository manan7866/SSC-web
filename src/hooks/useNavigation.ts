import { useState, useEffect } from "react";
import { navigationServices, NavigationItem } from "./navigationServices";

export const useNavigation = () => {
  const [explorerRoutes, setExplorerRoutes] = useState<NavigationItem[]>([]);
  const [academyRoutes, setAcademyRoutes] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useNavigation hook effect running");
    const fetchNavigationData = async () => {
      console.log("Starting to fetch navigation data");
      try {
        setLoading(true);
        setError(null);

        console.log("About to call navigation services");
        const [explorerResult, academyResult] = await Promise.allSettled([
          navigationServices.getExplorerRoutes(),
          navigationServices.getAcademyRoutes()
        ]);

        console.log("Results from Promise.allSettled:", { explorerResult, academyResult });

        // Handle explorer routes result
        if (explorerResult.status === 'fulfilled') {
          console.log("Explorer routes fulfilled with value:", explorerResult.value);
          setExplorerRoutes(explorerResult.value || []);
        } else {
          console.error("Explorer routes fetch failed:", explorerResult.reason);
          setExplorerRoutes([]); // Ensure we set an empty array instead of undefined
        }

        // Handle academy routes result
        if (academyResult.status === 'fulfilled') {
          console.log("Academy routes fulfilled with value:", academyResult.value);
          setAcademyRoutes(academyResult.value || []);
        } else {
          console.error("Academy routes fetch failed:", academyResult.reason);
          setAcademyRoutes([]); // Ensure we set an empty array instead of undefined
        }

        console.log("Final routes set - Explorer:", explorerRoutes.length, "Academy:", academyRoutes.length);
      } catch (err) {
        setError("Failed to fetch navigation data");
        console.error("Navigation fetch error:", err);
        // Ensure we set empty arrays to prevent undefined values
        setExplorerRoutes([]);
        setAcademyRoutes([]);
      } finally {
        setLoading(false);
        console.log("Navigation fetch completed, loading set to false");
      }
    };

    fetchNavigationData();
  }, []);

  console.log("useNavigation returning:", {
    explorerRoutesCount: explorerRoutes.length,
    academyRoutesCount: academyRoutes.length,
    loading,
    error
  });

  return {
    explorerRoutes: explorerRoutes || [],
    academyRoutes: academyRoutes || [],
    loading,
    error
  };
};
