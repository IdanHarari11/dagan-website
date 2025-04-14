import { GA_MEASUREMENT_ID } from './gtag'

// בדיקת טעינת GA
const checkGALoading = () => {
  if (typeof window.gtag === 'function') {
    console.log('Google Analytics loaded successfully');
    return true;
  } else {
    console.error('Google Analytics failed to load');
    return false;
  }
}

// מעקב אחר שליחת טופס
export const trackFormSubmission = (formName) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'form_submission', {
    form_name: formName,
    event_category: 'Forms',
    event_label: `Form: ${formName}`
  })
}

// מעקב אחר כניסה לטאב
export const trackTabView = (tabName) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'tab_view', {
    tab_name: tabName,
    event_category: 'Navigation',
    event_label: `Tab: ${tabName}`
  })
}

// מעקב אחר גלילה
export const trackScroll = (depth) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'scroll_depth', {
    depth: depth,
    event_category: 'Engagement',
    event_label: `Scroll Depth: ${depth}%`
  })
}

// מעקב אחר לחיצות על כפתורים
export const trackButtonClick = (buttonName, buttonLocation) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'Interaction',
    event_label: `Button: ${buttonName} at ${buttonLocation}`
  })
}

// מעקב אחר חיפושים
export const trackSearch = (searchTerm) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'search', {
    search_term: searchTerm,
    event_category: 'Interaction',
    event_label: `Search: ${searchTerm}`
  })
}

// מעקב אחר שגיאות
export const trackError = (errorMessage, errorLocation) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'error', {
    error_message: errorMessage,
    error_location: errorLocation,
    event_category: 'Error',
    event_label: `Error at ${errorLocation}: ${errorMessage}`
  })
}

// מעקב אחר זמן שהייה בדף
export const trackTimeOnPage = (seconds) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'time_on_page', {
    seconds: seconds,
    event_category: 'Engagement',
    event_label: `Time on page: ${seconds} seconds`
  })
}

// מעקב אחר יציאה מדף
export const trackPageExit = (exitPage) => {
  if (!checkGALoading()) return;
  
  window.gtag('event', 'page_exit', {
    exit_page: exitPage,
    event_category: 'Navigation',
    event_label: `Exit from: ${exitPage}`
  })
}

// פונקציה להגדרת מעקב גלילה
export const setupScrollTracking = () => {
  if (!checkGALoading()) return;
  
  let tracked25 = false
  let tracked50 = false
  let tracked75 = false

  window.addEventListener('scroll', () => {
    const winHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100

    if (scrollPercent >= 75 && !tracked75) {
      tracked75 = true
      trackScroll(75)
    } else if (scrollPercent >= 50 && !tracked50) {
      tracked50 = true
      trackScroll(50)
    } else if (scrollPercent >= 25 && !tracked25) {
      tracked25 = true
      trackScroll(25)
    }
  })
}

// פונקציה להגדרת מעקב זמן שהייה
export const setupTimeTracking = () => {
  if (!checkGALoading()) return;
  
  let startTime = Date.now()
  
  // מעקב כל 30 שניות
  const timeInterval = setInterval(() => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    trackTimeOnPage(timeSpent)
  }, 30000)

  // ניקוי בטעינת דף חדש
  window.addEventListener('beforeunload', () => {
    clearInterval(timeInterval)
    const finalTime = Math.floor((Date.now() - startTime) / 1000)
    trackTimeOnPage(finalTime)
    trackPageExit(window.location.pathname)
  })
}

// פונקציה להגדרת מעקב שגיאות
export const setupErrorTracking = () => {
  if (!checkGALoading()) return;
  
  window.addEventListener('error', (event) => {
    trackError(event.message, event.filename)
  })

  window.addEventListener('unhandledrejection', (event) => {
    trackError(event.reason, 'Promise Rejection')
  })
} 