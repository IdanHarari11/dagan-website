'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "מיזם גישור קהילתי",
      description: "תכנית המחברת בין קהילות שונות דרך פרויקטים משותפים",
      image: "/projects/project1.jpg"
    },
    {
      title: "מנהיגות צעירה",
      description: "פיתוח כישורי מנהיגות בקרב בני נוער",
      image: "/projects/project2.jpg"
    },
    {
      title: "דיאלוג בין-דורי",
      description: "יצירת שיח משמעותי בין צעירים ומבוגרים",
      image: "/projects/project3.jpg"
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        המיזמים שמשנים את המחר
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 