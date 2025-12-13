'use client';

import { Container } from '../components/ui/Container';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
} from 'lucide-react';
import { useState } from 'react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Hvala na poruci! Kontaktirat ćemo te uskoro.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+385 XX XXX XXXX', 'Pon-Pet 8:00-20:00, Sub 9:00-14:00'],
      action: 'tel:+385XXXXXXXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@adrisbotanic.com', 'Odgovaramo u roku 24h'],
      action: 'mailto:info@adrisbotanic.com',
    },
    {
      icon: MapPin,
      title: 'Lokacija',
      details: ['[Adresa Rasadnika]', '[Grad, Poštanski Broj]'],
      action: '#',
    },
    {
      icon: Clock,
      title: 'Radno vrijeme',
      details: [
        'Pon-Pet: 8:00 - 20:00',
        'Subota: 9:00 - 14:00',
        'Nedjelja: Zatvoreno',
      ],
      action: null,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className='relative py-20 md:py-28'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <div
          className='absolute top-10 right-10 w-[400px] h-[400px] rounded-full blur-3xl'
          style={{ backgroundColor: '#274223', opacity: 0.08 }}
        />

        <Container>
          <div className='text-center max-w-4xl mx-auto space-y-6'>
            <div
              className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg mb-2'
              style={{ backgroundColor: '#274223' }}
            >
              <MessageSquare className='w-4 h-4' />
              <span>Kontaktiraj Nas</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='text-neutral-900'>Rado Ćemo Ti</span>
              <br />
              <span style={{ color: '#274223' }}>Pomoći</span>
            </h1>

            <p className='text-lg md:text-xl text-neutral-600 leading-relaxed'>
              Imaš pitanje o našim biljkama ili trebate savjet? Kontaktiraj nas
              bilo kojim putem - tu smo za tebe!
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
                      className='inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-colors hover:underline'
                      style={{ color: '#274223' }}
                    >
                      Kontaktiraj →
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
                  Pošalji nam poruku
                </h2>
                <p className='text-lg text-neutral-600'>
                  Ispuni formu i odgovorit ćemo ti u roku 24 sata.
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    Ime i prezime *
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
                    placeholder='Tvoje ime'
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-bold text-neutral-700 mb-2'
                    >
                      Email *
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
                      placeholder='tvoj@email.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-bold text-neutral-700 mb-2'
                    >
                      Telefon
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
                      placeholder='+385 XX XXX XXXX'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    Predmet *
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
                    placeholder='Npr. Upit o maslinama'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-bold text-neutral-700 mb-2'
                  >
                    Poruka *
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
                    placeholder='Tvoja poruka...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl'
                  style={{ backgroundColor: '#274223' }}
                >
                  <Send className='w-5 h-5' />
                  Pošalji poruku
                </button>

                <p className='text-xs text-neutral-500 text-center'>
                  Tvoji podaci su sigurni i neće biti dijeljeni s trećim
                  stranama.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className='space-y-6'>
              {/* Map Placeholder */}
              <div
                className='rounded-2xl overflow-hidden shadow-xl'
                style={{ height: '400px', backgroundColor: '#f3f6f3' }}
              >
                <div className='w-full h-full flex items-center justify-center p-8'>
                  <div className='text-center space-y-4'>
                    <div
                      className='w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-xl'
                      style={{ backgroundColor: '#274223' }}
                    >
                      <MapPin className='w-12 h-12 text-white' />
                    </div>
                    <div>
                      <p
                        className='text-xl font-bold mb-2'
                        style={{ color: '#274223' }}
                      >
                        [Google Maps]
                      </p>
                      <p className='text-sm text-neutral-600'>
                        Lokacija rasadnika
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className='p-8 rounded-2xl'
                style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
              >
                <h3 className='text-xl font-bold text-neutral-900 mb-4'>
                  Prati nas na društvenim mrežama
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
                <h3 className='text-xl font-bold mb-4'>Hitno pitanje?</h3>
                <p className='mb-6 text-white/90'>
                  Pozovi nas odmah za brzo savjetovanje i odgovore!
                </p>
                <a
                  href='tel:+385XXXXXXXXX'
                  className='inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                  style={{ color: '#274223' }}
                >
                  <Phone className='w-5 h-5' />
                  Pozovi sada
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
              Često postavljena pitanja
            </h2>
            <p className='text-neutral-600'>
              Možda tvoj odgovor već postoji ovdje
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>
                Dostava i sadnja
              </h3>
              <p className='text-sm text-neutral-600 mb-4'>
                Organiziramo dostavu i profesionalnu sadnju
              </p>
              <a
                href='#'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                Saznaj više →
              </a>
            </div>

            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>Njega biljaka</h3>
              <p className='text-sm text-neutral-600 mb-4'>
                Savjeti za pravilno održavanje i njegu
              </p>
              <a
                href='/blog'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                Pogledaj savjete →
              </a>
            </div>

            <div
              className='p-6 rounded-xl text-center transition-all hover:shadow-lg'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className='font-bold text-neutral-900 mb-2'>Garancija</h3>
              <p className='text-sm text-neutral-600 mb-4'>
                12 mjeseci garancije na sve proizvode
              </p>
              <a
                href='#'
                className='text-sm font-semibold'
                style={{ color: '#274223' }}
              >
                Više informacija →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
