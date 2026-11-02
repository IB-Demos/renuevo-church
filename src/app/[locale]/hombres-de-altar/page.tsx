'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { registerHombresDeAltar } from '@/app/actions/register';
import { Calendar, MapPin, CheckCircle2, User, Hash, Church, Phone, Mail, Shirt, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HombresDeAltarPage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [age, setAge] = useState<string>('');

  const isMinor = age !== '' && Number(age) > 0 && Number(age) < 18;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await registerHombresDeAltar(formData);
    
    if (result.success) {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error || (locale === 'es' ? 'Ocurrió un error. Por favor intenta de nuevo.' : 'An error occurred. Please try again.'));
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24 text-stone-900 selection:bg-accent-gold selection:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:sticky lg:top-32"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-navy">
              {locale === 'es' ? 'Próximo Evento' : "Upcoming Event"}
            </div>
            
            <div className="relative w-72 md:w-96 drop-shadow-md">
              <Image 
                src="/hombres-altar/logo-negro.png" 
                alt="Congreso de varones Hombres de Altar" 
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
              <h1 className="sr-only">
                {locale === 'es' ? 'Congreso de varones' : "Men's Congress"}
              </h1>
            </div>
            
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg font-medium">
              {locale === 'es' 
                ? 'Un tiempo de transformación, propósito y hermandad. Diseñado para equipar a los hombres a vivir vidas guiadas por Dios en su hogar, iglesia y comunidad.'
                : 'A time of transformation, purpose, and brotherhood. Designed to equip men to live God-led lives in their home, church, and community.'}
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4 text-stone-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-navy/5 text-primary-navy">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">{locale === 'es' ? '27 y 28 de Noviembre, 2026' : 'November 27 & 28, 2026'}</p>
                  <p className="text-sm text-stone-500">{locale === 'es' ? 'Apunta la fecha' : 'Save the date'}</p>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/JdcbwqtThSHkqzVB9" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-stone-700 hover:text-primary-navy transition-colors group focus-visible:ring-2 focus-visible:ring-accent-gold rounded-xl outline-none"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-navy/5 text-primary-navy group-hover:bg-primary-navy/10 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Renuevo Church <span className="font-normal text-stone-500">({locale === 'es' ? 'Templo' : 'Sanctuary'})</span></p>
                  <p className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors mt-0.5">
                    6331 W Lamar Rd, Glendale, AZ 85301
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 md:p-10"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary-navy mb-4">
                  {locale === 'es' ? '¡Registro Exitoso!' : 'Registration Successful!'}
                </h3>
                <p className="text-stone-600 mb-8 max-w-md leading-relaxed">
                  {locale === 'es' 
                    ? 'Hemos recibido tu registro correctamente. Prepárate para un tiempo de transformación y hermandad en la presencia de Dios. ¡Dios te bendiga!' 
                    : 'We have successfully received your registration. Get ready for a time of transformation and brotherhood in God\'s presence. God bless you!'}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-4 bg-primary-navy text-accent-gold font-bold tracking-widest text-sm rounded-full hover:bg-stone-800 transition-colors focus-visible:ring-2 focus-visible:ring-accent-gold outline-none cursor-pointer"
                >
                  {locale === 'es' ? 'REGISTRAR A ALGUIEN MÁS' : 'REGISTER SOMEONE ELSE'}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-primary-navy mb-2">
                  {locale === 'es' ? 'Formulario de Registro' : 'Registration Form'}
                </h3>
                <p className="text-stone-500 mb-8 text-sm">
                  {locale === 'es' ? 'Completa tus datos para asegurar tu lugar. Admisión libre.' : 'Fill in your details to secure your spot. Free admission.'}
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Nombre' : 'First Name'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <User className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="apellido" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Apellido' : 'Last Name'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <User className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="edad" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Edad' : 'Age'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Hash className="h-4 w-4" />
                        </div>
                        <input
                          type="number"
                          id="edad"
                          name="edad"
                          min="1"
                          max="120"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="iglesia" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Iglesia a la que asiste' : 'Home Church'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Church className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          id="iglesia"
                          name="iglesia"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="telefono" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Teléfono' : 'Phone'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Phone className="h-4 w-4" />
                        </div>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-stone-700">
                        {isEs ? 'Correo electrónico' : 'Email'} <span className="text-stone-400 font-normal ml-1">({isEs ? 'opcional' : 'optional'})</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Minor Parental Consent Section (Triggered if under 18) */}
                  {isMinor && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col gap-4 text-stone-800"
                    >
                      <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                        <Users className="w-5 h-5 text-amber-600" />
                        <span>{isEs ? 'Autorización Parental Requerida (Menor de 18 años)' : 'Parental Authorization Required (Under 18)'}</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        {isEs 
                          ? 'Para registrar a un menor de edad, requerimos los datos y la aprobación expresa de su padre, madre o tutor legal.'
                          : 'To register a minor, we require the contact information and explicit consent of a parent or legal guardian.'}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="tutorNombre" className="text-xs font-semibold text-stone-700">
                            {isEs ? 'Nombre del Padre, Madre o Tutor' : 'Parent or Guardian Full Name'} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="tutorNombre"
                            name="tutorNombre"
                            required={isMinor}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="tutorContacto" className="text-xs font-semibold text-stone-700">
                            {isEs ? 'Teléfono / Correo del Tutor' : 'Parent or Guardian Phone / Email'} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="tutorContacto"
                            name="tutorContacto"
                            required={isMinor}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </div>
                      </div>
                      <label className="flex items-start gap-3 mt-1 cursor-pointer">
                        <input
                          type="checkbox"
                          required={isMinor}
                          name="consentimientoParental"
                          className="mt-1 h-4 w-4 rounded border-stone-300 text-primary-navy focus:ring-accent-gold"
                        />
                        <span className="text-xs text-stone-700 leading-tight">
                          {isEs 
                            ? 'Confirmo bajo protesta de decir verdad que cuento con la autorización de mi padre, madre o tutor legal para registrarme y asistir al congreso.'
                            : 'I confirm that I have the express consent of my parent or legal guardian to register and attend the congress.'}
                        </span>
                      </label>
                    </motion.div>
                  )}

                  {/* T-Shirt Size (Optional & Informational) */}
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="tallaCamiseta" className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                      <Shirt className="h-4 w-4 text-stone-500" />
                      {locale === 'es' ? 'Talla de Camiseta' : 'T-Shirt Size'} <span className="text-stone-400 font-normal ml-1">({locale === 'es' ? 'opcional' : 'optional'})</span>
                    </label>
                    <p className="text-xs text-stone-500 mb-1">
                      {locale === 'es' 
                        ? 'Durante el congreso habrá camisetas a la venta. Esta pregunta es únicamente con fines informativos y de estimación para tener disponibilidad de tallas.' 
                        : 'There will be t-shirts for sale during the congress. This question is strictly for informational and estimation purposes to ensure size availability.'}
                    </p>
                    <select
                      id="tallaCamiseta"
                      name="tallaCamiseta"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{locale === 'es' ? 'Selecciona una talla (opcional)' : 'Select a size (optional)'}</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="3XL">3XL</option>
                      <option value="4XL">4XL</option>
                    </select>
                  </div>

                  {/* Explicit Consent to Privacy Policy & Terms */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        id="consentimientoLegal"
                        name="consentimientoLegal"
                        className="mt-1 h-4 w-4 rounded border-stone-300 text-primary-navy focus:ring-accent-gold cursor-pointer"
                      />
                      <span className="text-xs text-stone-600 leading-normal">
                        {isEs ? (
                          <>
                            Acepto el tratamiento de mis datos de acuerdo con la{' '}
                            <Link href={`/${locale}/politicas`} target="_blank" className="text-accent-gold hover:underline font-bold">
                              Política de Privacidad
                            </Link>{' '}
                            y los{' '}
                            <Link href={`/${locale}/terminos`} target="_blank" className="text-accent-gold hover:underline font-bold">
                              Términos y Condiciones
                            </Link>{' '}
                            de Renuevo Church.
                          </>
                        ) : (
                          <>
                            I agree to the processing of my information in accordance with Renuevo Church's{' '}
                            <Link href={`/${locale}/politicas`} target="_blank" className="text-accent-gold hover:underline font-bold">
                              Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link href={`/${locale}/terminos`} target="_blank" className="text-accent-gold hover:underline font-bold">
                              Terms and Conditions
                            </Link>.
                          </>
                        )}
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full py-4 bg-primary-navy text-accent-gold font-bold tracking-widest uppercase rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg focus-visible:ring-2 focus-visible:ring-accent-gold outline-none cursor-pointer"
                  >
                    {isSubmitting 
                      ? (locale === 'es' ? 'ENVIANDO...' : 'SUBMITTING...') 
                      : (locale === 'es' ? 'COMPLETAR REGISTRO' : 'COMPLETE REGISTRATION')}
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
