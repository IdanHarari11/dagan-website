'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heebo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { DarkModeProvider } from '@/context/DarkModeContext';
import './globals.css';

// Initialize Inter font
const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
});

// export const metadata = {
//   title: 'תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר',
//   description: 'תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר',
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${heebo.className} overflow-x-hidden`}>
        <DarkModeProvider>
          <Navbar />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
