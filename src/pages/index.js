import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense } from 'react';

import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import RoadmapSection from '@/components/RoadmapSection';
import AboutProgram from '@/components/AboutProgram';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import CallToJoin from '@/components/CallToJoin';
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
        <AboutProgram />
        <RoadmapSection />
        <YouTubeEmbed videoUrl={'https://www.youtube.com/embed/-25BpVKGQU0'} />
        <CallToJoin />
        <CallToAction />
        <ScrollToTopButton />
      </Suspense>
    </main>
  );
} 