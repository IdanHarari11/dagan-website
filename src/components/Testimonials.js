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
      name: 'מאיה קדוש',
      cycle: "בוגרת מחזור ב'",
      role: 'דיפלומטית במשרד החוץ, בין תפקידיה בעבר: מנהלת אגף תיאום ותכנון מדיני במשרד החוץ, ראש המטה המדיני של שר החוץ גדעון סער, יועצת מדינית בכירה לשר החוץ לשעבר, ישראל כ״ץ. כיום מכהנת כשגרירת ישראל להונגריה.',
      image: '/images/testimonials/מאיה קדוש.jpeg',
      text: 'השתתפותי בתכנית "דגן למנהיגות מגשרת" חיזקה את יכולות הגישור וההידברות שלי, העמיקה את הבנתי כחלק מהחברה וכדיפלומטית, וחידדה בי את חשיבות בניית האמון והשיח הפתוח.',
      fullText: `השתתפותי בתכנית "דגן למנהיגות מגשרת" הייתה חוויה משמעותית שהעניקה לי כלים חשובים לדיאלוג ולהבנה בין מגזרים שונים בחברה הישראלית. התכנית אפשרה לי לחוות אתגרי גישור והידברות מזווית חדשה, לעבוד עם אנשים מכל חלקי החברה ולחדד את היכולת להקשיב ולהבין את הצרכים והמכנים המשותפים של אחרים. כמי שעוסקת בדיפלומטיה, אני יודעת כמה חשיבות יש בבניית אמון ושיח פתוח, וההשתתפות בתכנית חיזקה בי את התחושות הללו, במיוחד אחרי האירועים הקשים של ה-7/10. החיבור עם אנשים מגוונים ומחויבים לחברה הישראלית היה ערך גדול עבורי, וההבנה העמוקה יותר של החברה הישראלית שצברתי עזרה לי לא רק כמנהיגה אלא גם כדיפלומטית. אני ממליצה בחום לכל מי שמאמין בכוחו של שיח מחבר להצטרף לתכנית ולהיות חלק מהשינוי החיובי שהחברה שלנו צריכה.`
    },
    {
      name: 'ד"ר וואפא בלאן',
      cycle: "בוגרת מחזור א'",
      role: 'ד"ר לרפואה מהטכניון, רופאה מומחית בהרדמה ובטיפול נמרץ. בעלת ניסיון קליני, אקדמי וניהולי עשיר במערכות הבריאות הישראלית והקנדית ונגנית קאנון מקצועית עם ניסיון עשיר בנגינה ובחינוך מוזיקה מזרחית קלאסית.',
      image: '/images/testimonials/וואפא בלאן.jpeg',
      text: 'ההתנסות המשמעותית תרמה לפיתוח יכולות המנהיגות שלי, הרחיבה את מעגל הקשרים המקצועיים, והדגישה את חשיבותה של מנהיגות אנושית ומקצועית בהתפתחותי.',
      fullText: `תכנית "דגן למנהיגות מגשרת" תרמה רבות לפיתוח יכולות המנהיגות שלי, הדגישה את חשיבות המנהיגות האנושית והמקצועית, והרחיבה את מעגל הקשרים שלי. ללא ספק, החוויה המעשירה הייתה חלק מהותי מאד בהתפתחותי המקצועית.`
    },
    {
      name: 'רועי כחלון',
      cycle: "בוגר מחזור ב'", 
      role: 'מנהל רשות החברות הממשלתיות',
      image: '/images/testimonials/רועי כחלון.jpg',
      text: 'השתתפתי במחזור ב\' של פרויקט דגן והתמלאתי הנאה וגאווה. הרעיון החברתי המאחד הולך איתנו בחברה הישראלית על כל גווניה.',
      fullText: `השתתפתי במחזור ב' של פרויקט דגן והתמלאתי הנאה וגאווה. הרעיון להיות חלק מקבוצת אנשים מיוחדים ואוהבי הארץ במטרה לשתף ולייצר רציונל מאחד של החברה הישראלית היה משהו מרתק ומיוחד. ההובלה והיצירה של צוות הפרויקט, המסור והערכי, שעושה רבות לטובת הפרויקט המדהים הזה, מעורר השתאות. הרעיון החברתי המאחד הולך איתנו בחברה הישראלית על כל גווניה בחיי היום יום, בעבודה, במשפחה, בסביבה החברתית - כאשר בפרויקט היבטים אלה מקבלים חידוד והעמקה חיוניים לכל מנהיג בחברה הישראלית.`
    },
    {
      name: 'דני אדינו-אבבה',
      cycle: "בוגר מחזור א'",
      role: 'ראש אגף דוברות, תקשורת והסברה במשרד העלייה והקליטה',
      image: '/images/testimonials/דני אדינו אבבה.jpg',
      text: 'הייתי חניך במחזור הראשון של "תכנית דגן" – אחת החוויות המשמעותיות והמעצימות ביותר שחוויתי. התכנית העניקה לי לא רק ידע, אלא שינוי תפיסתי עמוק.',
      fullText: `הייתי חניך במחזור הראשון של "תכנית דגן" – אחת החוויות המשמעותיות והמעצימות ביותר שחוויתי בשנים האחרונות. התכנית, הנקראת על שמו של ראש המוסד לשעבר, מאיר דגן ז"ל, היא הרבה יותר ממסגרת לימודית – היא מסע אישי וחברתי שמשנה תפיסות, פותח דלתות ומעצב דור חדש של מנהיגים. התכנית העניקה לי לא רק ידע, אלא שינוי תפיסתי עמוק. אחרי חודשים של מסע משמעותי, יצאתי ממנה אדם אחר – מודע יותר, מחויב יותר, נחוש לפעול למען החברה שלנו. למדתי שהמנהיגות מתחילה קודם כול בפנים, ביכולת לראות את המורכבויות ולנווט בתוכן, ביצירת חיבורים, בהובלת שינוי. במהלך התכנית פגשתי נבחרת איכותית של אנשים שפועלים לטובת החברה, אנשים שהפכו לחברים ושותפים לדרך שילוו אותי במסע חיי. מספרים על מאיר דגן שהיה יהודי יצירתי, קשוח וחד כתער – אבל גם אנושי ובעל לב חם. מאחורי הפרויקט הייחודי הזה עומדים אנשים חדורי שליחות, לא פחות "פסיכים" ממנו, שמאמינים בכוחה של המנהיגות לחולל שינוי אישי וחברתי. `
    },
    {
      name: 'אינאס חוא דכוור',
      cycle: "בוגרת מחזור ב'",
      role: 'יועצת חינוכית בתיכון חורפיש, מדריכת חירום במגזר הדרוזי והצ\'רקסי בתכנית "מטראומה לחוסן", מנחה בעמותת משאבים',
      image: '/images/testimonials/אינאס חווא דכוור.jpg',
      text: 'בוגרת קורס דגן למנהיגות מגשרת, הובלתי תהליכים משמעותיים בגליל. כיום אני מובילה את עמותת חכיאת ומחברת בין נשים יהודיות וערביות.',
      fullText: `אני בוגרת קורס דגן למנהיגות מגשרת, ובמהלך התהליך שעברתי הצלחתי לצמוח ולהוביל תהליכים משמעותיים בגליל. במהלך תקופת המלחמה, הובלתי יחד עם קבוצת מתנדבים מוקד סיוע לחיילים ולכיתות הכוננות בגזרה הצפונית, בעזרת תורמים ואנשים שהכרתי במהלך קורס דגן והנטוורקינג. השנה החלטתי להוביל את עמותת חכיאת, אשר מקדמת את החיבור בין נשים יהודיות וערביות באזור הגליל, ובפרט סניף קליקה תפן. בנוסף, אני פעילה בעמותת "פסיפס אנושי גלילי", הפועלת לחיבור הקהילה דרך ספורט. לפני קורס דגן היו לי המון חלומות שהרגשתי שלא הצלחתי לקדם, וכיום אני מובילה תהליכים בזכות הזרעים שנזרעו במהלך הקורס ואחריו!`
    },
    {
      name: 'אורן שלו',
      cycle: "בוגר מחזור ב'",
      role: 'מייסד התאחדות יועצי המשכנתאות וסגן יו\'ר העמותה, מרצה בכיר ליועצים',
      image: '/images/testimonials/אורן שלו.jpg',
      text: 'הצטרפתי לתכנית כדי לחזק את המיומנויות המנהיגותיות שבי. הכרתי אנשים שלא דמיינתי שאכיר והתחזקתי במיומנויות המנהיגות.',
      fullText: `הצטרפתי לתכנית כדי לחזק את המיומנויות המנהיגותיות שבי כדי שאוכל להוביל שינויים בתחום שלי בצורה טובה יותר. אנחנו פועלים גם מול גופים רגולטוריים, גם מול חברי כנסת בהצעות חוק שונות, וגם מול גופי אשראי גדולים כמו הבנקים וצריך כדי לפעול במישורים האלו גם המון נחישות וגם לדעת מתי להיות סבלני ולראות את הצורך של הגוף שעומד מולנו כדי שנוכל לכוון את הדברים בצורה שתהיה טובה לציבור. הכרתי בתכנית אנשים שלא דמיינתי שאכיר והתחזקתי בעצמי גם במיומנויות המנהיגות אבל גם במיומנויות אחרות של הקשבה והבנת כלל הציבוריים במדינת ישראל בצורה טובה יותר. למדנו לראות את העולם והחברה שלנו ממגוון זוויות ראייה מה שמאפשר להנהיג בצורה נכונה יותר בעתיד טוב יותר. התכנית עזרה לי בצורה יוצאת דופן.`
    },
    {
      name: 'איאד סלמה',
      cycle: "בוגר מחזור א'",
      role: 'סגן מנהל בית ספר תיכון בחורפיש, מורה לחינוך גופני',
      image: '/images/testimonials/איאד סלאח.jpeg',
      text: 'תכנית המנהיגות המגשרת ע"ש מאיר דגן ז"ל הייתה עבורי מסע מעצים ומשנה תפיסה. יצאתי עם רשת עמוקה של שותפים לדרך.',
      fullText: `תכנית המנהיגות המגשרת ע”ש מאיר דגן ז”ל הייתה עבורי מסע מעצים ומשנה תפיסה! התכנית העניקה לי כלים מעשיים להובלה ולגישור בין קהילות שונות, חידדה בי את החשיבות של הקשבה ודיאלוג, וחיזקה בי את תחושת האחריות האישית והחברתית שלי, בזכות התכנית היוקרתית והסגל המקצועי המוביל יצאתי עם רשת עמוקה של שותפים לדרך ועם אמונה ביכולתי להשפיע וליצור שינוי אמיתי בחברה הישראלית!`
    },
    {
      name: 'שרה סברו-כהן',
      cycle: "בוגרת מחזור ג'",
      role: 'סגנית רופאה מחוזית, מנהלת מחוזית של מקצועות הבריאות במכבי שרותי בריאות מחוז דרום',
      image: '/images/testimonials/שרה סברו כהן.jpeg',
      text: 'תכנית דגן עבורי היא חוויה מעצבת חיים ומסע עמוק של משמעות. יצאתי מהתכנית עם תובנה עמוקה ומודעות גבוהה יותר לצרכים המגוונים.',
      fullText: `תכנית דגן עבורי היא הרבה יותר ממסגרת לימודית – היא הייתה חוויה מעצבת חיים, מסע עמוק של משמעות וחיבור לחברה הישראלית על כל גווניה ואתגריה. התכנית פתחה בפניי נקודת מבט רחבה ומעמיקה על המורכבות החברתית בישראל, והחדירה בי את ההבנה שכל אתגר הוא הזדמנות לגשר, להוביל וליצור שינוי אמיתי. יצאתי מהתכנית עם תובנה עמוקה ומודעות גבוהה יותר לצרכים המגוונים של הקהילות השונות, לצד כלים מעשיים להתמודדות עם אתגרים ניהוליים מורכבים – מתוך גישה של מנהיגות מגשרת, המחברת בין אנשים, ערכים ומטרות. מעבר לידע ולכלים, התכנית העניקה לי מתנה גדולה: תחושת שליחות עמוקה ורצון עז לפעול למען חיזוק החברה הישראלית – בהקשבה, ברגישות ובאחריות.`
    },
    {
      name: 'רמה פיליפס',
      cycle: "בוגרת מחזור ג'",
      role: 'סמנכ"ל משאבי אנוש בחברת טריא',
      image: '/images/testimonials/רמה פיליפס.jpeg',
      text: 'תכנית דגן הייתה עבורי מסע מיוחד ועוצמתי של למידה מעמיקה, חיבורים אנושיים משמעותיים, והיכרות עם אנשים מכל חלקי החברה הישראלית; בזכות הכלים, הסדנאות והתכנים המגוונים, ניתנה לנו ההזדמנות להוביל יוזמות חברתיות עם השפעה אמיתית.',
      fullText: `תכנית דגן הייתה עבורי מסע מיוחד ועוצמתי, שכלל למידה מעמיקה וחיבורים אישיים וקבוצתיים משמעותיים. הכרתי אנשים מיוחדים מכלל הסקטורים והחלקים בחברה הישראלית, ולמדנו כיצד להקשיב ולהכיל את השונה מאיתנו על מנת להוביל לשינוי. התכנית מושקעת מאוד וכללה תכנים מרתקים ודרכי למידה מגוונות כגון הרצאות מרתקות, סדנאות מעשיות, סיורים, מפגשים ולמידת עמיתים, שהעניקו לנו הבנה רחבה של אתגרי החברה הישראלית. בעזרת הכלים שהעניקה לנו התכנית, יצרנו הזדמנות להוביל יוזמות חברתיות עם השפעה אמיתית. ההשתתפות בתכנית דגן הייתה מתנה גדולה ואני מודה מקרב לב לצוות המארגן על תכנית איכותית ומשמעותית.`
    },
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
                  onError={(e) => {
                    e.target.src = '/images/testimonials/default-profile.jpg';
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 text-center">
                {selectedTestimonial.cycle}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-center">
                {selectedTestimonial.role}
              </p>
            </div>
            <div className="whitespace-pre-line text-right text-gray-700 dark:text-gray-300">
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
            onError={(e) => {
              e.target.src = '/images/testimonials/default-profile.jpg';
            }}
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onReadMore();
            }}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-200 dark:border-blue-800 hover:shadow-md"
            aria-label="קרא עוד"
          >
            קרא עוד &larr;
          </button>
        </div>
      </div>
    </div>
  </div>
);