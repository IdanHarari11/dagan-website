import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { setupScrollTracking } from '@/lib/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dagan Website',
  description: 'Dagan Website Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <Script
          id="setup-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (${setupScrollTracking.toString()})();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 