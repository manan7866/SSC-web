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

        let newExplorerRoutes: NavigationItem[] = [];
        let newAcademyRoutes: NavigationItem[] = [];

        // Handle explorer routes result
        if (explorerResult.status === 'fulfilled') {
          console.log("Explorer routes fulfilled with value:", explorerResult.value);
          newExplorerRoutes = explorerResult.value || [];
          setExplorerRoutes(newExplorerRoutes);
        } else {
          console.error("Explorer routes fetch failed:", explorerResult.reason);
          newExplorerRoutes = []; // Ensure we set an empty array instead of undefined
          setExplorerRoutes(newExplorerRoutes);
        }

        // Handle academy routes result
        if (academyResult.status === 'fulfilled') {
          console.log("Academy routes fulfilled with value:", academyResult.value);
          newAcademyRoutes = academyResult.value || [];
          setAcademyRoutes(newAcademyRoutes);
        } else {
          console.error("Academy routes fetch failed:", academyResult.reason);
          newAcademyRoutes = []; // Ensure we set an empty array instead of undefined
          setAcademyRoutes(newAcademyRoutes);
        }

        console.log("Final routes set - Explorer:", newExplorerRoutes.length, "Academy:", newAcademyRoutes.length);
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
  }, []); // Empty dependency array to ensure this only runs once

  console.log("useNavigation returning:", {
    explorerRoutesCount: explorerRoutes.length,
    academyRoutesCount: academyRoutes.length,
    loading,
    error
  });

  return {
    explorerRoutes: explorerRoutes,
    academyRoutes: academyRoutes,
    loading,
    error
  };
};
