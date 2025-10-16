'use client';
import { useState } from 'react';

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate legal consent
    if (!consentChecked) { 
      alert("יש לאשר את מדיניות הפרטיות ותנאי השימוש"); 
      return; 
    }
    
    // Create email subject and body from form data
    const subject = `פנייה חדשה מאת ${formData.name}`;
    const body = `שם: ${formData.name}
דוא"ל: ${formData.email}

הודעה:
${formData.message}`;

    // Create mailto URL with encoded parameters
    const mailtoUrl = `mailto:daganleadership@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client in a new window
    window.open(mailtoUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsentChange = (e) => {
    setConsentChecked(e.target.checked);
  };

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white" data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">
              הצטרפו אלינו למסע של שינוי
            </h2>
            <p className="text-xl mb-8">
              בואו להיות חלק מקהילה של מנהיגים שיוצרים שינוי חברתי משמעותי
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:daganleadership@gmail.com" 
                  className="text-white hover:text-blue-100 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('mailto:daganleadership@gmail.com', '_blank');
                  }}
                >
                  daganleadership@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  דוא״ל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              {/* Legal Consent Checkbox - Improved Design */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="flex-shrink-0 mt-0.5">
                    <input 
                      type="checkbox" 
                      checked={consentChecked}
                      onChange={handleConsentChange}
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium">אני מאשר/ת ומסכים/ה</span> כי קראתי והבנתי את{" "}
                    <button 
                      type="button"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium transition-colors" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.openLegal) {
                          window.openLegal("privacy");
                        }
                      }}
                    >
                      מדיניות הפרטיות
                    </button>
                    {" "}ואת{" "}
                    <button 
                      type="button"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium transition-colors" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.openLegal) {
                          window.openLegal("terms");
                        }
                      }}
                    >
                      תנאי השימוש
                    </button>
                    {" "}של עמותת "תוכנית דגן", ואני מסכים/ה לאיסוף, עיבוד ושימוש במידע האישי שלי בהתאם למדיניות זו.
                  </div>
                </label>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  אישור זה נדרש על פי חוק הגנת הפרטיות (תיקון 13) וחוקים נוספים החלים על איסוף ועיבוד מידע אישי.
                </div>
              </div>
              
              <button
                type="submit"
                disabled={!consentChecked}
                className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                  consentChecked 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]' 
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {consentChecked ? 'שליחה' : 'יש לאשר את מדיניות הפרטיות'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 