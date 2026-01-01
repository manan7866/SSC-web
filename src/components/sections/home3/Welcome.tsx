"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Welcome() {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      {/*Welcome One Start*/}
      <section className="relative py-16 md:py-24 lg:py-32 z-10">
        <div
          className="absolute top-0 right-0 w-0 md:w-1/3 lg:w-2/5 bottom-0 bg-fixnix-darkpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center -z-10"
         
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative block mr-0 lg:mr-8">
                <div className="mb-5 md:mb-7">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Welcome To
            <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
          </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Your Journey</h2>
                </div>
                <p className="text-base md:text-lg font-semibold text-fixnix-darkpurple">
                  Step into the cosmic path of the New Generation Sufi, from the sacred depths of the Himalayan peaks rises the Sufi Science Center Kashmir, where mystic intuition meets scientific inquiry.
                </p>
                <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base">
                  This journey unfolds from inner awakening to expansive consciousness through Core Learning Paths, Growth Modules, and Quantum Leadership. Explore sacred geometries of thought, submit your abstract revelations, and access a library of metaphysical tools. This is not just a path, it's your transformation into a conscious architect of divine reality and spiritual intelligence.
                </p>
                <div className="flex flex-wrap items-center -mx-2">
  <div className="px-2 mb-4 md:mb-0 w-full sm:w-1/2">
    <Link 
      href="/corelearningpaths" 
      className="group block text-center px-3 md:px-4 py-3 md:py-4 border border-fixnix-lightpurple text-fixnix-lightpurple relative overflow-hidden z-10"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        Core Learning Paths
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-fixnix-darkpurple transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
    </Link>
  </div>
  <div className="px-2 mb-4 md:mb-0 w-full sm:w-1/2">
    <Link 
      href="/leadership&teaching" 
      className="group block text-center px-3 md:px-4 py-3 md:py-4 border border-fixnix-lightpurple text-fixnix-lightpurple relative overflow-hidden z-10"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        Leadership & Teaching
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-fixnix-darkpurple transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
    </Link>
  </div>
</div>
<div className="flex flex-wrap items-center -mx-2 mt-2">
  <div className="px-2 mb-4 md:mb-0 w-full sm:w-1/2">
    <Link 
      href="/submissionportal" 
      className="group block text-center px-3 md:px-4 py-3 md:py-4 border border-fixnix-lightpurple text-fixnix-lightpurple relative overflow-hidden z-10"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        Abstract Submission
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-fixnix-darkpurple transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
    </Link>
  </div>
  <div className="px-2 mb-4 md:mb-0 w-full sm:w-1/2">
    <Link 
      href="/resources&support" 
      className="group block text-center px-3 md:px-4 py-3 md:py-4 border border-fixnix-lightpurple text-fixnix-lightpurple relative overflow-hidden z-10"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        Resources & Support
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-fixnix-darkpurple transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
    </Link>
  </div>
</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative block ml-0 md:ml-6 lg:ml-12 z-10">
                <div className="relative block rounded-md overflow-hidden">
                  <Image
                    src="/assets/images/resources/welcome.webp"
                    alt="Welcome image"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}