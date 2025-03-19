import { useState } from 'react';
import { motion } from 'framer-motion';
import Team from '@/components/Team';
import Modal from '@/components/Modal';
import Image from 'next/image';

const goals = [
  {
    title: 'הכשרת והצמחת מנהיגים מכל הקבוצות בחברה הישראלית',
    description: 'התוכנית מיועדת להכשיר ולטפח דור חדש של מנהיגים מכל גווני החברה הישראלית, מתוך תפיסה שמנהיגות אמיתית צומחת מתוך חיבור, הבנה ויכולת להוביל שינוי. המשתתפים עוברים סדנאות למנהיגות מעשית, שבהן הם רוכשים כלים לפיתוח חשיבה אסטרטגית, תהליכי קבלת החלטות במצבי משבר והובלת תהליכים בארגונים ובקהילות מגוונות. נוסף על כך, התוכנית מעניקה הכשרה ייחודית בהתמודדות עם קונפליקטים, במטרה לאפשר למנהיגים העתידיים להתמודד עם האתגרים הרבים של החברה הישראלית בדרך של דיאלוג, הבנה ופתרונות יצירתיים.'
  },
  {
    title: 'פיתוח והטמעת כלים לניהול ומנהיגות בגישה מערכתית',
    description: 'כדי להתמודד עם אתגרי ההווה והעתיד, התוכנית מתמקדת בפיתוח והטמעת כלים לניהול ומנהיגות בגישה מערכתית. המשתתפים לומדים לנתח מערכות מורכבות, להבין את הקשרים בין מרכיביהן, ולפתח אסטרטגיות ניהול המתחשבות במכלול הגורמים המשפיעים. הכשרה זו מאפשרת למנהיגים לפעול בצורה מושכלת ואפקטיבית בסביבות דינמיות ומשתנות. הבנת המורכבות החברתית וראייתה באופן מערכתי, מאפשר למשתתפים לזהות את הגורמים לקיטוב ולפתח פתרונות מותאמים. הכשרה זו מאפשרת למנהיגים לפעול לחיבור בין קבוצות שונות, לקדם דיאלוג בין מגזרים וליצור יוזמות המפחיתות מתחים ומקדמות סובלנות והכלה. הכלים הנרכשים בתכנית, מסייעים לפעול בצורה מושכלת ואפקטיבית בסביבות דינמיות ומשתנות.'
  },
  {
    title: 'העמקת ההבנה ופיתוח דרכי פעולה להתמודדות עם הפילוג בחברה הישראלית',
    description: 'החברה הישראלית ניצבת בפני קיטוב הולך וגובר, שההתמודדות עמו מחייבת כלים מעשיים של גישור, הידברות ויצירת שיח בונה. במסגרת התוכנית, המשתתפים נחשפים למגוון רחב של נקודות מבט ומעמיקים בהבנת המורכבות החברתית דרך סדנאות מעשיות בגישור, דיונים בהובלת מומחים והשתתפות במפגשים עם דמויות מפתח מכלל קצוות הקשת החברתית והאידיאולוגית. בנוסף, המשתתפים לוקחים חלק פעיל בפיתוח מיזמים חוצי מגזרים, שמטרתם להניע שינוי חברתי ולתרום ללכידות חברתית איתנה.'
  },
  {
    title: 'יצירת רשת קשרים ושיתופי פעולה מגוונים בין מנהיגים ממגזרים שונים',
    description: 'מנהיגות אפקטיבית מבוססת על שיתופי פעולה ורשתות קשרים שמסייעות להרחיב השפעה וליצור שינוי משמעותי. התוכנית יוצרת תשתית נטוורקינג פעילה, שבה המשתתפים זוכים להיכרות מעמיקה עם אנשים מובילים בתחומם, הן מהמגזר הציבורי והן מהמגזר העסקי והחברתי. באמצעות חיבורים בין המשתתפים לבין אנשי מפתח מכלל המגזרים, נרקמות מערכות יחסים ארוכות טווח, המאפשרות שיתופי פעולה משמעותיים. עם סיום התוכנית, הבוגרים מצטרפים לפורום פעיל של בוגרים, אשר מהווה פלטפורמה להמשך יצירת שיתופי פעולה והשפעה ארוכת טווח.'
  },
  {
    title: 'הנבטת מיזמים חברתיים המקדמים סובלנות והכלה',
    description: 'התוכנית לא מסתפקת בהקניית ידע בלבד, אלא מעודדת את המשתתפים להתנסות במנהיגות הלכה למעשה ולהפוך את הרעיונות למציאות. כחלק מהתהליך, המשתתפים מפתחים מיזמים חברתיים חדשניים שמטרתם לקדם סובלנות, הכלה וערבות הדדית. הם זוכים לליווי אישי בפיתוח היוזמות, להנגשת משאבים שיאפשרו לממש את רעיונותיהם, ולתמיכה צמודה ממנטורים מובילים מהעולם העסקי, החברתי והציבורי. פלטפורמה זו מאפשרת למשתתפים להפוך חזון למציאות וליצור שינוי משמעותי בחברה הישראלית.'
  }
];

const GoalCard = ({ title, description, index, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900 shadow-[0_8px_16px_-6px_rgba(59,130,246,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.5)] transition-all duration-300">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-800 dark:to-gray-900"></div>
        
        {/* Card content */}
        <div className="relative h-full w-full flex flex-col items-center justify-between p-5 z-10">
          {/* Title with decorative underline */}
          <div className="text-center mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full mx-auto"></div>
          </div>
          
          {/* Read button with improved styling */}
          <button 
            className="mt-auto text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 dark:from-blue-500 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 font-medium rounded-xl px-6 py-3 text-center transition-all duration-300 w-full flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_16px_-4px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
            onClick={() => onOpenModal(index)}
          >
            <span>לחץ לקריאה</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
        
        {/* Subtle decorative elements that don't obscure text */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 dark:text-blue-400 fill-current">
            <path d="M47.5,-51.2C59.1,-35.6,64.5,-17.8,64.1,-0.4C63.7,17,57.5,34,45.3,48.5C33.1,63,14.9,75,-3.9,78.9C-22.8,82.8,-45.5,78.7,-58.4,64.2C-71.3,49.7,-74.3,24.8,-71.5,3.2C-68.7,-18.5,-60.1,-37,-46.2,-52.6C-32.3,-68.2,-13.1,-80.9,2.5,-83.4C18.2,-85.9,36.3,-78.3,47.5,-63.7Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function OurProgramPage() {
  // State to track which goal is selected for the modal
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpenModal = (index) => {
    setSelectedGoalIndex(index);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 pt-36 min-h-[100vh] bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-yellow-200 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-200 dark:bg-green-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-5000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Program Introduction - New Section */}
        <div className="mb-20 relative overflow-hidden">
          {/* Special blue blob for this section - organic shape, no gray color, no backdrop filter */}
          <div 
            className="absolute" 
            style={{ 
              bottom: '-5%', 
              left: '15%', 
              width: '70%', 
              height: '50%',
              background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.35) 0%, rgba(37, 99, 235, 0.25) 40%, rgba(29, 78, 216, 0.15) 70%, transparent 100%)',
              borderRadius: '70% 30% 60% 40% / 60% 40% 70% 30%',
              filter: 'blur(40px)',
              boxShadow: '0 15px 30px -10px rgba(37, 99, 235, 0.2)',
              transform: 'rotate(-5deg)',
              zIndex: '0'
            }}
          ></div>
          
          <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">תוכנית דגן למנהיגות מגשרת</h1>
            
            <div className="max-w-4xl mx-auto text-right text-gray-800 dark:text-gray-200 leading-relaxed text-lg" dir="rtl">
              <p className="mb-6 text-center">
                החברה הישראלית מגוונת מאוד, אך גם שסועה, והקיטוב בין המגזרים השונים הולך ומעמיק בשנים האחרונות. אירועים דרמטיים הוכיחו כי למרות ההבדלים, יש לנו כוח משותף, ערבות הדדית ורצון כן לחיות כאן יחד. עם זאת, המצב החברתי מציב אתגרים משמעותיים ומחייב יכולת לגשר על פערים עמוקים. תוכנית דגן למנהיגות מגשרת מתמקדת בפיתוח מנהיגות שתגשר על הפערים הללו ותוביל לביסוס חברה טובה יותר במדינת ישראל. התוכנית מפגישה מנהיגים משפיעים מכלל המגזרים והקהילות ליצירת שיח משמעותי, חיבורים אישיים ושיתופי פעולה שמייצרים מסע אישי וחברתי. המשתתפים זוכים להיכרות מעמיקה עם תפיסות עולם שונות, לומדים כיצד לגשר על מחלוקות ומקבלים כלים להובלה מתוך דיאלוג, סובלנות ושיתופי פעולה. התוכנית משלבת סדנאות ייחודיות, הרצאות, מפגשים עם בכירים מהמגזר הציבורי, העסקי והחברתי, ימי שטח, סיורים ועוד, לצד ליווי אישי לפיתוח מיזמים חברתיים משותפים. התכנית מספקת כלים לגישור על הפערים, תמיכה וליווי למשתתפיה ומהווה פלטפורמה דינמית ומתמשכת להשפעה אמיתית על החברה הישראלית.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-600 dark:from-blue-500 dark:to-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src={'/images/all/all.jpeg'} 
                alt="מחזור ג' בעת סיור בעיריית ירושלים ואירוח של ראש עיריית ירושלים מר משה ליאון"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="mt-4 text-center text-gray-700 dark:text-gray-300 text-lg" dir="rtl">
              <p>{`מחזור ג' בעת סיור בעיריית ירושלים ואירוח של ראש עיריית ירושלים מר משה ליאון`}</p>
              <p className="text-gray-600 dark:text-gray-400">5 לספטמבר 2024</p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">מטרות התכנית</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          תכנית דגן למנהיגות מגשרת מכוונת להשגת מספר מטרות משמעותיות שמטרתן ליצור שינוי חברתי ארוך טווח
        </p>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-6" dir="rtl">
          {goals.map((goal, index) => (
            <GoalCard 
              key={index} 
              title={goal.title} 
              description={goal.description}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Modal for displaying goal details */}
      {selectedGoalIndex !== null && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={goals[selectedGoalIndex]?.title || ''}
        >
          <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 text-center" dir="rtl">
            {goals[selectedGoalIndex]?.description || ''}
          </div>
        </Modal>
      )}
    </section>
  );
} 