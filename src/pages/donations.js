export default function DonationsPage() {
  return (
    <section className="py-20 pt-28 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-blue-900 dark:text-white">
            יחד נוכל לייצר מנהיגות מגשרת
          </h1>
          <p className="text-xl text-blue-700 dark:text-gray-300 mb-4">
            הודות לתרומתך הנדיבה נוכל לצמצם יחד את השסעים בחברה הישראלית
          </p>
          <p className="text-lg text-blue-600 dark:text-gray-400">
            העמותה נמצאת בהליכי קבלת טופס 46 א'
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-blue-900 dark:text-white">
            לרשותכם שלוש דרכים לתרומה
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* תרומה עם טופס 46 א' */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white text-center">
                  לתרומה עם טופס 46 א'
                </h3>
              </div>
              <p className="text-blue-700 dark:text-gray-300 mb-6 text-center">
                העברה בנקאית לעמותת יד בן גוריון - עבור תוכנית דגן למנהיגות מגשרת
              </p>
              <div className="space-y-3 text-right bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-gray-200">שם חשבון: עמותת יד דוד בן-גוריון (ע״ר)</p>
                <p className="text-blue-800 dark:text-gray-200">בנק: בנק הפועלים</p>
                <p className="text-blue-800 dark:text-gray-200">מספר סניף: 170</p>
                <p className="text-blue-800 dark:text-gray-200">מספר חשבון: 381876</p>
              </div>
            </div>

            {/* תרומה ללא טופס 46 א' */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white text-center">
                  לתרומה ללא טופס 46 א'
                </h3>
              </div>
              <p className="text-blue-700 dark:text-gray-300 mb-6 text-center">
                העברה בנקאית ישירות לחשבון הבנק של העמותה
              </p>
              <div className="space-y-3 text-right bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-gray-200">שם חשבון: העמותה ע"ש האלוף מאיר דגן ז"ל ראש המוסד לשעבר ע"ר</p>
                <p className="text-blue-800 dark:text-gray-200">בנק: בנק לאומי לישראל</p>
                <p className="text-blue-800 dark:text-gray-200">מספר סניף: 828</p>
                <p className="text-blue-800 dark:text-gray-200">מספר חשבון: 294500/20</p>
              </div>
            </div>

            {/* תרומה טלפונית */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white text-center">
                  לתרומה טלפונית
                </h3>
              </div>
              <p className="text-blue-700 dark:text-gray-300 mb-6 text-center">
                ניתן לפנות ישירות ליו"ר העמותה מר שמעון חפץ
              </p>
              <div className="space-y-3 text-right bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-gray-200">טלפון: 050-5331290</p>
                <p className="text-blue-800 dark:text-gray-200">מייל: shimonhef@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 