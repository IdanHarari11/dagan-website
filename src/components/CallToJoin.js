import React from 'react'

const REGISTRATION_FORM_URL = 'https://forms.gle/MWCBZDKZudX1wST26'
const CALL_FOR_PROPOSALS_PDF = '/files/קול-קורא-מחזור-ה-תכנית-דגן.pdf'

const CallToJoin = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white/10 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-white mb-6">נפתחה ההרשמה למחזור ה&apos;</h2>
            <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto mb-4">
              אנו מזמינים אתכם ואתכן להצטרף למחזור ה&apos; של תכנית דגן למנהיגות
            </p>
            <p className="text-lg text-white/90 mb-6">
              מועד אחרון להגשת מועמדות: 30 ליוני 2026
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#F3C205] text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300"
              >
                הגשת מועמדות
              </a>
              <button
                type="button"
                onClick={() => window.open(CALL_FOR_PROPOSALS_PDF, '_blank')}
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
              >
                קול קורא
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToJoin
