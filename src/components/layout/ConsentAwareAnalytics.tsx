'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function ConsentAwareAnalytics({ gaId }: { gaId?: string }) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('renuevo_cookie_consent');
      setHasConsent(consent === 'accepted');
    };

    checkConsent();

    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setHasConsent(customEvent.detail === 'accepted');
    };

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    return () => window.removeEventListener('cookie-consent-changed', handleConsentChange);
  }, []);

  if (!gaId || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
