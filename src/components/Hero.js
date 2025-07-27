'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  // Handle scroll to next section
  const scrollToNextSection = () => {
    // Try to find the next section after hero
    const nextSection = document.querySelector('#hero').nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback to scroll by viewport height
      const heroHeight = window.innerHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    }
  };

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

      {/* Top Donation Button - Enlarged */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => window.location.href = '/donations'}
          className="backdrop-blur-sm text-[#F3C205] text-2xl font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap border-2 border-blue-600/40 shadow-lg"
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
        </div>
      </div>

      {/* Scroll indicator - Enlarged, highlighted and clickable */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex justify-center items-center">
        <button 
          onClick={scrollToNextSection}
          className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
          aria-label="גלול לסקשן הבא"
        >
          <svg
            className="w-10 h-10 text-white drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
} 