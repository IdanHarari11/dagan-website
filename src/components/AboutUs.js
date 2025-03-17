import { motion } from 'framer-motion';
import { FaMedal, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { RiMindMap, RiUserStarFill } from 'react-icons/ri';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  
  const staggerContainer = {
    animate: { 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <section className="py-16 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
            על העמותה
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            העמותה, שהוקמה בדצמבר 2020, מנציחה את מורשתו וערכיו של מאיר דגן ז&#34;ל – אהבת הארץ, האדם, העם והמדינה.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <FaMedal className="text-5xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">מורשת מאיר דגן</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              מאיר דגן, אלוף בצה&#34;ל וראש המוסד בין השנים 2002-2011, זכה בעיטור העוז והוביל פעילויות מבצעיות משמעותיות בצה&#34;ל ובמוסד.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <RiUserStarFill className="text-5xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">דמות מעוררת השראה</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              מאיר דגן, היה דמות מעוררת השראה, מנהיג אסטרטגי ואדם שפעל מתוך דאגה עמוקה לחוסנה ולעתידה של מדינת ישראל.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1"
          >
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-5xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">המשך דרכו</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              העמותה ממשיכה את דרכו ופועלת לטיפוח מנהיגות מגשרת ומחברת, המחזקת את האחדות, הערבות ההדדית ושיתוף הפעולה בין קהילות ומגזרים שונים.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <FaLightbulb className="text-5xl text-white opacity-80" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center">החזון שלנו</h3>
          <p className="text-lg text-center leading-relaxed">
          תכנית דגן למנהיגות מגשרת שואפת לעצב דור חדש של מנהיגים ומנהיגות, המחויבים לגשר על פערים בחברה הישראלית וליצור תרבות של סובלנות, הכלה והקשבה
          </p>
        </motion.div>
      </div>
      
      {/* Enhanced blue glow effect that extends downward */}
      <div className="absolute left-0 w-full bottom-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div 
          className="absolute bottom-0 left-0 right-0 w-full max-w-6xl mx-auto h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"
          style={{ filter: 'blur(60px)', transform: 'translateY(30%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/4 w-1/2 h-40 rounded-full bg-blue-400 opacity-20 blur-3xl"
          style={{ filter: 'blur(40px)', transform: 'translateY(50%)' }}
        ></div>
      </div>
    </section>
  );
};

export default AboutUs; 