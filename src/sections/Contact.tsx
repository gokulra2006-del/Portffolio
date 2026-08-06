import { useState } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { Send, Loader2, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const EMAIL = 'gokulra2006@gmail.com';

// Set VITE_FORMSPREE_ID in .env to post submissions to Formspree.
// Without it, the form falls back to opening a prefilled Gmail compose window.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

function buildGmailUrl({ name, email, message }: { name: string; email: string; message: string }) {
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n—\n${name}\n${email}`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam prevention check
    if (formData._gotcha) {
      toast.error('Spam detected.');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // No backend configured — hand off to Gmail with the message prefilled.
    if (!FORMSPREE_ID) {
      window.open(buildGmailUrl(formData), '_blank', 'noopener,noreferrer');
      setStatus('success');
      toast.success('Opened Gmail with your message ready to send.');
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch {
      // Don't dead-end the user — offer the Gmail route instead.
      setStatus('error');
      toast.error('Could not send directly.', {
        action: {
          label: 'Open Gmail',
          onClick: () => window.open(buildGmailUrl(formData), '_blank', 'noopener,noreferrer'),
        },
      });
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <Section id="contact" title="What's Next?" number="06" className="pb-24 pt-20">
      <FadeInStagger className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-gh-text mb-4">Get In Touch</h2>
          <p className="text-gh-text-muted text-base md:text-lg mb-10 leading-relaxed">
            I'm currently looking for Software Engineering internship opportunities. Whether you have a project idea, question, or just want to say hi, feel free to drop me a message!
          </p>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn>
          <div className="card-base p-6 md:p-8 text-left border-gh-border shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - invisible to real users */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-gh-text-muted mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Gokul"
                    className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none focus:border-gh-blue focus:ring-1 focus:ring-gh-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-gh-text-muted mb-1.5">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="gokulra2006@gmail.com"
                    className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none focus:border-gh-blue focus:ring-1 focus:ring-gh-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-gh-text-muted mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Gokul, let's connect..."
                  className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none focus:border-gh-blue focus:ring-1 focus:ring-gh-blue transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={16} className="text-green-900" /> Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle size={16} className="text-red-900" /> Retry
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                <a
                  href={
                    formData.name && formData.message
                      ? buildGmailUrl(formData)
                      : `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gh-blue hover:underline flex items-center gap-1.5"
                >
                  <Mail size={14} /> Open directly in Gmail
                </a>
              </div>
            </form>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Section>
  );
}
