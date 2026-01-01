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
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();

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
    logout();
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
          <div className="container mx-auto flex items-center justify-between px-4">
            <p className="text-white text-base font-bold font-sans lg:ml-28 xl:-ml-4 2xl:-ml-[210px] ">
              SSC | Kashmir Chapter
            </p>
            <div className="flex items-center space-x-4">
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
              <div className="flex items-center justify-center py-2 px-4 hover:bg-fixnix-lightpurple bg-fixnix-white text-fixnix-darkpurple rounded-lg text-sm font-bold transition-all duration-300 space-x-1">
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
        <nav className="bg-fixnix-white z-[1200] ">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image
                    src="/assets/images/resources/logo-3.png"
                    alt="Sufi Science Center Logo"
                    width={110}
                    height={110}
                    className="responsive-logo  w-[110px] h-[110px] transition-all duration-300 ease-in-out
                    2xl:w-[130px] 2xl:h-[130px]
                   3xl:w-[200px] 3xl:h-[200px]
                  lg:w-[90px] lg:h-[90px]
                  md:w-[90px] md:h-[90px]
          sm:w-[50px] sm:h-[50px]
          xs:w-[40px] xs:h-[40px]"
                  />
                </Link>
                <span
                  className="text-fixnix-darkpurple  leading-none font-serif whitespace-nowrap responsive-website-name  text-[1.8rem] font-bold truncate transition-all duration-300 ease-in-out text-center
               3xl:text-[5.5rem]
               2xl:text-[3.2rem]
               lg:text-[2.3rem]
               md:text-[2rem]
               sm:text-[23px]
               xs:text-[19px]
               2xs:text-[16px]"
                >
                  Sufi Science Center
                </span>
              </div>
              <div className="flex items-center  ml-auto">
                <Link href="/membership" className="membership-btn ">
                  Get Membership
                </Link>
              </div>

              <p
                className="italic text-gray-600  responsive-tagline text-base mt-[5px] text-center
        3xl:text-[23px] 3xl:-mt-[75px] 3xl:ml-[210px] 3xl:pr-[380px]
        2xl:text-[13.5px] 2xl:-mt-[50px] 2xl:ml-[140px] 2xl:pr-[1200px]
        lg:text-[9.5px] lg:-mt-[45px] lg:ml-[100px] lg:pr-[380px]
        md:text-[8.5px] md:-mt-[60px] md:ml-[10px] md:pr-[280px]
        sm:text-[6px] sm:-mt-[70px] sm:ml-[60px] sm:pr-[70px]
        smd:text-[6px] smd:-mt-[55px] smd:ml-[60px] smd:pr-[70px]
        xs:text-[4.5px] xs:-mt-[55px] xs:ml-[52px]
        sxs:text-[5px] sxs:-mt-[20px] sxs:ml-[50px]
        2xs:text-[4px] 2xs:-mt-[22px] 2xs:ml-[50px]
        3xs:text-[4px] 3xs:-mt-[22px] 3xs:ml-[53px]"
              >
                A Harmony of Knowledge and Inner Peace: The Next Generation Sufi
                Way Forward
              </p>

              {/* Mobile and Desktop Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center mt-4 -mb-2">
                  <Link
                    href="#"
                    className="mobile-nav__toggler text-xl sm:text-md md:text-2xl text-fixnix-darkpurple sm:block lg:hidden"
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
