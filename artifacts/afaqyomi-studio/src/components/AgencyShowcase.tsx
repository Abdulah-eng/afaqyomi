import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Coins,
  Disc3,
  Globe,
  Layers,
  Laptop,
  Music2,
  Play,
  Radio,
  Share2,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'wouter';
import { SoundWaveVisualizer } from './SoundWaveVisualizer';

interface ShowcaseScene {
  id: string;
  tabLabel: string;
  badge: string;
  headline: string;
  description: string;
  serviceCategory: string;
  serviceLink: string;
  ctaText: string;
}

const scenes: ShowcaseScene[] = [
  {
    id: 'release-artwork',
    tabLabel: '01 / Release & Artwork',
    badge: 'Visual Identity & Audio Master',
    headline: 'High-Impact Artwork & Studio-Polished Masters',
    description:
      'We combine striking cover artwork that commands attention on streaming feeds with pristine mastering optimized to hit standard streaming loudness (-14 LUFS) without distortion.',
    serviceCategory: 'Music Promotion & Creative Branding',
    serviceLink: '/services#music-promotion',
    ctaText: 'Explore Promotion Services',
  },
  {
    id: 'streaming-promotions',
    tabLabel: '02 / Streaming & Playlists',
    badge: 'Audience Seeding & Outreach',
    headline: 'Algorithmic Triggers & Curator Pitching',
    description:
      'Connecting your release with active independent playlists and Spotify for Artists editorial pitches. Structured campaigns optimize the save-to-stream ratio that activates algorithmic discovery.',
    serviceCategory: 'Music Pitching & Outreach',
    serviceLink: '/services#music-pitching',
    ctaText: 'View Pitching Services',
  },
  {
    id: 'distribution-pipeline',
    tabLabel: '03 / Global Distribution',
    badge: 'Worldwide Ingestion & Metadata',
    headline: '150+ Digital Streaming Platforms at Once',
    description:
      'Flawless metadata preparation, ISRC assignment, and DDEX delivery to Spotify, Apple Music, Tidal, TikTok, and international platforms with zero rejection or duplicate profiles.',
    serviceCategory: 'Music Distribution & Release',
    serviceLink: '/services#music-distribution',
    ctaText: 'Explore Distribution Services',
  },
  {
    id: 'digital-devices',
    tabLabel: '04 / Web & Device Mockups',
    badge: 'Digital & Web Engineering',
    headline: 'Bespoke Artist Hubs & High-Speed Platforms',
    description:
      'Custom-coded, responsive web platforms built with React and modern web tech. From artist discography hubs with live audio players to e-commerce merch shops and corporate agency sites.',
    serviceCategory: 'Digital & Web Development',
    serviceLink: '/services#web-development',
    ctaText: 'View Web Development',
  },
  {
    id: 'royalty-rights',
    tabLabel: '05 / Royalty Protection',
    badge: 'Rights Administration & Auditing',
    headline: 'Collect Every Stream, Mechanical & Performance Cent',
    description:
      'Administrative guidance ensuring full catalog registration across PROs (BMI, ASCAP, PRS), mechanical CMOs (The MLC), and neighboring rights registries (SoundExchange) with 100% direct payouts.',
    serviceCategory: 'Music Royalties & Rights Support',
    serviceLink: '/services#royalties-rights',
    ctaText: 'Review Royalty Guidance',
  },
];

export function AgencyShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const current = scenes[activeTab];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#09151c] py-20 sm:py-28 lg:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full bg-[#54e6df]/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[#54e6df]">
              <Layers size={12} className="text-[#f1a35d]" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              An Animated Tour of Our Creative Engine
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/60">
              See how AFAQYOMI bridges music marketing, streaming delivery, rights protection, and creative web technology.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#54e6df] transition hover:text-white"
          >
            <span>See all 50 services</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Tab Navigation Strip */}
        <div className="mt-10 flex overflow-x-auto pb-4 scrollbar-none gap-2">
          {scenes.map((scene, idx) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-mono-ui text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === idx
                  ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df] shadow-[0_0_20px_rgba(84,230,223,0.25)]'
                  : 'border border-white/10 bg-white/5 text-white/50 hover:border-white/25 hover:text-white'
              }`}
            >
              {scene.tabLabel}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="mt-8 grid gap-8 rounded-3xl border border-white/12 bg-[#061015]/90 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 items-center backdrop-blur-2xl">
          {/* Left Column: Context, Narrative, Checklist */}
          <div>
            <span className="inline-block rounded-md bg-[#f1a35d]/15 px-3 py-1 font-mono-ui text-[10px] font-bold uppercase tracking-widest text-[#f1a35d]">
              {current.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-snug">
              {current.headline}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {current.description}
            </p>

            {/* Capability Checklist for Selected Scene */}
            <div className="mt-6 space-y-2.5 border-t border-white/8 pt-6">
              {activeTab === 0 && (
                <>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>3000x3000px RGB master cover artwork compliant with DSP standards</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Multi-format social media announcement banners and 9:16 story creatives</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Tonal balance & loudness control (-14 LUFS streaming reference)</span>
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Editorial submission package tailored for Spotify for Artists curation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Vetted independent playlist outreach (zero bot policy)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Genre-matched lookalike listener audience targeting</span>
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Worldwide simultaneous delivery across 150+ storefronts</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>DDEX metadata integration with UPC and ISRC barcode linkage</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>TikTok & Meta audio library registration with fingerprinting</span>
                  </div>
                </>
              )}

              {activeTab === 3 && (
                <>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Pixel-perfect responsive architecture tested across all devices</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Integrated live streaming audio engine and music video modals</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>Sub-second page speeds, Google Schema SEO, and zero bloat</span>
                  </div>
                </>
              )}

              {activeTab === 4 && (
                <>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>PRO affiliation (BMI, ASCAP, PRS) for performance royalties</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>The MLC registration for streaming mechanical royalties</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <CheckCircle size={15} className="text-[#54e6df] shrink-0" />
                    <span>SoundExchange registration for non-interactive radio plays</span>
                  </div>
                </>
              )}
            </div>

            {/* Direct Link Button */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={current.serviceLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#54e6df] px-6 py-3 font-mono-ui text-xs font-bold uppercase tracking-wider text-[#071116] transition hover:bg-[#78eee8] hover:shadow-[0_0_24px_rgba(84,230,223,0.4)]"
              >
                <span>{current.ctaText}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Stage with Distinct Showcase Presentations */}
          <div className="relative rounded-2xl border border-white/10 bg-[#09151c]/95 p-5 shadow-2xl">
            {/* SCENE 0: Release Artwork & Master Audio */}
            {activeTab === 0 && (
              <div className="relative flex flex-col items-center">
                <div className="relative flex items-center justify-center p-6">
                  {/* Vinyl spinning behind album cover */}
                  <div
                    className={`absolute -right-4 h-48 w-48 sm:h-56 sm:w-56 rounded-full border-4 border-[#121f27] bg-[#0c161d] shadow-2xl ${
                      isPlayingAudio ? 'animate-spin' : ''
                    }`}
                    style={{ animationDuration: '8s' }}
                  >
                    <div className="absolute inset-4 rounded-full border border-white/10" />
                    <div className="absolute inset-8 rounded-full border border-white/5" />
                    <div className="absolute inset-14 rounded-full border border-white/10" />
                    <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1a35d] text-[#071116] font-bold text-[9px] font-mono-ui">
                      AFAQYOMI
                    </div>
                  </div>

                  {/* Album Cover Sleeve */}
                  <div className="relative z-10 h-52 w-52 sm:h-64 sm:w-64 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                    <img
                      src="/media/run_to_scar_cover.png"
                      alt="Album Sleeve Artwork"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 font-mono-ui text-[9px] text-[#54e6df] backdrop-blur-md">
                      3000 x 3000 RGB
                    </div>
                  </div>
                </div>

                {/* Audio Master Controls */}
                <div className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-bold text-white">We Could Be Love — Sync Broadcast Master</p>
                      <p className="font-mono-ui text-[10px] text-white/50">24-bit / 48kHz Broadcast Delivery</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#54e6df] text-[#071116] transition hover:scale-105"
                      aria-label="Toggle demo audio"
                    >
                      <Play size={14} fill="#071116" className="ml-0.5" />
                    </button>
                  </div>
                  <div className="mt-3">
                    <SoundWaveVisualizer isPlaying={isPlayingAudio} height={28} barsCount={32} />
                  </div>
                </div>
              </div>
            )}

            {/* SCENE 1: Streaming Platform & Playlist Outreach */}
            {activeTab === 1 && (
              <div className="space-y-4">
                <div className="rounded-xl border border-[#1DB954]/30 bg-[#1DB954]/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1DB954] text-black">
                        <Music2 size={16} />
                      </div>
                      <div>
                        <p className="font-display text-xs font-bold text-white">Spotify for Artists Editorial Submission</p>
                        <p className="font-mono-ui text-[9px] text-[#1DB954]">Status: Ready for Curator Review</p>
                      </div>
                    </div>
                    <span className="rounded bg-black/40 px-2 py-0.5 font-mono-ui text-[9px] text-white/70">
                      Pitch Window: 14 Days
                    </span>
                  </div>
                  <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-2.5 text-xs text-white/80 font-mono-ui leading-relaxed">
                    "Infusing crisp Afrobeats rhythm with ambient soul chords, featuring live guitars and sync-ready vocal melodies. Target: New Music Friday, African Heat, Chill Tracks."
                  </div>
                </div>

                {/* Curated Playlist Mockup Strip */}
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-2.5">
                  <p className="font-mono-ui text-[10px] uppercase tracking-wider text-white/40">Verified Outreach Channels</p>
                  {[
                    { name: 'Late Night Chill Rhythms', cur: 'Indie Curator Network', followers: '48.2k Followers' },
                    { name: 'Emerging Sounds 2026', cur: 'AFAQYOMI Tastemaker Hub', followers: '26.8k Followers' },
                    { name: 'Electronic & Vibe Selections', cur: 'Global Club Selectors', followers: '34.5k Followers' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#54e6df]" />
                        <span className="font-bold text-white">{p.name}</span>
                        <span className="text-[10px] text-white/40 font-mono-ui hidden sm:inline">({p.cur})</span>
                      </div>
                      <span className="font-mono-ui text-[10px] text-[#f1a35d]">{p.followers}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCENE 2: Music Distribution Pipeline */}
            {activeTab === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-[#54e6df]" />
                    <span className="font-mono-ui text-xs font-bold text-white">Global Distribution Workflow</span>
                  </div>
                  <span className="font-mono-ui text-[10px] text-[#54e6df]">DDEX 3.82 Standard</span>
                </div>

                {/* Pipeline Steps */}
                <div className="space-y-2.5">
                  {[
                    { step: '01', title: 'Lossless FLAC Master Audio Ingestion', desc: '16/24-bit 44.1kHz - 96kHz checksum pass', status: 'Passed' },
                    { step: '02', title: 'ISRC & UPC Barcode Generation', desc: 'DDEX standardized metadata tagging', status: 'Locked' },
                    { step: '03', title: 'Worldwide DSP Distribution', desc: 'Spotify, Apple, Tidal, Amazon, Deezer, TikTok', status: 'Dispatched' },
                    { step: '04', title: 'Fingerprint & Content ID Registry', desc: 'YouTube Content ID & Meta Sound Collection', status: 'Active' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#54e6df]/15 font-mono-ui text-xs font-bold text-[#54e6df]">
                          {p.step}
                        </span>
                        <div>
                          <p className="font-display text-xs font-bold text-white">{p.title}</p>
                          <p className="text-[10px] text-white/50">{p.desc}</p>
                        </div>
                      </div>
                      <span className="rounded bg-[#54e6df]/15 px-2 py-0.5 font-mono-ui text-[9px] font-bold uppercase text-[#54e6df]">
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCENE 3: Digital Web & Device Mockups */}
            {activeTab === 3 && (
              <div className="space-y-4">
                {/* Device Viewport Toggle */}
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span className="font-mono-ui text-[10px] uppercase tracking-wider text-white/40">
                    Interactive Device Viewport
                  </span>
                  <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1">
                    <button
                      type="button"
                      onClick={() => setDeviceView('desktop')}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono-ui transition ${
                        deviceView === 'desktop' ? 'bg-[#54e6df] text-black font-bold' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <Laptop size={12} />
                      <span>Desktop</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceView('mobile')}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono-ui transition ${
                        deviceView === 'mobile' ? 'bg-[#54e6df] text-black font-bold' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <Smartphone size={12} />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Screen Frame */}
                {deviceView === 'desktop' ? (
                  <div className="rounded-xl border border-white/15 bg-[#071116] overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0c1820] px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-green-500/80" />
                      <span className="ml-2 font-mono-ui text-[9px] text-white/40">https://www.artistname.com</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-[#0c1a22] to-[#061015]">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="font-display text-xs font-bold text-[#54e6df]">ARTIST OFFICIAL</span>
                        <span className="font-mono-ui text-[9px] text-white/60">Music • Tour • Store</span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-white/5 p-3">
                          <p className="font-mono-ui text-[9px] text-[#f1a35d]">NEW ALBUM OUT NOW</p>
                          <p className="font-display text-sm font-bold text-white mt-1">Solar Drift (LP)</p>
                          <div className="mt-2 flex items-center gap-1 text-[9px] font-mono-ui text-[#54e6df]">
                            <Play size={10} /> Stream on Spotify
                          </div>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3">
                          <p className="font-mono-ui text-[9px] text-white/40">UPCOMING TOUR DATES</p>
                          <p className="font-display text-xs font-semibold text-white mt-1">London • Berlin • NYC</p>
                          <p className="mt-2 text-[9px] font-mono-ui text-white/50">Tickets On Sale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto max-w-[240px] rounded-2xl border-2 border-white/20 bg-[#071116] p-2 shadow-2xl">
                    <div className="mx-auto h-3 w-16 rounded-full bg-white/20 mb-2" />
                    <div className="rounded-xl bg-[#0c1a22] p-3 space-y-2 text-center">
                      <div className="h-14 w-14 rounded-full bg-[#54e6df]/20 mx-auto flex items-center justify-center text-[#54e6df]">
                        <Music2 size={20} />
                      </div>
                      <p className="font-display text-xs font-bold text-white">Artist Mobile Portal</p>
                      <button className="w-full rounded-full bg-[#54e6df] py-1 text-[9px] font-mono-ui font-bold text-black">
                        Pre-Save Single
                      </button>
                      <button className="w-full rounded-full border border-white/20 py-1 text-[9px] font-mono-ui text-white/80">
                        Official Store
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SCENE 4: Royalty Protection & Rights */}
            {activeTab === 4 && (
              <div className="space-y-4">
                <div className="rounded-xl border border-[#f1a35d]/30 bg-[#f1a35d]/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1a35d] text-black">
                      <Coins size={18} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white">100% Direct Royalty Collection</p>
                      <p className="font-mono-ui text-[10px] text-[#f1a35d]">Zero deductions from AFAQYOMI</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs text-white/70 leading-relaxed">
                    We guide you through setting up direct accounts with collection societies so all streaming, mechanical, and broadcast royalties land directly in your account.
                  </p>
                </div>

                {/* Society Breakdown Matrix */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: 'Performance Royalties', orgs: 'BMI, ASCAP, PRS', desc: 'Radio, TV & Live Shows' },
                    { name: 'Mechanical Royalties', orgs: 'The MLC, MCPS', desc: 'Interactive Streams & Sales' },
                    { name: 'Digital Performance', orgs: 'SoundExchange, PPL', desc: 'Satellite & Webcast Radio' },
                    { name: 'Publishing & Sync', orgs: 'Global CMOs, Songtrust', desc: 'Compositions & Media Placements' },
                  ].map((r, i) => (
                    <div key={i} className="rounded-lg border border-white/8 bg-black/30 p-2.5">
                      <p className="font-display text-xs font-bold text-white">{r.name}</p>
                      <p className="font-mono-ui text-[9px] text-[#54e6df] mt-0.5">{r.orgs}</p>
                      <p className="text-[9px] text-white/50 mt-1">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

