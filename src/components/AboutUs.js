import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-10 pb-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
            על העמותה
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            העמותה, שהוקמה בדצמבר 2020, מנציחה את מורשתו וערכיו של מאיר דגן ז&#34;ל – אהבת הארץ, האדם, העם והמדינה.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            מאיר דגן, אלוף בצה&#34;ל וראש המוסד בין השנים 2002-2011, זכה בעיטור העוז והוביל פעילויות מבצעיות משמעותיות בצה&#34;ל ובמוסד.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            מאיר דגן, היה דמות מעוררת השראה, מנהיג אסטרטגי ואדם שפעל מתוך דאגה עמוקה לחוסנה ולעתידה של מדינת ישראל.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            העמותה ממשיכה את דרכו ופועלת לטיפוח מנהיגות מגשרת ומחברת, המחזקת את האחדות, הערבות ההדדית ושיתוף הפעולה בין קהילות ומגזרים שונים, למען חברה ישראלית איתנה ומלוכדת יותר.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 