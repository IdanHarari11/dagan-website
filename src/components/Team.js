'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';

const team1 = [
  {
    name: 'תא"ל  (מיל.) שמעון חפץ',
    role: 'יו"ר העמותה',
    image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
    bio: 'לשעבר המזכיר הצבאי של שלושה מנשיאי ישראל',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'אשל ארמוני',
    role: 'יו"ר צוות ההגוי לתוכנית ',
    image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
    bio: 'לשעבר ראש אגף במוסד, מנכ"ל משרד השיכון, יו"ר נמל חיפה',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'ד"ר אודי לוי',
    role: 'מנכ"ל העמותה',
    image: 'https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4',
    bio: 'לשעבר ראש "צלצל" היחידה לסכול כספי טרור',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'עודד ברנדה',
    role: 'מנהל ומנחה התוכנית',
    image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
    bio: 'לשעבר קצין בצה"ל ובמוסד והיום מטפל חברתי ומנחה קבוצות',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
];

const team2 = [
  {
    name: 'דרור מכמן',
    image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
    bio: 'לשעבר ראשם של מספר אגפים במוסד, היום מוביל סטארט אפ בנושאי אקלים ואיכות סביבה',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'שני לוי כחלון',
    image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
    bio: 'לשעבר בכירה במוסד, מומחית בתחום הלמידה המקוונת, מורה ומחנכת',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'עופר אסף',
    image: 'https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4',
    bio: 'לשעבר ראש אגף במוסד, מומחה בתחום התקשורת, שותף במספר סטארטאפים',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'ד"ר שושי חן',
    image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
    bio: 'חברת סגל בכיר ומרצה בפקולטה לניהול ע"ש קולר באוניברסיטת תל-אביב',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'אמנון פורת',
    image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
    bio: ' לשעבר בכיר במוסד, היום מבעלי חברת "אבן דרך" העוסקת בפיתוח מנהלים וצוותים באמצעות פתרונות למידה התנסותיים',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
];

const Team = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (e) => {
    const container = e.target;
    setShowRightArrow(Math.abs(container.scrollLeft) > 0);
    setShowLeftArrow(
      Math.abs(container.scrollLeft) < Math.abs(container.scrollWidth) - Math.abs(container.clientWidth) - 10
    );

    console.log(container.scrollLeft, container.scrollWidth, container.clientWidth);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id='team' className="py-20 bg-gray-50/50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הכירו את הצוות שלנו
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            אנשי המקצוע שמובילים את התוכנית
          </p>
        </div>

        {/* Slider Container for both Mobile and Desktop */}
        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       -translate-x-5 lg:-translate-x-8"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       translate-x-5 lg:translate-x-8"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4
                     scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {team1.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] md:w-[320px] h-full snap-center"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about property management
            and delivering exceptional guest experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium
                     hover:bg-primary/90 transition-colors duration-200"
            onClick={() => window.location.href = 'mailto:careers@kooshmanagement.com'}
          >
            View Open Positions
          </motion.button>
        </motion.div> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            צוות ההיגוי
          </p>
        </div>

        {/* Slider Container for both Mobile and Desktop */}
        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       -translate-x-5 lg:-translate-x-8"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       translate-x-5 lg:translate-x-8"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4
                     scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {team2.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] md:w-[320px] h-full snap-center"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about property management
            and delivering exceptional guest experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium
                     hover:bg-primary/90 transition-colors duration-200"
            onClick={() => window.location.href = 'mailto:careers@kooshmanagement.com'}
          >
            View Open Positions
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

// Extracted TeamMemberCard component for reusability
const TeamMemberCard = ({ member }) => (
  <div className="group h-[320px]">
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg pt-16 h-full flex flex-col">
      {/* Profile Image Container - Updated styling */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 mt-1 pt-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            sizes="128px"
            priority
            style={{ objectPosition: '50% 30%' }} 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
        
        {/* Social Links - Always visible */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
          {Object.entries(member.social).map(([platform, link]) => (
            <motion.a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center
                       text-gray-900 hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {platform === 'linkedin' && <FaLinkedinIn className="w-4 h-4" />}
              {platform === 'twitter' && <FaTwitter className="w-4 h-4" />}
              {platform === 'email' && <FaEnvelope className="w-4 h-4" />}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-[7rem] text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-primary font-medium mb-3">
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-neutral-300 text-sm line-clamp-4">
            {member.bio}
          </p>
        </div>
        <div className="h-8">
          {/* Can add additional content here if needed */}
        </div>
      </div>
    </div>
  </div>
);

export default Team; 