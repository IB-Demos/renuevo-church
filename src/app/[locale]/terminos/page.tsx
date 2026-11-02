import CinematicHeader from '@/components/layout/CinematicHeader';
import Link from 'next/link';
import { Shield, FileText, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  return { title: locale === 'es' ? 'Términos y Condiciones | Renuevo Church' : 'Terms and Conditions | Renuevo Church' };
}

export default async function TermsPage({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <div className="bg-primary-sand min-h-screen pb-32 text-primary-navy selection:bg-accent-gold selection:text-white">
      <CinematicHeader 
        title={isEs ? 'Términos y Condiciones' : 'Terms and Conditions'}
        subtitle={isEs ? 'Acuerdo legal, normas de convivencia y lineamientos de uso de nuestra plataforma.' : 'Legal agreement, community standards, and terms of use for our platform.'}
        backgroundImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="container mx-auto px-6 max-w-4xl py-20 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-stone-200">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-8 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-accent-gold block mb-1">
                {isEs ? 'Estatuto de Uso y Participación' : 'Terms of Use & Participation'}
              </span>
              <p className="text-stone-500 italic text-sm">
                {isEs ? 'Última actualización: Noviembre de 2026' : 'Last updated: November 2026'}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold">
              <FileText className="w-4 h-4 text-accent-gold" />
              <span>{isEs ? 'Estatuto Institucional' : 'Institutional Charter'}</span>
            </div>
          </div>

          <div className="prose prose-stone max-w-none text-stone-700 space-y-8 leading-relaxed">
            
            {/* 1. Aceptación */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">1.</span> {isEs ? 'Aceptación de los Términos' : 'Acceptance of Terms'}
              </h2>
              <p>
                {isEs 
                  ? 'Al acceder a este portal web, participar en nuestras transmisiones, registrarse para eventos o realizar aportaciones voluntarias, usted acepta estar sujeto a estos Términos y Condiciones, a nuestra Política de Privacidad y a las leyes aplicables en el Estado de Arizona, EE. UU.'
                  : 'By accessing this portal, viewing broadcasts, registering for church events, or making voluntary donations, you agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws in the State of Arizona, USA.'}
              </p>
            </div>

            {/* 2. Licencia de Uso */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">2.</span> {isEs ? 'Propiedad Intelectual y Licencia Ministerial' : 'Intellectual Property & Ministerial License'}
              </h2>
              <p>
                {isEs 
                  ? 'Los sermones, devocionales, guías de estudio, audios y materiales audiovisuales producidos por Renuevo Church se distribuyen libremente para edificación personal, espiritual y familiar no comercial. Queda estrictamente prohibida su reventa, comercialización o tergiversación con fines de lucro.'
                  : 'Sermons, devotionals, study guides, audio tracks, and audiovisual materials produced by Renuevo Church are provided freely for personal, spiritual, and family non-commercial edification. Reselling, commercial distribution, or misleading exploitation for profit is strictly prohibited.'}
              </p>
            </div>

            {/* 3. Eventos y Congresos */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">3.</span> {isEs ? 'Participación en Eventos y Congresos' : 'Events & Congress Participation'}
              </h2>
              <p>
                {isEs 
                  ? 'Los registros a eventos (como el Congreso de Varones Hombres de Altar) son de carácter abierto o con cuotas transparentes de recuperación. Renuevo Church promueve un ambiente de hermandad, respeto y edificación en Cristo. Nos reservamos el derecho de admisión ante conductas que quebranten la seguridad o el bienestar de la congregación.'
                  : 'Registrations for church events (such as the Men\'s Congress) are open or based on transparent recovery fees. Renuevo Church maintains a sacred environment of brotherhood, peace, and mutual respect. We reserve the right of admission to safeguard congregational safety and spiritual wellbeing.'}
              </p>
            </div>

            {/* 4. Donaciones y Transparencia */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">4.</span> {isEs ? 'Donaciones Voluntarias y Cero Cobros Ocultos' : 'Voluntary Giving & Zero Hidden Fees'}
              </h2>
              <p>
                {isEs 
                  ? 'En Renuevo Church no existen membresías forzosas ni cobros ocultos por asistir a nuestros servicios congregacionales. Las donaciones, diezmos y ofrendas son contribuciones cristianas voluntarias en cumplimiento con 2 Corintios 9:7. Los donantes pueden solicitar comprobantes de deducción de impuestos mediante nuestro formulario oficial.'
                  : 'Renuevo Church charges zero mandatory membership fees or hidden costs to attend our congregational services. Donations, tithes, and offerings are voluntary Christian gifts in accordance with 2 Corinthians 9:7. Donors may request tax-deductible contribution receipts through our official portal.'}
              </p>
            </div>

            {/* 5. Reembolsos */}
            <div id="reembolsos" className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">5.</span> {isEs ? 'Política de Reembolsos y Cancelaciones' : 'Refund & Cancellation Policy'}
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Eventos con costo:' : 'Ticketed Events:'}</strong>{' '}
                    {isEs 
                      ? 'Reembolso del 100% notificando a administración con al menos 7 días de anticipación al evento. Los boletos son 100% transferibles en cualquier momento sin cargo.'
                      : '100% full refund upon notifying administration at least 7 days prior to event commencement. Registrations are 100% transferable anytime free of charge.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Donaciones electrónicas:' : 'Electronic Donations:'}</strong>{' '}
                    {isEs 
                      ? 'En caso de error involuntario de captura o duplicidad de transacción bancaria, se reintegrará la suma reportada dentro de los primeros 30 días posteriores al cargo.'
                      : 'In the case of unintentional capture errors or duplicate banking transactions, disputed charges reported within 30 days will be promptly corrected and refunded.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* 6. Ley y Jurisdicción */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">6.</span> {isEs ? 'Ley Aplicable y Resolución Fraternal' : 'Governing Law & Christian Dispute Resolution'}
              </h2>
              <p>
                {isEs 
                  ? 'Estos términos se rigen por las leyes del Estado de Arizona y de los Estados Unidos de América. Animamos a cualquier miembro o usuario a buscar primeramente la resolución fraternal de cualquier diferencia de acuerdo con los principios bíblicos de conciliación y paz.'
                  : 'These terms are governed by the laws of the State of Arizona and the United States of America. We encourage all participants to seek fraternal and peaceful reconciliation in accordance with biblical principles of mediation.'}
              </p>
            </div>

            {/* 7. Datos de Contacto */}
            <div className="bg-stone-100 p-6 rounded-2xl not-italic text-stone-700 space-y-2 text-sm border border-stone-200">
              <p className="font-bold text-primary-navy text-base">Renuevo Church</p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-gold" /> 6331 W Lamar Rd, Glendale, AZ 85301
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-gold" /> (480) 440-0396
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-gold" /> contacto@renuevochurch.org
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
