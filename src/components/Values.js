'use client';
import { useState, useEffect } from 'react';

export default function Values() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const values = [
    {
      iconClass: "fas fa-handshake text-2xl md:text-3xl",
      title: 'שיתוף פעולה',
      description: 'יצירת גשרים בין קהילות וקבוצות שונות בחברה הישראלית',
      color: 'from-blue-400/10 to-purple-400/10'
    },
    {
      iconClass: "fas fa-ear-listen text-2xl md:text-3xl",
      title: 'הקשבה',
      description: 'פיתוח יכולת הקשבה עמוקה והבנת נקודת המבט של האחר',
      color: 'from-green-400/10 to-teal-400/10'
    },
    {
      iconClass: "fas fa-users text-2xl md:text-3xl",
      title: 'מנהיגות',
      description: 'טיפוח מנהיגים שיודעים להוביל תוך התחשבות בכל הקולות',
      color: 'from-orange-400/10 to-red-400/10'
    },
    {
      iconClass: "fas fa-heart text-2xl md:text-3xl",
      title: 'אמפתיה',
      description: 'פיתוח רגישות והבנה לצרכים של אחרים',
      color: 'from-pink-400/10 to-rose-400/10'
    },
    {
      iconClass: "fas fa-scale-balanced text-2xl md:text-3xl",
      title: 'איזון',
      description: 'מציאת דרך האמצע והגישור בין עמדות שונות',
      color: 'from-indigo-400/10 to-blue-400/10'
    },
    {
      iconClass: "fas fa-lightbulb text-2xl md:text-3xl",
      title: 'חדשנות',
      description: 'חשיבה יצירתית בפתרון קונפליקטים חברתיים',
      color: 'from-yellow-400/10 to-amber-400/10'
    },
    {
      iconClass: "fas fa-bridge text-2xl md:text-3xl",
      title: 'גישור',
      description: 'בניית גשרים בין דעות מנוגדות ויצירת הבנה הדדית',
      color: 'from-purple-400/10 to-violet-400/10'
    },
    {
      iconClass: "fas fa-dove text-2xl md:text-3xl",
      title: 'שלום',
      description: 'קידום דו-שיח ושלום בין כל חלקי החברה',
      color: 'from-cyan-400/10 to-sky-400/10'
    },
    {
      iconClass: "fas fa-hands-holding-circle text-2xl md:text-3xl",
      title: 'אחדות',
      description: 'חיזוק תחושת האחדות והשייכות בחברה הישראלית',
      color: 'from-emerald-400/10 to-green-400/10'
    },
    {
      iconClass: "fas fa-compass text-2xl md:text-3xl",
      title: 'כיוון',
      description: 'הובלת דרך ברורה לעתיד טוב יותר ומאוחד',
      color: 'from-fuchsia-400/10 to-pink-400/10'
    }
  ];

  const displayedValues = isMobile ? values.slice(0, 6) : values;

  return (
    <section id="values" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הערכים שלנו
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            העקרונות המנחים אותנו בדרך למנהיגות מגשרת
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayedValues.map((value, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${value.color} backdrop-blur-xl bg-white/5 dark:bg-gray-900/5 rounded-lg p-4 md:p-6 shadow-lg transform hover:scale-105 hover:-rotate-1 hover:shadow-xl transition-all duration-300 ease-out border border-white/10 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-700/40 cursor-pointer`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-gray-800 dark:text-gray-100 mb-2 transform group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300">
                <i className={value.iconClass}></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                {value.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 leading-tight opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 