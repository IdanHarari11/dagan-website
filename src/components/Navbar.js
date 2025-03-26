'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = router.pathname;
  const isLight = currentPath !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', text: 'דף הבית' },
    { href: '/our-program', text: 'על התכנית' },
    { href: '/team', text: 'צוות' },
    { href: '/projects', text: 'מיזמים חברתיים' },
    { href: '/testimonials', text: 'עדויות משתתפים' },
    { href: '/our-graduates', text: 'שותפים' },
    { href: '/donations', text: 'תרומות' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    if (currentPath !== '/') {
      router.push('/#contact');
    } else {
      // Already on home page, just scroll to contact
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isLight ? 'bg-white-50 dark:bg-gray-800 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600">
              <Image src="/logo.png" alt="Logo" width={105} height={70} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  currentPath === link.href 
                    ? 'text-black dark:text-black font-bold border-b-2 border-blue-500 dark:border-blue-400 shadow-glow transition-all' 
                    : `${isScrolled || isLight ? 'text-gray-800' : 'text-white'} dark:text-white hover:text-blue-600 dark:hover:text-blue-400`
                } transition-colors`}
              >
                {link.text}
              </Link>
            ))}
            <DarkModeToggle />
            <Link 
              href="/#contact" 
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              צור קשר
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 space-x-reverse">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              <span className="sr-only">פתח תפריט</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-50 dark:bg-gray-800 z-50 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 bg-gray-50 dark:bg-gray-800 bg-opacity-90">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold text-blue-600">
              תכנית דגן
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-lg ${
                  currentPath === link.href 
                    ? 'text-black dark:text-black font-bold border-r-4 border-blue-500 dark:border-blue-400 pr-3 shadow-glow transition-all' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700 dark:text-gray-300">מצב תצוגה</span>
              <DarkModeToggle />
            </div>
            <Link 
              href="/#contact"
              onClick={handleContactClick}
              className="block w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-center"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 