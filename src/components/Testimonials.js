'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          מה המשתתפים מספרים?
        </h2>

        <div className="flex justify-center items-center relative h-[400px] overflow-hidden">
          <div
            className="absolute w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute top-0 right-0 w-full h-full flex items-center justify-center"
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 