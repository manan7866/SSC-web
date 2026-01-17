import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

// Define the type for the props
interface Header1Props {
  scroll: number; // Type for scroll (number)
  handlePopup: () => void; // Type for handlePopup function
  handleMobileMenu: () => void; // Type for handleMobileMenu function
  isMobileMenu?: boolean; // Optional boolean for isMobileMenu
  isSidebar?: boolean; // Optional boolean for isSidebar
  handleSidebar?: () => void; // Optional function for handleSidebar
}

const Header1: React.FC<Header1Props> = ({
  scroll,
  handlePopup,
  handleMobileMenu,
  isMobileMenu = false, // Default value is false if not passed
  isSidebar = false, // Default value is false if not passed
  handleSidebar = () => {}, // Default to an empty function if not passed
}) => {
  return (
    <>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-1.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <Link
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={handleMobileMenu}
                >
                  <i className="fa fa-bars"></i>
                </Link>
                <Menu />
              </div>
              
            </div>
          </div>
        </nav>
      </header>

      {/* MobileMenu only rendered if isMobileMenu is true */}
      {isMobileMenu && (
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
        />
      )}

      <div
        className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                      <img
                        src="assets/images/resources/logo-1.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-cart-call-box">
                    <div className="main-menu__search-cart-box">
                      <div className="main-menu__search-box">
                        <Link
                          href="#"
                          className="main-menu__search search-toggler icon-search-interface-symbol"
                          onClick={handlePopup}
                        ></Link>
                      </div>
                      {/* <div className="main-menu__cart-box">
                        <Link href="Cart" className="main-menu__cart fas fa-shopping-cart"></Link>
                      </div> */}
                    </div>
                    {/* <div className="main-menu__call">
                      <div className="main-menu__call-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="main-menu__call-content">
                        <p className="main-menu__call-sub-title">Call Anytime</p>
                        <h5 className="main-menu__call-number"><Link href="tel:9288006780">+92 ( 8800 ) - 6780</Link></h5>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header1;
