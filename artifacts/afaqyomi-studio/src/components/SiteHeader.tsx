import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { siteConfig } from '@/data/siteConfig';

const brandLogo = '/media/logo.jpeg';

export const servicesDropdownItems = [
  { label: 'Music Promotion', href: '/services?cat=music-promotion' },
  { label: 'Spotify Promotion', href: '/services?service=spotify-promotion' },
  { label: 'SoundCloud Promotion', href: '/services?service=soundcloud-promotion' },
  { label: 'YouTube Promotion', href: '/services?service=youtube-promotion' },
  { label: 'TikTok Promotion', href: '/services?service=tiktok-promotion' },
  { label: 'Instagram Promotion', href: '/services?service=instagram-promotion' },
  { label: 'Music Distribution', href: '/services?cat=music-distribution' },
  { label: 'Music Pitching', href: '/services?cat=music-pitching' },
  { label: 'Royalty Support', href: '/services?cat=royalties-rights' },
  { label: 'Website Development', href: '/services?cat=web-development' },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071116]/92 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1340px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" data-testid="link-logo">
          <img
            src={brandLogo}
            alt="AFAQYOMI Logo"
            className="h-12 w-auto max-w-[190px] rounded-md object-contain object-left transition duration-300 group-hover:brightness-110 sm:h-14 sm:max-w-[220px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link
            href="/"
            className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#54e6df] ${
              location === '/' ? 'text-[#54e6df]' : 'text-white/70'
            }`}
            data-testid="nav-home"
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#54e6df] ${
              location === '/about' ? 'text-[#54e6df]' : 'text-white/70'
            }`}
            data-testid="nav-about"
          >
            About AFAQYOMI
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#54e6df] ${
                  location.startsWith('/services') ? 'text-[#54e6df]' : 'text-white/70'
                }`}
                data-testid="nav-services"
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-white/60 hover:text-white p-1"
                aria-label="Toggle services menu"
              >
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#54e6df]' : ''}`} />
              </button>
            </div>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-3 z-50 w-64 animate-in fade-in slide-in-from-top-2">
                <div className="rounded-2xl border border-white/12 bg-[#09151c]/98 p-3 shadow-2xl backdrop-blur-2xl">
                  <div className="mb-2 px-3 pt-1 border-b border-white/8 pb-2">
                    <p className="font-mono-ui text-[9px] uppercase tracking-widest text-[#54e6df]">
                      All 50 Services
                    </p>
                  </div>
                  <div className="grid gap-1">
                    {servicesDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-[#54e6df]/15 hover:text-[#54e6df]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 border-t border-white/8 pt-2 px-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-between text-[11px] font-mono-ui text-[#f1a35d] hover:underline"
                    >
                      <span>Explore Full Directory →</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/work"
            className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#54e6df] ${
              location === '/work' ? 'text-[#54e6df]' : 'text-white/70'
            }`}
            data-testid="nav-work"
          >
            Our Work
          </Link>

          <Link
            href="/contact"
            className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#54e6df] ${
              location === '/contact' ? 'text-[#54e6df]' : 'text-white/70'
            }`}
            data-testid="nav-contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Header Action: Get Started Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-6 py-3 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116] shadow-[0_0_20px_rgba(241,163,93,0.3)] transition hover:bg-[#f6b77e] hover:-translate-y-0.5"
            data-testid="nav-get-started"
          >
            <span>Get Started</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <nav className="max-h-[calc(100vh-82px)] overflow-y-auto border-t border-white/10 bg-[#071116] px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            <Link
              href="/"
              className="flex items-center justify-between border-b border-white/8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80"
            >
              <span>Home</span>
              <ChevronRight size={16} className="text-[#54e6df]" />
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-between border-b border-white/8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80"
            >
              <span>About AFAQYOMI</span>
              <ChevronRight size={16} className="text-[#54e6df]" />
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-white/8 py-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#54e6df]"
              >
                <span>Services (50 Services)</span>
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="my-2 ml-3 grid gap-1.5 border-l border-white/15 pl-3">
                  <Link href="/services" className="py-1 text-xs font-bold text-white">
                    → View All 50 Services
                  </Link>
                  {servicesDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="py-1 text-xs text-white/70 hover:text-[#54e6df]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work"
              className="flex items-center justify-between border-b border-white/8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80"
            >
              <span>Our Work</span>
              <ChevronRight size={16} className="text-[#54e6df]" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-between border-b border-white/8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80"
            >
              <span>Contact Us</span>
              <ChevronRight size={16} className="text-[#54e6df]" />
            </Link>
          </div>

          {/* Quick Email link on mobile header */}
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="font-mono-ui text-[10px] uppercase text-white/40">Official Contact</p>
            <a
              href={`mailto:${siteConfig.primaryEmail}`}
              className="mt-1 block font-mono-ui text-xs font-bold text-[#54e6df] hover:underline"
            >
              {siteConfig.primaryEmail}
            </a>
          </div>

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#f1a35d] py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#071116]"
          >
            <span>Get Started</span>
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}

