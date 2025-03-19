'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'רישיון לגעת',
      description: 'מיזם למניעת אלימות מינית והכשרת מפקדים בצה"ל ובמשטרה לטיפול בנושא',
      image: '/images/projects/רישיון לגעת.jpg',
      // category: 'חברה',
      fullDescription: `מיזם פורץ דרך שנולד במסגרת תכנית דגן, בשיתוף עמותת פלטפורמה, במטרה להכשיר מפקדים בצה"ל ובמשטרה לזיהוי, מניעה ומתן מענה מיטבי לנפגעי ונפגעות אלימות מינית. המפקדים, המשמשים דמויות מפתח עבור פקודיהם, מקבלים הכשרה ייחודית בת יומיים הכוללת ידע מקצועי, חשיפה להיקף התופעה והתנסות בסימולציות עם שחקנים – נפגעי תקיפה מינית בעצמם. התהליך מאפשר למפקדים לשפר את יכולות ההקשבה, הזיהוי והתמיכה ובכך לחזק את תחושת הביטחון בקרב החיילים והשוטרים. הצלחת המיזם הובילה להרחבתו למודלים נוספים, במטרה ליצור מרחב בטוח יותר ולבסס חברה צבאית ומערכת ביטחון מכילים ומודעים יותר.`,
    },
    {
      title: 'בין החיבורים',
      description: 'מיזם לקירוב וגישור בין נערות מקבוצות שונות בחברה הישראלית באמצעות פעילות חינוכית',
      image: '/images/projects/בין החיבורים.jpeg',
      // category: 'חיבור בין-תרבותי',
      fullDescription: `המיזם מחבר נערות יהודיות, מוסלמיות, נוצריות ודרוזיות במטרה לעודד דיאלוג, היכרות והסרת מחסומים בין מגזרים. באמצעות פעילויות חווייתיות, יזמות, מפגשים עם נשים מעוררות השראה ושימוש בטכנולוגיות חדשניות כמו מציאות רבודה ובינה מלאכותית, הנערות רוכשות כלים מעשיים לחיזוק ביטחונן העצמי ותחושת המסוגלות שלהן. במהלך התכנית הן יוזמות ומפתחות פעילויות שיועברו הלאה בבתי הספר שלהן, מה שמוביל ליצירת מעגלי השפעה רחבים ולשיתופי פעולה מתמשכים. המשתתפות מציינות שהמיזם מעניק להן חוויית העצמה ייחודית ומחברת. כמו כן, מעידות הנערות, כי  הקשרים החברתיים הנוצרים במסגרת הפעילות נמשכים גם לאחר סיומו דרך הרשתות החברתיות ומפגשים יזומים.`,
    },
    {
      title: 'דרך אבות',
      description: 'מיזם לפיתוח פתרונות דיור מוגן מותאמים לבני הגיל השלישי מהקהילה האתיופית',
      image: '/images/projects/דרך אבות.jpeg',
      // category: 'דיור מוגן',
      fullDescription: `מיזם המפתח פתרונות דיור מוגן ייחודיים לבני הגיל השלישי מהקהילה האתיופית, מתוך הבנה שדיור לגיל הזהב חייב לכלול התאמה תרבותית ולשמר את החיבורים החברתיים והמשפחתיים. הפרויקט נבנה בשיתוף אנשי מקצוע מהקהילה וכולל יצירת סביבות מגורים המשלבות אורח חיים מסורתי עם שירותים מודרניים, תוך שמירה על ערכי הקהילה והמשפחה. מטרת המיזם היא להעניק לבני הגיל השלישי איכות חיים גבוהה, עצמאות וחיבור לקהילה, וליצור פתרון חברתי-תרבותי משמעותי לשימור הזהות והמורשת בקרב הדור המבוגר.`,
    },
    {
      title: 'קהילת קירוב',
      description: 'מיזם לגישור וחיבור בין מגזרים שונים בארגונים עסקיים',
      image: '/images/projects/קהילת קירוב.jpeg',
      // category: 'גיוון תעסוקתי',
      fullDescription: `מיזם "קהילת קירוב" נולד מתוך ההבנה שעובדים בארגונים עסקיים משקפים את החברה כולה, וכי ניתן לטפח גישה סובלנית, להעמיק את ההיכרות וליצור שיח משמעותי בין המגזר החרדי לשאר הקבוצות בחברה הישראלית. המיזם מחבר עובדים חרדים ושאינם חרדים בארגונים עסקיים, מתוך הבנה שהסביבה העסקית משקפת את החברה כולה ויכולה לשמש גשר לדיאלוג ושיתוף פעולה. המיזם פועל ליצירת מרחב עבודה מכיל, בו כל עובד מרגיש שייך ומוערך, תוך הפחתת חסמים תרבותיים וחברתיים. במסגרת המיזם מוקמת קהילה דיגיטלית פנים-ארגונית, המאפשרת שיח פתוח, מתן מענה לסוגיות של גיוון והכלה ושילוב תכנים חברתיים בתוכניות הרווחה של הארגון. בנוסף, העובדים משתתפים בסדנאות, מפגשים חווייתיים ויוזמות משותפות, המעודדים הכרות בין-מגזרית, מפחיתים סטריאוטיפים ומסייעים בהטמעת התאמות תעסוקתיות שמקדמות שוויון הזדמנויות. המיזם מחזק את האווירה הארגונית, מעודדת שיתופי פעולה מקצועיים, ותורם ליצירת חברה ישראלית מגוונת, מכילה ומלוכדת יותר – מתוך הארגון ואל החברה כולה.`,
    },
    {
      title: 'טועמים זיכרונות',
      description: 'מיזם להפגת בדידות וליצירת חיבור דין דורי באמצעות  סדנאות בישול ושיתוף סיפורי חיים',
      image: '/images/projects/טועמים.jpeg',
      // category: 'גיל שלישי',
      fullDescription: `המיזם חותר לחיבור בין דורי באמצעות סדנאות בהן נשים מבוגרות משמשות כמספרות סיפורים וכמדריכות בישול מסורתי, לבין משתתפים צעירים הלומדים, מבשלים וחווים את המורשת הקולינרית הישראלית. המפגשים יוצרים חיבור אישי ותרבותי עמוק: הסדנה נפתחת במפגש היכרות סביב כוס קפה, בו הנשים משתפות בזיכרונות אישיים ולאחר מכן המשתתפים מבשלים יחד מתכונים משפחתיים מסורתיים. דרך החוויה הייחודית הזו נשמרת המורשת הקולינרית, נבנים קשרים בין-דוריים משמעותיים ומוענקת לנשים המבוגרות תחושת ערך ושייכות. המיזם מעודד חוויות למידה אותנטיות, נטולות טכנולוגיה ומחזק את תחושת הקהילה וההמשכיות הבין-דורית.`,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            מיזמים חברתיים
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            יוזמות חברתיות שהובילו בוגרי התכנית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = '/images/fallback-project.jpg';
                  }}
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={() => openModal(project)}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    קרא עוד &larr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
        >
          <div className="space-y-4">
            <div className="relative h-56 w-full mb-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = '/images/fallback-project.jpg';
                }}
                priority
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {selectedProject.category}
              </div>
            </div>
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 text-center">
              {selectedProject.fullDescription}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
} 