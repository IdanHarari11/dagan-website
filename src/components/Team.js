'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';

const programTeam = [
  {
    name: 'תא"ל (מיל\') שמעון חפץ',
    role: 'יו"ר העמותה',
    bio: 'לשעבר המזכיר הצבאי של שלושה מנשיאי ישראל',
  },
  {
    name: 'עופר אסף',
    role: 'יו"ר צוות ההיגוי',
    bio: 'שלושה עשורים במערכת הבטחון, כיום יועץ לניהול וליישומים טכנולוגיים',
  },
  {
    name: 'אשל ארמוני ז"ל',
    role: 'הוגה התכנית ויו"ר לשעבר',
    bio: 'לשעבר ראש אגף במוסד, מנכ"ל משרד השיכון, יו"ר נמל חיפה',
  },
  {
    name: 'דולב ארן',
    role: 'מנהלת התכנית',
    bio: 'לשעבר בכירה במוסד, מתנדבת במרכז הסיוע לנפגעי/ות תקיפה מינית.',
  },
  {
    name: 'רות רוה',
    role: 'מנהלת תפעול',
    bio: 'מובילת תהליכים חינוכיים לחיבור ושיתופי פעולה במציאות מורכבת',
  },
];

const steeringTeam = [
  {
    name: 'דרור מכמן',
    bio: 'לשעבר ראש מספר אגפים במוסד.',
  },
  {
    name: 'שני לוי כחלון',
    bio: 'עוסקת בחינוך, מתמחה בטכנולוגיות ולמידה.',
  },
  {
    name: 'תיאודור לנדאו',
    bio: 'מייסד ומנהל תוכנית המנהיגות \'תוהו\', בוגר תואר שני במנהיגות חינוכית מאוניברסיטת הרווארד.',
  },
  {
    name: 'זרי רחימי פרידמן',
    bio: 'בוגרת מחזור ג\' ומרכזת קהילת הבוגרים, אשת חינוך ועד לאחרונה מנהלת חטיבת ביניים',
  },
  {
    name: 'חגי איטקין',
    bio: 'לשעבר ראש מספר אגפים במוסד וכיום מוביל מגוון מיזמים חברתיים',
  },
  {
    name: 'דיויד סלומון',
    bio: 'שלושה וחצי עשורים במערכת הבטחון, כיום מתמקד בהשקעות טכנולוגיות בשלבים מוקדמים בחברות סטארט-אפ ישראליות, יושב בדירקטוריונים ומהווה מנטור למייסדים, בנוסף לפעילות במיזמים חברתיים כמו "עושים שכונה" ומיזמים בתחום חדשנות מחשבתית.',
  },
];

const getColorFromName = (name) => 'bg-blue-500';

const TruncatedBio = ({ bio }) => {
  const bioRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipId = useId();
  const [isTruncated, setIsTruncated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  const checkTruncation = useCallback(() => {
    const element = bioRef.current;
    if (!element) return;
    setIsTruncated(element.scrollHeight > element.clientHeight + 1);
  }, []);

  useEffect(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [bio, checkTruncation]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateHoverSupport = () => setSupportsHover(mediaQuery.matches);

    updateHoverSupport();
    mediaQuery.addEventListener('change', updateHoverSupport);
    return () => mediaQuery.removeEventListener('change', updateHoverSupport);
  }, []);

  useEffect(() => {
    if (!isOpen || supportsHover) return undefined;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen, supportsHover]);

  const handleBioClick = () => {
    if (!isTruncated || supportsHover) return;
    setIsOpen((prev) => !prev);
  };

  const handleBioKeyDown = (event) => {
    if (!isTruncated || supportsHover) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen((prev) => !prev);
    }
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const tooltipVisibilityClass = supportsHover
    ? 'opacity-0 pointer-events-none group-hover/bio:opacity-100 group-hover/bio:pointer-events-auto'
    : isOpen
      ? 'opacity-100 pointer-events-auto'
      : 'opacity-0 pointer-events-none';

  return (
    <div ref={containerRef} className="relative mt-8 group/bio">
      <p
        ref={bioRef}
        className={`text-gray-600 dark:text-neutral-300 text-sm line-clamp-4 ${
          isTruncated && !supportsHover ? 'cursor-pointer' : ''
        } ${isTruncated && supportsHover ? 'cursor-help' : ''}`}
        onClick={handleBioClick}
        onKeyDown={handleBioKeyDown}
        role={isTruncated && !supportsHover ? 'button' : undefined}
        tabIndex={isTruncated && !supportsHover ? 0 : undefined}
        aria-expanded={isTruncated && !supportsHover ? isOpen : undefined}
        aria-describedby={isTruncated && !supportsHover && isOpen ? tooltipId : undefined}
      >
        {bio}
      </p>

      {isTruncated && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute bottom-full left-1/2 z-30 mb-2 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-right text-sm leading-relaxed text-gray-700 shadow-xl transition-opacity duration-200 dark:border-blue-800 dark:bg-gray-800 dark:text-gray-200 ${tooltipVisibilityClass}`}
        >
          {bio}
        </div>
      )}
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const bgColor = getColorFromName(member.name);

  return (
    <div className="group h-[280px]">
      <div className="relative overflow-visible rounded-2xl bg-white dark:bg-gray-900 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400/10 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-800/5 pointer-events-none"></div>

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
              <p className="font-medium mb-3 text-blue-600 dark:text-blue-400 mt-4">
                {member.role}
              </p>
            )}
            <TruncatedBio bio={member.bio} />
          </div>

          <div className="mt-4 flex justify-center">
            <div className="w-12 h-1 rounded-full bg-blue-500 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = ({ teamData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הצוות שלנו
          </h2>
          <p className="text-xl text-blue-600 dark:text-gray-300">
            צוות התכנית
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <TeamGrid teamData={programTeam} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <p className="text-xl text-blue-600 dark:text-gray-300">
            צוות ההיגוי לתכנית
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <TeamGrid teamData={steeringTeam} />
      </div>
    </section>
  );
};

export default Team;
