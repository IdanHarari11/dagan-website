import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaUsers, FaLightbulb, FaHandshake, FaUserGraduate, FaHeart, FaCheck, FaCalendarCheck, FaUsersCog, FaRocket, FaBullseye } from "react-icons/fa";

const DaganLeadership = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const cards = [
    {
      icon: FaUsersCog,
      title: "מנהיגות קבוצתית",
      description: "פיתוח הקבוצה דרך הכרות מעמיקה, השראה, והענקת כלים למנהיגות אישית",
      color: "from-blue-500/20 to-purple-500/20"
},
    {
      icon: FaRocket,
      title: "צמיחה קבוצתית",
      description: "חיזוק הקבוצה באמצעות הכרות מעמיקה, השראה, וכלים למנהיגות אישית",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FaHandshake,
      title: "חיזוק מנהיגות",
      description: "פיתוח הקבוצה דרך הכרות מעמיקה, השראה, והענקת כלים למנהיגות אישית",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      title: "חניכה וליווי",
      description: "חניכה וליווי מקצועי על ידי מנטורים בכירים מתחומים שונים",
      color: "from-red-500/20 to-orange-500/20",
      icon: FaUserGraduate
    },
    {
      icon: FaUserGraduate,
      title: "מיזמים חברתיים",
      description: "העברה לפעולה דרך מיזמים צוותיים ופעילות חברתית משותפת",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: FaBullseye,
      title: "יישום",
      description: "הובלת פרויקטים ויוזמות לשינוי חברתי",
      color: "from-orange-500/20 to-yellow-500/20"
    },
  ];

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
        className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 text-center text-right"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        הסיפור שלנו
      </motion.h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8 text-center">
        יוזמה ייחודית לטיפוח מנהיגים מכל קצוות החברה הישראלית, המסוגלים לגשר בין קהילות, להתעלות מעל מחלוקות ולהוביל שינוי חברתי משמעותי.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-right"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            האתגר
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
          החברה הישראלית מגוונת מאוד, אך גם שסועה והקיטוב בין המגזרים השונים הולך ומעמיק בשנים האחרונות.
בשנת 2023 הגיע הקיטוב לשיאים חדשים, אך לצד זאת, המלחמה הוכיחה כי החברה הישראלית איתנה, נכונה
להקרבה ומגלה ערבות הדדית. עם זאת, שימור האחדות הזו מציב אתגרים משמעותיים ומחייב יכולת לגשר על
פערים עמוקים.
          </p>
        </motion.div>
        
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-right"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">התכנית לפעולה</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
          תכנית דגן למנהיגות מגשרת מתמקדת בפיתוח מנהיגות שתסייע לגשר על הפערים הללו ולהוביל לחברה מאוחדת
          ומכילה יותר. השלב הראשון בבניית הגשר הזה הוא יצירת היכרות ושיתופי פעולה בין מנהיגים מקרב המגזרים
השונים בחברה הישראלית, תוך חיזוק הפסיפס החברתי והלאומי של מדינת ישראל.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DaganLeadership; 