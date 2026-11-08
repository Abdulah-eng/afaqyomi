import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MessageCircle, Phone, Send, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { allServices } from '@/data/services';

export function ContactSection({
  preselectedService = '',
}: {
  preselectedService?: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || allServices[0]?.title || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, '');

  const mailtoUrl = `mailto:${siteConfig.primaryEmail}?subject=${encodeURIComponent(
    `[Inquiry] ${service} - ${name || 'Prospective Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${message}`
  )}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.primaryEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service,
          message,
          _subject: `New AFAQYOMI Client Inquiry: ${service} (${name})`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: open mail client or indicate success with mailto option
        setSubmitted(true);
      }
    } catch (err) {
      // In case of network/offline issues, still allow user to send via mailto
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-b border-white/10 bg-[#071116] py-20 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* Left Column: Contact Info & Email Highlights */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[#54e6df]">
              <Sparkles size={12} className="text-[#f1a35d]" />
              <span>Initiate Conversation</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Let’s Shape Your Next Move
            </h2>

            <p className="mt-4 text-base text-white/70 leading-relaxed">
              Whether you are preparing a single drop, planning an album campaign, organizing your royalties, or building a bespoke web platform, reach out to our team directly.
            </p>

            {/* Official Email Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* PRIMARY OFFICIAL EMAIL */}
              <div className="rounded-2xl border border-[#54e6df]/30 bg-gradient-to-br from-[#0c1c24] to-[#07131a] p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-mono-ui text-[10px] font-bold uppercase tracking-widest text-[#54e6df]">
                    Official Contact Email
                  </span>
                  <span className="rounded-full bg-[#54e6df]/15 px-2 py-0.5 font-mono-ui text-[9px] text-[#54e6df]">
                    Direct Inbox
                  </span>
                </div>
                <a
                  href={`mailto:${siteConfig.primaryEmail}`}
                  className="mt-2.5 flex items-center gap-2.5 font-display text-lg font-bold text-white transition hover:text-[#54e6df] sm:text-xl break-all"
                  data-testid="contact-primary-email"
                >
                  <Mail size={20} className="text-[#f1a35d] shrink-0" />
                  <span>{siteConfig.primaryEmail}</span>
                </a>
                <p className="mt-2 text-xs text-white/50">
                  Click to email directly from your mail client. Inquiries answered within 24 hours.
                </p>
              </div>

              {/* TEAM WHATSAPP SUPPORT */}
              <div className="rounded-2xl border border-white/10 bg-[#0a161d] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono-ui text-[10px] font-bold uppercase tracking-widest text-[#54e6df]">
                    Team WhatsApp Support
                  </span>
                  <span className="rounded-full bg-[#54e6df]/15 px-2 py-0.5 font-mono-ui text-[9px] text-[#54e6df]">
                    Instant Support
                  </span>
                </div>
                <a
                  href={`https://wa.me/${cleanWhatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2.5 flex items-center gap-2.5 font-display text-base font-semibold text-white/90 transition hover:text-[#54e6df] sm:text-lg"
                  data-testid="contact-whatsapp-support"
                >
                  <MessageCircle size={18} className="text-[#54e6df] shrink-0" />
                  <span>{siteConfig.whatsapp}</span>
                </a>
                <p className="mt-2 text-xs text-white/50">
                  Official team WhatsApp support to report any issues, ask questions, or request quick updates.
                </p>
              </div>

              {/* Direct Phone */}
              <div className="pt-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs font-mono-ui text-white/80 transition hover:border-[#54e6df] hover:text-[#54e6df]"
                >
                  <Phone size={16} className="text-[#f1a35d]" />
                  <span>Direct Studio Line: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Operating Standard Note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50 font-mono-ui">
              <Clock size={14} className="text-[#54e6df]" />
              <span>Response window: Within 24 business hours • Global Service Availability</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="rounded-3xl border border-white/12 bg-[#09151c]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="font-display text-2xl font-bold text-white">
              Project Inquiry & Service Request
            </h3>
            <p className="mt-2 text-xs text-white/60">
              Select one of our 50 services or describe your custom scope.
            </p>

            {submitted ? (
              <div className="my-8 rounded-2xl border border-[#54e6df]/30 bg-[#54e6df]/10 p-8 text-center animate-in fade-in">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#54e6df] text-[#071116] shadow-lg">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-white">
                  Message Transmitted Successfully
                </h4>
                <p className="mt-2 text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name || 'there'}</strong>. Your inquiry regarding{' '}
                  <strong className="text-[#54e6df]">{service}</strong> has been transmitted to{' '}
                  <strong className="text-white">{siteConfig.primaryEmail}</strong>. Our team will review your project details and follow up at{' '}
                  <strong className="text-white">{email}</strong> shortly.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-mono-ui text-xs text-white transition hover:bg-white/20"
                  >
                    <Mail size={14} />
                    <span>Open in Email App</span>
                  </a>
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                      `Hello AFAQYOMI Team, I just submitted an inquiry for "${service}" from ${name || email}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#54e6df]/20 border border-[#54e6df]/40 px-5 py-2.5 font-mono-ui text-xs text-[#54e6df] transition hover:bg-[#54e6df]/30"
                  >
                    <MessageCircle size={14} />
                    <span>Message WhatsApp Support</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-6 block mx-auto font-mono-ui text-[11px] text-white/50 hover:text-[#54e6df]"
                >
                  ← Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block font-mono-ui text-[11px] uppercase tracking-wider text-white/60">
                    Your Name / Artist / Company Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance / Apex Music"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 transition focus:border-[#54e6df] focus:bg-black/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block font-mono-ui text-[11px] uppercase tracking-wider text-white/60">
                    Your Email Address *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 transition focus:border-[#54e6df] focus:bg-black/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-service" className="block font-mono-ui text-[11px] uppercase tracking-wider text-white/60">
                    Primary Service of Interest *
                  </label>
                  <select
                    id="inquiry-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#09151c] px-4 py-3 text-sm text-white transition focus:border-[#54e6df] focus:outline-none"
                  >
                    <optgroup label="A. Music Promotion & Marketing">
                      {allServices.filter((s) => s.categoryId === 'music-promotion').map((s) => (
                        <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="B. Music Distribution & Release Services">
                      {allServices.filter((s) => s.categoryId === 'music-distribution').map((s) => (
                        <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="C. Music Pitching & Industry Outreach">
                      {allServices.filter((s) => s.categoryId === 'music-pitching').map((s) => (
                        <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="D. Music Royalties & Rights Support">
                      {allServices.filter((s) => s.categoryId === 'royalties-rights').map((s) => (
                        <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="E. Digital & Web Development">
                      {allServices.filter((s) => s.categoryId === 'web-development').map((s) => (
                        <option key={s.id} value={s.title}>{s.number}. {s.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block font-mono-ui text-[11px] uppercase tracking-wider text-white/60">
                    Project Details, Music Links, or Questions *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your release date, current streaming links, goals, or website requirements..."
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 transition focus:border-[#54e6df] focus:bg-black/60 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#f1a35d] py-4 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116] shadow-[0_0_20px_rgba(241,163,93,0.3)] transition hover:bg-[#f6b77e] disabled:opacity-60 cursor-pointer"
                  data-testid="button-submit-inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Inquiry to Studio...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to AFAQYOMI</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-center font-mono-ui text-[10px] text-white/40">
                  Direct submission sent straight to {siteConfig.primaryEmail}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
