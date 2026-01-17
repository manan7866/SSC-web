"use client";
import { usePathname } from "next/navigation";  // Using usePathname instead of useRouter
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname?.split("/").filter(Boolean) || [];

  const getBreadcrumbText = (path: string): string => {
    switch (path) {
      case "jewelry&accessories":
        return "Jewelry & Accessories";
      case "wall&artdecor":
        return "Art & Wall Decor";
      case "home&living":
        return "Home & Living";
      case "fashion&apparel":
        return "Fashion & Apparel";
      case "wellness&medication":
        return "Wellness & Meditation";
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2 py-4 text-sm font-semibold text-gray-700">
        <li>
          <Link href="/" className="hover:text-fixnix-lightpurple">
            Sacred Gift Shop
          </Link>
        </li>
        {pathnames.map((path: string, index: number) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");
          return (
            <li key={href} className="flex items-center  space-x-2">
              <span className="mx-2">/</span>
              <Link href={href} className="hover:text-fixnix-lightpurple text-fixnix-darkpurple">
                {getBreadcrumbText(path)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
