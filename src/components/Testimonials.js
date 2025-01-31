'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: 'יעל כהן',
      role: 'בוגרת מחזור 2022',
      image: '/images/dagan.jpg',
      text: 'תוכנית דגן שינתה את הדרך שבה אני מתמודדת עם אתגרים חברתיים. למדתי כלים מעשיים להובלת שינוי משמעותי.'
    },
    {
      name: 'דוד לוי',
      role: 'בוגר מחזור 2021',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
      text: 'ההשתתפות בתוכנית פתחה בפני דלתות חדשות והעניקה לי כלים מעשיים להוביל שינוי בקהילה שלי.'
    },
    {
      name: 'מרים אברהם',
      role: 'בוגרת מחזור 2023',
      image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      text: 'הכלים שרכשתי בתוכנית מלווים אותי בכל יום בעבודתי החברתית. זו הייתה חוויה מעצבת ומשמעותית.'
    },
    {
      name: 'דוד לוי',
      role: 'בוגר מחזור 2021',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
      text: 'ההשתתפות בתוכנית פתחה בפני דלתות חדשות והעניקה לי כלים מעשיים להוביל שינוי בקהילה שלי.'
    },
    {
      name: 'יעל כהן',
      role: 'בוגרת מחזור 2022',
      image: '/images/dagan.jpg',
      text: 'תוכנית דגן שינתה את הדרך שבה אני מתמודדת עם אתגרים חברתיים. למדתי כלים מעשיים להובלת שינוי משמעותי.'
    },
    {
      name: 'מרים אברהם',
      role: 'בוגרת מחזור 2023',
      image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      text: 'הכלים שרכשתי בתוכנית מלווים אותי בכל יום בעבודתי החברתית. זו הייתה חוויה מעצבת ומשמעותית.'
    },
    {
      name: 'מרים אברהם',
      role: 'בוגרת מחזור 2023',
      image: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
      text: 'הכלים שרכשתי בתוכנית מלווים אותי בכל יום בעבודתי החברתית. זו הייתה חוויה מעצבת ומשמעותית.'
    },
    {
      name: 'דוד לוי',
      role: 'בוגר מחזור 2021',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
      text: 'ההשתתפות בתוכנית פתחה בפני דלתות חדשות והעניקה לי כלים מעשיים להוביל שינוי בקהילה שלי.'
    },
    {
      name: 'יעל כהן',
      role: 'בוגרת מחזור 2022',
      image: '/images/dagan.jpg',
      text: 'תוכנית דגן שינתה את הדרך שבה אני מתמודדת עם אתגרים חברתיים. למדתי כלים מעשיים להובלת שינוי משמעותי.'
    },
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  const totalSets = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [itemsPerPage]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length);
    }, 5000); // Change every 5 seconds
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          מה המשתתפים מספרים?
        </h2>

        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mx-4 shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {Array.from({ length: totalSets }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}