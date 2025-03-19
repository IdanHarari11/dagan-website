'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhoWasDagan() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  return (
    <section id="who-was-dagan" className="pt-8 pb-20 relative z-10">
      {/* Top connector glow */}
      <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ zIndex: -1 }}>
        <div 
          className="absolute -top-20 left-0 right-0 w-full max-w-5xl mx-auto h-40 rounded-full bg-blue-400 opacity-15 blur-3xl"
          style={{ filter: 'blur(50px)' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image with transparent container */}
          <motion.div 
            className="order-2 lg:order-1" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Transparent container with subtle shadow */}
            <div className="relative h-[350px] w-full">
              {/* Image with transparent background */}
              <Image
                src="/images/dagan/dagan1.png"
                alt="מאיר דגן"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Optional subtle glow effect */}
              <div 
                className="absolute inset-0 opacity-20 blur-2xl rounded-full bg-blue-400 dark:bg-blue-600" 
                style={{ 
                  width: '80%', 
                  height: '30%', 
                  bottom: '5%', 
                  left: '10%',
                  zIndex: -1 
                }}
              ></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-14">
              מי היה דגן?
            </h2>
            {/* <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              מאיר דגן עמד בראש המוסד בין השנים  2011-2002. זכה בעיטור העוז במהלך שירותו הצבאי ועמד מאחורי פעילות מבצעית משמעותית ומגוונת כמפקד בשורות צה&#34;ל והמוסד. העמותה ע&#34;ש מאיר דגן הוקמה בדצמבר 2020 במטרה להנציח את שמו, פועלו, מורשתו וערכיו -אהבת הארץ, אהבת האדם, העם והמדינה.
            </p> */}

            {/* Quote */}
            <motion.div
              className="relative cursor-pointer group"
              onClick={() => setIsQuoteVisible(!isQuoteVisible)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`
                transform transition-all duration-300
                ${isQuoteVisible ? 'scale-105' : 'scale-100'}
                bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-r-4 border-blue-600 shadow-md
              `}>
                <p className="text-xl text-blue-900 dark:text-blue-100 font-medium">
                  &ldquo;מנהיגות זו היכולת להניע אנשים לעשות מעל ומעבר לתנאים הרגילים, במיוחד באותם מקרים שאנשים חוששים או אינם בטוחים בעצמם&rdquo;
                </p>
                <p className="text-right mt-2 text-blue-600 dark:text-blue-300 font-medium">- מאיר דגן</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom glow effect to connect with the next section */}
      <div className="absolute left-0 w-full bottom-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div 
          className="absolute bottom-0 left-0 right-0 w-full max-w-5xl mx-auto h-40 rounded-full bg-blue-400 opacity-15 blur-3xl"
          style={{ filter: 'blur(50px)', transform: 'translateY(50%)' }}
        ></div>
      </div>
    </section>
  );
} 