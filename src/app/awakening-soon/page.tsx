"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const targetDate = new Date(2025, 7, 1, 0, 0, 0, 0); // August 1st, 2025

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  
  if (diff <= 0) {
    return { ended: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  return { ended: false, days, hours, minutes, seconds };
}

export default function AwakeningSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
      setPulseKey(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <Layout headerStyle={2} footerStyle={1} headTitle="Awakening Soon" breadcrumbTitle="Awakening Soon">
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#472a44' }}>
            Awakening Soon
          </h1>
          <p className="text-lg font-light" style={{ color: '#70436b' }}>
            Something sacred is preparing to emerge
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-widest mb-2" style={{ color: '#70436b' }}>
              Countdown to Launch
            </h2>
          </div>
          
          {timeLeft.ended ? (
            <div className="text-center">
              <div className="text-3xl font-light animate-pulse" style={{ color: '#472a44' }}>
                ✨ The wait is over ✨
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div 
                  key={`${item.label}-${pulseKey}`}
                  className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ borderColor: '#ab86ad', borderWidth: '1px' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8e6490'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ab86ad'}
                >
                  <div className="text-3xl font-light mb-1" style={{ color: '#472a44' }}>
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-wide" style={{ color: '#70436b' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Features */}
        <div className="space-y-8">
          {/* What's Coming */}
          <div className="bg-white rounded-2xl shadow-sm p-8" style={{ borderColor: '#ab86ad', borderWidth: '1px' }}>
            <h3 className="text-lg font-bold mb-6 text-center" style={{ color: '#472a44' }}>
              What's Coming
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {  text: 'Soulful content for spiritual rebels' },
                {  text: 'Mystic science for curious minds' },
                { text: 'Psychology & divine dialogues' },
                { text: 'Sounds & streaming wisdom' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-purple-50"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f4f8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  
                  <span className="text-md" style={{ color: '#472a44' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 text-white px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#70436b' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#472a44'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#70436b'}
              >
                <span>Return Home</span>
              </Link>
            </div>
           
          </div>

          
        </div>
      </div>
    </div>
    </Layout>
  );
}