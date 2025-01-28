'use client';

export default function Values() {
  const values = [
    {
      iconClass: "fas fa-handshake text-4xl",
      title: 'שיתוף פעולה',
      description: 'יצירת גשרים בין קהילות וקבוצות שונות בחברה הישראלית'
    },
    {
      iconClass: "fas fa-ear-listen text-4xl",
      title: 'הקשבה',
      description: 'פיתוח יכולת הקשבה עמוקה והבנת נקודת המבט של האחר'
    },
    {
      iconClass: "fas fa-users text-4xl",
      title: 'מנהיגות',
      description: 'טיפוח מנהיגים שיודעים להוביל תוך התחשבות בכל הקולות'
    },
    {
      iconClass: "fas fa-heart text-4xl",
      title: 'אמפתיה',
      description: 'פיתוח רגישות והבנה לצרכים של אחרים'
    },
    {
      iconClass: "fas fa-scale-balanced text-4xl",
      title: 'איזון',
      description: 'מציאת דרך האמצע והגישור בין עמדות שונות'
    },
    {
      iconClass: "fas fa-lightbulb text-4xl",
      title: 'חדשנות',
      description: 'חשיבה יצירתית בפתרון קונפליקטים חברתיים'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הערכים שלנו
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            העקרונות המנחים אותנו בדרך למנהיגות מגשרת
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <i className={value.iconClass}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 