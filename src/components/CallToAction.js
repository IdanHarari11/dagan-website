'use client';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          הצטרפו אלינו ובואו להיות חלק מהשינוי
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg transform hover:scale-105 transition duration-200">
            הגשת מועמדות
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transform hover:scale-105 transition duration-200">
            יצירת קשר
          </button>
        </motion.div>
      </div>
    </section>
  );
} 