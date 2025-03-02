import 'aos/dist/aos.css';
import { Heebo } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { DarkModeProvider } from '@/context/DarkModeContext';
import '../app/globals.css';
import Footer from '@/components/Footer';

const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
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