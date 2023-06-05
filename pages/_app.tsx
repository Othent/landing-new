import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Nav from '../components/Nav';
import CookieConsentBanner from '../components/CookieConsent';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#2375ef',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookieConsent');
    setCookieConsent(storedCookieConsent);

    const timer = setTimeout(() => {
      setShowCookieBanner(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
      {showCookieBanner && cookieConsent === null && <CookieConsentBanner />}
      {cookieConsent === 'true' && 
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-MH1E8F6681"
            async
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MH1E8F6681');
          `}
          </Script>
        </>
      }
    </>
  );
}