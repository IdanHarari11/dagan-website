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
      className="w-full max-w-3xl rounded-xl p-0 backdrop:bg-black/60"
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
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex gap-2">
            <button 
              type="button" 
              onClick={() => setTab("privacy")} 
              className={`px-3 py-1 text-sm rounded ${tab === "privacy" ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              מדיניות פרטיות
            </button>
            <button 
              type="button" 
              onClick={() => setTab("terms")} 
              className={`px-3 py-1 text-sm rounded ${tab === "terms" ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              תנאי שימוש
            </button>
          </div>
          <button 
            type="button" 
            onClick={() => setIsOpen(false)} 
            className="px-2 py-1 text-sm hover:bg-white/10 rounded" 
            aria-label="סגור"
          >
            ✕
          </button>
        </div>

        <div className="p-4 max-h-[70vh] overflow-y-auto text-sm leading-6 space-y-6">
          {tab === "privacy" ? (
            <>
              <div dir="rtl" className="space-y-2" dangerouslySetInnerHTML={{ __html: PRIVACY_HE }} />
              <hr className="border-white/10" />
              <div dir="ltr" className="space-y-2" dangerouslySetInnerHTML={{ __html: PRIVACY_EN }} />
            </>
          ) : (
            <>
              <div dir="rtl" className="space-y-2" dangerouslySetInnerHTML={{ __html: TERMS_HE }} />
              <hr className="border-white/10" />
              <div dir="ltr" className="space-y-2" dangerouslySetInnerHTML={{ __html: TERMS_EN }} />
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

/* תוכן משפטי - דו לשוני - עמותת "תוכנית דגן" */
const PRIVACY_HE = `
<p><strong>עודכנה לאחרונה: אוגוסט 2025</strong></p>
<ol>
<li><strong>כללי</strong><br/>עמותת "תוכנית דגן" ("העמותה") מחויבת להגן על פרטיות המשתמשים באתר ובשירותיה. מסמך זה מפרט כיצד אנו אוספים, שומרים, משתמשים ומגנים על המידע האישי שלך, בהתאם לחוק הגנת הפרטיות, תשמ"א-1981 (כולל תיקון 13), תקנות הגנת הפרטיות (אבטחת מידע), תקנות ה-GDPR וה-CCPA ככל שהן חלות.</li>
<li><strong>איסוף מידע</strong><br/>בעת יצירת קשר או שימוש בשירותינו, אנו עשויים לאסוף: שם מלא, כתובת דוא"ל ופרטי התקשרות נוספים, מידע עסקי/לימודי/מקצועי שמסרת, וכן מידע טכני ודיגיטלי לרבות כתובות IP, Cookies, נתוני גלישה ומיקום גיאוגרפי כללי. אין חובה חוקית למסור מידע, אך ייתכן שהמסירה תנאי לקבלת שירות.</li>
<li><strong>מטרות שימוש</strong><br/>
<ul>
<li>יצירת קשר ומתן מענה לפניות.</li>
<li>ניהול חשבונות משתמשים ומתן שירותי העמותה.</li>
<li>ניתוח ושיפור השירותים והתוכניות.</li>
<li>שליחת עדכונים, דיוור ושיווק ישיר - בכפוף להסכמה.</li>
<li>עמידה בהתחייבויות חוקיות ורגולטוריות.</li>
</ul>
</li>
<li><strong>העברת מידע לצדדים שלישיים</strong><br/>לא נעביר מידע לצדדים שלישיים אלא אם נדרש על פי דין או צו שיפוטי, או לצורך טכני חיוני כגון אחסון, CRM או שירותי דיוור - בכפוף להתחייבות לסודיות ואבטחה - אוכמתך המפורשת.</li>
<li><strong>זכויותיך</strong><br/>בהתאם לדין החול, עומדות לך זכויות עיון, תיקון, מחיקה ("Right to be Forgotten"), התנגדות לשימוש במידע לצורכי שיווק, וניידות מידע בכפוף ל-GDPR. למימוש זכויות: <a href="mailto:daganleadership@gmail.com">daganleadership@gmail.com</a>.</li>
<li><strong>אבטחת מידע</strong><br/>העמותה מפעילה אמצעי אבטחה מקובלים, לרבות SSL, בקרת גישה והרשאות פנימיות. אין ביכולתנו להבטיח הגנה מוחלטת מפני חדירות או שימוש בלתי מורשה.</li>
<li><strong>שמירת מידע</strong><br/>נשמור את המידע האישי כל עוד הוא דרוש למטרות שנקבעו או כנדרש לפי דין, ולאחר מכן יימחק או יעבור אנונימיזציה.</li>
<li><strong>Cookies וטכנולוגיות מעקב</strong><br/>נעשה שימוש ב-Cookies וטכנולוגיות דומות להפעלה תקינה, שיפור חוויית משתמש, ניתוח שימוש ושיווק מותאם. ניתן לנהל או לחסום דרך הגדרות הדפדפן או באנר ה-Cookie באתר.</li>
<li><strong>קטינים</strong><br/>השירות מיועד לבני 18 ומעלה בלבד. אם נודע כי נאסף מידע מקטין מתחת לגיל זה - המידע יימחק מיידית.</li>
<li><strong>שינויים</strong><br/>העמותה רשאית לעדכן את מדיניות פרטיות זו מעת לעת. שינוי מהותי יימסר באתר ובאמצעים נוספים לפי הצורך.</li>
</ol>
`;

const PRIVACY_EN = `
<p><strong>Last updated: August 2025</strong></p>
<ol>
<li><strong>General</strong><br/>The "Dagan Program" Association ("the Association") is committed to protecting users' privacy. This notice explains how we collect, store, use and protect personal data under the Israeli Privacy Protection Law (including Amendment 13), the Israeli Security Regulations, and where applicable the GDPR and CCPA.</li>
<li><strong>Data we collect</strong><br/>When you contact us or use our services, we may collect full name, email address and additional contact details, study/business/professional information you provide, and technical data such as IP addresses, cookies, browsing data and approximate geolocation. You are not legally required to provide data, yet it may be necessary to receive certain services.</li>
<li><strong>Purposes</strong><br/>
<ul>
<li>To contact you and respond to inquiries.</li>
<li>To manage user accounts and provide the Association's services.</li>
<li>To analyze and improve our services and programs.</li>
<li>Direct updates and marketing only with your consent.</li>
<li>To comply with legal and regulatory obligations.</li>
</ul>
</li>
<li><strong>Sharing with third parties</strong><br/>We do not share data with third parties except as required by law or court order, or for essential operations such as hosting, CRM or mailing services - under confidentiality and security obligations - or with your explicit consent.</li>
<li><strong>Your rights</strong><br/>Access, rectification, erasure ("Right to be Forgotten"), objection to marketing, and data portability subject to the GDPR. Requests: <a href="mailto:daganleadership@gmail.com">daganleadership@gmail.com</a>.</li>
<li><strong>Security</strong><br/>Industry-standard measures including SSL, access control and internal permissions. Absolute protection cannot be guaranteed.</li>
<li><strong>Retention</strong><br/>We retain personal data as long as needed for the stated purposes or as required by law, then delete or anonymize it.</li>
<li><strong>Cookies and tracking</strong><br/>We use cookies and similar technologies for proper operation, improved UX, analytics and tailored marketing. You may manage or block cookies via your browser or the site's cookie banner.</li>
<li><strong>Minors</strong><br/>Services are intended for users aged 18 and above. If we learn data was collected from a child under that age, it will be deleted immediately.</li>
<li><strong>Changes</strong><br/>We may update this policy from time to time. Material changes will be posted on the site and by additional means where appropriate.</li>
</ol>
`;

const TERMS_HE = `
<p><strong>עודכנו לאחרונה: אוגוסט 2025</strong></p>
<ol>
<li><strong>הסכמה</strong><br/>השימוש באתר ובשירותי "תוכנית דגן" כפוף לתנאים אלה ולמדיניות הפרטיות. כל שימוש מהווה הסכמה מלאה.</li>
<li><strong>שימוש מותר</strong><br/>
<ul>
<li>האתר והשירותים לשימוש אישי, חינוכי ולגיטימי בלבד.</li>
<li>אסור שימוש בלתי חוקי, פוגעני או הפוגע בצדדים שלישיים.</li>
</ul>
</li>
<li><strong>קניין רוחני</strong><br/>כל זכויות היוצרים, סימני המסחר, התוכן, העיצובים, המידע והקוד שייכים ל"תוכנית דגן". אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי ללא אישור מראש ובכתב.</li>
<li><strong>הגבלת אחריות</strong><br/>השירותים ניתנים "As-Is" ללא אחריות מכל סוג. אין התחייבות לזמינות רציפה, לדיוק המידע או להתאמה ספציפית. העמותה לא תהיה אחראית לנזקים ישירים, עקיפים, תוצאתיים או כלכליים.</li>
<li><strong>קישורים חיצוניים</strong><br/>האתר עשוי לכלול קישורים לאתרים חיצוניים. "תוכנית דגן" אינה אחראית לתוכן או למדיניות של אתרים אלה.</li>
<li><strong>שיפוי</strong><br/>המשתמש מתחייב לשפות את "תוכנית דגן" בגין כל נזק, הפסד או הוצאה עקב הפרת תנאים אלה או שימוש בלתי חוקי.</li>
<li><strong>שינויים והפסקת שירות</strong><br/>העמותה רשאית לשנות או להפסיק את פעילות האתר והשירותים בכל עת ללא הודעה מוקדמת. תנאים אלה עשויים להתעדכן מעת לעת והשימוש המתמשך מהווה הסכמה לתנאים המעודכנים.</li>
<li><strong>דין וסמכות שיפוט</strong><br/>דיני מדינת ישראל יחולו. סמכות השיפוט הבלעדית לבתי המשפט במחוז תל אביב.</li>
</ol>
`;

const TERMS_EN = `
<p><strong>Last updated: August 2025</strong></p>
<ol>
<li><strong>Acceptance</strong><br/>Use of the "Dagan Program" website and services is subject to these Terms and the Privacy Policy. Any use constitutes full acceptance.</li>
<li><strong>Permitted use</strong><br/>
<ul>
<li>Website and services are for personal, educational and lawful use only.</li>
<li>No unlawful, offensive or harmful use is permitted.</li>
</ul>
</li>
<li><strong>Intellectual property</strong><br/>All copyrights, trademarks, content, designs, information and code belong to the Dagan Program. No copying, reproduction, distribution or commercial use without prior written consent.</li>
<li><strong>Limitation of liability</strong><br/>Services are provided "As-Is" with no warranties. No commitment to continuous availability, accuracy or specific fitness. The Association will not be liable for direct, indirect, consequential or economic damages.</li>
<li><strong>External links</strong><br/>The site may contain links to external websites. The Dagan Program is not responsible for their content or policies.</li>
<li><strong>Indemnity</strong><br/>You agree to indemnify the Dagan Program for any damage, loss or expense due to breach of these Terms or unlawful use.</li>
<li><strong>Changes and termination</strong><br/>We may change or discontinue the site and services at any time without notice. These Terms may be updated and continued use constitutes acceptance.</li>
<li><strong>Governing law and jurisdiction</strong><br/>Laws of the State of Israel apply. Exclusive jurisdiction lies with the competent courts in the Tel Aviv district.</li>
</ol>
`;
