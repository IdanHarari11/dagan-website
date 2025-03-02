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
      description: 'סיוע ראשוני לנפגעות אלימות מינית ופיזית באמצעות הכשרות בארגונים גדולים, לשם מתן מענה רגיש ומדויק',
      image: 'https://t4.ftcdn.net/jpg/02/80/35/69/240_F_280356966_kTMM1eyuZvS8D5aaIlKrt7KQALSjfEsF.jpg',
      category: 'חברה',
      fullDescription: `
        פרויקט "רישיון לגעת" נולד מתוך הבנה עמוקה של הצורך במענה מיידי ורגיש לנפגעות אלימות מינית ופיזית. 
        
        המיזם מתמקד בהכשרת עובדים בארגונים גדולים, כדי שיוכלו לזהות סימני מצוקה ולהגיש סיוע ראשוני מקצועי ומכבד. 
        
        ההכשרות כוללות:
        • זיהוי סימני מצוקה
        • תקשורת מותאמת עם נפגעות טראומה
        • הכוונה לגורמי טיפול מקצועיים
        • יצירת סביבה בטוחה ותומכת
        
        עד כה, הוכשרו מעל 500 עובדים ב-12 ארגונים שונים, והתוכנית ממשיכה להתרחב.
      `,
    },
    {
      title: 'בין החיבורים',
      description: 'תוכנית המחברת נערות ממגזרים שונים במפגשים שיטתיים, לשם יצירת חיבור אנושי, פתיחות והסרת דעות קדומות',
      image: 'https://t3.ftcdn.net/jpg/01/36/64/24/240_F_136642475_A4qy0YXpT82QpXOw9Thz8ncYUug091S9.jpg',
      category: 'חיבור בין-תרבותי',
      fullDescription: `
        "בין החיבורים" היא תוכנית חדשנית המפגישה נערות מרקעים תרבותיים שונים - יהודיות, ערביות, דתיות וחילוניות - במטרה לבנות גשרים של הבנה והערכה הדדית.
        
        התוכנית פועלת במשך שנה שלמה וכוללת:
        • מפגשים דו-שבועיים קבועים
        • סדנאות העצמה ומנהיגות
        • פרויקטים משותפים בקהילה
        • טיולים וימי כיף משותפים
        
        המשתתפות לומדות להכיר זו את עולמה של זו, מפתחות חברויות אמיתיות, ומובילות יחד שינוי חברתי בסביבתן.
        
        התוכנית פועלת כיום ב-8 ערים ברחבי הארץ ומשתתפות בה כ-200 נערות מדי שנה.
      `,
    },
    {
      title: 'דרך אבות',
      description: 'פתרונות דיור מוגן מותאמים במיוחד לבני הגיל השלישי מהקהילה האתיופית, המיועדים לספק איכות חיים ותמיכה חברתית ותרבותית',
      image: 'https://as2.ftcdn.net/v2/jpg/08/93/82/11/1000_F_893821111_a5jFApYNEsN7RvHm2n8HiAFD7OfYQM1G.jpg',
      category: 'דיור מוגן',
      fullDescription: `
        פרויקט "דרך אבות" מציע פתרון ייחודי לאתגר הדיור והבדידות בקרב קשישים יוצאי אתיופיה בישראל.
        
        המיזם מקים מרכזי דיור מוגן המותאמים תרבותית לצרכי הקהילה, תוך שמירה על:
        • מטבח המציע מאכלים מסורתיים
        • צוות דובר אמהרית
        • פעילויות תרבותיות מותאמות
        • קשר עם הקהילה והמשפחות
        • טקסים ומנהגים מסורתיים
        
        המרכז הראשון נפתח בנתניה ומשרת 40 דיירים, ושני מרכזים נוספים נמצאים בשלבי תכנון בבאר שבע ובחדרה.
        
        הפרויקט זכה להכרה ממשרד הרווחה ומקבל תמיכה ממשלתית לצד תרומות פרטיות.
      `,
    },
    {
      title: 'קהילת קירוב',
      description: 'מיזם לגישור וחיבור בין מגזרים בארגונים עסקיים, במיוחד בין המגזר החרדי לשאר הקבוצות בחברה הישראלית',
      image: 'https://as2.ftcdn.net/v2/jpg/02/31/98/85/1000_F_231988599_VxuQnCvQANgFuj9AQvxOJK9XJQhNJNuK.jpg',
      category: 'גיוון תעסוקתי',
      fullDescription: `
        החברה הישראלית מורכבת ורבת-גוניות, אך היכרות מעמיקה בין מגזרים שונים אינה מובנת מאליה. מיזם "קהילת קירוב" נולד מתוך ההבנה שעובדים בארגונים עסקיים משקפים את החברה כולה, וכי ניתן לטפח גישה סובלנית, להעמיק את ההיכרות וליצור שיח משמעותי בין המגזר החרדי לשאר הקבוצות בחברה הישראלית.
        
        המיזם פועל לחיזוק הקשרים וליצירת חיבורים טבעיים בין מגזרים – דרך מקום העבודה. המיזם שם לו למטרה:
        • להפחית חסמים בין-תרבותיים
        • להעצים את תחושת השייכות של עובדים חרדים בארגון
        • ליצור סביבה מכילה ומקרבת לכלל העובדים
        
        המיזם כולל:
        • הקמת קהילה דיגיטלית לתקשורת פנים-ארגונית
        • שילוב תכנים חברתיים בתוכניות הרווחה הארגוניות
        • קידום מפגשים בין מגזרים באמצעות סדנאות ושיח פתוח
        • יצירת התאמות תעסוקתיות ועידוד שיתופי פעולה מקצועיים
        
        "קהילת קירוב" אינה רק יוזמה פנים-ארגונית, אלא צעד משמעותי לבניית חברה מגוונת, מלוכדת ופתוחה יותר – מתוך הארגון ואל החברה כולה.
      `,
    },
    {
      title: 'טועמים זיכרונות',
      description: 'מיזם להפגת בדידות בקרב נשים מבוגרות דרך סדנאות בישול משותפות ושיתוף סיפורי חיים',
      image: 'https://as1.ftcdn.net/v2/jpg/02/95/52/36/1000_F_295523652_HIBp9sHSBPlbKQZxzXTvtZZKDZnJQIq3.jpg',
      category: 'גיל שלישי',
      fullDescription: `
        מיזם "טועמים זיכרונות" נוצר כמענה לתופעת הבדידות הגוברת בקרב נשים מבוגרות בחברה הישראלית. המיזם מחבר בין שני עולמות תוכן משמעותיים - אוכל וסיפורי חיים - כדי ליצור מרחב חברתי חם ותומך.
        
        במסגרת המיזם מתקיימות סדנאות בישול שבועיות בהן:
        • נשים מבוגרות מלמדות מתכונים מסורתיים מבית אמא
        • משתפות בסיפורים וזיכרונות הקשורים למאכלים
        • יוצרות קשרים חברתיים משמעותיים
        • מעבירות מסורות קולינריות לדורות הבאים
        
        הסדנאות מתקיימות במרכזים קהילתיים ברחבי הארץ, ומשתתפות בהן נשים מבוגרות לצד מתנדבים צעירים. בסוף כל סדנה, המשתתפות אוכלות יחד את המאכלים שהכינו, ומתקיים שיח פתוח ולבבי.
        
        בנוסף, המיזם מתעד את המתכונים והסיפורים בספר דיגיטלי, המשמר את המורשת התרבותית והקולינרית של המשתתפות לדורות הבאים.
        
        עד כה, השתתפו במיזם למעלה מ-150 נשים מבוגרות, והתגובות מעידות על שיפור משמעותי בתחושת הבדידות ובאיכות החיים של המשתתפות.
      `,
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
            יוזמות חברתיות שהובילו בוגרי התוכנית
          </p>
        </div>

        <div className="relative w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-6 rtl:space-x-reverse">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => openModal(project)}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    קרא עוד &larr;
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                className="object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {selectedProject.category}
              </div>
            </div>
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
              {selectedProject.fullDescription}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
} 