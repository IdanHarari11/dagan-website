import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        {/* External Resources */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Basic Meta Tags */}
        <meta name="description" content="תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר" />
        <meta name="keywords" content="מנהיגות, תכנית דגן, עתיד טוב יותר, מנהיגים צעירים" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר" />
        <meta property="og:description" content="תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר" />
        <meta property="og:image" content="/images/dagan.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר"/>
        <meta property="og:locale" content="he_IL" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר" />
        <meta name="twitter:description" content="תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר" />
        <meta name="twitter:image" content="/images/dagan.jpg" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GT-PZMQJZ9J');
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MBE6MPSZMJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MBE6MPSZMJ');
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-PZMQJZ9J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 