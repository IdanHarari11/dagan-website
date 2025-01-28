'use client';
import { motion } from 'framer-motion';
import { BridgeIcon, HandshakeIcon, EarIcon } from './Icons'; // We'll create these icons

export default function Values() {
  const values = [
    {
      title: 'גשר בין עולמות',
      icon: <BridgeIcon />,
      description: 'יצירת חיבורים משמעותיים בין קהילות שונות'
    },
    {
      title: 'הובלה חברתית',
      icon: <HandshakeIcon />,
      description: 'פיתוח מנהיגות המובילה לשינוי חברתי חיובי'
    },
    {
      title: 'סובלנות והקשבה',
      icon: <EarIcon />,
      description: 'טיפוח יכולת ההקשבה וקבלת האחר'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        חזון וערכים שמובילים אותנו
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 