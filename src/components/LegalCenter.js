"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function LegalCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("privacy");
  const dialogRef = useRef(null);

  // Create a stable function reference
  const openLegal = useCallback((tabName) => {
    console.log('openLegal called with:', tabName);
    setTab(tabName);
    setIsOpen(true);
  }, []);

  // Set up global function when component mounts
  useEffect(() => {
    // Set the function on window
    window.openLegal = openLegal;
    console.log('openLegal function set on window');
    
    // Also add a test to make sure it's working
    setTimeout(() => {
      if (window.openLegal) {
        console.log('✅ window.openLegal is available');
      } else {
        console.log('❌ window.openLegal is NOT available');
      }
    }, 1000);
    
    return () => {
      delete window.openLegal;
      console.log('openLegal function removed from window');
    };
  }, [openLegal]);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      dialogRef.current.showModal();
      console.log('Dialog opened');
    } else {
      dialogRef.current.close();
      console.log('Dialog closed');
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-4xl rounded-xl p-0 backdrop:bg-black/60"
      onCancel={(e) => {
        e.preventDefault();
        setIsOpen(false);
      }}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        const inside = e.clientX >= rect.left && e.clientX <= rect.right && 
                      e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (!inside) setIsOpen(false);
      }}
    >
      <div className="flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <button 
              type="button" 
              onClick={() => setTab("privacy")} 
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                tab === "privacy" 
                  ? "bg-blue-600 text-white" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              מדיניות פרטיות
            </button>
            <button 
              type="button" 
              onClick={() => setTab("terms")} 
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                tab === "terms" 
                  ? "bg-blue-600 text-white" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              תנאי שימוש
            </button>
          </div>
          <button 
            type="button" 
            onClick={() => setIsOpen(false)} 
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" 
            aria-label="סגור"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto text-sm leading-6 space-y-6">
          {tab === "privacy" ? (
            <div dir="rtl" className="space-y-6">
              <div dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY }} />
            </div>
          ) : (
            <div dir="rtl" className="space-y-6">
              <div dangerouslySetInnerHTML={{ __html: TERMS_OF_SERVICE }} />
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

// Updated Privacy Policy content
const PRIVACY_POLICY = `
<div class="space-y-6">
  <div class="text-center">
    <h1 class="text-2xl font-bold text-blue-600 mb-2">מדיניות פרטיות</h1>
    <p class="text-gray-600 dark:text-gray-400">עודכנה לאחרונה: אוגוסט 2025</p>
  </div>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">כללי</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      עמותת "תוכנית דגן" (להלן: "העמותה") מחויבת להגן על פרטיות המשתמשים באתר ובשירותיה. 
      מסמך זה מפרט כיצד אנו אוספים, שומרים, משתמשים ומגנים על המידע האישי שלך, 
      בהתאם לחוק הגנת הפרטיות, תשמ"א–1981 (כולל תיקון 13), תקנות הגנת הפרטיות (אבטחת מידע), 
      תקנות ה־GDPR האירופאיות ותקנות ה־CCPA בארה"ב, ככל שהן חלות.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">איסוף מידע</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      בעת יצירת קשר או שימוש בשירותינו, אנו עשויים לאסוף את המידע הבא:
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>שם מלא, כתובת דוא"ל, פרטי התקשרות נוספים.</li>
      <li>מידע עסקי, לימודי או מקצועי המסופק על ידך.</li>
      <li>מידע טכני ודיגיטלי לרבות כתובות IP, Cookies, נתוני גלישה ומיקום גיאוגרפי כללי.</li>
      <li>כל מידע נוסף שתבחר למסור ביודעין.</li>
    </ul>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      אין חובה חוקית למסור מידע, אך ייתכן שמסירתו תנאי לקבלת שירות.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">מטרות שימוש</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">המידע נאסף לצורך:</p>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>יצירת קשר ומתן מענה לפניות.</li>
      <li>ניהול חשבונות משתמשים ומתן שירותי העמותה.</li>
      <li>ניתוח ושיפור השירותים והתוכניות.</li>
      <li>שליחת עדכונים, דיוור ושיווק ישיר – בכפוף להסכמה.</li>
      <li>עמידה בהתחייבויות חוקיות ורגולטוריות.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">העברת מידע לצדדים שלישיים</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>לא נעביר מידע לצדדים שלישיים אלא באחת מהנסיבות הבאות:</li>
      <li>נדרשת על פי דין או צו שיפוטי.</li>
      <li>מסירת מידע לספקי שירות חיצוניים (כגון שירותי אחסון, מערכות CRM, שירותי דיוור), המחויבים בחובת סודיות ואבטחה.</li>
      <li>כמתך המפורשת.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">זכויותיך</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      בהתאם לחוק ולרגולציה החלה, עומדות לך הזכויות הבאות:
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>זכות עיון במידע שנאסף אודותיך.</li>
      <li>זכות תיקון פרטים שגויים או מיושנים.</li>
      <li>זכות למחיקה ("Right to be Forgotten") – בקשה למחוק את המידע אודותיך.</li>
      <li>זכות להתנגד לשימוש במידע לצורכי שיווק.</li>
      <li>זכות ניידות מידע (בכפוף ל־GDPR).</li>
    </ul>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      ניתן לממש זכויות אלה באמצעות פנייה לכתובת מייל 
      <a href="mailto:daganleadership@gmail.com" class="text-blue-600 hover:text-blue-800 underline">daganleadership@gmail.com</a>.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">אבטחת מידע</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      העמותה מפעילה מערכות אבטחה מתקדמות, לרבות הצפנת SSL, בקרת גישה והרשאות פנימיות. 
      עם זאת, אין ביכולתנו להבטיח הגנה מוחלטת מפני חדירות או שימוש בלתי מורשה.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">שמירת מידע</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      נשמור את המידע האישי רק כל עוד הוא דרוש לצורך השגת מטרות איסופו או כפי שנדרש לפי דין. 
      לאחר מכן יימחק או יעבור אנונימיזציה.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Cookies וטכנולוגיות מעקב</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      האתר משתמש בקובצי Cookies ובטכנולוגיות דומות לצורך הפעלה תקינה, שיפור חוויית המשתמש, 
      ניתוח שימוש ושיווק מותאם. המשתמש רשאי לנהל או לחסום שימוש זה באמצעות הגדרות הדפדפן 
      או מנגנון Cookie Banner באתר.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">קטינים</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      השירות מיועד לבני 18 ומעלה בלבד. במידה שנודע לנו כי נאסף מידע מקטין מתחת לגיל זה – 
      המידע יימחק מיידית.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">שינויים</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      העמותה רשאית לעדכן את מדיניות פרטיות זו מעת לעת. הודעה על שינוי מהותי תימסר באתר 
      ובאמצעים נוספים, לפי הצורך.
    </p>
  </section>
</div>
`;

// Updated Terms of Service content
const TERMS_OF_SERVICE = `
<div class="space-y-6">
  <div class="text-center">
    <h1 class="text-2xl font-bold text-blue-600 mb-2">תנאי שימוש</h1>
    <p class="text-gray-600 dark:text-gray-400">עודכנו לאחרונה: אוגוסט 2025</p>
  </div>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">הסכמה</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      השימוש באתר ובשירותי "תוכנית דגן" כפוף לתנאים המפורטים להלן ולמדיניות הפרטיות. 
      כל שימוש מהווה הסכמה מלאה לתנאים אלה.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">שימוש מותר</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>האתר והשירותים נועדו לשימוש אישי, חינוכי ולגיטימי בלבד.</li>
      <li>חל איסור להשתמש בשירותים לכל מטרה בלתי חוקית, פוגענית או העלולה לפגוע בצדדים שלישיים.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">קניין רוחני</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>כל זכויות היוצרים, סימני המסחר, התוכן, העיצובים, המידע והקוד – שייכים ל־"תוכנית דגן".</li>
      <li>אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתוכן ללא אישור מראש ובכתב.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">הגבלת אחריות</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>השירותים ניתנים "As-Is" ללא אחריות מכל סוג.</li>
      <li>העמותה אינה מתחייבת לזמינות רציפה, לדיוק המידע או להתאמה ספציפית לצורכי המשתמש.</li>
      <li>העמותה לא תהיה אחראית לנזקים ישירים, עקיפים, תוצאתיים או כלכליים שייגרמו משימוש באתר או מהסתמכות על המידע.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">קישורים חיצוניים</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      האתר עשוי לכלול קישורים לאתרים חיצוניים. "תוכנית דגן" אינה אחראית לתוכן או למדיניות של אתרים אלה.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">שיפוי</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      המשתמש מתחייב לשפות את "תוכנית דגן" בגין כל נזק, הפסד או הוצאה שייגרמו עקב הפרת תנאים אלה או שימוש בלתי חוקי בשירותים.
    </p>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">שינויים והפסקת שירות</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
      <li>העמותה רשאית לשנות או להפסיק את פעילות האתר והשירותים בכל עת, ללא הודעה מוקדמת.</li>
      <li>תנאים אלה עשויים להתעדכן מעת לעת, והשימוש המתמשך מהווה הסכמה לתנאים המעודכנים.</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">דין וסמכות שיפוט</h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      על תנאים אלה יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז תל אביב.
    </p>
  </section>
</div>
`;
