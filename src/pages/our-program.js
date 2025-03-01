import { useState } from 'react';
import { motion } from 'framer-motion';

const goals = [
  {
    title: 'הכשרת והצמחת מנהיגים מכל הקבוצות בחברה הישראלית',
    description: 'התוכנית מיועדת להכשיר ולטפח דור חדש של מנהיגים מכל גווני החברה הישראלית, מתוך תפיסה שמנהיגות אמיתית צומחת מתוך חיבור, הבנה ויכולת להוביל שינוי. המשתתפים עוברים סדנאות למנהיגות מעשית, שבהן הם רוכשים כלים לפיתוח חשיבה אסטרטגית, תהליכי קבלת החלטות במצבי משבר, והובלת תהליכים בארגונים ובקהילות מגוונות. נוסף על כך, התוכנית מעניקה הכשרה ייחודית בהתמודדות עם קונפליקטים, במטרה לאפשר למנהיגים העתידיים להתמודד עם האתגרים הרבים של החברה הישראלית בדרך של דיאלוג, הבנה ופתרונות יצירתיים.'
  },
  {
    title: 'פיתוח והטמעת כלים להתמודדות עם קיטוב',
    description: 'החברה הישראלית ניצבת בפני קיטוב הולך וגובר, והתמודדות עמו מחייבת כלים מעשיים של גישור, הידברות ויצירת שיח בונה. במסגרת התוכנית, המשתתפים נחשפים למגוון רחב של נקודות מבט ומעמיקים בהבנת המורכבות החברתית דרך סדנאות מעשיות בגישור, דיונים בהובלת מומחים, והשתתפות במפגשים עם דמויות מפתח מכלל קצוות הקשת החברתית והאידיאולוגית. בנוסף, המשתתפים לוקחים חלק פעיל בפיתוח מיזמים חוצי מגזרים, שמטרתם להניע שינוי חברתי ולתרום ללכידות חברתית איתנה.'
  },
  {
    title: 'יצירת רשת קשרים ושיתופי פעולה מגוונים',
    description: 'מנהיגות אפקטיבית אינה פועלת לבד – היא מבוססת על שיתופי פעולה ורשתות קשרים שמסייעות להרחיב השפעה וליצור שינוי משמעותי. התוכנית יוצרת תשתית נטוורקינג פעילה, שבה המשתתפים זוכים להיכרות מעמיקה עם אנשים מובילים בתחומם, הן מהמגזר הציבורי והן מהמגזר העסקי והחברתי. באמצעות חיבורים בין המשתתפים לבין אנשי מפתח מכלל המגזרים, נרקמות מערכות יחסים ארוכות טווח, המאפשרות שיתופי פעולה משמעותיים. עם סיום התוכנית, הבוגרים מצטרפים לפורום פעיל של בוגרים, אשר מהווה פלטפורמה להמשך יצירת שיתופי פעולה והשפעה ארוכת טווח.'
  },
  {
    title: 'הנבטת מיזמים חברתיים המקדמים סובלנות והכלה',
    description: 'התוכנית לא מסתפקת בהקניית ידע בלבד, אלא מעודדת את המשתתפים להתנסות במנהיגות הלכה למעשה ולהפוך את הרעיונות למציאות. כחלק מהתהליך, המשתתפים מפתחים מיזמים חברתיים חדשניים שמטרתם לקדם סובלנות, הכלה וערבות הדדית. הם זוכים לליווי אישי בפיתוח היוזמות, להנגשת משאבים שיאפשרו לממש את רעיונותיהם, ולתמיכה צמודה ממנטורים מובילים מהעולם העסקי, החברתי והציבורי. פלטפורמה זו מאפשרת למשתתפים להפוך חזון למציאות וליצור שינוי משמעותי בחברה הישראלית.'
  }
];

const FlippingCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full md:w-1/2 lg:w-1/4 p-4"
      onClick={() => setFlipped(!flipped)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative h-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ${flipped ? 'scale-105' : ''}`}>
        <div className={`absolute inset-0 flex items-center justify-center p-4 ${flipped ? 'hidden' : 'block'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">{title}</h3>
        </div>
        <div className={`absolute inset-0 p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white overflow-auto ${flipped ? 'block' : 'hidden'}`}>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function OurProgramPage() {
  return (
    <section className="py-20 pt-36 h-[100vh] bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">מטרות התכנית</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          תכנית דגן למנהיגות מגשרת מכוונת להשגת מספר מטרות משמעותיות שמטרתן ליצור שינוי חברתי ארוך טווח
        </p>
        <div className="flex flex-wrap -mx-4">
          {goals.map((goal, index) => (
            <FlippingCard key={index} title={goal.title} description={goal.description} />
          ))}
        </div>
      </div>
    </section>
  );
} 