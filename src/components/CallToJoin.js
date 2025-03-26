import React from 'react'

const CallToJoin = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white/10 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-white mb-6">הצטרפו למחזור הרביעי</h2>
            <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
              העמותה ע&quot;ש מאיר דגן ז&quot;ל מזמינה אתכם: מנהלים בכירים, קובעי מדיניות ומנהיגים קהילתיים להצטרף למחזור הרביעי של התכנית. יחד, נבנה עתיד של שיח, הכלה ועשייה משותפת למען חברה ישראלית חזקה ומלוכדת יותר.
            </p>
            <div className="mt-8">
              <button 
                onClick={() => window.open('https://appleseeds.org.il/donations/', '_blank')}
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
                הרשמו עכשיו
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToJoin