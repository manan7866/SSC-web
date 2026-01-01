import Link from "next/link";
import Image from "next/image";

export default function GiftShop() {
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
          Sacred Gift Shop
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl  font-bold mt-2">
          Divinely Crafted Sufi Treasures
          </h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
          Curated Beauty for the Soul, Where Every Object Reflects the Divine in Form, Function, and Meaning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Blog Item 1 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/blog/artdecor.webp" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 ">
                <Link href="/wall&artdecor">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
             
              <h3 className="text-xl font-semibold mt-2 text-fixnix-darkpurple">
                <Link href="/wall&artdecor" className="text-white">Art & Wall Decor</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              Infuse your space with sacred geometry, calligraphy, and celestial forms that echo divine remembrance in visual presence.
              </p>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/blog/jewelry.webp" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 ">
                <Link href="/jewelry&accessories">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/jewelry&accessories" className="text-white" >Jewelry & Accessories</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              Wear the sacred crafted talismans, and symbolic adornments designed to harmonize inner states and intentions.
              </p>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/blog/fashion.webp" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href="/fashion&apparel">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/fashion&apparel"className="text-white"> Fashion & Apparel</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              Dress in garments of grace textiles rooted in tradition, infused with spiritual symbolism and ethical craftsmanship.
              </p>
            </div>
          </div>

          {/* Blog Item 4 */}
          <div className="bg-fixnix-lightpurple  shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <Image src="/assets/images/blog/meditation.webp" alt="image" width={500} height={300} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 ">
                <Link href="/wellness&meditation">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/wellness&meditation" className="text-white"> Wellness & Meditation</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
              Equip your inner practice with mindful essentials from handcrafted mats to therapeutic blends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
