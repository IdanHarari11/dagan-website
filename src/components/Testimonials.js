'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import Modal from './Modal';

export default function Testimonials({ title }) {
  const scrollContainerRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      name: 'אינאס חוא דכוור',
      cycle: "בוגרת מחזור ב'",
      role: 'יועצת חינוכית בתיכון חורפיש, מדריכת חירום במגזר הדרוזי והצ\'רקסי בתוכנית "מטראומה לחוסן", מנחה בעמותת משאבים',
      image: '/images/testimonials/אינאס חווא דכוור.JPG',
      text: 'בוגרת קורס דגן למנהיגות מגשרת, הובלתי תהליכים משמעותיים בגליל. כיום אני מובילה את עמותת חכיאת ומחברת בין נשים יהודיות וערביות.',
      fullText: `בוגרת קורס דגן למנהיגות מגשרת, הובלתי תהליכים משמעותיים בגליל. כיום אני מובילה את עמותת חכיאת ומחברת בין נשים יהודיות וערביות.

      התוכנית העניקה לי כלים מעשיים להובלת שינוי חברתי ולגישור בין קהילות. דרך המפגשים והסדנאות, למדתי כיצד לבנות גשרים של הבנה והערכה הדדית בין נשים מרקעים שונים.
      
      הקשרים שיצרתי במהלך התוכנית ממשיכים ללוות אותי עד היום ומהווים רשת תמיכה משמעותית בעבודתי החברתית. אני מאמינה שדרך שיתוף פעולה והיכרות אמיתית, ניתן לבנות חברה טובה יותר.`
    },
    {
      name: 'רועי כחלון',
      cycle: "בוגר מחזור ב'",
      role: 'מנהל רשות החברות הממשלתיות',
      image: '/images/testimonials/רועי כחלון.jpg',
      text: 'השתתפתי במחזור ב\' של פרויקט דגן והתמלאתי הנאה וגאווה. הרעיון החברתי המאחד הולך איתנו בחברה הישראלית על כל גווניה.',
      fullText: `השתתפתי במחזור ב' של פרויקט דגן והתמלאתי הנאה וגאווה. הרעיון החברתי המאחד הולך איתנו בחברה הישראלית על כל גווניה.
      
      תוכנית דגן הייתה עבורי הזדמנות ייחודית להכיר מקרוב מנהיגים מכל שכבות החברה הישראלית ולהבין את האתגרים והצרכים של קהילות שונות. 
      
      כמנהל רשות החברות הממשלתיות, אני מיישם רבים מהעקרונות והתובנות שרכשתי בתוכנית בעבודתי היומיומית. אני מאמין שמנהיגות אמיתית מתחילה בהקשבה והבנה של הצד השני, וזה בדיוק מה שתוכנית דגן מלמדת.`
    },
    {
      name: 'אורן שלו',
      cycle: "בוגר מחזור ב'",
      role: 'מייסד התאחדות יועצי המשכנתאות וסגן יו\'ר העמותה, מרצה בכיר ליועצים',
      image: '/images/testimonials/אורן שלו.jpg',
      text: 'הצטרפתי לתוכנית כדי לחזק את המיומנויות המנהיגותיות שבי. הכרתי אנשים שלא דמיינתי שאכיר והתחזקתי במיומנויות המנהיגות.',
      fullText: `הצטרפתי לתוכנית כדי לחזק את המיומנויות המנהיגותיות שבי. הכרתי אנשים שלא דמיינתי שאכיר והתחזקתי במיומנויות המנהיגות.
      
      תוכנית דגן פתחה בפניי עולמות חדשים של הבנה חברתית ותרבותית. כמי שעוסק בתחום הפיננסי, למדתי להסתכל מעבר למספרים ולראות את האנשים והסיפורים שמאחוריהם.
      
      הכלים שרכשתי בתוכנית מסייעים לי מדי יום בהובלת התאחדות יועצי המשכנתאות ובהדרכת יועצים חדשים. אני מאמין שהשילוב בין מקצועיות לרגישות חברתית הוא המפתח להצלחה בכל תחום.`
    },
    {
      name: 'איאד סלאח',
      cycle: "בוגר מחזור א'",
      role: 'סגן מנהל בית ספר תיכון בחורפיש, מורה לחינוך גופני',
      image: '/images/testimonials/איאד סלאח.jpeg',
      text: 'תוכנית המנהיגות המגשרת ע"ש מאיר דגן ז"ל הייתה עבורי מסע מעצים ומשנה תפיסה. יצאתי עם רשת עמוקה של שותפים לדרך.',
      fullText: `תוכנית המנהיגות המגשרת ע"ש מאיר דגן ז"ל הייתה עבורי מסע מעצים ומשנה תפיסה. יצאתי עם רשת עמוקה של שותפים לדרך.
      
      כאיש חינוך מהמגזר הדרוזי, תוכנית דגן העניקה לי הזדמנות ייחודית להכיר ולהתחבר עם מנהיגים מכל רחבי החברה הישראלית. למדתי שלמרות ההבדלים התרבותיים והדתיים, יש לנו הרבה מן המשותף.
      
      היום, בעבודתי כסגן מנהל בית ספר, אני מיישם את עקרונות המנהיגות המגשרת בחיי היומיום. אני מאמין שחינוך הוא המפתח לבניית גשרים בין קהילות, ותוכנית דגן העניקה לי את הכלים להוביל מהלכים משמעותיים בתחום זה.`
    },
    {
      name: 'שרה סברו-כהן',
      cycle: "בוגרת מחזור ג'",
      role: 'סגנית רופאה מחוזית, מנהלת מחוזית של מקצועות הבריאות במכבי שרותי בריאות מחוז דרום',
      image: '/images/testimonials/שרה סברו כהן.jpeg',
      text: 'תוכנית דגן עבורי היא חוויה מעצבת חיים ומסע עמוק של משמעות. יצאתי מהתוכנית עם תובנה עמוקה ומודעות גבוהה יותר לצרכים המגוונים.',
      fullText: `תוכנית דגן עבורי היא חוויה מעצבת חיים ומסע עמוק של משמעות. יצאתי מהתוכנית עם תובנה עמוקה ומודעות גבוהה יותר לצרכים המגוונים.
      
      כמנהלת בתחום הבריאות, אני נתקלת מדי יום באתגרים הנובעים מהשונות התרבותית בחברה הישראלית. תוכנית דגן העניקה לי כלים להבין טוב יותר את הצרכים הייחודיים של קהילות שונות ולהתאים את שירותי הבריאות בהתאם.
      
      המפגשים עם מנהיגים מרקעים שונים הרחיבו את נקודת המבט שלי והעשירו את הגישה המקצועית שלי. אני מאמינה שבריאות איכותית ושוויונית היא זכות בסיסית של כל אדם, ותוכנית דגן חיזקה את המחויבות שלי לעיקרון זה.`
    },
    {
      name: 'דני אדינו-אבבה',
      cycle: "בוגר מחזור א'",
      role: 'ראש אגף דוברות, תקשורת והסברה במשרד העלייה והקליטה',
      image: '/images/testimonials/דני אדינו אבבה.jpg',
      text: 'הייתי חניך במחזור הראשון של "תוכנית דגן" – אחת החוויות המשמעותיות והמעצימות ביותר שחוויתי. התוכנית העניקה לי לא רק ידע, אלא שינוי תפיסתי עמוק.',
      fullText: `הייתי חניך במחזור הראשון של "תוכנית דגן" – אחת החוויות המשמעותיות והמעצימות ביותר שחוויתי. התוכנית העניקה לי לא רק ידע, אלא שינוי תפיסתי עמוק.
      
      כיוצא אתיופיה וכמי שעוסק בתקשורת והסברה, תוכנית דגן פתחה בפניי צוהר להבנה עמוקה יותר של המורכבות החברתית בישראל. למדתי כיצד לתקשר באופן אפקטיבי עם קהלים מגוונים ולהעביר מסרים באופן שמכבד את השונות התרבותית.
      
      הקשרים שיצרתי במהלך התוכנית ממשיכים ללוות אותי בעבודתי במשרד העלייה והקליטה, ומסייעים לי להבין טוב יותר את האתגרים העומדים בפני עולים חדשים מרקעים שונים. אני גאה להיות חלק מקהילת בוגרי דגן ולהמשיך את דרכו של מאיר דגן ז"ל בבניית חברה ישראלית מלוכדת ומכילה.`
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // In RTL, scrolling "right" means decreasing scrollLeft (more negative)
      // and scrolling "left" means increasing scrollLeft (less negative)
      const scrollAmount = direction === 'right' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-16">
          {title}
        </h2>

        {/* Slider Container */}
        <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10
                       bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200
                       translate-x-5 lg:translate-x-8"
              aria-label="Previous"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10
                       bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200
                       -translate-x-5 lg:-translate-x-8"
              aria-label="Next"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-4 px-4
                     scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', direction: 'rtl' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-center"
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  onReadMore={() => openModal(testimonial)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full testimonial */}
      {selectedTestimonial && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedTestimonial.name}
        >
          <div className="space-y-4">
            <div className="relative w-full mb-4">
              <div className="mx-auto max-w-sm h-64 overflow-hidden rounded-lg">
                <Image
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  width={400}
                  height={400}
                  className="object-cover object-top w-full rounded-lg mx-auto"
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {selectedTestimonial.cycle}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {selectedTestimonial.role}
              </p>
            </div>
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
              {selectedTestimonial.fullText}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial, onReadMore }) => (
  <div className="group h-full">
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg pt-16 h-full flex flex-col">
      {/* Profile Image Container */}
      <div className="absolute p-4 -top-2 left-1/2 -translate-x-1/2 mt-1">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg bg-gray-100">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="96px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-[5rem] text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            {testimonial.cycle}
          </p>
          <p className="text-primary font-semibold mb-3 text-sm line-clamp-2">
            {testimonial.role}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-4 mb-4">
            {testimonial.text}
          </p>
        </div>
        
        {/* Button Container - Positioned at bottom center */}
        <div className="mt-auto flex justify-center">
          <button 
            onClick={onReadMore}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            קרא עוד &larr;
          </button>
        </div>
      </div>
    </div>
  </div>
);