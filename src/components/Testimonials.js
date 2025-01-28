'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "תכנית דגן שינתה את הדרך שבה אני רואה מנהיגות. למדתי שהקשבה היא המפתח ליצירת שינוי אמיתי.",
      name: "יעל כהן",
      role: "בוגרת מחזור 2023",
      image: "https://i.pravatar.cc/300?img=1"  // Using pravatar for mock images
    },
    {
      quote: "הכלים שקיבלתי בתכנית מלווים אותי בכל יום בעבודתי הקהילתית.",
      name: "דוד לוי",
      role: "בוגר מחזור 2022",
      image: "https://i.pravatar.cc/300?img=3"
    },
    {
      quote: "התכנית פתחה בפני דלתות חדשות והכרתי אנשים מדהימים שהפכו לחברים לחיים.",
      name: "מיכל ברק",
      role: "בוגרת מחזור 2023",
      image: "https://i.pravatar.cc/300?img=5"
    },
    {
      quote: "למדתי להבין נקודות מבט שונות ולגשר בין אנשים בצורה אפקטיבית.",
      name: "עומר שלום",
      role: "בוגר מחזור 2021",
      image: "https://i.pravatar.cc/300?img=8"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        הקולות שמאחורי השינוי
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 96px) 100vw, 96px"
                />
              </div>
              <div>
                <p className="text-lg mb-4">{testimonials[currentIndex].quote}</p>
                <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
} 