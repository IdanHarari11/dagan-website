'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaUserGraduate, FaHeart, FaCheck, FaCalendarCheck } from "react-icons/fa";
import { BsStars } from 'react-icons/bs';

export default function RoadmapSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Adjust the path length to be more responsive to scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      title: "שיטת לימוד ייחודית",
      description: "5 מפגשים חוויתיים בני 4 ימים כל אחד המתקיימים במדבר",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-blue-500/20 to-purple-500/20",
      icon: FaUsers,
    },
    {
      title: "תוכן מעשי",
      description: "ידע מעשי שפותח על ידי בכירים במערכות בטחוניות בשילוב כלי למידה חדשניים",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-purple-500/20 to-pink-500/20",
      icon: FaLightbulb
    },
    {
      title: "פיתוח מנהיגות",
      description: "פיתוח מנהלים בעלי ראייה מערכתית ויכולת לגשר בין אנשים",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-pink-500/20 to-red-500/20",
      icon: FaHandshake
    },
    {
      title: "חניכה וליווי",
      description: "חניכה וליווי מקצועי על ידי מנטורים בכירים מתחומים שונים",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-red-500/20 to-orange-500/20",
      icon: FaUserGraduate
    },
    {
      title: "מיזמים חברתיים",
      description: "מיזמים משותפים בעלי ערך חברתי ותרומה לחברה הישראלית",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-orange-500/20 to-yellow-500/20",
      icon: FaHeart
    },
    {
      title: "למידה אינטימית",
      description: "למידה בקבוצה של עד 24 אנשים לבניית חיבור עמוק ומשמעותי",
      height: "row-span-1",
      iconColor: "text-blue-500",
      color: "from-yellow-500/20 to-pink-500/20",
      icon: FaUsers
    },
   
  ];

  return (
    <section id='roadmap' ref={containerRef} className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-[5px_5px_15px_rgba(59,130,246,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(45,45,45,0.8)] inline-flex items-center justify-center">
              <div className="bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full p-2 shadow-[inset_2px_2px_5px_rgba(59,130,246,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(45,45,45,0.8)]">
                <BsStars className="text-blue-500 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 tracking-tight">
            ייחודיות <span className="text-blue-600 dark:text-blue-400">התכנית</span>
          </h2>
        </motion.div>

        {/* Snake Flow Line */}
        <div className="absolute w-full" style={{ height: '100%', top: '0', zIndex: 0 }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 100 
                 C 200 200, 600 200, 700 400
                 C 800 600, 200 800, 100 1000
                 C 0 1100, 600 1100, 700 1200"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="text-primary/30"
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-center mb-24 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-5/12">
                <motion.div
                  className={`bg-gradient-to-br ${step.color} backdrop-blur-xl bg-white/5 dark:bg-gray-900/5 
                    rounded-lg p-6 shadow-lg transform transition-all duration-300 
                    cursor-pointer relative z-10 hover:scale-105 hover:shadow-xl`}
                >
                  <motion.div 
                    className="relative w-16 h-16 mb-4 rounded-full
                    bg-gradient-to-br from-white/20 to-transparent 
                    backdrop-blur-xl
                    border border-white/20 dark:border-white/10
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                    dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                    flex items-center justify-center"
                  >
                    <div className="relative w-14 h-14 rounded-full
                      bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10
                      backdrop-filter backdrop-blur-lg
                      border border-white/30 dark:border-white/5
                      shadow-[inset_0_0_12px_rgba(255,255,255,0.4)]
                      dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)]
                      flex items-center justify-center"
                    >
                      <step.icon className={`text-4xl ${step.iconColor} opacity-80 filter drop-shadow-lg transition-all duration-300 transform hover:scale-110`} />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Empty space for opposite side */}
              <div className="hidden md:block w-5/12">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 