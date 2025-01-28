'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen rtl">
      <Navbar />
      <Hero 
        title="תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר"
        subtitle="מפגש של מנהיגי העתיד ליצירת שינוי משמעותי, סובלנות ושיתוף פעולה"
      />
      <Values />
      <Testimonials />
      <Projects />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  );
}
