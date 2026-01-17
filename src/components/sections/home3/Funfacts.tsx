"use client"
import { useState, useEffect } from "react";
import CounterUp from "../../../components/elements/CounterUp";

export default function Funfacts() {
  
  const initialCounts = {
    seekers: 3207,
    countries: 27,
    lessons: 128,
    hours: 54000
  };

 
  const [counts, setCounts] = useState(initialCounts);

  useEffect(() => {
    
    const referenceDate = new Date('2025-04-18').getTime();
    const currentDate = new Date().getTime();
    const daysSinceReference = Math.floor((currentDate - referenceDate) / (1000 * 60 * 60 * 24));
    const weeksSinceReference = Math.floor(daysSinceReference / 7);
    
   
    const dailyIncreaseRates = {
      seekers: 25,     
      countries: 0,    
      lessons: 25,     
      hours: 200       
    };
    
    
    const updatedCounts = {
      seekers: Math.round(initialCounts.seekers + (daysSinceReference * dailyIncreaseRates.seekers)),
      lessons: Math.round(initialCounts.lessons + (daysSinceReference * dailyIncreaseRates.lessons)),
      hours: Math.round(initialCounts.hours + (daysSinceReference * dailyIncreaseRates.hours)),
      countries: Math.min(initialCounts.countries + weeksSinceReference, 70)
    };
    
    
    setCounts(updatedCounts);
  }, []);

  return (
    <>
      {/*Counter One Start*/}
      <section className="relative  py-24 bg-fixnix-lightpurple z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply -z-10 jarallax"
        ></div>
        <div className="container mx-auto px-4">
          <div className="w-full">
            <h2 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center">
              The Sufi Science Center
            </h2>
            <h4 className=" font-medium text-xl md:text-2xl text-white text-center pt-1 pb-6">
              Tracking Conscious Expansion on the Sufi Path
            </h4>
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-8 relative">
                <div className="absolute top-5 right-0 bottom-0 w-px bg-white hidden md:block"></div>
                <div className="flex justify-center items-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary">
                    <CounterUp end={counts.seekers} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary relative">+</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-white mt-2">Active Seekers</p>
              </div>
              
              <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-8 relative">
                <div className="absolute top-5 right-0 bottom-0 w-px bg-white hidden md:block"></div>
                <div className="flex justify-center items-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary">
                    <CounterUp end={counts.countries} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary relative">+</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-white mt-2">Country Presence</p>
              </div>
              
              <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-8 relative">
                <div className="absolute top-5 right-0 bottom-0 w-px bg-white hidden md:block"></div>
                <div className="flex justify-center items-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary">
                    <CounterUp end={counts.lessons} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary relative">+</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-white mt-2">Lessons Delivered</p>
              </div>
              
              <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-8 relative">
                <div className="flex justify-center items-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary">
                    <CounterUp end={counts.hours} />
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-secondary relative">+</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-white mt-2">Hours of Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
    </>
  );
}