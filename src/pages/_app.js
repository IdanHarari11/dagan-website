import 'aos/dist/aos.css';
import { Heebo } from 'next/font/google';
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
      <DarkModeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </div>
  );
} 