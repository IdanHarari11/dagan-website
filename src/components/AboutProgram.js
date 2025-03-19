import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaUsers, FaLightbulb, FaHandshake, FaUserGraduate, FaHeart, FaCheck, FaCalendarCheck } from "react-icons/fa";

const DaganLeadership = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const cards = [
    {
      title: "שיטת לימוד ייחודית",
      description: "מפגשים חוויתיים, סדנאות מעשיות ומפגשים עם מובילי דעה",
      height: "row-span-1",
      color: "bg-blue-50/80 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
      icon: FaUsers
    },
    {
      title: "תוכן מעשי",
      description: "ידע מעשי שפותח על ידי בכירים במערכות בטחוניות בשילוב כלי למידה חדשניים",
      features: [
        "פיתוח כלים מעשיים",
        "שילוב טכנולוגיות חדשניות",
        "למידה מבוססת ניסיון"
      ],
      height: "row-span-2",
      color: "bg-blue-100/80 dark:bg-blue-900/30",
      iconColor: "text-blue-500",
      icon: FaLightbulb
    },
    {
      title: "פיתוח מנהיגות",
      description: "פיתוח מנהלים בעלי יכולת לגשר בין אנשים מרקעים ואידיאולוגיות שונות",
      height: "row-span-1",
      color: "bg-blue-50/80 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
      icon: FaHandshake
    },
    {
      title: "חניכה וליווי",
      description: "חניכה וליווי מקצועי על ידי מנטורים בכירים מתחומים שונים",
      features: [
        "ליווי אישי",
        "משוב מתמיד",
        "הכוונה מקצועית"
      ],
      height: "row-span-2",
      color: "bg-blue-100/80 dark:bg-blue-900/30",
      iconColor: "text-blue-500",
      icon: FaUserGraduate
    },
    {
      title: "מיזמים חברתיים",
      description: "מיזמים חברתיים משותפים ליצירת שינוי והשפעה",
      height: "row-span-1",
      color: "bg-blue-50/80 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
      icon: FaHeart
    },
    {
      title: "למידה אינטימית",
      description: "למידה בקבוצות קטנות לבניית חיבור עמוק ומשמעותי",
      height: "row-span-1",
      color: "bg-blue-50/80 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
      icon: FaUsers
    },
    {
      title: "מפגשים מרוכזים",
      description: "מפגשים מרוכזים בני כמה ימים בסביבה מנותקת ללמידה מעמיקה",
      height: "row-span-1",
      color: "bg-blue-100/80 dark:bg-blue-900/30",
      iconColor: "text-blue-500",
      icon: FaCalendarCheck
    }
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
        className="w-full max-w-3xl mt-12 p-8 bg-blue-700 dark:bg-gray-900 rounded-xl text-center shadow-lg"
        whileHover={{ scale: 1.02 }}>
        <h2 className="text-2xl font-semibold text-white dark:text-blue-300">מנהיגות מגשרת לחיזוק האמון העסקי</h2>
        <p className="text-gray-100 dark:text-gray-200 mt-3">
        <Link className="text-blue-200 dark:text-blue-300 underline" href="https://www.edelman.com/trust/2023/trust-barometer" target="_blank">ברומטר האמון של חברת המחקר אדלמן</Link>, חושף קיטוב חברתי גובר אך מצביע על מגמה ברורה: ארגונים עסקיים
זוכים לאמון הציבור יותר ממוסדות הממשלה ומרשתות התקשורת
61% מהציבור רואה את הארגונים עסקיים כמוסד הציבורי האמין ביותר.
70% מהציבור מצפים מחברות להוביל שינוי חברתי ולסייע בצמצום פערים חברתיים.
74% מהציבור מאמינים שמנכ&quot;לים צריכים להוביל שינוי חברתי.
תכנית דגן מסייעת לארגונים לפתח מנהיגות אחראית המחזקת אמון, שיתוף פעולה והשפעה חיובית על הארגון
והחברה כולה.
        </p>
      </motion.div>
      
      <div className="w-full max-w-6xl mt-16 relative overflow-hidden">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-[5px_5px_15px_rgba(59,130,246,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(45,45,45,0.8)] inline-flex items-center justify-center">
              <div className="bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full p-2 shadow-[inset_2px_2px_5px_rgba(59,130,246,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(45,45,45,0.8)]">
                <BsStars className="text-blue-500 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 tracking-tight">
            ייחודיות <span className="text-blue-600 dark:text-blue-400">התכנית</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 pr-4">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "10px 10px 20px rgba(59,130,246,0.1), -10px -10px 20px rgba(255,255,255,0.8)",
                transition: { duration: 0.3 }
              }}
              className={`${item.height} ${item.color} backdrop-blur-sm rounded-2xl p-5 
                         shadow-[8px_8px_16px_rgba(59,130,246,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(45,45,45,0.8)] transition-all duration-300
                         flex flex-col ${item.height === 'row-span-1' ? 'justify-start' : 'justify-between'}`}
            >
              <div className={`flex flex-col ${item.height === 'row-span-1' ? 'h-auto' : 'h-full'}`}>
                <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center shadow-[inset_3px_3px_6px_rgba(59,130,246,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(45,45,45,0.8)] mb-4">
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className={`text-sm text-gray-600 dark:text-gray-300 ${item.features ? 'mb-2' : 'mb-auto'}`}>
                  {item.description}
                </p>
                {item.features && (
                  <ul className="space-y-2 mt-auto">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className={`${item.iconColor} ml-2 flex-shrink-0`}>
                          <FaCheck className="w-3 h-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DaganLeadership; 