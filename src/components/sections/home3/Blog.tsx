import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="py-20 relative z-10 bg-white">
      {/* Background shape */}
      <div
        className="absolute inset-y-20 left-0 right-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url(assets/images/shapes/blog-one-shape-1.png)",
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="sm:text-left lg:text-center  mb-10">
          <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
          DIGITAL ACADEMY
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl  font-bold mt-2">
          The Library of Light
          </h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
          Access the echoes of divine knowledge curated, digitized, and decoded for the New Generation Sufi mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Blog Item 1 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/dialogs/9.png" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center  bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700">
                <Link href="/dialogseries">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
             
              <h3 className="text-xl font-semibold mt-2 text-fixnix-darkpurple">
                <Link href="/dialogseries" className="text-white">Dialog Series</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
                Dive into timeless commentaries, Sufi manuscripts, and contemporary reflections merging  wisdom with modern inquiry.
              </p>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/hardtalk/9.webp" alt="image" width={500} height={300}  className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 ">
                <Link href="/hardtalk">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/hardtalk" className="text-white" >Hard Talk</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
                Explore sacred diagrams, cosmic maps, and interactive infographics that visualize mystical concepts in scientifically resonant design.
              </p>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/professions/1.png" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href="/sacredprofessions">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/sacredprofessions"className="text-white"> Sufi Professions</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              This series honors professionals who carry inner stillness into outer action. Success is measured not just in output, but in intention. 
              </p>
            </div>
          </div>

          {/* Blog Item 4 */}
          <div className="bg-fixnix-lightpurple  shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/interview/1.png" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700">
                <Link href="/inspiringinterview">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/inspiringinterview" className="text-white">Inspiring Interview</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              In this series, you’ll meet individuals whose lives have been radically reshaped by the essence of Sufism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
