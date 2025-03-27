import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense } from 'react';

import Hero from '@/components/Hero';
import WhoWasDagan from '@/components/WhoWasDagan';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import CallToAction from '@/components/CallToAction';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import RoadmapSection from '@/components/RoadmapSection';
import AboutProgram from '@/components/AboutProgram';
import AboutUs from '@/components/AboutUs';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import CallToJoin from '@/components/CallToJoin';
import { BsStars } from 'react-icons/bs';
import { FaBook, FaScroll } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main className="min-h-screen rtl overflow-x-hidden bg-gray-50 dark:bg-gray-800">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <div className="flex justify-center items-center pt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-[5px_5px_15px_rgba(59,130,246,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(45,45,45,0.8)] inline-flex items-center justify-center">
            <div className="bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full p-2 shadow-[inset_2px_2px_5px_rgba(59,130,246,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(45,45,45,0.8)]">
              <FaScroll className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
        <AboutProgram />
        <div className="flex justify-center items-center pt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-[5px_5px_15px_rgba(59,130,246,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(45,45,45,0.8)] inline-flex items-center justify-center">
            <div className="bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full p-2 shadow-[inset_2px_2px_5px_rgba(59,130,246,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(45,45,45,0.8)]">
              <BsStars className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
        <RoadmapSection />
        <YouTubeEmbed videoUrl={'https://www.youtube.com/embed/-25BpVKGQU0'} />
        <CallToJoin />
        <CallToAction />
        <ScrollToTopButton />
      </Suspense>
    </main>
  );
} 