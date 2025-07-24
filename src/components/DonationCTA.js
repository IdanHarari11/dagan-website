import Link from 'next/link';

export default function DonationCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 to-yellow-100/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-200/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            הצטרפו למסע השינוי
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            תרומתכם תאפשר לנו להמשיך לפתח מנהיגות מגשרת ולצמצם את השסעים בחברה הישראלית
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative">
              {/* Neon blob shadow behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-400 rounded-full blur-xl opacity-60 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-300 rounded-full blur-2xl opacity-40 scale-125"></div>
              
              <Link 
                href="/donations" 
                className="relative bg-white text-yellow-600 font-bold py-4 px-8 rounded-full hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center border border-yellow-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                תרמו עכשיו
              </Link>
            </div>
            
            <div className="text-gray-600 text-sm">
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                מוכר לצרכי מס
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 