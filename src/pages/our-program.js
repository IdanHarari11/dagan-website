import { useState } from 'react';
import { motion } from 'framer-motion';
import Team from '@/components/Team';

const goals = [
  {
    title: 'הכשרת והצמחת מנהיגים מכל הקבוצות בחברה הישראלית',
    description: 'התוכנית מיועדת להכשיר ולטפח דור חדש של מנהיגים מכל גווני החברה הישראלית, מתוך תפיסה שמנהיגות אמיתית צומחת מתוך חיבור, הבנה ויכולת להוביל שינוי. המשתתפים עוברים סדנאות למנהיגות מעשית, שבהן הם רוכשים כלים לפיתוח חשיבה אסטרטגית, תהליכי קבלת החלטות במצבי משבר, והובלת תהליכים בארגונים ובקהילות מגוונות. נוסף על כך, התוכנית מעניקה הכשרה ייחודית בהתמודדות עם קונפליקטים, במטרה לאפשר למנהיגים העתידיים להתמודד עם האתגרים הרבים של החברה הישראלית בדרך של דיאלוג, הבנה ופתרונות יצירתיים.'
  },
  {
    title: 'פיתוח והטמעת כלים להתמודדות עם קיטוב',
    description: 'החברה הישראלית ניצבת בפני קיטוב הולך וגובר, והתמודדות עמו מחייבת כלים מעשיים של גישור, הידברות ויצירת שיח בונה. במסגרת התוכנית, המשתתפים נחשפים למגוון רחב של נקודות מבט ומעמיקים בהבנת המורכבות החברתית דרך סדנאות מעשיות בגישור, דיונים בהובלת מומחים, והשתתפות במפגשים עם דמויות מפתח מכלל קצוות הקשת החברתית והאידיאולוגית. בנוסף, המשתתפים לוקחים חלק פעיל בפיתוח מיזמים חוצי מגזרים, שמטרתם להניע שינוי חברתי ולתרום ללכידות חברתית איתנה.'
  },
  {
    title: 'יצירת רשת קשרים ושיתופי פעולה מגוונים',
    description: 'מנהיגות אפקטיבית אינה פועלת לבד – היא מבוססת על שיתופי פעולה ורשתות קשרים שמסייעות להרחיב השפעה וליצור שינוי משמעותי. התוכנית יוצרת תשתית נטוורקינג פעילה, שבה המשתתפים זוכים להיכרות מעמיקה עם אנשים מובילים בתחומם, הן מהמגזר הציבורי והן מהמגזר העסקי והחברתי. באמצעות חיבורים בין המשתתפים לבין אנשי מפתח מכלל המגזרים, נרקמות מערכות יחסים ארוכות טווח, המאפשרות שיתופי פעולה משמעותיים. עם סיום התוכנית, הבוגרים מצטרפים לפורום פעיל של בוגרים, אשר מהווה פלטפורמה להמשך יצירת שיתופי פעולה והשפעה ארוכת טווח.'
  },
  {
    title: 'הנבטת מיזמים חברתיים המקדמים סובלנות והכלה',
    description: 'התוכנית לא מסתפקת בהקניית ידע בלבד, אלא מעודדת את המשתתפים להתנסות במנהיגות הלכה למעשה ולהפוך את הרעיונות למציאות. כחלק מהתהליך, המשתתפים מפתחים מיזמים חברתיים חדשניים שמטרתם לקדם סובלנות, הכלה וערבות הדדית. הם זוכים לליווי אישי בפיתוח היוזמות, להנגשת משאבים שיאפשרו לממש את רעיונותיהם, ולתמיכה צמודה ממנטורים מובילים מהעולם העסקי, החברתי והציבורי. פלטפורמה זו מאפשרת למשתתפים להפוך חזון למציאות וליצור שינוי משמעותי בחברה הישראלית.'
  }
];

const FlippingCard = ({ title, description, isFlipped, index, onFlip }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle read click
  const handleReadClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onFlip(index);
  };

  // Handle back click
  const handleBackClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onFlip(null);
  };

  return (
    <motion.div
      className="w-full md:w-1/2 lg:w-1/4 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-64 shadow-xl rounded-xl overflow-hidden transition-transform duration-500 ${isFlipped ? 'scale-105' : isHovered ? 'scale-102' : ''}`}>
        
        {/* Front of card - enhanced glassmorphism effect */}
        <div className={`glass-card absolute h-[100%] inset-0 flex flex-col items-center justify-center p-4 backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-blue-900/20 ${isFlipped ? 'hidden' : 'block'}`}
          style={{ 
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.3s ease-in-out',
          }}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{title}</h3>
          
          {/* Click-to-flip button - visible only on hover or when clicked */}
          <button 
            className={`text-sm text-blue-600 dark:text-blue-400 flex items-center p-2 transition-all duration-300 cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleReadClick}
          >
            <span>לחץ לקריאה</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
        
        {/* Back of card - enhanced glassmorphism effect with improved scrolling */}
        <div className={`glass-card absolute inset-0 backdrop-blur-xl bg-blue-50/30 dark:bg-gray-900/40 border border-white/30 dark:border-blue-900/20 ${isFlipped ? 'block' : 'hidden'}`}
          style={{ 
            boxShadow: 'inset 0 2px 20px 0 rgba(255, 255, 255, 0.2), 0 8px 32px 0 rgba(31, 38, 135, 0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.3s ease-in-out',
            overflow: 'auto',
            overflowX: 'auto'
          }}>
          <div className="flex flex-col h-full p-4">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 text-center">{title}</h3>
            {/* Improved scrollable area */}
            <div 
              className="scrollbar-thin overflow-y-auto flex-grow mb-2"
              style={{ 
                maxHeight: "calc(100% - 80px)",
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
              }}
            >
              <p className="text-sm text-gray-800 dark:text-white">{description}</p>
            </div>
            {/* Back-to-front button with improved styling */}
            <button 
              className="text-center text-sm text-blue-600 dark:text-blue-400 py-2 border-t border-blue-200 dark:border-blue-800 mt-auto cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 transition-colors"
              onClick={handleBackClick}
            >
              <span>לחץ לחזרה</span>
            </button>
          </div>
        </div>
        
        {/* Pulsing corner effect to indicate interactivity */}
        <div className={`absolute bottom-0 right-0 w-12 h-12 transition-opacity duration-300 ${isHovered && !isFlipped ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-t-0 border-r-0 border-b-[24px] border-l-0 border-b-blue-500 border-l-transparent transform rotate-90 animate-corner-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default function OurProgramPage() {
  // State to track which card is flipped (null means no card is flipped)
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  // Function to handle card flipping
  const handleCardFlip = (index) => {
    setFlippedCardIndex(index);
  };

  return (
    <section className="py-20 pt-36 min-h-[100vh] bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced background elements for improved glassmorphism effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-yellow-200 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-200 dark:bg-green-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-5000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">מטרות התכנית</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          תכנית דגן למנהיגות מגשרת מכוונת להשגת מספר מטרות משמעותיות שמטרתן ליצור שינוי חברתי ארוך טווח
        </p>
          <div className="flex flex-wrap -mx-4">
            {goals.map((goal, index) => (
              <FlippingCard 
                key={index} 
                title={goal.title} 
                description={goal.description} 
                isFlipped={flippedCardIndex === index}
                index={index}
                onFlip={handleCardFlip}
              />
            ))}
          </div>
        </div>

        <Team />
      </section>
  );
} 