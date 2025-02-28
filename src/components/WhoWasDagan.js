'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function WhoWasDagan() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              מי היה דגן?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            מאיר דגן עמד בראש המוסד בין השנים  2011-2002. זכה בעיטור העוז במהלך שירותו הצבאי ועמד מאחורי פעילות מבצעית משמעותית ומגוונת כמפקד בשורות צה&#34;ל והמוסד. העמותה ע&#34;ש מאיר דגן הוקמה בדצמבר 2020 במטרה להנציח את שמו, פועלו, מורשתו וערכיו -אהבת הארץ, אהבת האדם, העם והמדינה.
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
                  &ldquo;מנהיגות זו היכולת להניע אנשים לעשות מעל ומעבר לתנאים הרגילים, במיוחד באותם מקרים שאנשים חוששים או אינם בטוחים בעצמם&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 