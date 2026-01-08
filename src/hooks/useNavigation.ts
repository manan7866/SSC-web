import { useState, useEffect } from "react";
import { navigationServices, NavigationItem } from "./navigationServices";

export const useNavigation = () => {
  const [explorerRoutes, setExplorerRoutes] = useState<NavigationItem[]>([]);
  const [academyRoutes, setAcademyRoutes] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useNavigation hook effect running");
    let isCancelled = false; // To prevent state updates on unmounted component

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
          if (!isCancelled) {
            setExplorerRoutes(explorerResult.value || []);
          }
        } else {
          console.error("Explorer routes fetch failed:", explorerResult.reason);
          if (!isCancelled) {
            setExplorerRoutes([]); // Ensure we set an empty array instead of undefined
          }
        }

        // Handle academy routes result
        if (academyResult.status === 'fulfilled') {
          console.log("Academy routes fulfilled with value:", academyResult.value);
          if (!isCancelled) {
            setAcademyRoutes(academyResult.value || []);
          }
        } else {
          console.error("Academy routes fetch failed:", academyResult.reason);
          if (!isCancelled) {
            setAcademyRoutes([]); // Ensure we set an empty array instead of undefined
          }
        }

        console.log("Final routes set - Explorer:", (explorerResult.status === 'fulfilled' ? explorerResult.value : []).length,
                   "Academy:", (academyResult.status === 'fulfilled' ? academyResult.value : []).length);
      } catch (err) {
        if (!isCancelled) {
          setError("Failed to fetch navigation data");
          console.error("Navigation fetch error:", err);
          // Ensure we set empty arrays to prevent undefined values
          setExplorerRoutes([]);
          setAcademyRoutes([]);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
          console.log("Navigation fetch completed, loading set to false");
        }
      }
    };

    fetchNavigationData();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isCancelled = true;
    };
  }, []); // Empty dependency array to ensure this only runs once

  console.log("useNavigation returning:", {
    explorerRoutesCount: explorerRoutes.length,
    academyRoutesCount: academyRoutes.length,
    loading,
    error
  });

  return {
    explorerRoutes,
    academyRoutes,
    loading,
    error
  };
};
