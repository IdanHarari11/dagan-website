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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 