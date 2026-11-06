import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Disc3,
  ExternalLink,
  Globe2,
  Headphones,
  Mail,
  Music2,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { siteConfig } from '@/data/siteConfig';
import { allServices, serviceCategories } from '@/data/services';
import { publishedProjects, type Project } from '@/data/projects';
import { teamMembers, type TeamMember } from '@/data/teamData';

// Custom Modern Redesign Components
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroSection } from '@/components/HeroSection';
import { AgencyShowcase } from '@/components/AgencyShowcase';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { WorkPortfolioSection } from '@/components/WorkPortfolioSection';
import { ContactSection } from '@/components/ContactSection';

const queryClient = new QueryClient();
const brandLogo = '/media/logo.jpeg';

function SEO({
  title,
  description,
  image = '/media/logo.jpeg',
}: {
  title: string;
  description: string;
  image?: string;
}) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let node = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement('meta');
        if (property) node.setAttribute('property', name);
        else node.setAttribute('name', name);
        document.head.appendChild(node);
      }
      node.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', `${window.location.origin}${image}`, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', `${window.location.origin}${image}`);

    // Injected Schema.org JSON-LD Structured Data
    const schemaScriptId = 'afaqyomi-json-ld';
    let scriptNode = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.id = schemaScriptId;
      scriptNode.type = 'application/ld+json';
      document.head.appendChild(scriptNode);
    }
    scriptNode.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://www.afaqyomi.com/#organization',
          name: siteConfig.brandName,
          url: 'https://www.afaqyomi.com',
          logo: `${window.location.origin}${brandLogo}`,
          image: `${window.location.origin}${brandLogo}`,
          description: siteConfig.description,
          email: siteConfig.primaryEmail,
          telephone: siteConfig.phone,
          priceRange: '$$',
          sameAs: [],
          serviceArea: {
            '@type': 'AdministrativeArea',
            name: 'Worldwide',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.afaqyomi.com/#website',
          url: 'https://www.afaqyomi.com',
          name: siteConfig.brandName,
          publisher: {
            '@id': 'https://www.afaqyomi.com/#organization',
          },
        },
      ],
    });
  }, [description, image, title]);

  return null;
}

function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#071116] py-16 sm:py-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#54e6df]/10 blur-[100px]" />
      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        <p className="font-mono-ui text-[11px] font-bold uppercase tracking-[0.24em] text-[#54e6df]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

function CTA({
  title = 'YOUR MUSIC. YOUR VISION. OUR CREATIVE POWER.',
  copy = 'Tell us what you are releasing, building, or promoting. Let’s map out the right strategy together.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0c1c24] via-[#09151c] to-[#061015] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#54e6df]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-5 text-center sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono-ui text-[10px] uppercase tracking-widest text-[#54e6df] backdrop-blur-md">
          <Sparkles size={12} className="text-[#f1a35d]" />
          <span>AFAQYOMI Creative Agency</span>
        </div>

        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
          {copy}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#f1a35d] px-8 py-4 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116] shadow-[0_0_25px_rgba(241,163,93,0.35)] transition-all duration-300 hover:bg-[#f6b77e] hover:-translate-y-1"
            data-testid="cta-get-started"
          >
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-mono-ui text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-[#54e6df] hover:text-[#54e6df]"
            data-testid="cta-explore-services"
          >
            <span>Explore 50 Services</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-8 text-center font-mono-ui text-xs text-white/50">
          <span>Official Contact: </span>
          <a
            href={`mailto:${siteConfig.primaryEmail}`}
            className="text-[#54e6df] font-bold hover:underline"
          >
            {siteConfig.primaryEmail}
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN HOMEPAGE (REDESIGNED)
// ==========================================
function Home() {
  return (
    <>
      <SEO
        title="AFAQYOMI | Music Promotion, Distribution, Royalty Support & Digital Agency"
        description="AFAQYOMI brings music promotion, digital distribution, industry outreach, royalty support and innovative digital solutions together to help artists and businesses build their digital presence."
      />
      <main>
        {/* Requirement 3: Animated Hero Section */}
        <HeroSection />

        {/* Agency Pillars Overview Bar */}
        <section className="border-b border-white/10 bg-[#060e13] py-10">
          <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 text-center">
              {serviceCategories.map((cat, idx) => (
                <Link
                  key={cat.id}
                  href={`/services?cat=${cat.id}`}
                  className="group rounded-xl border border-white/8 bg-white/5 p-4 transition hover:border-[#54e6df]/50 hover:bg-[#54e6df]/5"
                >
                  <span className="font-mono-ui text-[10px] text-[#f1a35d]">0{idx + 1}</span>
                  <p className="mt-1 font-display text-xs font-bold text-white transition group-hover:text-[#54e6df]">
                    {cat.name}
                  </p>
                  <span className="mt-1 block text-[10px] font-mono-ui text-white/40">
                    {cat.id === 'music-promotion' ? '12 Services' : cat.id === 'music-distribution' ? '9 Services' : cat.id === 'music-pitching' ? '8 Services' : cat.id === 'royalties-rights' ? '9 Services' : '12 Services'}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Requirement 3: Animated Agency Capabilities Showcase */}
        <AgencyShowcase />

        {/* Requirement 1: Display ALL 50 Services cleanly categorized */}
        <ServicesShowcase initialCategory="all" isHomepage={true} />

        {/* Requirement 2: Complete "OUR WORK" Portfolio Section */}
        <WorkPortfolioSection initialCategory="All" isDedicatedPage={false} />

        {/* Agency Operating Methodology */}
        <section className="border-b border-white/10 bg-[#08141a] py-20 sm:py-28">
          <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em] text-[#54e6df]">
                The Workflow
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                A Transparent Path from Sound to Global Presence
              </h2>
              <p className="mt-3 text-sm text-white/60">
                We handle the technical, administrative and promotional complexity so you can focus on creating.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Audit & Roadmap',
                  desc: 'Reviewing audio masters, artwork, contributor splits, and setting strategic release milestones.',
                },
                {
                  step: '02',
                  title: 'Metadata & Ingestion',
                  desc: 'DDEX standardized tagging, ISRC/UPC generation, and flawless ingestion to 150+ worldwide DSPs.',
                },
                {
                  step: '03',
                  title: 'Curator & Fan Outreach',
                  desc: 'Editorial pitch submissions, independent playlist seeding, social audio seeding, and press pitching.',
                },
                {
                  step: '04',
                  title: 'Royalty & Rights Lock',
                  desc: 'Guiding PRO, The MLC, and SoundExchange registrations to ensure 100% direct payouts to the artist.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-[#061015] p-6 transition duration-300 hover:border-[#54e6df]/40"
                >
                  <span className="font-mono-ui text-xs font-bold text-[#f1a35d]">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirement 4: Contact Section with afaqyomi.com@gmail.com */}
        <ContactSection />

        {/* Global CTA */}
        <CTA />
      </main>
    </>
  );
}

// ==========================================
// ABOUT AFAQYOMI PAGE
// ==========================================
function About() {
  const founder = teamMembers[0];
  const opsManager = teamMembers[1];

  return (
    <>
      <SEO
        title="About AFAQYOMI | Creative & Music Services Agency"
        description="Learn about AFAQYOMI, our creative leadership, and our commitment to music promotion, distribution integrity, and digital technology."
      />
      <main>
        <PageIntro
          eyebrow="About AFAQYOMI"
          title="Where Musical Vision Meets Creative & Digital Power"
        >
          AFAQYOMI is a dedicated creative and music services agency helping recording artists, producers, independent
          labels, and modern businesses build an unmistakable digital presence.
        </PageIntro>

        {/* Agency Philosophy & Pillars */}
        <section className="mx-auto max-w-[1340px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <span className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.24em] text-[#f1a35d]">
                The Agency Vision
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Independent Artists Deserve Major-Label Infrastructure
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/65">
                <p>
                  In the modern music landscape, great music alone is not enough. Releasing a track requires flawless
                  digital distribution, DDEX metadata compliance, algorithmic playlist triggers, press coverage,
                  bulletproof royalty registration, and a high-converting web destination.
                </p>
                <p>
                  AFAQYOMI was founded to bridge these disciplines into one coherent creative agency. We reject fake
                  bot plays and empty promises. Every service we deliver is grounded in real industry standards, transparent
                  reporting, and long-term artist equity.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Integrity First',
                  copy: 'Zero botting. Zero artificial streams. Every pitch and campaign is 100% compliant with DSP terms.',
                },
                {
                  title: '100% Direct Royalties',
                  copy: 'We guide you to collect directly from collection societies. AFAQYOMI never takes a cut of your royalties.',
                },
                {
                  title: 'Full-Stack Execution',
                  copy: 'From master audio QA and cover art design to worldwide streaming delivery and custom web platforms.',
                },
                {
                  title: 'Founder-Led Standards',
                  copy: 'Hands-on creative supervision ensuring your artwork, music release, and digital platform exceed standards.',
                },
              ].map((box) => (
                <div key={box.title} className="rounded-2xl border border-white/10 bg-[#0a171f] p-6">
                  <h3 className="font-display text-lg font-bold text-white">{box.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">{box.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section (Strictly without external social media links per Req 5) */}
        <section className="border-t border-white/10 bg-[#09151c] py-20 sm:py-28">
          <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em] text-[#54e6df]">
                Leadership & Operations
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                The Creative Practice Behind AFAQYOMI
              </h2>
              <p className="mt-3 text-sm text-white/60">
                A focused team of music marketing strategists, release managers, and web developers.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Founder */}
              <div className="rounded-3xl border border-white/10 bg-[#061015] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={founder.photo || '/media/afaqyomi-founder.jpeg'}
                  alt={founder.name}
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover object-[center_20%] border border-white/10 shadow-lg"
                />
                <div>
                  <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#f1a35d]">
                    {founder.experience}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#54e6df] uppercase tracking-wider font-mono-ui mt-0.5">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    {founder.fullBio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {founder.specialties.map((s) => (
                      <span key={s} className="rounded bg-white/5 px-2 py-0.5 font-mono-ui text-[9px] text-white/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ops Manager */}
              <div className="rounded-3xl border border-white/10 bg-[#061015] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={opsManager.photo || '/media/salahudeen_abdulrasaq.png'}
                  alt={opsManager.name}
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover object-[center_20%] border border-white/10 shadow-lg"
                />
                <div>
                  <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#f1a35d]">
                    {opsManager.experience}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    {opsManager.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#54e6df] uppercase tracking-wider font-mono-ui mt-0.5">
                    {opsManager.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    {opsManager.fullBio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {opsManager.specialties.map((s) => (
                      <span key={s} className="rounded bg-white/5 px-2 py-0.5 font-mono-ui text-[9px] text-white/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA title="Ready to work with our team?" />
      </main>
    </>
  );
}

// ==========================================
// DEDICATED SERVICES PAGE (ALL 50 SERVICES)
// ==========================================
function ServicesPage() {
  const [location] = useLocation();

  // Parse category parameter from URL if present (?cat=music-promotion)
  const categoryParam = useMemo(() => {
    if (typeof window === 'undefined') return 'all';
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'all';
  }, [location]);

  return (
    <>
      <SEO
        title="All 50 Services | Music Promotion, Distribution, Pitching, Royalties & Web Development"
        description="Comprehensive directory of all 50 professional services provided by AFAQYOMI across music promotion, digital distribution, pitching, royalties, and web engineering."
      />
      <main>
        <PageIntro
          eyebrow="Services Directory / 50 Services"
          title="Complete Creative & Music Services Suite"
        >
          Explore all fifty individual services offered by AFAQYOMI. Each service is fully equipped with professional
          deliverables, clear eligibility requirements, and dedicated support.
        </PageIntro>

        <ServicesShowcase initialCategory={categoryParam} isHomepage={false} />

        <CTA title="Have a release or project requiring multiple services?" copy="We build custom unified scopes combining promotion, distribution, and digital development." />
      </main>
    </>
  );
}

// ==========================================
// DEDICATED "OUR WORK" / PORTFOLIO PAGE
// ==========================================
function WorkPage() {
  const [location] = useLocation();

  // Parse category parameter from URL if present (?cat=Music Promotion)
  const categoryParam = useMemo(() => {
    if (typeof window === 'undefined') return 'All';
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    return (cat as any) || 'All';
  }, [location]);

  return (
    <>
      <SEO
        title="Our Work | Music Campaigns, Distribution, Pitching, Branding & Web Projects"
        description="Browse the complete AFAQYOMI portfolio across music promotional campaigns, digital streaming deliveries, curator pitching, artist branding, and custom web platforms."
      />
      <main>
        <PageIntro
          eyebrow="Portfolio / Our Work"
          title="A Living Showcase of Creative & Digital Execution"
        >
          Explore completed studio work and high-quality demonstration frameworks across all five core work categories.
          Filter by category, inspect media, or start your own project today.
        </PageIntro>

        <WorkPortfolioSection initialCategory={categoryParam} isDedicatedPage={true} />

        <CTA title="Start your project with AFAQYOMI" />
      </main>
    </>
  );
}

// ==========================================
// PROJECT DETAIL PAGE
// ==========================================
function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = publishedProjects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  return (
    <>
      <SEO
        title={`${project.title} | Our Work | AFAQYOMI`}
        description={project.shortDescription}
        image={project.heroImage || project.thumbnail}
      />
      <main className="py-16 sm:py-24 border-b border-white/10 bg-[#071116]">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono-ui text-xs text-white/50 transition hover:text-[#54e6df]"
          >
            <ArrowLeft size={14} /> Back to Our Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="font-mono-ui text-xs text-[#f1a35d]">
              {project.category} • {project.subCategory}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono-ui text-[9px] uppercase tracking-wider ${
                project.isConceptWork
                  ? 'border border-amber-500/40 bg-amber-500/15 text-amber-300'
                  : 'border border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
              }`}
            >
              {project.conceptLabel}
            </span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-base text-white/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* Media Frame */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full aspect-video object-contain"
              />
            ) : project.audioUrl ? (
              <div className="p-8 bg-gradient-to-br from-[#0c1a22] to-[#061015]">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-32 w-32 rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="w-full">
                    <p className="font-display text-xl font-bold text-white">{project.title}</p>
                    <p className="font-mono-ui text-xs text-[#54e6df] mt-1">
                      Master Delivery ({project.duration || 'Preview'})
                    </p>
                    <audio src={project.audioUrl} controls className="mt-4 w-full" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={project.heroImage || project.thumbnail}
                alt={project.title}
                className="w-full max-h-[550px] object-cover"
              />
            )}
          </div>

          {/* Gallery if present */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-8">
              <p className="font-mono-ui text-xs uppercase text-white/40 mb-3">Project Assets & Screenshots</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Gallery item"
                    className="rounded-xl border border-white/10 h-32 w-full object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Metadata Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-white/10 pt-8">
            <div className="rounded-2xl border border-white/10 bg-[#09151c] p-5">
              <span className="font-mono-ui text-[10px] uppercase tracking-wider text-[#54e6df]">
                Services Included
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.services.map((s, i) => (
                  <span key={i} className="rounded bg-white/5 px-2.5 py-1 font-mono-ui text-[10px] text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#09151c] p-5">
              <span className="font-mono-ui text-[10px] uppercase tracking-wider text-[#f1a35d]">
                Methodologies & Standards
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tools.map((t, i) => (
                  <span key={i} className="rounded bg-white/5 px-2.5 py-1 font-mono-ui text-[10px] text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#f1a35d] px-8 py-4 font-mono-ui text-xs font-extrabold uppercase tracking-widest text-[#071116]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </main>
      <CTA />
    </>
  );
}

// ==========================================
// CONTACT US PAGE (WITH AFAQYOMI.COM@GMAIL.COM)
// ==========================================
function Contact() {
  const [location] = useLocation();

  const preselectedService = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || '';
  }, [location]);

  return (
    <>
      <SEO
        title="Contact Us | AFAQYOMI Official Inquiries & Service Requests"
        description={`Contact AFAQYOMI via ${siteConfig.primaryEmail} or our official inquiry form. We respond within 24 business hours.`}
      />
      <main>
        <PageIntro
          eyebrow="Contact Us / Official Channels"
          title="Direct Contact & Project Inquiries"
        >
          Have a release date approaching, need worldwide playlist exposure, want your royalty accounts audited, or
          require a custom web platform? Contact our team directly.
        </PageIntro>

        <ContactSection preselectedService={preselectedService} />

        <CTA title="Let’s create something exceptional." />
      </main>
    </>
  );
}

// ==========================================
// 404 NOT FOUND PAGE
// ==========================================
function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | AFAQYOMI" description="The requested page could not be found." />
      <main className="mx-auto flex min-h-[65vh] max-w-[1340px] items-center px-5 py-20 sm:px-8 lg:px-12">
        <div>
          <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#f1a35d]">
            404 • Destination Not Found
          </span>
          <h1 className="mt-4 font-display text-5xl font-extrabold text-white sm:text-7xl">
            Off The Map
          </h1>
          <p className="mt-4 max-w-md text-sm text-white/60">
            The page you are looking for has moved or does not exist. Explore our services or return to the homepage.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#54e6df] px-6 py-3 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#071116]"
            >
              <ArrowLeft size={14} /> Return Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono-ui text-xs font-bold uppercase tracking-wider text-white hover:border-[#54e6df]"
            >
              Browse 50 Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

// ==========================================
// ROUTER & APP
// ==========================================
function Router() {
  return (
    <div className="min-h-screen bg-[#071116] text-[#eef4f7] selection:bg-[#54e6df]/25 selection:text-white">
      <SiteHeader />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/work/:slug" component={ProjectDetail} />
        <Route path="/contact" component={Contact} />
        {/* Legacy redirect routes */}
        <Route path="/pricing" component={ServicesPage} />
        <Route path="/team" component={About} />
        <Route path="/team/:slug" component={About} />
        <Route path="/advertising-videos" component={WorkPage} />
        <Route path="/documentary-videos" component={WorkPage} />
        <Route component={NotFound} />
      </Switch>
      <SiteFooter />
    </div>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
