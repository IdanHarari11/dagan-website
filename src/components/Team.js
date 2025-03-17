'use client';

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaUser, FaUserTie, FaUserAlt } from 'react-icons/fa';

const team1 = [
  {
    name: 'תא"ל  (מיל.) שמעון חפץ',
    role: 'יו"ר העמותה',
    bio: 'לשעבר המזכיר הצבאי של שלושה מנשיאי ישראל',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'אשל ארמוני',
    role: 'יו"ר צוות ההגוי ',
    bio: 'לשעבר ראש אגף במוסד, מנכ"ל משרד השיכון, יו"ר נמל חיפה',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'עודד ברנדה',
    role: 'מנהל ומנחה התכנית',
    bio: 'לשעבר קצין בצה"ל ובמוסד והיום מטפל חברתי ומנחה קבוצות',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'רות רוה-גרוס',
    role: 'מנהלת תפעול',
    bio: 'מנהלת תכניות חברתיות לחינוך דיאלוגי ולחיים משותפים',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
];

const team2 = [
  {
    name: 'דרור מכמן',
    bio: 'לשעבר ראש מספר אגפים במוסד, כיום מוביל סטארט אפ בתחום אקלים ואיכות סביבה',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'שני לוי כחלון',
    bio: 'לשעבר בכירה במוסד, מומחית בתחום הלמידה המקוונת, מורה ומחנכת',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'עופר אסף',
    bio: 'לשעבר ראש אגף במוסד, מומחה בתחום התקשורת, שותף במספר סטארטאפים',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
  {
    name: 'אמנון פורת',
    bio: 'לשעבר בכיר במוסד, כיום מבעלי חברת "אבן דרך" העוסקת בפיתוח מנהלים וצוותים',
    // social: {
    //   linkedin: '#',
    //   twitter: '#',
    //   email: '#',
    // },
  },
];

// Get initials from name
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
};

// Generate a consistent color based on name
const getColorFromName = (name) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
    'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
    'bg-orange-500', 'bg-red-500', 'bg-amber-500'
  ];
  
  // Simple hash function to get consistent color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

// Extracted TeamMemberCard component for reusability
const TeamMemberCard = ({ member }) => {
  const bgColor = getColorFromName(member.name);
  const colorName = bgColor.split('-')[1];
  
  return (
    <div className="group h-[280px]">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800">
        {/* Human silhouette background */}
        <div className={`absolute top-0 right-0 opacity-5 text-${colorName}-900 dark:text-${colorName}-200 transform translate-x-1/4 -translate-y-1/4`}>
          <FaUserTie className="w-48 h-48" />
        </div>
        
        {/* Decorative top bar with gradient */}
        {/* <div className={`relative h-16 w-full bg-gradient-to-r from-${colorName}-600 to-${colorName}-400 flex items-center justify-center`}>
          <div className="h-px w-16 bg-white opacity-30"></div>
        </div> */}
        
        {/* Content */}
        <div className="relative p-6 text-center flex-1 flex flex-col justify-between z-10">
          <div>
            <div className="mb-4 flex justify-center">
              <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center shadow-md`}>
                <FaUserAlt className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {member.name}
            </h3>
            {member.role && (
              <p className={`font-medium mb-3 text-${colorName}-600 dark:text-${colorName}-400`}>
                {member.role}
              </p>
            )}
            <p className="text-gray-600 dark:text-neutral-300 text-sm line-clamp-3">
              {member.bio}
            </p>
          </div>
          
          {/* Decorative element */}
          <div className="mt-4 flex justify-center">
            <div className={`w-12 h-1 rounded-full bg-${colorName}-500 opacity-70`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = ({ teamData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {teamData.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TeamMemberCard member={member} />
        </motion.div>
      ))}
    </div>
  );
};

const Team = () => {
  return (
    <section id='team' className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הצוות שלנו
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            צוות העמותה והתכנית
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <TeamGrid teamData={team1} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            צוות ההיגוי
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <TeamGrid teamData={team2} />
      </div>
    </section>
  );
};

export default Team; 