'use client';

import { Container } from '../components/ui/Container';
import { LocationMap } from '../components/ui/LocationMap';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/app/i18n';

export default function KontaktPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.contactPage.errorTitle);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : t.contactPage.errorTitle);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t.contactPage.phone,
      details: ['+385 91 921 1069', t.contactPage.phoneHours],
      action: 'tel:+385919211069',
    },
    {
      icon: Mail,
      title: t.contactPage.email,
      details: ['info@adrisbotanic.com', t.contactPage.emailResponse],
      action: 'mailto:info@adrisbotanic.com',
    },
    {
      icon: MapPin,
      title: t.contactPage.location,
      details: ['Cesta pape Ivana Pavla II. 380', 'Kaštel Štafilić'],
      action: 'https://maps.google.com/?q=Cesta+pape+Ivana+Pavla+II.+380,+Kaštel+Štafilić',
    },
    {
      icon: Clock,
      title: t.contactPage.workHours,
      details: [
        t.contactPage.monFri,
        t.contactPage.sat,
        t.contactPage.sun,
      ],
      action: null,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-24 md:py-32 overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: 'url(/img/palme.jpeg)' }}
        />
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/60' />

        <Container className='relative z-10'>
          <div className='text-center max-w-4xl mx-auto space-y-6'>
            <div
              className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg mb-2'
              style={{ backgroundColor: '#274223' }}
            >
              <MessageSquare className='w-4 h-4' />
              <span>{t.contactPage.badge}</span>
            </div>

            <h1 
              className='font-bold leading-[1.1]'
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.75rem)'
              }}
            >
              <span className='text-white'>{t.contactPage.title}</span>
              <br />
              <span style={{ color: '#8fb588' }}>{t.contactPage.titleHighlight}</span>
            </h1>

            <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
              {t.contactPage.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className='py-16 bg-white'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className='p-6 rounded-2xl border-2 transition-all hover:shadow-xl'
                  style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                >
                  <div
                    className='w-14 h-14 rounded-xl flex items-center justify-center mb-4'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  <h3 className='text-lg font-bold text-neutral-900 mb-3'>
                    {info.title}
                  </h3>
                  <div className='space-y-1'>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className={`text-sm ${
                          idx === 0 ? 'font-semibold' : 'text-neutral-600'
                        }`}
                        style={{ color: idx === 0 ? '#274223' : undefined }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className='inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-colors hover:underline'
                      style={{ color: '#274223' }}
                    >
                      {t.contactPage.contactAction}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form & Map Section */}
      <section
        className='py-16 md:py-24'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <div className='mb-8'>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
                  {t.contactPage.sendMessage}
                </h2>
                <p className='text-lg text-neutral-600'>
                  {t.contactPage.sendMessageDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    {t.contactPage.nameLabel}
                  </label>
                  <input
                    type='text'
                    id='name'
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.2)' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#274223';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                    }}
                    placeholder={t.contactPage.namePlaceholder}
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-bold text-neutral-700 mb-2'
                    >
                      {t.contactPage.emailLabel}
                    </label>
                    <input
                      type='email'
                      id='email'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                      style={{ borderColor: 'rgba(39, 66, 35, 0.2)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#274223';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                      }}
                      placeholder={t.contactPage.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-bold text-neutral-700 mb-2'
                    >
                      {t.contactPage.phoneLabel}
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                      style={{ borderColor: 'rgba(39, 66, 35, 0.2)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#274223';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                      }}
                      placeholder={t.contactPage.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    {t.contactPage.subjectLabel}
                  </label>
                  <input
                    type='text'
                    id='subject'
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.2)' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#274223';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                    }}
                    placeholder={t.contactPage.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    id='message'
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.2)' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#274223';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                    }}
                    placeholder={t.contactPage.messagePlaceholder}
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className='flex items-center gap-3 p-4 rounded-xl bg-green-50 border-2 border-green-200'>
                    <CheckCircle className='w-6 h-6 text-green-600 shrink-0' />
                    <div>
                      <p className='font-bold text-green-800'>{t.contactPage.successTitle}</p>
                      <p className='text-sm text-green-700'>{t.contactPage.successDesc}</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className='flex items-center gap-3 p-4 rounded-xl bg-red-50 border-2 border-red-200'>
                    <AlertCircle className='w-6 h-6 text-red-600 shrink-0' />
                    <div>
                      <p className='font-bold text-red-800'>{t.contactPage.errorTitle}</p>
                      <p className='text-sm text-red-700'>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed'
                  style={{ backgroundColor: '#274223' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      {t.contactPage.sending}
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />
                      {t.contactPage.send}
                    </>
                  )}
                </button>

                <p className='text-xs text-neutral-500 text-center'>
                  {t.contactPage.privacyNote}
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className='space-y-6'>
              {/* Map */}
              <div
                className='rounded-2xl overflow-hidden shadow-xl'
                style={{ height: '400px' }}
              >
                <LocationMap />
              </div>
              
              {/* Address Card */}
              <a
                href='https://maps.google.com/?q=Cesta+pape+Ivana+Pavla+II.+380,+Kaštel+Štafilić'
                target='_blank'
                rel='noopener noreferrer'
                className='block p-6 rounded-2xl border-2 transition-all hover:shadow-lg group'
                style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
              >
                <div className='flex items-start gap-4'>
                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-bold text-neutral-900 mb-1'>{t.contactPage.nurseryAddress}</h4>
                    <p className='text-neutral-600'>Cesta pape Ivana Pavla II. 380</p>
                    <p className='text-neutral-600'>Kaštel Štafilić</p>
                    <p className='text-sm mt-2 font-semibold' style={{ color: '#274223' }}>
                      {t.contactPage.openInMaps}
                    </p>
                  </div>
                </div>
              </a>

              {/* Social Media */}
              <div
                className='p-8 rounded-2xl'
                style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
              >
                <h3 className='text-xl font-bold text-neutral-900 mb-4'>
                  {t.contactPage.followUs}
                </h3>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Facebook className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    className='w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Instagram className='w-6 h-6' />
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div
                className='p-8 rounded-2xl text-white'
                style={{ backgroundColor: '#274223' }}
              >
                <h3 className='text-xl font-bold mb-4'>{t.contactPage.urgentQuestion}</h3>
                <p className='mb-6 text-white/90'>
                  {t.contactPage.urgentDesc}
                </p>
                <a
                  href='tel:+385919211069'
                  className='inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                  style={{ color: '#274223' }}
                >
                  <Phone className='w-5 h-5' />
                  +385 91 921 1069
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Quick Links */}
      <section className='py-16 bg-white'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-neutral-900 mb-3'>
              {t.contactPage.faq}
            </h2>
            <p className='text-neutral-600'>
              {t.contactPage.faqDesc}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>
                {t.contactPage.deliveryPlanting}
              </h3>
              <p className='text-sm text-neutral-600 mb-4'>
                {t.contactPage.deliveryPlantingDesc}
              </p>
              <a
                href='#'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                {t.contactPage.learnMore}
              </a>
            </div>

            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>{t.contactPage.plantCare}</h3>
              <p className='text-sm text-neutral-600 mb-4'>
                {t.contactPage.plantCareDesc}
              </p>
              <Link
                href='/blog'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                {t.contactPage.viewTips}
              </Link>
            </div>

            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>{t.contactPage.warranty}</h3>
              <p className='text-sm text-neutral-600 mb-4'>
                {t.contactPage.warrantyDesc}
              </p>
              <a
                href='#'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                {t.contactPage.moreInfo}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
