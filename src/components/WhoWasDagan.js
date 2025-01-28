'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function WhoWasDagan() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1" data-aos="fade-left">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/dagan.jpg"
                alt="דגן"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              מי היה דגן?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              דגן היה מנהיג בעל חזון, אדם שחיבר בין אנשים והקדיש את חייו ליצירת הבנה הדדית. 
              התוכנית נבנתה ברוחו כדי לטפח מנהיגות מגשרת.
            </p>

            {/* Quote */}
            <div
              className="relative cursor-pointer group"
              onClick={() => setIsQuoteVisible(!isQuoteVisible)}
            >
              <div className={`
                transform transition-all duration-300
                ${isQuoteVisible ? 'scale-105' : 'scale-100'}
                bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-r-4 border-blue-600
              `}>
                <p className="text-xl text-blue-900 dark:text-blue-100 font-medium">
                  &ldquo;אומץ אמיתי הוא לא רק לעמוד על שלך – אלא גם לדעת להקשיב ולהבין את האחר.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 