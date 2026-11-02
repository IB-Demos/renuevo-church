'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsentBanner() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('renuevo_cookie_consent');
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
    };
    window.addEventListener('open-cookie-settings', handleReopen);
    return () => window.removeEventListener('open-cookie-settings', handleReopen);
  }, []);

  const handleConsent = (choice: 'accepted' | 'essential') => {
    localStorage.setItem('renuevo_cookie_consent', choice);
    setIsVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: choice }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[80] md:max-w-md w-auto"
          role="region"
          aria-label={isEs ? 'Aviso de Cookies' : 'Cookie Notice'}
        >
          <div className="bg-white/95 backdrop-blur-md border border-stone-200/80 rounded-2xl p-6 shadow-2xl text-primary-navy flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-gold/10 text-accent-gold">
                  <Cookie className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-navy">
                  {isEs ? 'Privacidad y Cookies' : 'Privacy & Cookies'}
                </h3>
              </div>
              <button
                onClick={() => handleConsent('essential')}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent-gold outline-none"
                aria-label={isEs ? 'Cerrar aviso' : 'Close notice'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {isEs 
                ? 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y analíticas anónimas para mejorar tu experiencia congregacional. Cero publicidad intrusiva.'
                : 'We use necessary technical cookies for site operation and anonymous analytics to improve your experience. Zero commercial advertising.'}
              {' '}
              <Link 
                href={`/${locale}/politicas`}
                className="text-accent-gold hover:underline font-semibold"
              >
                {isEs ? 'Leer política de cookies' : 'Read cookie policy'}
              </Link>
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleConsent('essential')}
                className="flex-1 py-2.5 px-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition-all text-center focus-visible:ring-2 focus-visible:ring-accent-gold outline-none cursor-pointer"
              >
                {isEs ? 'Solo necesarias' : 'Essential only'}
              </button>
              <button
                type="button"
                onClick={() => handleConsent('accepted')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-primary-navy hover:bg-stone-800 text-accent-gold text-xs font-bold transition-all text-center shadow-md focus-visible:ring-2 focus-visible:ring-accent-gold outline-none cursor-pointer"
              >
                {isEs ? 'Aceptar todas' : 'Accept all'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
