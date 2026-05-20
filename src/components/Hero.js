'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    // Legacy Android / in-app WebViews (WeChat, etc.)
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'false');
    video.playbackRate = 0.7;

    const startPlayback = () => {
      if (!video.paused) return;
      const playPromise = video.play();
      playPromise?.catch?.(() => {
        // Mobile may defer autoplay until media is ready or after first gesture.
      });
    };

    const mediaEvents = ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough'];
    mediaEvents.forEach((event) => video.addEventListener(event, startPlayback));

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') startPlayback();
    };

    const onPageShow = (event) => {
      if (event.persisted) startPlayback();
    };

    const unlockOnFirstInteraction = () => {
      startPlayback();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pageshow', onPageShow);
    document.addEventListener('touchstart', unlockOnFirstInteraction, {
      once: true,
      passive: true,
    });
    document.addEventListener('click', unlockOnFirstInteraction, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startPlayback();
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    video.load();
    startPlayback();

    return () => {
      mediaEvents.forEach((event) => video.removeEventListener(event, startPlayback));
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pageshow', onPageShow);
      document.removeEventListener('touchstart', unlockOnFirstInteraction);
      document.removeEventListener('click', unlockOnFirstInteraction);
      observer.disconnect();
    };
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
    <section id='hero' className="relative h-screen w-full overflow-hidden bg-white">
      {/* Video starts just below navbar (h-24 / md:h-28) */}
      <div className="absolute inset-x-0 top-24 md:top-28 bottom-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.35] contrast-[1.05]"
        >
          <source src="https://video.wixstatic.com/video/dbf686_e41a7aa8cefb4de8879671a46cc0278c/720p/mp4/file.mp4" type="video/mp4" />
        </video>

        {/* Overlay — lighter so the hero video stays visible */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Top Donation Button - Enlarged */}
      <div className="absolute top-28 md:top-32 left-1/2 transform -translate-x-1/2 z-10">
 
        <button 
          onClick={() => window.location.href = '/donations'}
          className="backdrop-blur-sm text-[#F3C205] text-2xl font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap border-2 border-blue-600/40 shadow-lg"
        >
          הצטרפו אלינו
        </button>
      </div>

      {/* Content — vertically centered in the video area */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-24 md:pt-28">
        <div className="text-white" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          תכנית דגן למנהיגות
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