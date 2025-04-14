import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dagan Website',
  description: 'Dagan Website Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBE6MPSZMJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MBE6MPSZMJ', {
                debug_mode: true,
                send_page_view: true,
                page_location: window.location.href,
                page_path: window.location.pathname,
                cookie_domain: 'dagan-leadership.com',
                transport_url: 'https://www.google-analytics.com'
              });
              console.log('Google Analytics initialized for domain: dagan-leadership.com');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 