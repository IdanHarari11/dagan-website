import { GA_MEASUREMENT_ID } from './gtag'

// מעקב אחר שליחת טופס
export const trackFormSubmission = (formName) => {
  window.gtag('event', 'form_submission', {
    form_name: formName,
    event_category: 'Forms',
    event_label: `Form: ${formName}`
  })
}

// מעקב אחר כניסה לטאב
export const trackTabView = (tabName) => {
  window.gtag('event', 'tab_view', {
    tab_name: tabName,
    event_category: 'Navigation',
    event_label: `Tab: ${tabName}`
  })
}

// מעקב אחר גלילה
export const trackScroll = (depth) => {
  window.gtag('event', 'scroll_depth', {
    depth: depth,
    event_category: 'Engagement',
    event_label: `Scroll Depth: ${depth}%`
  })
}

// פונקציה להגדרת מעקב גלילה
export const setupScrollTracking = () => {
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