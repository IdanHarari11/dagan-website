'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id='hero' className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/dbf686_e41a7aa8cefb4de8879671a46cc0278c/720p/mp4/file.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top Donation Button */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => window.location.href = '/donations'}
          className="backdrop-blur-sm text-[#F3C205] text-lg font-semibold px-8 py-[0.5rem] rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap border border-blue-600/40 shadow-md"
        >
          בואו לקחת חלק בשינוי
        </button>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          תכנית דגן למנהיגות מגשרת
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            תכנית דגן למנהיגות מגשרת
          </p> */}
          <button onClick={() => window.location.href = '/#contact'
          } className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            התחילו את המסע
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
} 