import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Eye,
  Filter,
  Globe,
  Headphones,
  Laptop,
  Maximize2,
  Play,
  Smartphone,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';
import { Link } from 'wouter';
import {
  portfolioCategories,
  publishedProjects,
  type Project,
  type WorkCategory,
} from '@/data/projects';

export function WorkPortfolioSection({
  initialCategory = 'All',
  isDedicatedPage = false,
}: {
  initialCategory?: WorkCategory | 'All';
  isDedicatedPage?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | 'All'>(initialCategory);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [devicePreviewMode, setDevicePreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeAudioPlaying, setActiveAudioPlaying] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return publishedProjects;
    return publishedProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="relative border-b border-white/10 bg-[#061015] py-20 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[#54e6df]">
              <Sparkles size={12} className="text-[#f1a35d]" />
              <span>Agency Portfolio & Case Studies</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              OUR WORK
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/60">
              Browse our completed studio projects, campaigns, and demonstration frameworks across music marketing,
              streaming distribution, industry pitching, branding, and modern web development.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-7 py-3.5 font-mono-ui text-xs font-extrabold uppercase tracking-wider text-[#071116] shadow-[0_0_20px_rgba(241,163,93,0.3)] transition hover:bg-[#f6b77e] hover:-translate-y-0.5"
              data-testid="portfolio-start-project-top"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex overflow-x-auto pb-3 scrollbar-none gap-2 border-b border-white/10">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`shrink-0 rounded-full px-5 py-2 text-xs font-mono-ui uppercase tracking-wider transition ${
              selectedCategory === 'All'
                ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df] font-bold'
                : 'border border-white/10 bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            All Work ({publishedProjects.length})
          </button>
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-mono-ui uppercase tracking-wider transition ${
                selectedCategory === category
                  ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df] font-bold'
                  : 'border border-white/10 bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a171f]/80 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#54e6df]/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Media Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a171f] via-transparent to-transparent opacity-80" />

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/65 px-2.5 py-0.5 font-mono-ui text-[9px] uppercase tracking-wider text-[#54e6df] backdrop-blur-md">
                      {project.subCategory}
                    </span>

                    <span
                      className={`rounded-full px-2 py-0.5 font-mono-ui text-[9px] uppercase tracking-wider backdrop-blur-md ${
                        project.isConceptWork
                          ? 'border border-amber-500/40 bg-amber-500/15 text-amber-300'
                          : 'border border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                      }`}
                    >
                      {project.conceptLabel}
                    </span>
                  </div>

                  {/* Playable / Media Indicator */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-[#54e6df] backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#54e6df] group-hover:text-black">
                      <Play size={16} fill="currentColor" className="ml-0.5" />
                    </div>
                  )}

                  {project.audioUrl && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono-ui text-[#54e6df] backdrop-blur-md">
                      <Headphones size={12} />
                      <span>{project.duration || 'Audio Master'}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#f1a35d]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-white transition group-hover:text-[#54e6df]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tools / Services Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.slice(0, 2).map((srv, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-white/5 px-2 py-0.5 font-mono-ui text-[9px] text-white/60"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="border-t border-white/8 px-6 py-3.5 flex items-center justify-between text-xs font-mono-ui text-[#54e6df]">
                <span>Inspect Project</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-[#0c1a22] to-[#071116] p-8 sm:p-12 gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to create something memorable?
            </h3>
            <p className="mt-2 text-sm text-white/60 max-w-xl">
              Whether you need worldwide music promotion, digital distribution, playlist pitching, or a custom artist web platform, we are ready to build it.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#f1a35d] px-8 py-4 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116] shadow-[0_0_25px_rgba(241,163,93,0.35)] transition-all duration-300 hover:bg-[#f6b77e] hover:-translate-y-1"
            data-testid="portfolio-start-project-bottom"
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Project Detailed Inspection Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in"
            onClick={() => {
              setActiveProject(null);
              setActiveAudioPlaying(null);
            }}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-[#09151c] p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  setActiveAudioPlaying(null);
                }}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-white/60 hover:text-white"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              {/* Modal Category & Verification Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono-ui text-xs text-[#f1a35d]">
                  {activeProject.category} • {activeProject.subCategory}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono-ui text-[9px] uppercase tracking-wider ${
                    activeProject.isConceptWork
                      ? 'border border-amber-500/40 bg-amber-500/15 text-amber-300'
                      : 'border border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                  }`}
                >
                  {activeProject.conceptLabel}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {activeProject.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {activeProject.description}
              </p>

              {/* Media Player Area inside Modal */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
                {activeProject.videoUrl ? (
                  <video
                    src={activeProject.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[380px] w-full object-contain"
                  />
                ) : activeProject.audioUrl ? (
                  <div className="p-6 bg-gradient-to-br from-[#0c1a22] to-[#061015]">
                    <div className="flex items-center gap-4">
                      <img
                        src={activeProject.thumbnail}
                        alt={activeProject.title}
                        className="h-20 w-20 rounded-xl object-cover shadow-lg"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-base font-bold text-white truncate">
                          {activeProject.title}
                        </p>
                        <p className="font-mono-ui text-xs text-[#54e6df]">
                          Studio Master Delivery ({activeProject.duration || 'Preview'})
                        </p>
                        <audio
                          src={activeProject.audioUrl}
                          controls
                          className="mt-3 w-full"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={activeProject.heroImage || activeProject.thumbnail}
                    alt={activeProject.title}
                    className="max-h-[360px] w-full object-cover"
                  />
                )}
              </div>

              {/* Device Viewport Toggle (for web projects) */}
              {activeProject.category === 'Digital Development' && (
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe size={15} className="text-[#54e6df]" />
                    <span className="font-mono-ui text-xs text-white">Responsive Web Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-ui text-[10px] text-white/50">
                    <span>Desktop Tested</span> • <span>Tablet Tested</span> • <span>Mobile Touch Optimized</span>
                  </div>
                </div>
              )}

              {/* Additional Gallery Thumbnails if available */}
              {activeProject.gallery && activeProject.gallery.length > 1 && (
                <div className="mt-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-white/40 mb-2">
                    Project Gallery
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {activeProject.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="Project screenshot"
                        className="h-20 w-full rounded-lg object-cover border border-white/10"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Services & Tools Breakdown */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-[#54e6df]">
                    Services Delivered
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeProject.services.map((s, i) => (
                      <span key={i} className="rounded bg-white/10 px-2 py-0.5 font-mono-ui text-[10px] text-white/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-[#f1a35d]">
                    Methods & Technologies
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeProject.tools.map((t, i) => (
                      <span key={i} className="rounded bg-white/10 px-2 py-0.5 font-mono-ui text-[10px] text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null);
                    setActiveAudioPlaying(null);
                  }}
                  className="rounded-full border border-white/20 px-5 py-2.5 font-mono-ui text-xs text-white/70 hover:text-white"
                >
                  Close
                </button>
                <Link
                  href={`/contact?project=${encodeURIComponent(activeProject.title)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-6 py-2.5 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#071116] transition hover:bg-[#f6b77e]"
                  onClick={() => setActiveProject(null)}
                >
                  <span>Inquire for Similar Project</span>
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

