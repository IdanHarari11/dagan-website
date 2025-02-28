import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר" />
        <meta name="keywords" content="מנהיגות, תכנית דגן, עתיד טוב יותר, מנהיגים צעירים" />
        <meta property="og:title" content="תכנית דגן - מנהיגות מגשרת לעתיד טוב יותר" />
        <meta property="og:description" content="תכנית מנהיגות ייחודית המחברת בין עולמות ומפתחת מנהיגים צעירים למען עתיד טוב יותר" />
        <meta property="og:image" content="/images/dagan.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
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