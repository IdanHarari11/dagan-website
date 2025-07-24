'use client';

export default function DonationsPage() {
  // Handle contact button click
  const handleContactClick = () => {
    // Initiate phone call to fundraising team
    window.open('tel:+972542402324', '_self');
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
    <section className="py-20 pt-28 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-white">
            הצטרפו אלינו בבניית מנהיגות מגשרת וקשובה בישראל
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            התרומה שלכם מאפשרת לנו לטפח מנהיגים ומנהיגות המחויבים לפעול יחד למען חברה  ישראלית מלוכדת, סובלנית וחזקה
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              כל התרומות לעמותת דגן מוכרות לצרכי מס על פי&nbsp;
              <a href="/files/אישור 46.pdf" className="underline" target="_blank" rel="noopener noreferrer">סעיף 46</a>
              &nbsp;לפקודת מס הכנסה
            </p>
          </div>
        </div>

        {/* Main Donation Section */}
        <div className="max-w-4xl mx-auto">
          {/* Call to Action */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-4">
              בחרו את גובה התרומה והשפיעו עכשיו
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Donation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bank Transfer */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-white flex-1">
                  העברה בנקאית
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-university text-white text-2xl"></i>
                </div>
              </div>
              <div className="space-y-4 text-right bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <div className="border-b border-blue-200 dark:border-blue-700 pb-2">
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">שם חשבון</p>
                  <p className="text-blue-800 dark:text-white font-semibold">העמותה ע"ש האלוף מאיר דגן ז"ל ראש המוסד לשעבר ע"ר</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">בנק</p>
                    <p className="text-blue-800 dark:text-white font-semibold">בנק לאומי לישראל</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">מספר סניף</p>
                    <p className="text-blue-800 dark:text-white font-semibold">828</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">מספר חשבון</p>
                  <p className="text-2xl text-blue-600 dark:text-blue-400 font-bold">294500/20</p>
                </div>
              </div>
            </div>

            {/* Direct Donation */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-white flex-1">
                  תרומה ישירה
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user-friends text-white text-2xl"></i>
                </div>
              </div>
              <div className="space-y-4 text-center bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  ניתן ליצור קשר עם נציג לקבלת פרטים נוספים על אפשרויות התרומה.
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  מעבר לטופס יצירת קשר
                </a>
              </div>
            </div>
          </div>
          
          {/* Online Donation - Not Active Yet */}
          <div className="mb-8">
            {/* This box represents the online donation option, currently inactive */}
            <div className="bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl shadow-xl border-2 border-dashed border-blue-300 dark:border-blue-700 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-white">
                  תרומה מקוונת
                </h3>
              </div>
              <p className="text-lg text-blue-700 dark:text-blue-300 font-semibold mb-2">
                אפשרות זו תפתח בקרוב!
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">עדיין לא פעיל</span>
            </div>
          </div>

          <div className="mt-12 mb-8 text-center">
            <p className="text-xl font-bold">
              <span className="text-blue-800">תרומתכם מסייעת בטיפוח מנהיגים ומנהיגות </span>{" "}
              <span className="text-[#F3C205]">שמחברים בין קהילות </span>{" "}
              <span className="text-blue-600">ויוצרים שינוי אמיתי בחברה הישראלית</span>
            </p>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-400 text-sm mb-8">
            אישור לתרומה יישלח באימייל. התרומה מוכרת לצורכי מס לפי סעיף 46א
          </div>

          {/* Bottom CTA Section */}
          <div className="relative">
            {/* Neon yellow blob shadow */}
            <div className="absolute -inset-4 bg-[#F3C205] rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-2 bg-[#F3C205] rounded-2xl opacity-20 blur-xl"></div>
            
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                רוצים לתרום בדרך אחרת או להפוך לשותפים קבועים? נשמח לדבר.
              </h3>
              <button 
                onClick={handleContactClick}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                צור קשר עם צוות גיוס המשאבים
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 