'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: "ד״ר רחל ישראלי",
      role: "מייסדת ומנהלת התכנית",
      bio: "מומחית בפיתוח מנהיגות עם 15 שנות ניסיון בתחום החינוך והגישור",
      image: "/team/person1.jpg"
    },
    {
      name: "אמיר כהן",
      role: "מנחה בכיר",
      bio: "מנחה קבוצות מנוסה עם התמחות בפיתוח מיומנויות תקשורת",
      image: "/team/person2.jpg"
    },
    // Add more team members as needed
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        מי אנחנו?
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[400px] perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-center">{member.role}</p>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="bg-blue-600 p-6 rounded-xl shadow-lg h-full flex items-center justify-center text-white">
                  <p className="text-center">{member.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 