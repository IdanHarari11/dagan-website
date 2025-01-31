import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutProgram() {
  return (
    <section id="about-program" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            תוכנית דגן למנהיגות מגשרת
          </h2>
          <p className="text-xl text-gold-500">
            עמותת מאיר דגן
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              אהבת הארץ, אהבת האדם, העם והמדינה
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              תוכנית דגן למנהיגות מגשרת היא יוזמה ייחודית שמטרתה לפתח מנהיגים צעירים בעלי חזון ויכולת להוביל שינוי חברתי משמעותי.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              מנהיגות מגשרת
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              התוכנית מתמקדת בפיתוח כישורי מנהיגות, תקשורת בין-אישית, ויכולת לגשר בין עולמות שונים.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              רישיון לגעת, בין החיבורים, דרך אבות
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              התוכנית כוללת מגוון פעילויות חווייתיות שמטרתן לחזק את הקשרים בין המשתתפים וליצור חוויות משמעותיות.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              סיפורי הצלחה
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              משתתפי התוכנית לשעבר ממשיכים להוביל בתחומים שונים ולהשפיע על החברה הישראלית בדרכים מגוונות.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-900 text-white font-bold rounded-full shadow-lg hover:bg-gold-500 transition-colors"
          >
            הצטרפו לתוכנית
          </motion.button>
        </div>
      </div>
    </section>
  );
} 