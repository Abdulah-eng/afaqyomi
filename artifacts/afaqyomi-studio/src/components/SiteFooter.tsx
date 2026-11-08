import { Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { siteConfig } from '@/data/siteConfig';

const brandLogo = '/media/logo.jpeg';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050c10]">
      {/* Upper Main Footer Grid */}
      <div className="mx-auto grid max-w-[1340px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:px-12 lg:py-20">
        {/* Brand identity column */}
        <div>
          <Link href="/" className="inline-block">
            <img
              src={brandLogo}
              alt="AFAQYOMI Logo"
              className="h-16 w-auto max-w-[240px] object-contain object-left rounded-md"
            />
          </Link>
          <p className="mt-2 font-mono-ui text-[11px] font-bold uppercase tracking-[0.2em] text-[#54e6df]">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono-ui uppercase tracking-wider text-white/40">
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Music Promotion</span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Distribution</span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Royalty Guidance</span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Web Development</span>
          </div>
        </div>

        {/* Quick Navigation column */}
        <div>
          <p className="font-mono-ui text-[11px] font-bold uppercase tracking-[0.2em] text-[#f1a35d]">
            Navigation
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <Link href="/" className="text-white/70 transition hover:text-[#54e6df]">
              Home
            </Link>
            <Link href="/about" className="text-white/70 transition hover:text-[#54e6df]">
              About AFAQYOMI
            </Link>
            <Link href="/services" className="text-white/70 transition hover:text-[#54e6df]">
              All 50 Services
            </Link>
            <Link href="/work" className="text-white/70 transition hover:text-[#54e6df]">
              Our Work
            </Link>
            <Link href="/services?cat=music-promotion" className="text-white/70 transition hover:text-[#54e6df]">
              Music Promotion
            </Link>
            <Link href="/services?cat=music-distribution" className="text-white/70 transition hover:text-[#54e6df]">
              Music Distribution
            </Link>
            <Link href="/services?cat=music-pitching" className="text-white/70 transition hover:text-[#54e6df]">
              Music Pitching
            </Link>
            <Link href="/services?cat=royalties-rights" className="text-white/70 transition hover:text-[#54e6df]">
              Royalty Support
            </Link>
            <Link href="/services?cat=web-development" className="text-white/70 transition hover:text-[#54e6df]">
              Web Development
            </Link>
            <Link href="/contact" className="text-white/70 transition hover:text-[#54e6df]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact information column (strictly displays afaqyomi@gmail.com and WhatsApp support) */}
        <div>
          <p className="font-mono-ui text-[11px] font-bold uppercase tracking-[0.2em] text-[#f1a35d]">
            Contact & Support
          </p>

          <div className="mt-5 space-y-3.5 text-sm">
            {/* Primary Email */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="font-mono-ui text-[9px] uppercase tracking-wider text-[#54e6df]">
                Official Contact Email
              </span>
              <a
                href={`mailto:${siteConfig.primaryEmail}`}
                className="mt-1 flex items-center gap-2 text-white font-bold transition hover:text-[#54e6df]"
                data-testid="footer-primary-email"
              >
                <Mail size={15} className="text-[#f1a35d] shrink-0" />
                <span className="break-all">{siteConfig.primaryEmail}</span>
              </a>
            </div>

            {/* Team WhatsApp Support */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="font-mono-ui text-[9px] uppercase tracking-wider text-[#54e6df]">
                Team WhatsApp Support
              </span>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center gap-2 text-white/90 font-medium transition hover:text-[#54e6df]"
                data-testid="footer-whatsapp-support"
              >
                <MessageCircle size={15} className="text-[#54e6df] shrink-0" />
                <span>{siteConfig.whatsapp}</span>
              </a>
            </div>

            {/* Direct Studio Phone */}
            <div className="flex flex-col gap-2 pt-1 font-mono-ui text-xs text-white/70">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition hover:text-[#54e6df]"
              >
                <Phone size={14} className="text-[#f1a35d]" />
                <span>Studio Line: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Standards */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1340px] flex-col gap-2 px-5 py-6 text-[10px] font-mono-ui uppercase tracking-[0.16em] text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>{siteConfig.copyright}</span>
          <span>AFAQYOMI • Creative & Music Services Agency</span>
        </div>
      </div>
    </footer>
  );
}

