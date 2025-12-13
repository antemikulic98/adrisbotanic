'use client';

import { X, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  category,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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
        body: JSON.stringify({
          ...formData,
          subject: category ? `Upit za: ${category}` : 'Upit s weba',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Greška pri slanju poruke');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Greška pri slanju poruke');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors z-10'
        >
          <X className='w-5 h-5' />
        </button>

        {/* Content */}
        <div className='p-8 md:p-12'>
          {/* Header */}
          <div className='mb-8'>
            <div
              className='inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4'
              style={{ backgroundColor: '#274223' }}
            >
              {category ? `Upit za: ${category}` : 'Kontakt'}
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-3'>
              Pitaj za dostupnost
            </h2>
            <p className='text-lg text-neutral-600'>
              Ispuni formu ili nas nazovi direktno. Odgovorit ćemo ti u roku
              24h!
            </p>
          </div>

          {/* Quick Call Option */}
          <div
            className='mb-8 p-6 rounded-2xl'
            style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='font-bold text-neutral-900 mb-1'>
                  Žuriš? Nazovi odmah!
                </h3>
                <p className='text-sm text-neutral-600'>
                  Pon-Pet 8:00-20:00, Sub 9:00-14:00
                </p>
              </div>
              <a
                href='tel:+385919211069'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl shrink-0'
                style={{ backgroundColor: '#274223' }}
              >
                <Phone className='w-5 h-5' />
                +385 91 921 1069
              </a>
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className='flex items-center gap-3 p-4 rounded-xl bg-green-50 border-2 border-green-200 mb-6'>
              <CheckCircle className='w-6 h-6 text-green-600 shrink-0' />
              <div>
                <p className='font-bold text-green-800'>Poruka uspješno poslana!</p>
                <p className='text-sm text-green-700'>Kontaktirat ćemo te uskoro.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className='flex items-center gap-3 p-4 rounded-xl bg-red-50 border-2 border-red-200 mb-6'>
              <AlertCircle className='w-6 h-6 text-red-600 shrink-0' />
              <div>
                <p className='font-bold text-red-800'>Greška pri slanju</p>
                <p className='text-sm text-red-700'>{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label
                htmlFor='modal-name'
                className='block text-sm font-bold text-neutral-700 mb-2'
              >
                Ime i prezime *
              </label>
              <input
                type='text'
                id='modal-name'
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                style={{
                  borderColor: 'rgba(39, 66, 35, 0.2)',
                }}
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
                  htmlFor='modal-phone'
                  className='block text-sm font-bold text-neutral-700 mb-2'
                >
                  Telefon *
                </label>
                <input
                  type='tel'
                  id='modal-phone'
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                  style={{
                    borderColor: 'rgba(39, 66, 35, 0.2)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#274223';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                  }}
                  placeholder='+385 91 921 1069'
                />
              </div>

              <div>
                <label
                  htmlFor='modal-email'
                  className='block text-sm font-bold text-neutral-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='modal-email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors'
                  style={{
                    borderColor: 'rgba(39, 66, 35, 0.2)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#274223';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                  }}
                  placeholder='tvoj@email.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='modal-message'
                className='block text-sm font-bold text-neutral-700 mb-2'
              >
                Poruka *
              </label>
              <textarea
                id='modal-message'
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className='w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none'
                style={{
                  borderColor: 'rgba(39, 66, 35, 0.2)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#274223';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                }}
                placeholder='Zanima me informacija o...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting || submitStatus === 'success'}
              className='w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed'
              style={{ backgroundColor: '#274223' }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  Šaljem...
                </>
              ) : (
                <>
                  <Send className='w-5 h-5' />
                  Pošalji upit
                </>
              )}
            </button>
          </form>

          <p className='text-xs text-neutral-500 text-center mt-6'>
            Tvoji podaci su sigurni i neće biti dijeljeni s trećim stranama.
          </p>
        </div>
      </div>
    </div>
  );
};
