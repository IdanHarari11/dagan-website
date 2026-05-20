'use client';

import Link from 'next/link';

export default function DonationsPage() {
  return (
    <section className="py-20 pt-32 md:pt-36 lg:pt-40 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 pt-2 md:pt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-white">
          הצטרפו לקהילת מנהיגים ומנהיגות הפועלים לחיזוק אמון, שותפויות והשפעה בחברה הישראלית
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          תרומתכם מסייעת בפיתוח מנהיגות ערכית הפועלת בתוך מציאות מורכבת, בונה חיבורים ומקדמת אחריות משותפת בחברה הישראלית.
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
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-4">
              בחרו את גובה התרומה והשפיעו עכשיו
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div> */}

          {/* Online Donation - JGive */}
          <div className="mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-white flex-1">
                  תרומה מקוונת
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-globe text-white text-2xl"></i>
                </div>
              </div>
              <div className="space-y-4 text-center bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  תרמו באופן מאובטח ונוח דרך פלטפורמת JGive. התרומה מוכרת לצרכי מס.
                </p>
                <a
                  href="https://www.jgive.com/new/he/ils/charity-organizations/15153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  תרומה מקוונת ב-JGive
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-8 text-center">
            <p className="text-xl font-bold text-blue-800">
              תרומתכם מסייעת בטיפוח מנהיגים ומנהיגות שמחברים בין קהילות ויוצרים שינוי אמיתי בחברה הישראלית
            </p>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-400 text-sm mb-8">
            אישור לתרומה יישלח באימייל. התרומה מוכרת לצורכי מס לפי סעיף 46א
          </div>

          {/* Bottom CTA — entire banner links to contact form on home page */}
          <Link
            href="/#contact"
            className="block relative bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-center cursor-pointer transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <h3 className="text-2xl font-bold text-white">
              רוצים לתרום בדרך אחרת או להפוך לשותפים קבועים? נשמח לדבר.
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
} 