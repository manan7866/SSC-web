import React from "react";
import MembershipForm from "./MembershipForm";
import Link from "next/link";

const ConsultationSection = () => {
  return (
    <section className="bg-gradient-to-br from-fixnix-darkpurple to-fixnix-lightpurple text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
        <span className="relative inline-block text-[18px] leading-[16px] text-white font-semibold uppercase z-[1]">
            SUPPORT US
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
           
          </span>
          <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
          Be Part of Divine Service
          </h2>
          <p className="text-gray-100 mb-6">
          Be a Vessel of Light Empower Sacred Knowledge, Community Growth, and the Continuation of Divine Service.
          </p>
          <div className="w-full max-w-md space-y-6 mx-2 md:mx-0">

    {/* Card 1 */}
    <Link
            href="/volunteerwithus"
            className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 shadow-md border border-white border-opacity-20 
                        hover:bg-opacity-20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
            <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-2"> Ways to Give
            </h3>
            <p className="text-gray-600 text-sm">
            Your contributions sustain spiritual learning and global outreach become part of the hidden barakah behind every seeker’s path.
            </p>
            </Link>



    {/* Card 2 */}
    

            <Link
            href="/volunteerwithus"
            className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 shadow-md border border-white border-opacity-20 
                        hover:bg-opacity-20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
            <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-2"> Volunteer With Us</h3>
            <p className="text-gray-600 text-sm">
                Offer your time, skills, or heart in service. From tech to teaching, khidma fuels the transmission of light.
            </p>
            </Link>


    {/* Card 3 */}
    <Link
            href="/collaboration"
            className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 shadow-md border border-white border-opacity-20 
                        hover:bg-opacity-20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
            <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-2"> Collaborations
            </h3>
            <p className="text-gray-600 text-sm">
            Partner with us across disciplines academic, artistic, and co-create initiatives rooted in remembrance, and sacred responsibility.
            </p>
            </Link>
  </div>

          
        </div>

        {/* Right Form */}
        <div>
          <MembershipForm/>
        </div>
      </div>
    </section>
  );
};



export default ConsultationSection;
