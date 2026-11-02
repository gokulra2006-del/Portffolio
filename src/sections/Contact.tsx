import { useState } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { Send, Loader2, Mail, CheckCircle2, AlertCircle, FileText, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const EMAIL = 'gokulra2006@gmail.com';
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

function buildMailtoUrl({ name, email, message }: { name: string; email: string; message: string }) {
  const subject = `Engineering Opportunity / Portfolio Inquiry - ${name}`;
  const body = `${message}\n\nSender: ${name}\nEmail: ${email}`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData._gotcha) {
      toast.error('Spam submission detected.');
      return;
    }

    if (!validate()) {
      toast.error('Please resolve form validation errors.');
      return;
    }

    setStatus('loading');

    if (!FORMSPREE_ID) {
      // Graceful fallback to client mail handler
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#58a6ff', '#3fb950', '#bc8cff'],
        });
      } catch {
        // Safe fallback in test or no-canvas environments
      }
      window.location.href = buildMailtoUrl(formData);
      setStatus('success');
      toast.success('Opening default email client with your prefilled message.');
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
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#58a6ff', '#3fb950', '#bc8cff'],
          });
        } catch {
          // Ignore in environments without canvas
        }
        setStatus('success');
        toast.success('Message sent! I will respond within 24 hours.');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        throw new Error('Formspree response not ok');
      }
    } catch {
      setStatus('error');
      toast.error('Unable to send message directly. Please reach out via email.', {
        action: {
          label: 'Open Email',
          onClick: () => { window.location.href = buildMailtoUrl(formData); },
        },
      });
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section id="contact" title="Get in Touch" number="05" className="pb-24 pt-16">
      <FadeInStagger className="max-w-3xl mx-auto">
        {/* Recruiter Call to Action */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gh-text mb-3">
            Let's Discuss Engineering Roles
          </h2>
          <p className="text-gh-text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            I am actively interviewing for <strong className="text-gh-text font-semibold">Junior Full-Stack Engineer</strong> and <strong className="text-gh-text font-semibold">Software Engineering Intern</strong> roles. If you're building reliable products and value thoughtful engineering, let's connect.
          </p>

          {/* Recruiter Quick Proof & Direct Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
            <a
              href={`mailto:${EMAIL}`}
              className="btn-primary text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2"
            >
              <Mail size={16} /> {EMAIL}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-outline text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href="/resume"
              className="btn-outline text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2"
            >
              <FileText size={16} /> View Web Resume
            </a>

            <a
                  href="https://www.linkedin.com/in/gokul-ramachandran-513299327/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>

            <a
              href="https://github.com/gokulra2006-del"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2"
            >
              <FaGithub size={16} /> GitHub
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for internships and junior software engineering roles</span>
          </div>
        </FadeIn>

        {/* Contact Form Container */}
        <FadeIn>
          <div className="card-base p-6 sm:p-8 border border-gh-border shadow-xl">
            <div className="mb-6 pb-4 border-b border-gh-border/50">
              <h3 className="text-lg font-bold text-gh-text">Send a Direct Message</h3>
              <p className="text-xs text-gh-text-muted mt-0.5">
                Have a project or opportunity? Send a note and I will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Honeypot anti-spam field */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-gh-text mb-1.5">
                    Your Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Smith"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    className={`w-full bg-gh-bg border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gh-border focus:border-gh-blue focus:ring-1 focus:ring-gh-blue'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-gh-text mb-1.5">
                    Your Email <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full bg-gh-bg border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gh-border focus:border-gh-blue focus:ring-1 focus:ring-gh-blue'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-gh-text mb-1.5">
                  Message <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Gokul, we came across your work on AgriBank and would like to invite you for an interview..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                  className={`w-full bg-gh-bg border rounded-lg px-4 py-2.5 text-sm text-gh-text focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gh-border focus:border-gh-blue focus:ring-1 focus:ring-gh-blue'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div role="status" className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={16} /> Message prepared or dispatched successfully.
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle size={16} /> Submission failed. Please use direct email link above.
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto px-7 py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 min-h-[44px]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Submit Message
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xs font-mono text-gh-blue hover:underline flex items-center gap-1.5"
                >
                  <Mail size={14} /> Prefer standard email client? Click here
                </a>
              </div>
            </form>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Section>
  );
}
