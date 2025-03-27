'use client';

import Image from 'next/image';
import SectionTitle from './SectionTitle';

const partners = [
  {
    name: 'צה״ל',
    logo: '/images/partners/צהל חדש.webp',
  },
  {
    name: 'תעשיה אווירית',
    logo: '/images/partners/תעשיה אווירית.png',
  },
  {
    name: 'משרד העלייה והקליטה',
    logo: '/images/partners/משרד העלייה והקליטה חדש.webp',
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
    logo: '/images/partners/קומינה חדש.webp',
  },
  {
    name: 'סינרג׳י אנרגיה',
    logo: '/images/partners/senergy חדש.webp',
  },
  {
    name: 'משרד החוץ',
    logo: '/images/partners/משרד החוץ חדש.webp',
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
    logo: '/images/partners/עמותת אופק חדש.webp',
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
    logo: '/images/partners/בזק חדש.webp',
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
    logo: '/images/partners/דרכא חדש.webp',
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
    logo: '/images/partners/אסותא חדש.webp',
  },
  {
    name: 'המרכז הרפואי גליל',
    logo: '/images/partners/מרכז רפואי גליל חדש.webp',
  },
  {
    name: 'החברה למתנסים ירושלים',
    logo: '/images/partners/החברה למתנסים חדש.webp',
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
  {
    name: 'בנק לאומי',
    logo: '/images/partners/leumi.png',
  },
  {
    name: 'פלטפורמא',
    logo: '/images/partners/פלטפורמא.webp',
  },
];

const Partners = () => {
  return (
    <section dir='ltr' className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="השותפים שלנו"
          sectionId="partners"
        />
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex justify-center items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;