'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Team() {
  const team = [
    {
      name: 'ד״ר רונית כהן',
      role: 'מנהלת התוכנית',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
      bio: 'מומחית בפיתוח מנהיגות ותהליכי גישור, עם ניסיון של 15 שנה בהובלת תוכניות חברתיות',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'אמיר לוי',
      role: 'רכז הדרכה',
      image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      bio: 'מנחה קבוצות מנוסה עם התמחות בפיתוח מיומנויות מנהיגות וכישורי גישור',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'מיכל ברק',
      role: 'יועצת פדגוגית',
      image: 'https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4',
      bio: 'מפתחת תוכניות לימודים עם התמחות בחינוך לדיאלוג ושיתוף פעולה בין-תרבותי',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'יוסי אברהם',
      role: 'מנחה בכיר',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
      bio: 'מומחה בתהליכי גישור וניהול קונפליקטים, עם ניסיון עשיר בהנחיית קבוצות מגוונות',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הכירו את הצוות שלנו
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            אנשי המקצוע שמובילים את התוכנית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Base Name Container - Always Visible */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="p-6 text-xl font-bold text-white transform transition-all duration-300 group-hover:translate-y-[-120px] group-hover:text-2xl">
                  {member.name}
                </h3>
              </div>

              {/* Details Container - Appears on Hover */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-blue-300 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 space-x-reverse">
                  <a 
                    href={member.social.linkedin} 
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 