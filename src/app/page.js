'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWasDagan from '@/components/WhoWasDagan';
import ValuesCom from '@/components/Values';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoadmapSection from '@/components/RoadmapSection';
import AdmissionCriteriaSection from '@/components/AdmissionCriteriaSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main className="min-h-screen rtl overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Hero />
      <WhoWasDagan />
      <RoadmapSection />
      <ValuesCom />
      <AdmissionCriteriaSection />
      <Testimonials />
      <Projects />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  );
}
