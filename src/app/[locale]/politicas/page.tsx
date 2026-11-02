import CinematicHeader from '@/components/layout/CinematicHeader';
import Link from 'next/link';
import { ShieldCheck, Lock, Cookie, UserCheck, RefreshCw, Trash2, Mail, MapPin, Phone } from 'lucide-react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  return { title: locale === 'es' ? 'Política de Privacidad | Renuevo Church' : 'Privacy Policy | Renuevo Church' };
}

export default async function PrivacyPolicyPage({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <div className="bg-primary-sand min-h-screen pb-32 text-primary-navy selection:bg-accent-gold selection:text-white">
      <CinematicHeader 
        title={isEs ? 'Política de Privacidad' : 'Privacy Policy'}
        subtitle={isEs ? 'Protegiendo tu información, respetando tu privacidad y sirviendo a la comunidad con integridad.' : 'Protecting your information, respecting your privacy, and serving our community with integrity.'}
        backgroundImageUrl="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
      />

      <section className="container mx-auto px-6 max-w-4xl py-20 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-stone-200">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-8 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-accent-gold block mb-1">
                {isEs ? 'Estatuto de Privacidad y Cumplimiento' : 'Privacy & Compliance Charter'}
              </span>
              <p className="text-stone-500 italic text-sm">
                {isEs ? 'Última actualización: Noviembre de 2026' : 'Last updated: November 2026'}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{isEs ? 'Cumplimiento Legal y Ético' : 'Legal & Ethical Compliance'}</span>
            </div>
          </div>

          <div className="prose prose-stone max-w-none text-stone-700 space-y-8 leading-relaxed">
            
            {/* 1. Responsable */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">1.</span> {isEs ? 'Identidad del Responsable' : 'Entity Identity & Scope'}
              </h2>
              <p>
                {isEs 
                  ? 'Renuevo Church es una congregación y organización religiosa sin fines de lucro (501(c)(3)) debidamente constituida conforme a las leyes del Estado de Arizona, Estados Unidos de América, con sede en 6331 W Lamar Rd, Glendale, AZ 85301. Administramos este portal con un estricto compromiso de transparencia, integridad y respeto a la privacidad de nuestra membresía y visitantes.'
                  : 'Renuevo Church is a 501(c)(3) non-profit religious organization incorporated under the laws of the State of Arizona, United States of America, located at 6331 W Lamar Rd, Glendale, AZ 85301. We operate this portal with a strict commitment to transparency, integrity, and respect for the privacy of our members and visitors.'}
              </p>
            </div>

            {/* 2. Minimización de datos */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">2.</span> {isEs ? 'Información que Recopilamos y Principio de Minimización' : 'Information Collected & Data Minimization'}
              </h2>
              <p>
                {isEs 
                  ? 'Aplicamos el principio de minimización de datos: solo solicitamos la información estrictamente necesaria para fines pastorales, comunitarios o de gestión de eventos.'
                  : 'We enforce the data minimization principle: we only collect information strictly necessary for pastoral, community, or event administration purposes.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>{isEs ? 'Formulario de eventos (Congreso de varones / Hombres de Altar):' : 'Event Registration Forms (Men\'s Congress):'}</strong>{' '}
                  {isEs ? 'Nombre, apellido, edad, iglesia de origen y teléfono. Correo electrónico y talla de camiseta son estrictamente opcionales y se solicitan con propósitos informativos de estimación.' : 'First name, last name, age, home church, and phone number. Email address and t-shirt size are strictly optional and requested solely for informational/planning purposes.'}
                </li>
                <li>
                  <strong>{isEs ? 'Comprobantes de donaciones y deducción fiscal:' : 'Donation Declarations & Tax Receipts:'}</strong>{' '}
                  {isEs ? 'Nombre, correo electrónico, dirección postal y referencia de aportación para la emisión de constancias de donación deducibles de impuestos.' : 'Name, email, mailing address, and contribution reference for issuing official tax-deductible contribution receipts.'}
                </li>
                <li>
                  <strong>{isEs ? 'Peticiones de oración y contacto pastoral:' : 'Prayer Requests & Pastoral Contact:'}</strong>{' '}
                  {isEs ? 'Datos compartidos de manera voluntaria y confidencial para brindar apoyo espiritual.' : 'Voluntary and confidential information shared to provide spiritual support.'}
                </li>
              </ul>
            </div>

            {/* 3. Consentimiento de Menores */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">3.</span> {isEs ? 'Protección de Menores y Consentimiento Parental' : 'Child Privacy & Parental Consent'}
              </h2>
              <p>
                {isEs 
                  ? 'No recopilamos intencionalmente datos personales de menores de 18 años sin la autorización verificable de su padre, madre o tutor legal. En cualquier formulario de inscripción en el que participe un menor de edad, el sistema exige obligatoriamente los datos de contacto del tutor y una declaración expresa de consentimiento parental. Si un padre o tutor descubre que su hijo ha proporcionado información sin autorización, puede solicitar su eliminación inmediata.'
                  : 'We do not knowingly collect personal information from individuals under 18 years old without verifiable authorization from a parent or legal guardian. Any event registration form involving a minor requires guardian contact details and an explicit parental consent statement. If a parent or guardian discovers that a child has provided data without authorization, they may request its immediate purge.'}
              </p>
            </div>

            {/* 4. Política de Cookies */}
            <div id="cookies">
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">4.</span> {isEs ? 'Política de Cookies y Tecnologías de Rastreo' : 'Cookie Policy & Tracking Technologies'}
              </h2>
              <p>
                {isEs 
                  ? 'Utilizamos cookies únicamente con fines técnicos esenciales y analítica anónima para entender la afluencia de visitas. No comercializamos datos con anunciantes ni utilizamos píxeles invasivos de seguimiento comercial.'
                  : 'We utilize cookies solely for essential technical functions and anonymous aggregate analytics to understand visitor volume. We do not sell data to advertisers or use invasive commercial tracking pixels.'}
              </p>
              
              <div className="overflow-x-auto my-4 border border-stone-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <th className="p-3">{isEs ? 'Tipo de Cookie' : 'Cookie Type'}</th>
                      <th className="p-3">{isEs ? 'Propósito' : 'Purpose'}</th>
                      <th className="p-3">{isEs ? 'Estado por Defecto' : 'Default Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-primary-navy">{isEs ? 'Técnicas / Esenciales' : 'Technical / Essential'}</td>
                      <td className="p-3">{isEs ? 'Persistencia de idioma (NEXT_LOCALE) y guardado de consentimiento.' : 'Language persistence (NEXT_LOCALE) and consent state.'}</td>
                      <td className="p-3 font-semibold text-emerald-600">{isEs ? 'Siempre Activas' : 'Always Active'}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-primary-navy">{isEs ? 'Analíticas (Google Analytics)' : 'Analytics (Google Analytics)'}</td>
                      <td className="p-3">{isEs ? 'Métricas agregadas anónimas (IP anonimizada). No cargan hasta recibir tu consentimiento en el banner.' : 'Anonymous aggregate metrics (IP anonymized). Only loads after banner acceptance.'}</td>
                      <td className="p-3 font-semibold text-amber-600">{isEs ? 'Sujeta a Consentimiento' : 'Consent-Gated'}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-primary-navy">{isEs ? 'Publicitarias / Retargeting' : 'Advertising / Retargeting'}</td>
                      <td className="p-3">{isEs ? 'Cero rastreadores de publicidad comercial ni venta de perfiles.' : 'Zero commercial advertising pixels or behavioral trackers.'}</td>
                      <td className="p-3 font-semibold text-stone-400">{isEs ? 'Inexistentes' : 'Non-Existent'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Política de Reembolsos */}
            <div id="reembolsos">
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">5.</span> {isEs ? 'Política de Reembolsos y Aclaraciones' : 'Refund, Cancellation & Giving Policy'}
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-primary-navy mb-1 text-base">
                    {isEs ? 'A. Inscripciones a Eventos y Congresos:' : 'A. Event & Congress Registrations:'}
                  </h3>
                  <p className="text-sm">
                    {isEs 
                      ? 'Para eventos que requieran cuota de recuperación de materiales o alimentación, el participante podrá solicitar reembolso íntegro del 100% notificando a la administración hasta 7 días naturales antes del inicio del evento. Asimismo, el registro es 100% transferible a otra persona en cualquier momento sin penalización alguna.'
                      : 'For church events with material or meal recovery fees, participants may request a 100% full refund by notifying administration up to 7 calendar days before the event starts. Registrations are also 100% transferable to another attendee at any time without fees.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-primary-navy mb-1 text-base">
                    {isEs ? 'B. Donaciones, Diezmos y Ofrendas Voluntarias:' : 'B. Voluntary Tithes & Offerings:'}
                  </h3>
                  <p className="text-sm">
                    {isEs 
                      ? 'Las aportaciones de diezmos y ofrendas son donaciones caritativas cristianas voluntarias destinadas a la obra ministerial y comunitaria. Por su naturaleza legal religiosa en EE. UU., las donaciones voluntarias se consideran regalos a perpetuidad deducibles de impuestos. No obstante, si se cometiera un error evidente de digitación o un cargo duplicado involuntario en pagos electrónicos, el donante podrá solicitar aclaración y reintegro durante los primeros 30 días posteriores comunicándose a administración.'
                      : 'Tithes and offerings are voluntary Christian charitable contributions dedicated to ministerial and community outreach. Under US non-profit regulations, charitable gifts are considered non-refundable tax-deductible donations. However, in the event of an unintentional typographical error or duplicate electronic charge, the donor may contact administration within 30 days for a swift clerical correction and refund.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Seguridad y Confidencialidad */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">6.</span> {isEs ? 'Seguridad, Confidencialidad y Terceros' : 'Data Security & Confidentiality'}
              </h2>
              <p>
                {isEs 
                  ? 'Toda la navegación y envío de información se realiza bajo cifrado forzado SSL/TLS 1.3 con certificados de 256 bits. Los registros de formularios se alojan de forma segura en Sanity CMS y servidores de clase mundial con controles estrictos de acceso. Jamás vendemos, alquilamos ni compartimos tus datos con entidades comerciales o agencias de mercadeo.'
                  : 'All web traffic is transmitted via enforced SSL/TLS 1.3 256-bit encryption. Form records are stored securely in Sanity CMS and world-class cloud infrastructure with strict access controls. We never sell, rent, or share your data with commercial marketing entities.'}
              </p>
            </div>

            {/* 7. Eliminación de Datos */}
            <div id="eliminacion-datos" className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <h2 className="text-xl font-serif font-bold text-primary-navy mb-2 flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-accent-gold" />
                {isEs ? '7. Solicitud de Eliminación de Datos (Derecho de Supresión)' : '7. Data Deletion & ARCO Rights'}
              </h2>
              <p className="text-sm text-stone-700 mb-4">
                {isEs 
                  ? 'En cualquier momento tienes derecho a solicitar la eliminación permanente, rectificación o consulta de cualquier dato personal que hayas compartido con Renuevo Church en formularios de eventos, tarjetas de conexión o registros de donaciones.'
                  : 'At any time, you hold the right to request the permanent erasure, rectification, or review of any personal data you have shared with Renuevo Church through event forms, connection cards, or donation records.'}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={`mailto:contacto@renuevochurch.org?subject=${encodeURIComponent(isEs ? 'Solicitud de Eliminación de Datos - Renuevo Church' : 'Data Deletion Request - Renuevo Church')}&body=${encodeURIComponent(isEs ? 'Hola Renuevo Church,\n\nDeseo ejercer mi derecho de eliminación de datos personales de sus registros.\n\nNombre completo:\nCorreo electrónico registrado:\nTeléfono:\n\nGracias.' : 'Hello Renuevo Church,\n\nI wish to exercise my right to delete my personal data from your records.\n\nFull Name:\nRegistered Email:\nPhone:\n\nThank you.')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-navy text-accent-gold font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-accent-gold outline-none"
                >
                  <Mail className="w-4 h-4" />
                  {isEs ? 'Solicitar Eliminación de Datos' : 'Request Data Deletion'}
                </a>
                <span className="text-xs text-stone-500">
                  {isEs ? 'Tiempo de resolución máximo: 5 días hábiles.' : 'Maximum resolution time: 5 business days.'}
                </span>
              </div>
            </div>

            {/* 8. Contacto Formal */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-navy mb-3 flex items-center gap-3">
                <span className="text-accent-gold">8.</span> {isEs ? 'Datos de Contacto' : 'Contact Information'}
              </h2>
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
        </div>
      </section>
    </div>
  );
}
