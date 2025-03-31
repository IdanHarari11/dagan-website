'use client';

import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const donors = [
  {
    name: 'מפעל הפיס',
    logo: '/images/donors/מפעל הפיס.png',
  },
  {
    name: 'כתר',
    logo: '/images/donors/כתר.png',
  },
  {
    name: 'הראל',
    logo: '/images/donors/הראל.jpg',
  },
  {
    name: 'אלדן',
    logo: '/images/donors/אלדן.png',
  },
  {
    name: 'Zota',
    logo: '/images/donors/zota.jpeg',
  },
  {
    name: 'Cytaka',
    logo: '/images/donors/cytaka.png',
  },
];

const Donors = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -1000],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <section dir='ltr' className="py-16 bg-gray-50 dark:bg-gray-800 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="התורמים שלנו"
          subtitle="תודה מיוחדת"
          sectionId="donors"
        />
        <div className="mt-8 relative">
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex space-x-12 w-fit"
            >
              {/* First set of donors */}
              {donors.map((donor, index) => (
                <motion.div
                  key={`${donor.name}-1`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-40 h-24">
                    <Image
                      src={donor.logo}
                      alt={donor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {donors.map((donor, index) => (
                <motion.div
                  key={`${donor.name}-2`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-40 h-24">
                    <Image
                      src={donor.logo}
                      alt={donor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Donors; 