"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import StickyHeader from "../StickyHeader";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface Header2Props {
  scroll: number;
  handlePopup: () => void;
  handleMobileMenu: () => void;
  isMobileMenu: boolean;
  isSidebar?: boolean;
  handleSidebar?: () => void;
}

const Header2: React.FC<Header2Props> = ({
  scroll,
  handlePopup,
  handleMobileMenu,
  isSidebar,
  isMobileMenu,
  handleSidebar,
}: Header2Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const authContext = useAuth(); // Move hook call to top level

  const [authData, setAuthData] = useState<{ isAuthenticated: boolean; user: any; logout: any }>({
    isAuthenticated: authContext.isAuthenticated || false,
    user: authContext.user || null,
    logout: authContext.logout || null
  });

  useEffect(() => {
    // Update auth data when authContext changes
    setAuthData({
      isAuthenticated: authContext.isAuthenticated || false,
      user: authContext.user || null,
      logout: authContext.logout || null
    });
  }, [authContext.isAuthenticated, authContext.user, authContext.logout]);

  const { isAuthenticated, user } = authData;
  const logout = authData.logout;

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
    setIsSticky(currentScrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    if (logout) {
      logout();
    }
    router.push("/");
  };
  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push("/myprofile");
    } else {
      alert("You have to log in first"); // ⚡ replace with toast if using a UI lib
      router.push("/login"); // optional: redirect them to login
    }
  };

  return (
    <>
      <header className="relative w-full bg-transparent z-[1000]">
        {/* Top Bar */}
        <div className="bg-fixnix-darkpurple py-2 lg:block hidden">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
            <p className="text-white text-base font-bold font-sans text-center sm:text-left">
              SSC | Kashmir Chapter
            </p>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isAuthenticated && (
                <Link href={"/myprofile"}>
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-md transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                  >
                    <i className="fas fa-user"></i>
                  </button>
                </Link>
              )}

              {/* Login/Register OR Logout */}
              <div className="flex items-center justify-center py-2 px-4 hover:bg-blue-400 bg-fixnix-white text-fixnix-darkpurple rounded-lg text-sm font-bold transition-all duration-300 space-x-1">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="hover:underline text-fixnix-darkpurple hover:text-fixnix-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="hover:underline text-fixnix-darkpurple hover:text-fixnix-white"
                    >
                      Login
                    </Link>
                    <span>/</span>
                    <Link
                      href="/Register"
                      className="hover:underline text-fixnix-darkpurple hover:text-fixnix-white"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              <div className="flex space-x-3">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  href="https://www.youtube.com/@SufiPulse-Studio-USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <nav className="bg-fixnix-white z-[1200]">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image
                    src="/assets/images/resources/logo-3.png"
                    alt="Sufi Science Center Logo"
                    width={110}
                    height={110}
                    className="responsive-logo w-[40px] sm:w-[50px] md:w-[70px] lg:w-[90px] xl:w-[110px] 2xl:w-[130px] 3xl:w-[150px] h-auto max-w-full transition-all duration-300 ease-in-out"
                  />
                </Link>
                <div className="flex flex-col">
                  <span
                    className="text-fixnix-darkpurple leading-tight font-serif whitespace-nowrap text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2rem] font-bold transition-all duration-300 ease-in-out"
                  >
                    Sufi Science Center
                  </span>
                  <p
                    className="italic text-gray-600 text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem] 3xl:text-[1rem] mt-0.5 transition-all duration-300 ease-in-out max-w-xs sm:max-w-sm"
                  >
                    A Harmony of Knowledge and Inner Peace: The Next Generation Sufi
                    Way Forward
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <Link href="/membership" className="membership-btn">
                  Get Membership
                </Link>
              </div>

              {/* Mobile and Desktop Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center mt-4 -mb-2">
                  <Link
                    href="#"
                    className="mobile-nav__toggler text-xl sm:text-md md:text-2xl text-fixnix-darkpurple lg:hidden block"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                  {/* <Link
                    href="Cart"
                    className="text-xl px-2 sm:text-md md:text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </Link> */}
                </div>

                {/* Search Icon */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <StickyHeader />

      {/* Sticky Header */}
      {/* {isSticky && (
  <div className="fixed top-0 left-0 w-full bg-white shadow-md z-[1200] transition-all duration-300 sm:hidden lg:hidden md:block xl:block">
    <div className="flex items-center justify-between text-[10px] p-4">
      <Link href="/">
        <Image
          src="/assets/images/resources/logo-3.png"
          alt="Sufi Science Center Logo"
          width={55}
          height={55}
        />
      </Link>

      
      
  <Menu />


      

      <Link
        href="Cart"
        className="text-xl text-white transition-all duration-500 ease-in-out hover:text-gray-300"
      >
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  </div>
)} */}

      <MobileMenu
        isSidebar={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        handleSidebar={handleSidebar || (() => {})}
      />
    </>
  );
};
export default Header2;
