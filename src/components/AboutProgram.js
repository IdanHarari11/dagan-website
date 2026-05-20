import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaUsers, FaLightbulb, FaHandshake, FaUserGraduate, FaHeart, FaCheck, FaCalendarCheck, FaUsersCog, FaRocket, FaBullseye, FaScroll } from "react-icons/fa";

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
      className="max-w-5xl mx-auto px-4 pt-8 pb-10 md:pt-10 md:pb-12 bg-gray-50 dark:bg-gray-800 flex flex-col items-center text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5 shadow-[5px_5px_15px_rgba(59,130,246,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(45,45,45,0.8)] inline-flex items-center justify-center">
          <div className="bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full p-2 shadow-[inset_2px_2px_5px_rgba(59,130,246,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(45,45,45,0.8)]">
            <FaScroll className="text-blue-500 text-2xl" aria-hidden />
          </div>
        </div>
      </div>

      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-3 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        הסיפור שלנו
      </motion.h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-6 leading-relaxed">
        תכנית ייחודית לפיתוח מנהיגות ערכית הפועלת במציאות מורכבת, בונה אמון ומקדמת שיתופי פעולה בחברה הישראלית.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-right"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            האתגר
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            החברה הישראלית מתמודדת עם מציאות מורכבת ומתמשכת של קיטוב, חוסר אמון ואתגרים מערכתיים. מציאות זו מחייבת מנהיגות ערכית, בעלת אחריות משותפת, המסוגלת לפעול בתוך מחלוקות, לבנות אמון ולהוביל שיתופי פעולה משמעותיים.
          </p>
        </motion.div>
        
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-right"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">התכנית לפעולה</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            תכנית דגן למנהיגות מפגישה מנהלים ומנהלות בעמדות השפעה מכלל חלקי החברה הישראלית, למסע אישי וקבוצתי של למידה, חשיפה והתנסות. באמצעות מפגשים משמעותיים, סיורים, למידת עמיתים ופיתוח כלים למנהיגות מגשרת, התכנית מחזקת את היכולת להוביל שינוי במציאות מורכבת.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DaganLeadership; 