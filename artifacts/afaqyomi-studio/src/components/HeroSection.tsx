import { ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Music, Radio, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import { AudioPlayerWidget } from './AudioPlayerWidget';
import { SoundWaveVisualizer } from './SoundWaveVisualizer';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#071116] pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      {/* Dynamic ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#54e6df]/15 to-transparent blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-[#f1a35d]/12 to-transparent blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-[#185563]/18 blur-[90px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Brand, Headline, Value, CTAs */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Animated Brand Status Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#54e6df]/30 bg-[#54e6df]/10 px-4 py-1.5 backdrop-blur-md transition hover:border-[#54e6df]/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#54e6df] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#54e6df]" />
              </span>
              <span className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-[#54e6df]">
                Creative & Music Services Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
              YOUR MUSIC.{' '}
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                YOUR VISION.
              </span>{' '}
              <span className="bg-gradient-to-r from-[#54e6df] via-[#74ece6] to-[#f1a35d] bg-clip-text text-transparent">
                OUR CREATIVE POWER.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
              AFAQYOMI brings music promotion, digital distribution, industry outreach, royalty support and innovative
              digital solutions together to help artists and businesses build their digital presence.
            </p>

            {/* Sound Wave Preview Line */}
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Radio size={14} className="text-[#54e6df] animate-pulse" />
              <span className="font-mono-ui text-[10px] uppercase tracking-widest text-white/50">
                Live Sonic Frequency
              </span>
              <SoundWaveVisualizer isPlaying={true} barsCount={16} height={18} className="w-28" />
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#f1a35d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0d161a] shadow-[0_0_24px_rgba(241,163,93,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(241,163,93,0.55)]"
                data-testid="hero-explore-services"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#54e6df] hover:bg-[#54e6df]/10 hover:text-[#54e6df]"
                data-testid="hero-work-with-us"
              >
                <span>Work With Us</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Core Capability Badges */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/10 pt-8 w-full">
              {[
                { label: '50 Agency Services', sub: 'Across 5 Pillars', icon: Sparkles },
                { label: '150+ Global DSPs', sub: 'Worldwide Reach', icon: Globe2 },
                { label: 'Royalty Protection', sub: '100% Direct Payouts', icon: ShieldCheck },
                { label: 'Algorithmic Growth', sub: 'Organic Strategy', icon: TrendingUp },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <item.icon size={14} className="text-[#54e6df] transition group-hover:scale-110" />
                    <span className="font-display text-xs font-bold text-white sm:text-sm">{item.label}</span>
                  </div>
                  <p className="mt-0.5 text-[10px] font-mono-ui uppercase tracking-wider text-white/50">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Animated Showcase Visual */}
          <div className="relative z-10 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[520px]">
              {/* Outer Decorative Floating Glow Rings */}
              <div className="pointer-events-none absolute -top-8 -left-8 h-72 w-72 rounded-full border border-[#54e6df]/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-80 w-80 rounded-full border border-[#f1a35d]/15 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

              {/* Floating Streaming Platform Metric Card (Top Left) */}
              <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0a171f]/90 p-3.5 shadow-2xl backdrop-blur-xl animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DB954]/20 text-[#1DB954]">
                  <Music size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono-ui text-[9px] uppercase tracking-widest text-[#54e6df]">Algorithmic Pitch</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1DB954]" />
                  </div>
                  <p className="font-display text-xs font-bold text-white">Spotify & Apple Music</p>
                </div>
              </div>

              {/* Central Audio Player Widget */}
              <AudioPlayerWidget variant="compact" className="relative z-10 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)]" />

              {/* Floating Bottom Card: Digital Ingestion Status */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1c24]/85 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#54e6df]" />
                  <span className="font-mono-ui text-[11px] text-white/80">
                    ISRC & DDEX Metadata Verification
                  </span>
                </div>
                <span className="rounded bg-[#54e6df]/15 px-2 py-0.5 font-mono-ui text-[9px] font-bold uppercase tracking-wider text-[#54e6df]">
                  100% Validated
                </span>
              </div>

              {/* Floating Release Artwork Mockup Strip */}
              <div className="mt-4 grid grid-cols-4 gap-2.5">
                {[
                  { img: '/media/run_to_scar_cover.png', title: 'Single Release' },
                  { img: '/media/brand_new_day_cover.png', title: 'Curator Seeding' },
                  { img: '/media/dope_vs_pope_cover.png', title: 'EP Campaign' },
                  { img: '/media/windows_cover.png', title: 'Press Rollout' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#061015] aspect-square transition duration-300 hover:scale-105 hover:border-[#54e6df]/60"
                  >
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-1.5 flex items-end">
                      <span className="font-mono-ui text-[8px] text-white truncate">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

