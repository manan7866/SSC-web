import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="relative block bg-[var(--fixnix-darkpurple)] overflow-hidden z-10">
        <div
          className="absolute top-0 left-1/2 w-full max-w-[1323px] h-[586px] transform -translate-x-1/2 -z-10 float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-1.png)",
          }}
        ></div>
        <div className="relative block pt-16 md:pt-20 lg:pt-28">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* First Column - About SSC */}
              <div className="wow fadeInUp" data-wow-delay="100ms">
                <div className="relative block mr-0 lg:mr-12 xl:mr-20 mt-4">
                  <div className="relative block">
                    <Link href="#">
                      <Image
                        src="/assets/images/resources/logo-4.png"
                        alt="Sufi Science Center Logo"
                        width={150}
                        height={70}
                        className="max-w-full h-auto"
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className="relative block pt-8 md:pt-10 lg:pt-8 pb-4">
                    <p className="text-base text-[var(--fixnix-white)]">
                      A sanctuary of mystical wisdom and sacred science, the
                      Sufi Science Center bridges Kashmir’s spiritual legacy
                      with evolving human consciousness, nurturing seekers
                      through devotion, inner transformation, and universal
                      discovery. A U.S.-based initiative, it is a heartfelt gift
                      to the Kashmir Sufi movement.
                    </p>
                  </div>
                  <div className="relative block">
                    <h4 className="text-lg text-[var(--fixnix-white)] font-semibold leading-7 mb-1 md:mb-1">
                      📩 info@sufisciencecenter.info
                    </h4>
                    <p className="text-base text-[var(--fixnix-white)] mb-3">
                      We welcome inquiries, collaborations, and spiritual
                      seekers from around the world.
                    </p>

                    <div className="flex items-center">
                      <Link
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group"
                      >
                        <i className="fab fa-facebook"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-linkedin"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href="https://www.youtube.com/@SufiPulse-USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-youtube"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-twitter"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-instagram"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Column - Quick Links */}
              <div className="wow fadeInUp" data-wow-delay="200ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                      ABOUT SSC
                    </h3>
                  </div>
                  <ul className="list-none">
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/heritage&identity"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Our Heritage & Identity
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/kashmirisufilegacy"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Kashmiri Sufi Legacy
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/purpose&direction"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Purpose & Direction
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/work&practices"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Our Work & Practices
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/exploringkashmirisufism"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Exploring Kashmiri Sufism
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/ourFounder"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Our Founder
                      </Link>
                    </li>
                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                      <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                        YOUR JOURNEY
                      </h3>
                    </div>

                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/beginyourjourney"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Begin Your Journey
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/corelearningpaths"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Core Learning Paths
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/growth&development"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Growth & Development
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/leadership&teaching"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Leadership & Teaching
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/submissionportal"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Abstract Submission
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/leadership&teaching#assessment-form"
                        scroll={true}
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Teaching Path Assessment
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Column - Sufi Science Explorer */}
              <div className="wow fadeInUp" data-wow-delay="300ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                      SUFI EXPLORER
                    </h3>
                  </div>
                  <ul className="list-none">
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/foundationalmatrices"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Foundational Matrices
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/consciousnessgeometries"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Consciousness Geometries
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/realityframeworks"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Reality Frameworks
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/characteralchemy"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Character Alchemy
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/unitysciences"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Unity Sciences
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/advancedtechnologies"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Advanced Technologies
                      </Link>
                    </li>
                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                      <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                        SSC SUPPORT
                      </h3>
                    </div>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/vendor-registration"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Become a vendor
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        target="_blank"
                        href="https://vendor.sufisciencecenter.info/login"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Access dashboard
                      </Link>
                    </li>
                    {/* <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/resources&support"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Resources & Guidance
                      </Link>
                    </li> */}
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/membership"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Membership
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/submissionportal#conference-form"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Conference Registration
                      </Link>
                    </li>
                    {/* <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/corelearningpaths#checklist-form"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Checklist for Sufi Journey
                      </Link>
                    </li> */}
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/resources&support#techical-assistance"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Technical Assistance
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/#contact"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Contact{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fourth Column - Support Us & Newsletter */}
              <div className="wow fadeInUp" data-wow-delay="400ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                      SSC SHOP
                    </h3>
                  </div>
                  <ul className="list-none mb-8">
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/dialogseries"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Scholarly Dialogs
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/digitalbooks"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Digital Books
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/audiospectrums"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Audio Spectrum
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/wall&artdecor"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Art & Wall Decor
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/jewelry&accessories"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Jewelry & Accessories
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/wellness&meditation"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Wellness & Meditation
                      </Link>
                    </li>

                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                      <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                        ENGAGE{" "}
                      </h3>
                    </div>

                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/interviewform"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Share you journey
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/collaboration"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Cultural Preservation
                      </Link>
                    </li>

                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/collaboration"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Community Outreach
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/waystogive"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Sponsor a Sufi Scholar
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/waystogive"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Donate to SSC
                      </Link>
                    </li>
                    <li className="relative block mb-3 md:mb-4">
                      <Link
                        href="/waystogive"
                        className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out"
                      >
                        Sponsor Sufi Dialogues
                      </Link>
                    </li>
                  </ul>

                  {/* Newsletter Sign-up */}
                  {/* <div className="relative block">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6 mb-4 mt-">NEWSLETTER SIGN-UP</h3>
                    <p className="text-base text-[var(--fixnix-white)] mb-4">
                      Stay aligned with our journey. Receive mystical insights, event updates, and research breakthroughs.
                    </p>
                    <form className="flex flex-col md:flex-row gap-2">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="px-4 py-3 bg-[#272a2d] text-[var(--fixnix-white)] rounded focus:outline-none w-full md:flex-grow"
                      />
                      <button 
                        type="submit" 
                        className="px-6 py-3 bg-[var(--fixnix-lightpuple)] text-[var(--fixnix-white)] rounded hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center pt-6 bg-[var(--fixnix-darkpurple)]">
              <div className="text-left mb-3">
                <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">
                  OUR NETWORK
                </h3>
              </div>
              <div className=" md:text-center text-[var(--fixnix-white)] mb-2 w-full max-w-2xl">
                Part of the Dr. Kumar Foundation USA, a global platform for Sufi
                healing and research and SufiPulse Studio, where sacred sound
                meets modern expression.
              </div>
              <div className="flex items-center justify-center gap-6">
                <Link
                  href={"http://dkf.sufisciencecenter.info"}
                  target="_blank"
                >
                  <div className="w-[200px] h-[200px] relative">
                    <Image
                      src="/assets/images/resources/drkumar.png"
                      alt="Dr. Kumar Foundation Logo"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <Link href="https://sufipulse.com/" target="_blank">
                  <div className="w-[150px] h-[150px] relative">
                    <Image
                      src="/assets/images/resources/sufipulse-logo.png"
                      alt="SufiPulse Studio Logo"
                      width={150}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[var(--fixnix-lightpuple)]  py-6">
          <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center text-[var(--fixnix-white)] text-sm space-y-4 md:space-y-0">
            <p>
              &copy; {new Date().getFullYear()} Sufi Science Center. All Rights
              Reserved. <br />
              <Link
                href={"https://primelogicsol.com/"}
                target="_blank"
                className="text-white"
              >
                Developed by Prime Logic Solutions
              </Link>{" "}
              with devotion in USA & guided by the wisdom of the cosmos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="/return-policy"
                className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300"
              >
                Return Policy
              </Link>
              <span>|</span>
              <Link
                href="/terms-of-use"
                className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300"
              >
                Terms of Use
              </Link>
              <span>|</span>
              <Link
                href="/shipping-policy"
                className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}
