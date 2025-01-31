'use client';
import { motion } from 'framer-motion';

export default function AdmissionCriteriaSection() {
  const criteria = [
    {
      icon: "fas fa-user-tie",
      title: "יכולות מנהיגותיות וניהוליות מוכחות",
      description: "",
    },
    {
      icon: "fas fa-comments",
      title: "תקשורת ויכולות בינאישיות גבוהות",
      description: "",
    },
    {
      icon: "fas fa-book-open",
      title: "פתיחות ללמידה",
      description: "",
    },
    {
      icon: "fas fa-brain",
      title: "יכולות ומיומנויות חשיבה גבוהות",
      description: "",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "עניין אמיתי במעורבות חברתית",
      description: "",
    },
    {
      icon: "fas fa-bullseye",
      title: "מוטיבציה להשתתפות בתכנית, לתרום, להשפיע",
      description: "",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            קריטריונים לקבלה
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            הבינו את הדרישות להצטרפות לתוכנית שלנו.
          </p>
        </div>

        <div className="space-y-8">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4 md:space-x-6 lg:space-x-8"
            >
              <div className="flex-none w-12 text-3xl md:text-4xl text-blue-500 dark:text-blue-400">
                <i className={criterion.icon}></i>
              </div>
              <div className="flex-1 pr-5">
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                  {criterion.title}
                </h3>
                {criterion.description && (
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                    {criterion.description}
                  </p>
                )}
              </div>
              <div className="flex-none w-12 text-3xl md:text-4xl text-blue-500 dark:text-blue-400">
                <i className="fas fa-check"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
