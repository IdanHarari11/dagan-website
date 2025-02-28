'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Testimonials({ title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: 'אינאס חוא דכוור',
      cycle: "בוגרת מחזור ב'",
      role: 'יועצת חינוכית בתיכון חורפיש, מדריכת חירום במגזר הדרוזי והצ\'רקסי בתוכנית "מטראומה לחוסן", מנחה בעמותת משאבים.',
      image: '/images/testimonials/אינאס חווא דכוור.JPG',
      text: 'בוגרת קורס דגן למנהיגות מגשרת, הובלתי תהליכים משמעותיים בגליל. כיום אני מובילה את עמותת חכיאת ומחברת בין נשים יהודיות וערביות.'
    },
    {
      name: 'רועי כחלון',
      cycle: "בוגר מחזור ב'",
      role: 'מנהל רשות החברות הממשלתיות',
      image: '/images/testimonials/רועי כחלון.jpg',
      text: 'השתתפתי במחזור ב\' של פרויקט דגן והתמלאתי הנאה וגאווה. הרעיון החברתי המאחד הולך איתנו בחברה הישראלית על כל גווניה.'
    },
    {
      name: 'אורן שלו',
      cycle: "בוגר מחזור ב'",
      role: 'מייסד התאחדות יועצי המשכנתאות וסגן יו\'ר העמותה, מרצה בכיר ליועצים',
      image: '/images/testimonials/אורן שלו.jpg',
      text: 'הצטרפתי לתוכנית כדי לחזק את המיומנויות המנהיגותיות שבי. הכרתי אנשים שלא דמיינתי שאכיר והתחזקתי במיומנויות המנהיגות.'
    },
    {
      name: 'איאד סלאח',
      cycle: "בוגר מחזור א'",
      role: 'סגן מנהל בית ספר תיכון בחורפיש, מורה לחינוך גופני',
      image: '/images/testimonials/איאד סלאח.jpeg',
      text: 'תוכנית המנהיגות המגשרת ע"ש מאיר דגן ז"ל הייתה עבורי מסע מעצים ומשנה תפיסה. יצאתי עם רשת עמוקה של שותפים לדרך.'
    },
    {
      name: 'שרה סברו-כהן',
      cycle: "בוגרת מחזור ג'",
      role: 'סגנית רופאה מחוזית, מנהלת מחוזית של מקצועות הבריאות במכבי שרותי בריאות מחוז דרום.',
      image: '/images/testimonials/שרה סברו כהן.jpeg',
      text: 'תוכנית דגן עבורי היא חוויה מעצבת חיים ומסע עמוק של משמעות. יצאתי מהתוכנית עם תובנה עמוקה ומודעות גבוהה יותר לצרכים המגוונים.'
    },
    {
      name: 'דני אדינו-אבבה',
      cycle: "בוגר מחזור א'",
      role: 'ראש אגף דוברות, תקשורת והסברה במשרד העלייה והקליטה.',
      image: '/images/testimonials/דני אדינו אבבה.jpg',
      text: 'הייתי חניך במחזור הראשון של "תוכנית דגן" – אחת החוויות המשמעותיות והמעצימות ביותר שחוויתי. התוכנית העניקה לי לא רק ידע, אלא שינוי תפיסתי עמוק.'
    }
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  const totalSets = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [itemsPerPage]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length);
    }, 5000); // Change every 5 seconds
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-16">
          {title}
        </h2>

        <div className="relative overflow-hidden pb-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mx-4 shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.cycle}
                    </p>
                  </div>
                </div>
                <p className="text-primary font-semibold mb-2">
                  {testimonial.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {Array.from({ length: totalSets }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}