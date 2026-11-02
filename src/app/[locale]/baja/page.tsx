'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import CinematicHeader from '@/components/layout/CinematicHeader';
import { Mail, CheckCircle2, HeartHandshake, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BajaPage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-primary-sand min-h-screen pb-32 text-primary-navy selection:bg-accent-gold selection:text-white">
      <CinematicHeader 
        title={isEs ? 'Cancelar Suscripción' : 'Unsubscribe from Emails'}
        subtitle={isEs ? 'Respetamos tu bandeja de entrada y tu tiempo.' : 'We respect your inbox and your time.'}
        backgroundImageUrl="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="container mx-auto px-6 max-w-xl py-20 relative z-10">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-stone-200 text-center">
          
          {submitted ? (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3">
                {isEs ? 'Suscripción Cancelada' : 'Successfully Unsubscribed'}
              </h2>
              <p className="text-stone-600 text-sm mb-8 leading-relaxed max-w-sm">
                {isEs 
                  ? `Hemos removido a ${email} de nuestra lista de correos. No recibirás más notificaciones de eventos o boletines de Renuevo Church.` 
                  : `We have removed ${email} from our mailing list. You will no longer receive announcements or newsletters from Renuevo Church.`}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-navy text-accent-gold font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-accent-gold outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                {isEs ? 'Volver al Inicio' : 'Return Home'}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent-gold/10 text-accent-gold flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3">
                {isEs ? '¿Deseas dejar de recibir correos?' : 'Want to stop receiving emails?'}
              </h2>
              <p className="text-stone-600 text-sm mb-8 leading-relaxed max-w-sm">
                {isEs 
                  ? 'Ingresa tu correo electrónico a continuación y te daremos de baja de inmediato de nuestros boletines y avisos de eventos.'
                  : 'Enter your email address below and you will be immediately removed from our church newsletters and event updates.'}
              </p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
                <div>
                  <label htmlFor="baja-email" className="text-xs uppercase tracking-wider font-bold text-stone-600 block mb-2">
                    {isEs ? 'Correo Electrónico' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="baja-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@ejemplo.com"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold text-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-navy text-accent-gold font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-stone-800 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-accent-gold outline-none cursor-pointer mt-2"
                >
                  {isEs ? 'Confirmar Cancelación de Suscripción' : 'Confirm Unsubscribe'}
                </button>
              </form>

              <p className="mt-8 text-xs text-stone-400">
                {isEs ? 'Siempre serás bienvenido en casa cuando desees volver.' : 'You will always be welcome home whenever you wish to return.'}
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
