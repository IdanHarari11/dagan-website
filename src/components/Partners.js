'use client';

import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const partners = [
  {
    name: 'צה״ל',
    logo: '/images/partners/צהל.jpg',
  },
  {
    name: 'תעשיה אווירית',
    logo: '/images/partners/תעשיה אווירית.png',
  },
  {
    name: 'משרד העלייה והקליטה',
    logo: '/images/partners/משרד העלייה והקליטה.jpg',
  },
  {
    name: 'התאחדות יועצי המשכנתאות',
    logo: '/images/partners/התאחדות יועצי המשכנתאות.png',
  },
  {
    name: 'סלקום',
    logo: '/images/partners/סלקום.png',
  },
  {
    name: 'רשות החברות הממשלתיות',
    logo: '/images/partners/רשות החברות הממשלתיות.png',
  },
  {
    name: 'קומינה',
    logo: '/images/partners/קומינה.png',
  },
  {
    name: 'סינרג׳י אנרגיה',
    logo: '/images/partners/סינרג_י אנרגיה.png',
  },
  {
    name: 'משרד החוץ',
    logo: '/images/partners/משרד החוץ.png',
  },
  {
    name: 'HP אינדיגו',
    logo: '/images/partners/HP אינדיגו.png',
  },
  {
    name: 'קרן קמים',
    logo: '/images/partners/קרן קמים.png',
  },
  {
    name: 'עמותת בוגרי 8200',
    logo: '/images/partners/עמותת בוגרי 8200.png',
  },
  {
    name: 'קבוצת פלייטיקה',
    logo: '/images/partners/קבוצת פלייטיקה.png',
  },
  {
    name: 'עמותת אופק',
    logo: '/images/partners/עמותת אופק.jpg',
  },
  {
    name: 'משרד הביטחון',
    logo: '/images/partners/משרד הביטחון.png',
  },
  {
    name: 'משטרת ישראל',
    logo: '/images/partners/משטרת ישראל.png',
  },
  {
    name: 'קבוצת בזן',
    logo: '/images/partners/קבוצת בזן.png',
  },
  {
    name: 'שחר חדש בנגב',
    logo: '/images/partners/שחר חדש בנגב.png',
  },
  {
    name: 'עיריית דימונה',
    logo: '/images/partners/עיריית דימונה.png',
  },
  {
    name: 'כבאות והצלה',
    logo: '/images/partners/כבאות והצלה.png',
  },
  {
    name: 'בזק',
    logo: '/images/partners/בזק.png',
  },
  {
    name: 'הדסה',
    logo: '/images/partners/הדסה.png',
  },
  {
    name: 'בנק לאומי',
    logo: '/images/partners/בנק לאומי.png',
  },
  {
    name: 'איכילוב',
    logo: '/images/partners/איכילוב.png',
  },
  {
    name: 'דרכא',
    logo: '/images/partners/דרכא.jpg',
  },
  {
    name: 'אסם',
    logo: '/images/partners/אסם.png',
  },
  {
    name: 'מכבי שירותי בריאות',
    logo: '/images/partners/מכבי שירותי בריאות.png',
  },
  {
    name: 'אסותא',
    logo: '/images/partners/אסותא.gif',
  },
  {
    name: 'המרכז הרפואי גליל',
    logo: '/images/partners/המרכז הרפואי גליל.png',
  },
  {
    name: 'החברה למתנסים ירושלים',
    logo: '/images/partners/החברה למתנסים ירושלים.jpg',
  },
  {
    name: 'מקורות',
    logo: '/images/partners/מקורות.png',
  },
  {
    name: 'טריא',
    logo: '/images/partners/טריא לוגו.png',
  },
  {
    name: 'בנק הפועלים',
    logo: '/images/partners/בנק הפועלים.png',
  },
];

const Partners = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -1000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <section dir='ltr' className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="השותפים שלנו"
          subtitle="שיתופי פעולה"
          sectionId="partners"
        />
        <div className="mt-8 relative">
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex space-x-8 w-fit"
            >
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-1`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-2`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Partners;