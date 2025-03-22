import 'aos/dist/aos.css';
import { Heebo } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { DarkModeProvider } from '@/context/DarkModeContext';
import '../app/globals.css';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/nagishli.js"; // הנתיב לקובץ שהעתקת ל-public
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        const nagishLiBar = document.querySelector("#NagishLiBar");
        if (nagishLiBar) {
          nagishLiBar.style.position = "fixed";
          nagishLiBar.style.bottom = "20px";
          nagishLiBar.style.right = "20px";
          nagishLiBar.style.left = "auto";
          nagishLiBar.style.zIndex = "9999";
          nagishLiBar.style.top = "auto";
        }
      }, 1000);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className={`${heebo.className} overflow-x-hidden`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <DarkModeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </div>
  );
} 