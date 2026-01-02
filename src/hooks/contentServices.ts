
export interface ContentItem {
  id: string;
  section: "explorer" | "academy" | "explorer-details" | "academy-details";
  slug: string;
  title: string;
  subtitle?: string;
  parentPage?: string;
  cardTitle?: string;
  heroImage?: string;
  category?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  blocks: any[];
  version: number;
  updatedAt: string;
}

export interface ContentResponse {
  success: boolean;
  status: number;
  message: string;
  data: ContentItem;
}

export const contentServices = {
  // Get latest version of content (backend automatically returns latest)
  async getContent(section: string, slug: string): Promise<ContentItem> {
    try {
      const response = await fetch(`/api/navigation/content?section=${section}&slug=${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error: any) {
      console.error("Error fetching content:", error);
      throw new Error(
        error.message || "Failed to fetch content"
      );
    }
  },

  // Get content list for a section
  async getContentList(section: string): Promise<any> {
    try {
      const response = await fetch(`/api/navigation/content?section=${section}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error: any) {
      console.error("Error fetching content list:", error);
      throw new Error(
        error.message || "Failed to fetch content list"
      );
    }
  },
};
