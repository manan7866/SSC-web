import Link from "next/link";
import Image from "next/image";
export default function Services() {
  return (
    <section className="relative block py-20 z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            DISCOVER SSC
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
          <h2 className="text-4xl font-bold text-fixnix-darkpurple mt-3 text-left-mobile">
            Soul Behind Our Initiative
          </h2>
          <p className="text-gray-600 my-2 text-left-mobile">
            The Sufi Science Center – Kashmir Chapter was born from a deep longing to preserve, revive, and reimagine the sacred knowledge embedded in Kashmiri Sufi tradition. This space invites you to explore our identity, understand our purpose, and walk through the legacy that shapes our mission. From ancient mystics to modern thinkers, our journey is a bridge between the inner self and the outer world, between devotion and discovery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { 
              title: "Our Identity & Legacy", 
              href: "/heritage&identity", 
              desc: "Dive into the cultural, spiritual, and historical essence that grounds the Sufi Science Center, rooted deeply in the Kashmiri Sufi tradition.",
              link1: "/heritage&identity", 
              link1Text: "Our Heritage",
              link2: "/kashmirisufilegacy",
              link2Text: "Sufi Legacy "
            },
            { 
              title: "Vision & Purpose", 
              href: "/purpose&direction", 
              desc: "Understand the mission that guides us and the real-world practices through which SSC brings that vision to life.",
              link1: "/purpose&direction",
              link1Text: "Our Purpose",
              link2: "/work&practices",
              link2Text: "Our Work "
            },
            { 
              title: "Sufism & Leadership", 
              href: "/ourfounder", 
              desc: "Explore the philosophy of Kashmiri Sufism and meet the visionary behind the movement.",
              link1: "/exploringkashmirisufism",
              link1Text: "Kashmiri Sufism",
              link2: "/ourfounder",
              link2Text: "Our Founder"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-5 pb-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative rounded-lg overflow-hidden h-60 group">
                <div className="absolute inset-0 bg-fixnix-lightpurple rounded-md flex items-center justify-center z-0">
                  <span className="text-gray-200 text-md p-3 font-medium">{service.desc}</span>
                </div>
                <div className="absolute inset-0 bg-lightpurple/70 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                  <Link
                    href={service.href}
                    className="px-6 py-2 bg-white text-lightpurple hover:bg-fixnix-darkpurple hover:text-fixnix-lightpurple transition-all duration-300 rounded-md z-20"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mt-4 text-fixnix-darkpurple hover:text-lightpurple transition-colors duration-500">
                {service.title}
              </h3>
              <div className="text-center mt-3">
            <Link
              href={service.link1}
              className="text-fixnix-lightpurple hover:underline sm:text-xs lg:text-lg font-semibold flex items-center justify-center gap-2"
            >
              {service.link1Text}
              <Image 
                src="/assets/images/resources/learnmore.webp" 
                alt="Learn more" 
                width={84} 
                height={84}
                className="inline-block"
              />
            </Link>
            <Link
              href={service.link2}
              className="text-fixnix-lightpurple hover:underline sm:text-xs lg:text-lg font-semibold mt-1 flex items-center justify-center gap-2"
            >
              {service.link2Text}
              <Image 
                src="/assets/images/resources/learnmore.webp" 
                alt="Learn more" 
                width={84} 
                height={84}
                className="inline-block"
              />
            </Link>
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
