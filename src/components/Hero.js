'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ title, subtitle }) {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
          alt="diverse young people in leadership activity"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transform hover:scale-105 transition duration-200">
            להצטרפות לתכנית
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transform hover:scale-105 transition duration-200">
            למד עוד עלינו
          </button>
        </motion.div>
      </div>
    </div>
  );
} 