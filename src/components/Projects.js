'use client';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'גשרים בין קהילות',
      description: 'פרויקט המחבר בין קהילות שונות בחברה הישראלית דרך מפגשים ופעילויות משותפות',
      image: 'https://as2.ftcdn.net/v2/jpg/08/93/82/11/1000_F_893821111_a5jFApYNEsN7RvHm2n8HiAFD7OfYQM1G.jpg',
      category: 'חברה',
    },
    {
      title: 'מנהיגות צעירה',
      description: 'תוכנית המכשירה מנהיגים צעירים להוביל יוזמות חברתיות בקהילותיהם',
      image: 'https://t4.ftcdn.net/jpg/02/80/35/69/240_F_280356966_kTMM1eyuZvS8D5aaIlKrt7KQALSjfEsF.jpg',
      category: 'חינוך',
    },
    {
      title: 'דיאלוג בין-דורי',
      description: 'יצירת שיח משמעותי בין דורות שונים בחברה דרך פרויקטים משותפים',
      image: 'https://t3.ftcdn.net/jpg/01/36/64/24/240_F_136642475_A4qy0YXpT82QpXOw9Thz8ncYUug091S9.jpg',
      category: 'דיאלוג',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            פרויקטים מובילים מהתוכנית
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            יוזמות חברתיות שהובילו בוגרי התוכנית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
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
                <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  קרא עוד &larr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 