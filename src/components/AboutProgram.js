import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
        תוכנית דגן למנהיגות מגשרת
      </motion.h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
        יוזמה ייחודית לטיפוח מנהיגים מכל קצוות החברה הישראלית, המסוגלים לגשר בין קהילות, להתעלות מעל מחלוקות ולהוביל שינוי חברתי משמעותי.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">האתגר החברתי</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            החברה הישראלית מגוונת אך שסועה. הקיטוב בין המגזרים הולך ומעמיק, ולכן דרושה יכולת לגשר על פערים עמוקים כדי לחיות יחד בהרמוניה.
          </p>
        </motion.div>
        
        <motion.div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">ייחודיות התוכנית</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            התוכנית מפגישה מנהיגים מכל המגזרים ליצירת שיח משמעותי, חיבורים אישיים ושיתופי פעולה המעודדים דיאלוג, סובלנות ושיתוף פעולה.
          </p>
        </motion.div>
      </div>
      
      <div className="w-full max-w-3xl mt-12">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center mb-6">תוכן התוכנית</h2>
        <motion.div className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          {[
            "סדנאות והרצאות",
            "ליווי אישי למיזמים חברתיים",
            "מפגשים עם בכירים", 
            "ימי שטח וסיורים", 
            "היכרות עם מומחים ודמויות מפתח",
          ].map((item, index) => (
            <motion.span key={index} className="bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full text-md font-medium shadow-sm"
              whileHover={{ scale: 1.1 }}>
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className="w-full max-w-3xl mt-12 p-8 bg-blue-50 dark:bg-gray-800 rounded-xl text-center shadow-lg"
        whileHover={{ scale: 1.02 }}>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">השפעה ארוכת טווח</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3">
          פלטפורמה דינמית ומתמשכת המספקת כלים לגישור על פערים ומובילה להשפעה אמיתית על החברה הישראלית.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DaganLeadership; 