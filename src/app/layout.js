import { Heebo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

// Initialize Inter font
const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
});

export const metadata = {
  title: 'תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר',
  description: 'תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
