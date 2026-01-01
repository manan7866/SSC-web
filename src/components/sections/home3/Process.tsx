import Link from "next/link";

export default function Process() {
  return (
    <>
<section className="relative bg-fixnix-darkpurple py-32 lg:py-24 overflow-hidden z-10">
  <div
    className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center mix-blend-luminosity opacity-20"
   
  ></div>

  <div className="container relative z-10">
  <div className="sm:text-left lg:text-center  mb-10">
          <span className="relative inline-block text-[18px] leading-[16px] text-white font-semibold uppercase z-[1]">
          BECOMING A SUFI SCHOLAR
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-white"></span>
          </span>
          <h2 className="text-3xl md:text-4xl text-white  font-bold mt-2">
          The Path of Inner and Outer Transformation
          </h2>
          
        </div>

    {/* Grid for 6 items - 3 per row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {/* Item 1 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500  hover:bg-gray-400 relative">
          <span className="text-4xl text-white">1</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Formation</h3>
        <p className="text-white text-sm mt-2">
          Emphasizes the shaping of the scholar through inner and outer processes
        </p>
      </div>

      {/* Item 2 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500  hover:bg-gray-400 relative">
          <span className="text-4xl text-white">2</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Initiation</h3>
        <p className="text-white text-sm mt-2">
          Hints at both traditional spiritual initiation and the beginning of deep knowledge transmission
        </p>
      </div>

      {/* Item 3 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500  hover:bg-gray-400 relative">
          <span className="text-4xl text-white">3</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Unfolding</h3>
        <p className="text-white text-sm mt-2">
          Signifies the gradual emergence of wisdom through layered experience
        </p>
      </div>

      {/* Item 4 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500 hover:bg-gray-400 relative">
          <span className="text-4xl text-white ">4</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Cultivation</h3>
        <p className="text-white text-sm mt-2">
          Speaks to the nurturing of intellect, soul, and character together
        </p>
      </div>

      {/* Item 5 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500  hover:bg-gray-400 relative">
          <span className="text-4xl text-white">5</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Becoming</h3>
        <p className="text-white text-sm mt-2">
          A deeply Sufi term reflecting inner transformation into divine reflection
        </p>
      </div>

      {/* Item 6 */}
      <div className="text-center relative">
        <div className="flex items-center justify-center w-28 h-28 border-2 border-white rounded-full mx-auto transition-all duration-500  hover:bg-gray-400 relative">
          <span className="text-4xl text-white">6</span>
        </div>
        <h3 className="text-white font-medium text-lg mt-5">Transmission</h3>
        <p className="text-white text-sm mt-2">
          Highlights the role of spiritual lineage and illuminated knowledge transfer
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
