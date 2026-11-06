import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  HelpCircle,
  Layers,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { Link } from 'wouter';
import { allServices, serviceCategories, type Service, type ServiceCategory } from '@/data/services';

export function ServicesShowcase({
  initialCategory = 'all',
  isHomepage = false,
}: {
  initialCategory?: string;
  isHomepage?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  // Filter services by category and search
  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.short.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="relative border-b border-white/10 bg-[#071116] py-20 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[#54e6df]">
              <Sparkles size={12} className="text-[#f1a35d]" />
              <span>Full Agency Service Suite</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              All 50 Professional Agency Services
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/60">
              Every service is structured around real deliverables, clear eligibility guidelines, and dedicated support.
              Explore by category or search directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-6 py-3.5 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#071116] transition hover:bg-[#f6b77e]"
            >
              <span>Request Custom Package</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-mono-ui uppercase tracking-wider transition ${
                selectedCategory === 'all'
                  ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df] font-bold'
                  : 'border border-white/10 bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              All Services (50)
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-mono-ui uppercase tracking-wider transition ${
                  selectedCategory === cat.id
                    ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df] font-bold'
                    : 'border border-white/10 bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Spotify, ISRC, SEO)..."
              className="w-full rounded-full border border-white/15 bg-white/5 py-2 pl-9 pr-4 text-xs text-white placeholder-white/40 transition focus:border-[#54e6df] focus:bg-[#0c1a22] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Selected Category Summary Card (if specific category selected) */}
        {selectedCategory !== 'all' && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c1a22] via-[#09151c] to-[#071116] p-6 sm:p-8">
            {(() => {
              const cat = serviceCategories.find((c) => c.id === selectedCategory);
              if (!cat) return null;
              return (
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="font-mono-ui text-[11px] font-bold uppercase tracking-widest text-[#f1a35d]">
                      {cat.code} • {cat.name}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{cat.tagline}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-white/65">{cat.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono-ui text-[10px] text-white/80"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c1920]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#54e6df]/50 hover:bg-[#0f1f28] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Card Top: Number & Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono-ui text-xs font-bold text-[#f1a35d]">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {service.badge && (
                      <span className="rounded-full bg-[#54e6df]/15 px-2.5 py-0.5 font-mono-ui text-[9px] font-extrabold uppercase tracking-wider text-[#54e6df]">
                        {service.badge}
                      </span>
                    )}
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-ui text-[9px] uppercase tracking-wider text-white/50">
                      {service.categoryName.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h4 className="mt-4 font-display text-xl font-bold text-white transition group-hover:text-[#54e6df]">
                  {service.title}
                </h4>

                {/* Short Hook */}
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#54e6df]/90">
                  {service.short}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-1.5 border-t border-white/8 pt-4">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-white/70">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#54e6df]" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="font-mono-ui text-[11px] font-semibold text-white/60 transition hover:text-white"
                >
                  View Details & Deliverables
                </button>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#54e6df]/15 text-[#54e6df] transition duration-300 group-hover:bg-[#54e6df] group-hover:text-[#071116]"
                  title={`Inquire about ${service.title}`}
                  data-testid={`inquire-${service.id}`}
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* If no matches found */}
        {filteredServices.length === 0 && (
          <div className="my-16 text-center">
            <p className="font-display text-lg text-white">No services found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 rounded-full border border-white/20 px-5 py-2 text-xs font-mono-ui text-[#54e6df]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dedicated Service Detail Modal */}
        {activeModalService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in"
            onClick={() => setActiveModalService(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0a171f] p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-white/60 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2">
                <span className="font-mono-ui text-xs font-bold text-[#f1a35d]">
                  Service #{activeModalService.number}
                </span>
                <span className="rounded-full bg-[#54e6df]/15 px-2.5 py-0.5 font-mono-ui text-[9px] font-bold uppercase text-[#54e6df]">
                  {activeModalService.categoryName}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {activeModalService.title}
              </h3>
              <p className="mt-2 font-mono-ui text-xs text-[#54e6df]">
                {activeModalService.short}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {activeModalService.description}
              </p>

              {/* What's Included */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#061015] p-5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Included Focus Areas
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeModalService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#54e6df]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Target Audience */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-[#f1a35d]">
                    Official Deliverables
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-white/80">
                    {activeModalService.deliverables.map((del, i) => (
                      <li key={i}>• {del}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-[#54e6df]">
                    Target Profile & Eligibility
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/80">
                    {activeModalService.forWho}
                  </p>
                </div>
              </div>

              {/* Guidance Note if any */}
              {activeModalService.guidanceNote && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#f1a35d]/30 bg-[#f1a35d]/10 p-3 text-xs text-[#f1a35d]/90">
                  <HelpCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{activeModalService.guidanceNote}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="rounded-full border border-white/20 px-5 py-2.5 font-mono-ui text-xs text-white/70 hover:text-white"
                >
                  Close
                </button>
                <Link
                  href={`/contact?service=${encodeURIComponent(activeModalService.title)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-6 py-2.5 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#071116] transition hover:bg-[#f6b77e]"
                  onClick={() => setActiveModalService(null)}
                >
                  <span>Inquire for This Service</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

