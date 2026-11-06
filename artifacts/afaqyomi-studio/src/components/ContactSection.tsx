import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                    Primary Inquiries
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

              {/* DIRECT STUDIO EMAIL */}
              <div className="rounded-2xl border border-white/10 bg-[#0a161d] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono-ui text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Direct Studio Email
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono-ui text-[9px] text-white/50">
                    Official Alternate
                  </span>
                </div>
                <a
                  href={`mailto:${siteConfig.officialEmail}`}
                  className="mt-2.5 flex items-center gap-2.5 font-display text-base font-semibold text-white/80 transition hover:text-[#54e6df] sm:text-lg break-all"
                  data-testid="contact-official-email"
                >
                  <Mail size={18} className="text-white/40 shrink-0" />
                  <span>{siteConfig.officialEmail}</span>
                </a>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs font-mono-ui text-white/80 transition hover:border-[#54e6df] hover:text-[#54e6df]"
                >
                  <Phone size={16} className="text-[#f1a35d]" />
                  <span>{siteConfig.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs font-mono-ui text-white/80 transition hover:border-[#54e6df] hover:text-[#54e6df]"
                >
                  <MessageCircle size={16} className="text-[#54e6df]" />
                  <span>WhatsApp Message</span>
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
                <p className="mt-2 text-xs text-white/70 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name || 'there'}</strong>. We have received your inquiry regarding{' '}
                  <strong className="text-[#54e6df]">{service}</strong>. Our team will review your project details and follow up at{' '}
                  <strong className="text-white">{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-6 rounded-full border border-white/20 px-6 py-2.5 font-mono-ui text-xs text-white hover:text-[#54e6df]"
                >
                  Submit Another Inquiry
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
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#f1a35d] py-4 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116] shadow-[0_0_20px_rgba(241,163,93,0.3)] transition hover:bg-[#f6b77e]"
                  data-testid="button-submit-inquiry"
                >
                  <span>Submit Inquiry to AFAQYOMI</span>
                  <Send size={15} />
                </button>

                <p className="text-center font-mono-ui text-[10px] text-white/40">
                  Direct submission also sent to {siteConfig.primaryEmail}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

