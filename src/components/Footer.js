'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 text-[#2563EB]">
          {/* Logo + social (first in DOM → right side in RTL) */}
          <div className="flex flex-col items-start gap-4 w-fit max-w-full">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-transparent.png"
                alt="תכנית דגן למנהיגות"
                width={200}
                height={200}
                className="h-28 sm:h-32 w-auto min-w-[240px] max-w-[440px] object-contain"
              />
            </Link>
            <a
              href="https://www.linkedin.com/company/daganleadership/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-6 py-2 mr-8 text-white hover:bg-[#004182] transition-colors"
              aria-label="תכנית דגן למנהיגות בלינקדאין"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm font-medium">עקבו אחרינו</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-[#2563EB] font-semibold mb-4">יצירת קשר</h3>
            <ul className="space-y-2 text-black">
              <li>רחוב האוניברסיטה 1, נתניה</li>
              <li>
                דוא״ל:{' '}
                <a
                  href="mailto:daganleadership@gmail.com"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  daganleadership@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex gap-3 justify-center mb-4">
            <a 
              href="#" 
              className="text-xs text-gray-400 hover:text-gray-700 transition-colors cursor-pointer" 
              onMouseDown={(e) => {
                e.preventDefault();
                console.log('Footer privacy button mousedown');
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log('Footer privacy button clicked');
                console.log('window.openLegal exists:', !!window.openLegal);
                if (window.openLegal) {
                  console.log('Calling window.openLegal("privacy")');
                  window.openLegal("privacy");
                } else {
                  console.log('❌ window.openLegal is not defined');
                  // Fallback - try to open manually
                  console.log('Trying fallback approach...');
                }
              }}
            >
              מדיניות פרטיות
            </a>
            <a 
              href="#" 
              className="text-xs text-gray-400 hover:text-gray-700 transition-colors cursor-pointer" 
              onMouseDown={(e) => {
                e.preventDefault();
                console.log('Footer terms button mousedown');
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log('Footer terms button clicked');
                console.log('window.openLegal exists:', !!window.openLegal);
                if (window.openLegal) {
                  console.log('Calling window.openLegal("terms")');
                  window.openLegal("terms");
                } else {
                  console.log('❌ window.openLegal is not defined');
                  // Fallback - try to open manually
                  console.log('Trying fallback approach...');
                }
              }}
            >
              תנאי שימוש
            </a>
          </div>
          <p>כל הזכויות שמורות © {currentYear} תכנית דגן למנהיגות</p>
        </div>
      </div>
    </footer>
  );
} 