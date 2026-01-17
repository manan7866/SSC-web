import Link from "next/link";

export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="relative block py-30 overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative block mr-0 lg:mr-20">
                <div
                  className="relative block overflow-hidden rounded-lg z-10 group wow animate-slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img 
                    src="assets/images/resources/about-1-1.jpg" 
                    alt="image" 
                    className="w-full rounded-lg transition-all duration-500 delay-100 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-[168px] bg-[color:var(--fixnix-lightpuple)] p-12 rounded-bl-lg rounded-tr-lg z-[3]">
                    <p className="text-lg font-semibold text-white pb-4.5 uppercase">Our goal :</p>
                    <h3 className="text-3xl font-semibold text-white leading-10">
                      "Grow your mind. Fuel your soul.
                      Let the light find you."
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative block">
                <div className="text-left mb-9">
                  <span className="ml-14 block">
                    The Next Generation Sufi Way Forward
                  </span>
                  <h2 className="font-bold mt-3 text-3xl text-[color:var(--fixnix-darkpurple)]">
                    Welcome to the Sufi Science Center
                  </h2>
                  <h2 className="font-semibold text-2xl text-[color:var(--fixnix-darkpurple)]">
                    A Harmony of Knowledge and Inner Peace
                  </h2>
                </div>
                <p className="mb-11">
                  Step into a world where Kashmiri Sufi wisdom meets the pulse of modern discovery.
                  Here, your mind expands, your soul deepens, and your journey begins.

                  Whether you're seeking truth, exploring purpose, or simply curious,
                  this is your space to grow, reflect, and awaken.

                  We blend timeless mysticism, conscious learning, and sacred science to inspire a new way forward, one that's rooted in unity, upliftment, and inner transformation.
                </p>
                <ul className="relative block mt-11 mb-11 list-none">
                  <li className="relative block bg-white shadow-lg rounded-l-[60px] z-10 mb-5 group">
                    <div className="relative flex items-center p-6 rounded-l-[60px] overflow-hidden transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
                      <div className="inline-block">
                        <span className="flex items-center justify-center w-15 h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-3xl text-white transition-all duration-500 delay-100 transform group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90 icon-repair"></span>
                      </div>
                      <div className="block ml-6">
                        <h3 className="text-2xl font-semibold leading-8 group-hover:text-white">
                          <Link href="/beginyourjourney" className="text-[color:var(--fixnix-darkpurple)] group-hover:text-white">Begin Your Journey</Link>
                        </h3>
                        <p className="text-lg text-gray-500 pt-2 group-hover:text-white">
                          Start exploring your inner and outer path
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="relative block bg-white shadow-lg rounded-l-[60px] z-10 mb-5 group">
                    <div className="relative flex items-center p-6 rounded-l-[60px] overflow-hidden transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
                      <div className="inline-block">
                        <span className="flex items-center justify-center w-15 h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-3xl text-white transition-all duration-500 delay-100 transform group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90 icon-phone"></span>
                      </div>
                      <div className="block ml-6">
                        <h3 className="text-2xl font-semibold leading-8 group-hover:text-white">
                          <Link href="/" className="text-[color:var(--fixnix-darkpurple)] group-hover:text-white">Explore Sacred Knowledge</Link>
                        </h3>
                        <p className="text-lg text-gray-500 pt-2 group-hover:text-white">
                          Dive into teachings, science & soulwork
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="relative block bg-white shadow-lg rounded-l-[60px] z-10 mb-5 group">
                    <div className="relative flex items-center p-6 rounded-l-[60px] overflow-hidden transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
                      <div className="inline-block">
                        <span className="flex items-center justify-center w-15 h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-3xl text-white transition-all duration-500 delay-100 transform group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90 icon-phone"></span>
                      </div>
                      <div className="block ml-6">
                        <h3 className="text-2xl font-semibold leading-8 group-hover:text-white">
                          <Link href="/" className="text-[color:var(--fixnix-darkpurple)] group-hover:text-white">Join the Movement</Link>
                        </h3>
                        <p className="text-lg text-gray-500 pt-2 group-hover:text-white">
                          Be part of a conscious, global community
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}