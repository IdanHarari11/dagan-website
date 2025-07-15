'use client';

export default function DonationsPage() {
  // Handle contact button click
  const handleContactClick = () => {
    const subject = 'פנייה לצוות גיוס המשאבים - עמותת דגן';
    const body = `שלום,

אני מעוניין/ת ליצור קשר עם צוות גיוס המשאבים בנושא:
- תרומה בדרך אחרת
- הפיכה לשותף/ה קבוע/ה
- מידע נוסף על אפשרויות תרומה

אשמח לקבל חזרה.

תודה,`;

    const mailtoUrl = `mailto:daganleadership@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  // Handle phone click
  const handlePhoneClick = () => {
    window.open('tel:+972505331290', '_self');
  };

  // Handle email click
  const handleEmailClick = () => {
    window.open('mailto:shimonhef@gmail.com', '_blank');
  };

  return (
    <section className="py-20 pt-28 bg-gradient-to-b from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 dark:text-white">
            הצטרפו אלינו למסע להובלת שינוי חברתי למען חברה ישראלית טובה יותר
          </h1>
          <p className="text-xl text-blue-700 dark:text-gray-300 mb-8">
            הודות לתרומתך הנדיבה נוכל לצמצם יחד את השסעים בחברה הישראלית
          </p>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700">
            <p className="text-lg font-semibold text-orange-800 dark:text-orange-200">
              כל התרומות לעמותת דגן מוכרות לצרכי מס על פי סעיף 46 לפקודת מס הכנסה
            </p>
          </div>
        </div>

        {/* Main Donation Section */}
        <div className="max-w-4xl mx-auto">
          {/* Call to Action */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
              בחרו את גובה התרומה והשפיעו עכשיו
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Donation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bank Transfer */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 dark:border-orange-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white">
                  העברה בנקאית
                </h3>
              </div>
              <div className="space-y-4 text-right bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <div className="border-b border-orange-200 dark:border-orange-700 pb-2">
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">שם חשבון</p>
                  <p className="text-blue-900 dark:text-white font-semibold">העמותה ע"ש האלוף מאיר דגן ז"ל ראש המוסד לשעבר ע"ר</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">בנק</p>
                    <p className="text-blue-900 dark:text-white font-semibold">בנק לאומי לישראל</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">מספר סניף</p>
                    <p className="text-blue-900 dark:text-white font-semibold">828</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">מספר חשבון</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 font-bold">294500/20</p>
                </div>
              </div>
            </div>

            {/* Phone Donation */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 dark:border-orange-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white">
                  תרומה טלפונית
                </h3>
              </div>
              <div className="space-y-4 text-right bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <p className="text-blue-700 dark:text-gray-300 mb-4">
                  ניתן לפנות ישירות ליו"ר העמותה מר שמעון חפץ
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-end">
                    <div className="text-left">
                      <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">טלפון</p>
                      <button 
                        onClick={handlePhoneClick}
                        className="text-xl text-orange-600 dark:text-orange-400 font-bold hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 cursor-pointer"
                      >
                        050-5331290
                      </button>
                    </div>
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-left">
                      <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">מייל</p>
                      <button 
                        onClick={handleEmailClick}
                        className="text-lg text-blue-900 dark:text-white font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                      >
                        shimonhef@gmail.com
                      </button>
                    </div>
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              רוצים לתרום בדרך אחרת או להפוך לשותפים קבועים? נשמח לדבר.
            </h3>
            <button 
              onClick={handleContactClick}
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              צור קשר עם צוות גיוס המשאבים
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 