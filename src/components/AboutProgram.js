import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const DaganLeadership = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Hide this component on mobile when on the /our-program page
    const handleResize = () => {
      if (router.pathname === '/our-program' && window.innerWidth < 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router.pathname]);
  
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto p-10 bg-gray-50 dark:bg-gray-800 flex flex-col items-center text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      <motion.h1 
        className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        הסיפור שלנו
      </motion.h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
        יוזמה ייחודית לטיפוח מנהיגים מכל קצוות החברה הישראלית, המסוגלים לגשר בין קהילות, להתעלות מעל מחלוקות ולהוביל שינוי חברתי משמעותי.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            הבעיה
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
          החברה הישראלית מגוונת מאוד, אך גם שסועה והקיטוב בין המגזרים השונים הולך ומעמיק בשנים האחרונות.
בשנת 2023 הגיע הקיטוב לשיאים חדשים, אך לצד זאת, המלחמה הוכיחה כי החברה הישראלית איתנה, נכונה
להקרבה ומגלה ערבות הדדית. עם זאת, שימור האחדות הזו מציב אתגרים משמעותיים ומחייב יכולת לגשר על
פערים עמוקים.
          </p>
        </motion.div>
        
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">הפתרון</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
          תוכנית דגן למנהיגות מגשרת מתמקדת בפיתוח מנהיגות שתסייע לגשר על הפערים הללו ולהוביל לחברה מאוחדת
          ומכילה יותר. השלב הראשון בבניית הגשר הזה הוא יצירת היכרות ושיתופי פעולה בין מנהיגים מקרב המגזרים
השונים בחברה הישראלית, תוך חיזוק הפסיפס החברתי והלאומי של מדינת ישראל.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="w-full max-w-3xl mt-12 p-8 bg-blue-50 dark:bg-gray-800 rounded-xl text-center shadow-lg"
        whileHover={{ scale: 1.02 }}>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">מנהיגות מגשרת לחיזור האמון העסקי</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3">
        <Link className="text-blue-600 dark:text-blue-400 underline" href="https://www.edelman.com/trust/2023/trust-barometer" target="_blank">ברומטר האמון של חברת המחקר אדלמן</Link>, חושף קיטוב חברתי גובר אך מצביע על מגמה ברורה: ארגונים עסקיים
זוכים לאמון הציבור יותר ממוסדות הממשלה ומרשתות התקשורת
61% מהציבור רואה את הארגונים עסקיים כמוסד הציבורי האמין ביותר.
70% מהציבור מצפים מחברות להוביל שינוי חברתי ולסייע בצמצום פערים חברתיים.
74% מהציבור מאמינים שמנכ&quot;לים צריכים להוביל שינוי חברתי.
תכנית דגן מסייעת לארגונים לפתח מנהיגות אחראית המחזקת אמון, שיתוף פעולה והשפעה חיובית על הארגון
והחברה כולה.
        </p>
      </motion.div>
      
      <div className="w-full max-w-3xl mt-12">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center mb-6">ייחודיות התכנית</h2>
        <motion.div className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          {[
            "שיטת לימוד ייחודית הכוללת מפגשים חוויתיים, סדנאות מעשיות ומפגשים עם מובילי דעה",
            "תוכן המבוסס על ידע מעשי שפותח על ידי בכירים במוסד בשילוב כלי למידה חדשניים",
            "פיתוח מנהלים בעלי יכולת לגשר בין אנשים מרקעים ואידיאולוגיות שונות",
            "חניכה וליווי מקצועי על ידי מנטורים בכירים מתחומים שונים",
            "מיזמים חברתיים משותפים ליצירת שינוי והשפעה",
            "למידה אינטימית בקבוצות קטנות לבניית חיבור עמוק ומשמעותי",
            "מפגשים מרוכזים בני כמה ימים בסביבה מנותקת",
          ].map((item, index) => (
            <motion.span key={index} className="bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full text-md font-medium shadow-sm"
              whileHover={{ scale: 1.1 }}>
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DaganLeadership; 