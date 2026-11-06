export type ServiceCategory = {
  id: 'music-promotion' | 'music-distribution' | 'music-pitching' | 'royalties-rights' | 'web-development';
  name: string;
  shortName: string;
  slug: string;
  code: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export type Service = {
  id: string;
  number: string;
  categoryId: ServiceCategory['id'];
  categoryName: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  forWho: string;
  deliverables: string[];
  guidanceNote?: string;
  badge?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'music-promotion',
    name: 'Music Promotion & Marketing',
    shortName: 'Music Promotion',
    slug: 'music-promotion',
    code: 'CAT-A',
    tagline: 'Targeted reach, authentic fan discovery and multi-platform momentum.',
    description:
      'Strategic organic and algorithmic promotion across leading platforms to build real engagement, expand listener bases, and accelerate release momentum.',
    highlights: ['Spotify & SoundCloud Reach', 'YouTube & TikTok Video Push', 'Release Momentum Campaigns', 'Artist Brand Identity'],
  },
  {
    id: 'music-distribution',
    name: 'Music Distribution & Release Services',
    shortName: 'Music Distribution',
    slug: 'music-distribution',
    code: 'CAT-B',
    tagline: 'Seamless global streaming delivery, flawless metadata and catalogue control.',
    description:
      'End-to-end release preparation and digital delivery across 150+ streaming platforms worldwide with strict metadata integrity and ISRC/UPC compliance.',
    highlights: ['Global DSP Ingestion', 'Single, EP & Album Releases', 'ISRC & Metadata Architecture', 'Catalogue Organization'],
  },
  {
    id: 'music-pitching',
    name: 'Music Pitching & Industry Outreach',
    shortName: 'Music Pitching',
    slug: 'music-pitching',
    code: 'CAT-C',
    tagline: 'Direct presentations to independent curators, tastemakers and music press.',
    description:
      'Professional pitching packages and relationship-driven outreach connecting your music with independent playlist curators, active music blogs, and media outlets.',
    highlights: ['Editorial & Independent Pitching', 'Curator Relationship Outreach', 'Music Blog Features', 'Genre-Targeted Submissions'],
  },
  {
    id: 'royalties-rights',
    name: 'Music Royalties & Rights Support',
    shortName: 'Royalty Support',
    slug: 'royalties-rights',
    code: 'CAT-D',
    tagline: 'Protect your catalog, register publishing and claim every stream you earn.',
    description:
      'Administrative guidance and workflow support helping songwriters and recording artists identify, register, and claim their publishing, performance, and mechanical royalties worldwide.',
    highlights: ['Unclaimed Royalty Auditing', 'PRO & CMO Registration Guidance', 'Mechanical & Sound Recording Royalties', 'Split & Contributor Verification'],
  },
  {
    id: 'web-development',
    name: 'Digital & Web Development',
    shortName: 'Website Development',
    slug: 'web-development',
    code: 'CAT-E',
    tagline: 'Custom high-performance websites engineered for artists, labels and brands.',
    description:
      'Modern, lightning-fast, and mobile-first web platforms designed to turn casual listeners and clients into dedicated fans, buyers, and booking partners.',
    highlights: ['Artist EPKs & Portfolios', 'Record Label & Business Sites', 'E-commerce & Merch Stores', 'SEO & Speed Optimization'],
  },
];

export const allServices: Service[] = [
  // ==========================================
  // CATEGORY A: MUSIC PROMOTION & MARKETING (1-12)
  // ==========================================
  {
    id: 'spotify-promotion',
    number: '01',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Spotify Promotion',
    short: 'Organic algorithmic optimization and listener growth for Spotify releases.',
    description:
      'Targeted campaign strategies designed to trigger Spotify algorithm discovery (Discover Weekly, Release Radar) through authentic user engagement and genre-matched listening audiences.',
    features: [
      'Algorithmic save-to-stream ratio optimization',
      'Audience demographic and genre targeting',
      'Verified playlist ecosystem placement coordination',
      'Spotify for Artists analytics review and insights',
      'Zero bot policy with 100% compliance with Spotify TOS',
    ],
    forWho: 'Independent artists, producers, and labels looking for authentic listener growth.',
    deliverables: ['Custom campaign roadmap', 'Target audience audit', 'Campaign progress reporting', 'Post-campaign analytical summary'],
    badge: 'Popular',
  },
  {
    id: 'soundcloud-promotion',
    number: '02',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'SoundCloud Promotion',
    short: 'Dedicated repost campaigns and underground community discovery on SoundCloud.',
    description:
      'Engage active electronic, hip-hop, indie, and alternative communities on SoundCloud through network reposts, tastemaker engagement, and focused release outreach.',
    features: [
      'Verified tastemaker and collective repost scheduling',
      'Genre-specific channel engagement',
      'Follower and comment interaction pacing',
      'SoundCloud Charts positioning strategy',
    ],
    forWho: 'Producers, beatmakers, DJs, and emerging underground acts.',
    deliverables: ['Repost network schedule', 'Live link engagement tracking', 'Audience reach recap'],
  },
  {
    id: 'youtube-promotion',
    number: '03',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'YouTube Promotion',
    short: 'Video discovery campaigns and Official Artist Channel optimization.',
    description:
      'Drive engaged views and subscribers to official music videos, visualizers, and lyric videos using targeted in-feed discovery and music community curation.',
    features: [
      'YouTube Official Artist Channel (OAC) setup and alignment',
      'Targeted music enthusiast discovery campaigns',
      'Video SEO, tags, description and card architecture',
      'Viewer retention and watch-time optimization',
    ],
    forWho: 'Artists releasing official music videos, live performances, or lyric visuals.',
    deliverables: ['Video SEO metadata suite', 'Audience targeting parameters', 'Real-time analytics dashboard view'],
  },
  {
    id: 'tiktok-promotion',
    number: '04',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'TikTok Promotion',
    short: 'Sound seeding and short-form video creator campaigns for viral reach.',
    description:
      'Position your audio snippet on TikTok through creator sound-usage campaigns, trend seeding, and micro-influencer collaborations that inspire user-generated content.',
    features: [
      'Selection and mastering of optimal 15s/30s sound snippet',
      'TikTok Music library registration and sound link verification',
      'Niche creator sound seeding and concept drafting',
      'Hashtag architecture and trend engagement analysis',
    ],
    forWho: 'Releases with catchy hooks, energetic rhythms, or relatable lyrical themes.',
    deliverables: ['Audio hook extract recommendations', 'Creator outreach roster', 'Sound usage analytics summary'],
  },
  {
    id: 'instagram-promotion',
    number: '05',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Instagram Promotion',
    short: 'Reels music integration, story campaigns, and artist profile aesthetics.',
    description:
      'Amplify your release across Instagram Reels, audio pages, and community music hubs with captivating visual assets and targeted music content campaigns.',
    features: [
      'Instagram Audio page verification and tagging structure',
      'Reels-optimized video teaser cutdowns and motion graphics',
      'Music curation account outreach for feature considerations',
      'Direct-to-streaming swipe and bio-link funnel optimization',
    ],
    forWho: 'Musicians aiming to convert casual social scrollers into dedicated followers.',
    deliverables: ['Formatted Reels video pack', 'Story countdown creatives', 'Engagement guidance document'],
  },
  {
    id: 'music-video-promotion',
    number: '06',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Music Video Promotion',
    short: 'Premiere rollouts and multi-channel video visibility campaigns.',
    description:
      'Comprehensive premiere planning and promotional distribution for cinematic music videos, performance shoots, and visual albums across YouTube, web blogs, and social platforms.',
    features: [
      'Pre-premiere teaser rollout and countdown planning',
      'Music video blog submissions and premiere pitching',
      'YouTube thumbnail A/B testing and visual hooks',
      'Cross-platform short-form teaser distribution',
    ],
    forWho: 'Singers, bands, and directors launching high-production visual projects.',
    deliverables: ['Premiere timeline', 'Custom thumbnail variations', 'Press submission one-sheet'],
  },
  {
    id: 'music-release-campaigns',
    number: '07',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Music Release Campaigns',
    short: 'Structured 6-8 week release rollouts from pre-save to post-release.',
    description:
      'Complete end-to-end promotional rollout strategy covering pre-save momentum, release week impact, and sustaining 4-week post-release promotion to maximize lifespan.',
    features: [
      'Pre-save campaign architecture with Spotify and Apple Music',
      'Week-by-week promotional roadmap and milestones',
      'Press release copywriting and announcement assets',
      'Post-release retargeting and secondary push strategy',
    ],
    forWho: 'Artists preparing critical career singles, landmark EPs, or debut albums.',
    deliverables: ['Full campaign schedule calendar', 'Pre-save smart link setup', 'Weekly progress reviews'],
    badge: 'Flagship',
  },
  {
    id: 'artist-profile-optimization',
    number: '08',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Artist Profile Optimization',
    short: 'High-conversion visual and biographical overhaul across all DSP profiles.',
    description:
      'Transform your Spotify for Artists, Apple Music for Artists, Amazon Music, and Deezer profiles into cohesive, professional digital storefronts that attract industry attention.',
    features: [
      'Standardized profile banners, avatars, and visual galleries',
      'Engaging artist biography written with storytelling focus',
      'Artist Pick setup, playlist integration, and tour/merch links',
      'Social links and team access permissions verification',
    ],
    forWho: 'Emerging and established acts seeking a professional, label-ready image.',
    deliverables: ['Full multi-DSP asset pack', 'Polished artist bio (short & long)', 'Profile audit checklist'],
  },
  {
    id: 'social-media-music-marketing',
    number: '09',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Social Media Music Marketing',
    short: 'Audience-first content roadmaps built specifically for recording artists.',
    description:
      'Overcome content fatigue with structured music marketing funnels that highlight behind-the-scenes creation, studio stories, and lyric narratives that convert viewers into loyal fans.',
    features: [
      'Music-focused content calendar and posting blueprint',
      'Hook formulas tailored to lyric-heavy or instrumental tracks',
      'Community management strategies and comment conversion tactics',
      'Paid social boost recommendations with modest artist budgets',
    ],
    forWho: 'Musicians struggling to maintain consistent, compelling social visibility.',
    deliverables: ['30-day artist content calendar', 'Caption & hook framework', 'Audience conversion guidelines'],
  },
  {
    id: 'music-discovery-campaigns',
    number: '10',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Music Discovery Campaigns',
    short: 'Cross-platform discovery funnels exposing your sound to new listener niches.',
    description:
      'Multi-touchpoint campaigns connecting your music to curious listeners through genre communities, digital radio, curated recommendation threads, and sonic match algorithms.',
    features: [
      'Genre affinity mapping and lookalike artist research',
      'Digital radio and web station submission coordination',
      'Reddit, Discord, and specialized music community placement',
      'Smart link routing with direct stream and follow conversions',
    ],
    forWho: 'Artists whose music fits distinctive genres, moods, or subcultures.',
    deliverables: ['Community outreach directory', 'Genre match report', 'Smart URL conversion tracking'],
  },
  {
    id: 'playlist-outreach',
    number: '11',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Playlist Outreach',
    short: 'Manual, organic outreach to active independent playlist selectors.',
    description:
      'Connect your track with verified independent curators maintaining active, stream-generating playlists on Spotify, Apple Music, and Deezer.',
    features: [
      'Hand-screened curator vetting ensuring zero botted lists',
      'Personalized pitch email and message delivery',
      'Placement tracking and playlist position monitoring',
      'Relationship building for future catalogue releases',
    ],
    forWho: 'Artists releasing well-produced tracks ready for thematic playlist inclusion.',
    deliverables: ['Curator submission roster', 'Placement confirmation notifications', 'Playlist stream impact summary'],
  },
  {
    id: 'artist-branding-visibility',
    number: '12',
    categoryId: 'music-promotion',
    categoryName: 'Music Promotion & Marketing',
    title: 'Artist Branding & Visibility',
    short: 'Unified visual identity, press imagery, and aesthetic positioning.',
    description:
      'Define a memorable, coherent visual language that represents your sound across cover art, typography, color palettes, and press photography art direction.',
    features: [
      'Comprehensive artist brand style guidelines',
      'Logo mark and typography signature design',
      'Moodboards and visual reference decks for releases',
      'Press kit (EPK) visual direction and aesthetic consistency',
    ],
    forWho: 'Artists ready to elevate beyond amateur visuals into iconic brand presentation.',
    deliverables: ['Brand style guide (PDF)', 'Typography & color palette assets', 'Vector artist logo set'],
  },

  // ==========================================
  // CATEGORY B: MUSIC DISTRIBUTION & RELEASE SERVICES (13-21)
  // ==========================================
  {
    id: 'digital-music-distribution',
    number: '13',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Digital Music Distribution',
    short: 'Global delivery to Spotify, Apple Music, Tidal, Amazon, and 150+ DSPs.',
    description:
      'Full technical coordination for delivering your master audio and cover artwork to all major global digital service providers, social platforms, and regional streaming services.',
    features: [
      'Delivery to 150+ worldwide digital platforms and audio stores',
      'Delivery to TikTok, Meta, YouTube Content ID, and CapCut audio libraries',
      'UPC / EAN barcode assignment and catalogue barcode management',
      'Lossless FLAC / WAV audio validation before ingestion',
    ],
    forWho: 'Artists and labels seeking reliable, worldwide digital distribution assistance.',
    deliverables: ['Platform delivery confirmation', 'UPC assignment verification', 'Worldwide release manifest'],
    guidanceNote: 'Distribution delivered through industry-standard distributor channels and ingestion networks.',
  },
  {
    id: 'single-distribution',
    number: '14',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Single Distribution',
    short: 'Speed-optimized single release workflow with pre-order setup.',
    description:
      'Dedicated handling for your standalone single, including high-resolution artwork check, metadata embedding, radio edit and explicit tag coordination.',
    features: [
      'Single track audio verification (16-bit/24-bit 44.1kHz+)',
      'Pre-save link generation with countdown timer',
      'Lyrics submission (plain and time-synced formats)',
      'Global territory release rights configuration',
    ],
    forWho: 'Musicians dropping an upcoming single on a strict calendar deadline.',
    deliverables: ['Single release checklist', 'DSP live link suite', 'Pre-save landing page'],
  },
  {
    id: 'ep-distribution',
    number: '15',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'EP Distribution',
    short: 'Multi-track release structuring, track sequencing, and focus track designation.',
    description:
      'Seamless rollout coordination for Extended Plays (3-6 tracks), ensuring proper track sequencing, focus single highlighting, and unified project presentation.',
    features: [
      'Tracklist sequencing and individual ISRC code pairing',
      'Focus track designation for editorial pitch priority',
      'EP artwork formatting (3000x3000px RGB strictly verified)',
      'Staggered single lead-up schedule integration',
    ],
    forWho: 'Bands and solo artists releasing their debut or follow-up mini-albums.',
    deliverables: ['EP metadata master sheet', 'Track sequence verification', 'Distribution dispatch certificate'],
  },
  {
    id: 'album-distribution',
    number: '16',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Album Distribution',
    short: 'Comprehensive full-length LP distribution management with instant-grat tracks.',
    description:
      'Full-length studio album distribution management covering pre-order schedules, instant-grat single releases, digital booklet inclusion, and multi-disc configurations.',
    features: [
      'Multi-track LP metadata architecture and volume numbering',
      'Pre-order scheduling with instant gratification track unlocks',
      'Comprehensive contributor attribution for all tracks',
      'High-resolution digital booklet integration where supported',
    ],
    forWho: 'Artists and record labels releasing full-length studio or concept albums.',
    deliverables: ['Full album release architecture document', 'ISRC catalogue ledger', 'Global store lock-in verification'],
    badge: 'Full Scope',
  },
  {
    id: 'music-release-management',
    number: '17',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Music Release Management',
    short: 'Executive project management coordinating every moving piece of your rollout.',
    description:
      'A dedicated project manager to handle timelines, deliverables, mastering QA, artwork approvals, distributor coordination, and release day verification.',
    features: [
      'Milestone calendar with strict cut-off deadline management',
      'Master file quality assurance and loudness check (-14 LUFS standard)',
      'Cover artwork compliance check preventing DSP rejection',
      'Release-day live monitoring across all storefronts',
    ],
    forWho: 'Busy artists, managers, and independent label teams wanting zero release stress.',
    deliverables: ['Weekly project status dashboard', 'QA pass certificates', 'Release-day verification report'],
  },
  {
    id: 'music-metadata-preparation',
    number: '18',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Music Metadata Preparation',
    short: 'Flawless DDEX-compliant metadata formatting to eliminate rejection.',
    description:
      'Prepare 100% accurate, standardized metadata files for your releases to avoid DSP delays, misattribution, duplicate artist pages, or missing royalty collection.',
    features: [
      'DDEX and standard streaming metadata schema formatting',
      'Accurate spelling of featuring artists, producers, and lyricists',
      'Genre, subgenre, and mood tagging optimization',
      'Explicit / clean / instrumental variant tagging compliance',
    ],
    forWho: 'Artists experiencing distributor rejections or split artist profiles.',
    deliverables: ['Master metadata CSV/Excel template', 'ID3 / Vorbis embedded tags', 'DSP compliance verification'],
  },
  {
    id: 'artist-contributor-support',
    number: '19',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Artist & Contributor Information Support',
    short: 'Accurate role attributions for session players, mixers, and engineers.',
    description:
      'Ensure every engineer, producer, session musician, and co-writer is properly credited in streaming platform liner notes and production credits databases.',
    features: [
      'Credit attribution for mix engineers, master engineers, and producers',
      'Session instrumentalist and vocal contributor mapping',
      'Proper Apple Music and Spotify detailed credit formatting',
      'ISNI and IPN identification cross-referencing',
    ],
    forWho: 'Collaborative projects with producers, featured vocalists, and studios.',
    deliverables: ['Comprehensive liner credits ledger', 'Contributor sign-off sheet', 'DSP credit formatting guide'],
  },
  {
    id: 'release-scheduling-assistance',
    number: '20',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Release Scheduling Assistance',
    short: 'Strategic Friday drop timing and editorial ingestion lead-time planning.',
    description:
      'Plan your release date strategically with optimal 3-4 week distributor lead times, avoiding holiday congestion and maximizing editorial curator review windows.',
    features: [
      'Lead-time timeline calculation for editorial pitching safety',
      'Global release time synchronization (Midnight local vs UTC)',
      'Avoidance of major label collision weeks and holiday slowdowns',
      'Pre-release asset delivery deadline scheduling',
    ],
    forWho: 'Artists planning their release calendar for maximum visibility.',
    deliverables: ['Custom release timeline schedule', 'Upload milestone deadlines', 'Launch day checklist'],
  },
  {
    id: 'music-catalogue-management',
    number: '21',
    categoryId: 'music-distribution',
    categoryName: 'Music Distribution & Release Services',
    title: 'Music Catalogue Management Support',
    short: 'Organized discography audits, back-catalogue cleanup, and ISRC preservation.',
    description:
      'Bring order to older releases, fix broken album links, merge split artist pages, update expired cover artwork, and preserve play counts across distributor migrations.',
    features: [
      'Complete discography audit across Spotify, Apple, and Amazon',
      'Preservation of play counts and playlist adds via ISRC continuity',
      'Duplicate artist profile merger request drafting',
      'Takedown and re-delivery coordination for distributor switches',
    ],
    forWho: 'Artists switching distributors or managing a multi-year music catalogue.',
    deliverables: ['Catalogue master audit document', 'ISRC match report', 'Profile merger request copy'],
  },

  // ==========================================
  // CATEGORY C: MUSIC PITCHING & INDUSTRY OUTREACH (22-29)
  // ==========================================
  {
    id: 'spotify-playlist-pitching',
    number: '22',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Spotify Playlist Pitching',
    short: 'Editorial pitch copywriting and submission support via Spotify for Artists.',
    description:
      'Craft an irresistible 500-character editorial pitch directly for Spotify’s internal editors, highlighting cultural context, playlist fit, instruments, and marketing story.',
    features: [
      'Compelling editorial pitch copywriting highlighting song story & instruments',
      'Accurate mood, genre, and cultural identifier tag selection',
      'Release timing coordination (minimum 7-14 days prior to drop date)',
      'Spotify for Artists team verification and submission assistance',
    ],
    forWho: 'Artists with upcoming unreleased music delivered to Spotify for Artists.',
    deliverables: ['3 pitch draft options (curator-focused)', 'Tagging recommendation matrix', 'Submission confirmation guide'],
    guidanceNote: 'Pitching submitted through artist account; editorial placement remains at Spotify editors’ sole discretion.',
    badge: 'High Impact',
  },
  {
    id: 'playlist-curator-outreach',
    number: '23',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Independent Playlist Curator Outreach',
    short: 'Direct personal outreach to community tastemakers with active playlists.',
    description:
      'Targeted, individual outreach to independent tastemakers, gym, study, chill, and genre-specific playlist creators who actively discover and add new songs.',
    features: [
      'Manual playlist quality audit (disqualifies botted/dead lists)',
      'Personalized outreach messages highlighting exact playlist aesthetic',
      'Follow-up cadence management respecting curator guidelines',
      'Placement report with listener follower counts',
    ],
    forWho: 'Independent artists looking for tangible stream and listener growth.',
    deliverables: ['Vetted curator pitch log', 'Placement tracking sheet', 'Direct curator feedback digest'],
  },
  {
    id: 'music-blog-pitching',
    number: '24',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Music Blog Pitching',
    short: 'Targeted media submissions to respected music blogs and online zines.',
    description:
      'Pitch your release to reputable indie music publications, culture websites, and niche genre blogs for premiere reviews, interviews, and features.',
    features: [
      'Tailored press release and EPK link formatting',
      'Submissions to genre-matching indie blogs and music sites',
      'Writer and editor-targeted pitch emails',
      'Google Knowledge Panel signal building via press mentions',
    ],
    forWho: 'Artists needing online press mentions for credibility and SEO verification.',
    deliverables: ['Press distribution list', 'Custom email pitch deck', 'Media coverage clip book'],
  },
  {
    id: 'music-media-outreach',
    number: '25',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Music Media Outreach',
    short: 'Radio stations, podcast hosts, and digital music media campaign.',
    description:
      'Expand beyond digital playlists into student radio, independent digital broadcast stations, music interview podcasts, and online culture outlets.',
    features: [
      'Non-commercial and digital radio station roster pitching',
      'Music podcast host and YouTube curator submissions',
      'Broadcast-ready WAV/MP3 delivery with metadata tags',
      'Station interview and guest feature coordination',
    ],
    forWho: 'Artists with compelling stories, debut projects, or touring schedules.',
    deliverables: ['Media contact roster', 'Broadcast submission package', 'Airplay response report'],
  },
  {
    id: 'industry-exposure-campaigns',
    number: '26',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Music Industry Exposure Campaigns',
    short: 'Executive one-sheet and showcase preparation for A&R and sync supervisors.',
    description:
      'Position your music for sync licensing consideration, publishing scouts, indie record labels, and festival booking agents with a pristine industry presentation.',
    features: [
      'Executive industry one-sheet with key achievements and sonic references',
      'Sync-ready metadata preparation (instrumental, clean, stems info)',
      'Submissions to independent A&R registries and showcase platforms',
      'Music supervisor submission formatting compliance',
    ],
    forWho: 'High-caliber musicians seeking licensing, management, or label backing.',
    deliverables: ['Professional industry one-sheet (PDF)', 'Sync metadata sheet', 'Showcase submission guide'],
  },
  {
    id: 'music-submission-preparation',
    number: '27',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Music Submission Preparation',
    short: 'Packaging your press kit, private listening links, and assets for pitching.',
    description:
      'Never lose an opportunity due to a broken link or messy submission. We package your private SoundCloud/DISCO links, bio, photos, and credits into a single sleek link.',
    features: [
      'Private streaming link creation (SoundCloud / DISCO / Box / Drive)',
      'High-res photo download pack and credits document',
      'Short elevator pitch and biographical soundbite preparation',
      'One-click EPK package ready to forward to any contact',
    ],
    forWho: 'Any artist actively sending their music to industry contacts.',
    deliverables: ['Ready-to-send pitch email template', 'Curated digital EPK folder', 'Asset checklist'],
  },
  {
    id: 'genre-based-music-pitching',
    number: '28',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Genre-Based Music Pitching',
    short: 'Sub-niche pitch targeting for Hip-Hop, Afrobeats, R&B, Pop, Rock, and EDM.',
    description:
      'Avoid generic pitching by tailoring your narrative, comparable artists, and sonic attributes directly to curators who specialize in your specific genre sub-culture.',
    features: [
      'Genre-specific curator database segmentation',
      'Comparative artist references ("For fans of...") research',
      'Cultural context and sound innovation highlights',
      'Niche playlist and YouTube channel targeting',
    ],
    forWho: 'Artists with strong genre roots (Afrobeats, Trap, Indie Pop, Synthwave, etc.).',
    deliverables: ['Genre target blueprint', 'Custom comparative pitch letter', 'Specialized curator contacts log'],
  },
  {
    id: 'artist-discovery-outreach',
    number: '29',
    categoryId: 'music-pitching',
    categoryName: 'Music Pitching & Industry Outreach',
    title: 'Artist Discovery & Outreach',
    short: 'Direct introduction campaigns to collaborative artists, producers, and DJs.',
    description:
      'Expand your peer network through strategic introductions to complementary artists, touring acts seeking support, DJ remixers, and visionary beatmakers.',
    features: [
      'Identification of complementary artists in similar growth tiers',
      'Professional collaboration pitch drafts and feature proposals',
      'DJ promo pool and remixer outreach for club/festival exposure',
      'Co-marketing and split-release campaign conceptualization',
    ],
    forWho: 'Artists looking to grow through authentic peer collaborations and features.',
    deliverables: ['Peer collaboration target list', 'Feature outreach script', 'Co-release rollout plan'],
  },

  // ==========================================
  // CATEGORY D: MUSIC ROYALTIES & RIGHTS SUPPORT (30-38)
  // ==========================================
  {
    id: 'music-royalty-claiming',
    number: '30',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Music Royalty Claiming Assistance',
    short: 'Step-by-step guidance to collect streaming, broadcast, and performance earnings.',
    description:
      'Understand the complete music royalties ecosystem and ensure you are collecting 100% of master royalties, publishing royalties, and mechanicals generated by your songs.',
    features: [
      'Audit of existing royalty flow and identifying collection gaps',
      'Distributor royalty collection verification and payout threshold guidance',
      'Explanation of songwriter vs recording artist revenue streams',
      'Action plan to claim withheld or uncollected catalog revenue',
    ],
    forWho: 'Artists with active streams who suspect they are missing royalty payouts.',
    deliverables: ['Royalty flow map document', 'Missing revenue audit checklist', 'Claiming action schedule'],
    guidanceNote: 'AFAQYOMI provides administrative workflow guidance. All royalty funds flow directly to the artist.',
  },
  {
    id: 'unclaimed-royalty-identification',
    number: '31',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Unclaimed Royalty Identification Guidance',
    short: 'Locate unpaid "black box" royalties across collective management societies.',
    description:
      'Search public databases (MLC, SoundExchange, PRO databases) for unmatched sound recordings, missing songwriter credits, and unclaimed royalties waiting in escrow.',
    features: [
      'The MLC (Mechanical Licensing Collective) unmatched recording search',
      'SoundExchange unclaimed digital performance royalty lookup',
      'PRO public repertory search for unlinked or miscredited titles',
      'Resolution documentation for claiming ownership of matched recordings',
    ],
    forWho: 'Songwriters and artists whose tracks have accumulated streams over years.',
    deliverables: ['Unmatched works report', 'Claim submission draft file', 'ISRC/ISWC verification sheet'],
  },
  {
    id: 'music-publishing-registration',
    number: '32',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Music Publishing Registration Support',
    short: 'Registering compositions with publishing administrators and collecting societies.',
    description:
      'Navigate the publishing registration process with organizations like Songtrust, Sentric, or your self-administered publishing entity to capture global songwriter income.',
    features: [
      'Publishing entity setup guidance (creating your own publishing company)',
      'Song registration with global mechanical and publishing networks',
      'ISWC (International Standard Musical Work Code) generation guidance',
      'Global micro-sync and lyric reproduction royalty collection setup',
    ],
    forWho: 'Songwriters, lyricists, and producers holding composition copyrights.',
    deliverables: ['Publishing setup walk-through', 'Work registration batch form', 'Collection timeline guide'],
  },
  {
    id: 'performance-royalty-registration',
    number: '33',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Performance Royalty Registration Guidance',
    short: 'Affiliation and work catalog registration with BMI, ASCAP, PRS, or SAMRO.',
    description:
      'Guidance for songwriter and publisher affiliation with your local Performing Rights Organization (PRO) to collect royalties when music is played on radio, TV, or live venues.',
    features: [
      'PRO affiliation application walkthrough (BMI, ASCAP, PRS for Music, etc.)',
      'Correct registration of song titles, co-writers, and publisher shares',
      'Live performance setlist submission guidance for touring royalty claims',
      'IPI / CAE number verification and catalog linkage',
    ],
    forWho: 'Writers releasing original songs or performing at live music venues.',
    deliverables: ['PRO registration step-by-step PDF', 'Work submission data sheet', 'Live royalty claim guide'],
  },
  {
    id: 'mechanical-royalty-support',
    number: '34',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Mechanical Royalty Support',
    short: 'Claiming mechanical royalties generated by digital interactive streams.',
    description:
      'Ensure interactive streams on Spotify, Apple Music, and Amazon Music generate your statutory mechanical royalties through proper registration with The MLC and international CMOs.',
    features: [
      'The MLC member registration and catalog upload guidance (US streams)',
      'International mechanical collection societies guidance (MCPS, SACEM, etc.)',
      'Cover song licensing and compulsory mechanical license explanation',
      'Split sheet verification to prevent mechanical dispute freezes',
    ],
    forWho: 'Songwriters generating on-demand streams in the US and globally.',
    deliverables: ['MLC bulk upload preparation sheet', 'Cover song licensing checklist', 'Mechanical revenue guide'],
  },
  {
    id: 'sound-recording-royalty-guidance',
    number: '35',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Sound Recording Royalty Guidance',
    short: 'SoundExchange registration for satellite radio, Pandora, and non-interactive plays.',
    description:
      'Help recording artists and master owners register with SoundExchange and neighboring rights organizations to collect non-interactive digital radio performance royalties.',
    features: [
      'SoundExchange account registration guidance for artists and master owners',
      'Overlapping claims resolution and catalog confirmation',
      'Featured artist vs non-featured performer fund distinction',
      'Neighboring rights collection guidance for international broadcasts (PPL UK, etc.)',
    ],
    forWho: 'Vocalists, producers, and label owners with radio or web radio airplay.',
    deliverables: ['SoundExchange catalog registration form', 'Neighboring rights checklist', 'Direct deposit setup guide'],
  },
  {
    id: 'music-rights-ownership-guidance',
    number: '36',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Music Rights & Ownership Guidance',
    short: 'Master vs Composition copyright education and ownership documentation.',
    description:
      'Clear, practical guidance demystifying music copyright law so you retain ownership of your masters, understand work-for-hire agreements, and avoid predatory contract terms.',
    features: [
      'Clear breakdown: Master sound recording (℗) vs Musical work (©)',
      'Standard split sheet templates for studio co-writing sessions',
      'Work-for-hire and producer agreement structural guidance',
      'Beat leasing license tier explanations (non-exclusive vs exclusive)',
    ],
    forWho: 'Independent artists collaborating in studios or buying producer beats.',
    deliverables: ['Customizable studio split sheet template', 'Beat license review checklist', 'Rights ownership overview PDF'],
  },
  {
    id: 'artist-royalty-administration',
    number: '37',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Artist Royalty Administration Support',
    short: 'Administrative ledger management for multi-party splits and payouts.',
    description:
      'Organize your accounting records, maintain multi-song split registers, and calculate percentage shares owed to featured artists, mixers, and producers without headaches.',
    features: [
      'Creation of a unified artist master revenue spreadsheet',
      'Net vs gross royalty calculation formulas tailored to your releases',
      'Statement reconciliation to verify distributor payout accuracy',
      'Tax treaty documentation guidance (W-8BEN for international payouts)',
    ],
    forWho: 'Artists managing collaborative releases or indie boutique labels.',
    deliverables: ['Automated split accounting template (Excel/Sheets)', 'Distributor reconciliation guide', 'Tax form walk-through'],
  },
  {
    id: 'music-metadata-contributor-verification',
    number: '38',
    categoryId: 'royalties-rights',
    categoryName: 'Music Royalties & Rights Support',
    title: 'Music Metadata & Contributor Verification',
    short: 'Harmonizing ISRC, ISWC, and IPI numbers across all collection societies.',
    description:
      'Eliminate the #1 cause of lost royalties: mismatched song data between your digital distributor, your PRO, SoundExchange, and The MLC.',
    features: [
      'Comprehensive cross-society catalog match audit',
      'Pairing each ISRC (recording) with its corresponding ISWC (composition)',
      'Verification of writer IPI numbers across all co-writer entries',
      'Correction notices submitted to societies for corrupted song titles',
    ],
    forWho: 'Artists wanting complete peace of mind that their catalog is 100% collecting.',
    deliverables: ['Unified master rights register', 'Discrepancy audit report', 'Society update request scripts'],
    badge: 'Essential',
  },

  // ==========================================
  // CATEGORY E: DIGITAL & WEB DEVELOPMENT (39-50)
  // ==========================================
  {
    id: 'website-development',
    number: '39',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Website Development',
    short: 'End-to-end bespoke website engineering built with modern web tech.',
    description:
      'Bespoke web development combining cutting-edge frameworks (React, Next.js, Vite), responsive typography, high-converting layouts, and ultra-fast hosting infrastructure.',
    features: [
      'Clean, maintainable modern code architecture with zero bloat',
      'Custom animations, audio player embeds, and interactive elements',
      'Integrated contact forms, booking systems, and lead magnets',
      'SSL security, custom domain configuration, and CDN edge hosting',
    ],
    forWho: 'Businesses, creators, labels, and organizations needing a high-end web presence.',
    deliverables: ['Full responsive website build', 'Deployment on custom domain', 'Admin training session'],
  },
  {
    id: 'artist-website-development',
    number: '40',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Artist Website Development',
    short: 'Sleek, music-first hub with streaming players, tour dates, and merch.',
    description:
      'The ultimate digital headquarters for recording artists: embed new releases with live audio players, showcase music videos, sync Bandsintown tour dates, and capture fan emails.',
    features: [
      'Custom embedded audio player with release previews and lyrics',
      'Music video gallery with YouTube/Vimeo integration',
      'Tour date widget integration (Bandsintown / Songkick / custom)',
      'Direct fan email signup funnel with incentive downloads',
    ],
    forWho: 'Recording artists, DJs, bands, and music producers.',
    deliverables: ['Custom artist web platform', 'Streaming widget integration', 'Fan capture setup'],
    badge: 'Artist Special',
  },
  {
    id: 'business-website-development',
    number: '41',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Business Website Development',
    short: 'Corporate, agency, and enterprise platforms built to drive inquiries.',
    description:
      'Professional digital storefronts engineered to build trust, communicate complex service offerings, and convert high-value corporate inquiries into signed contracts.',
    features: [
      'Strategic service positioning hierarchy and case studies',
      'Interactive quote calculator and appointment booking flows',
      'Client testimonials, partner logos, and trust badge layout',
      'Compliance with GDPR, privacy standards, and accessibility regulations',
    ],
    forWho: 'Service agencies, production companies, studios, and consultants.',
    deliverables: ['Multi-page corporate website', 'Custom inquiry form pipeline', 'SEO configuration suite'],
  },
  {
    id: 'portfolio-website-development',
    number: '42',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Portfolio Website Development',
    short: 'Immersive showcase galleries for visual artists, designers, and directors.',
    description:
      'Present your creative work with cinema-grade visual appeal. Features fullscreen video previews, filterable project grids, lightbox galleries, and case study deep dives.',
    features: [
      'Category-filtered portfolio grid with instant search',
      'High-resolution image zoom and fullscreen video modals',
      'Client case study templates highlighting process and results',
      'Ultra-fast lazy-loading for heavy media files',
    ],
    forWho: 'Creative directors, videographers, CAD designers, photographers, and audio engineers.',
    deliverables: ['Interactive portfolio website', 'Project CMS / easy update guide', 'Media optimization pipeline'],
  },
  {
    id: 'ecommerce-website-development',
    number: '43',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'E-commerce Website Development',
    short: 'Fast digital stores for artist merch, digital downloads, and products.',
    description:
      'Launch your official online shop for vinyl, apparel, digital album downloads, beat licenses, or sample packs with secure checkout via Stripe, PayPal, or Shopify.',
    features: [
      'Merch storefront with size/color variants and inventory badges',
      'Instant digital file download delivery for audio/sample packs',
      'Secure global payment gateways (Stripe, Apple Pay, PayPal)',
      'Abandoned cart recovery and automated customer email receipts',
    ],
    forWho: 'Artists selling physical merchandise, beatmakers, and boutique brands.',
    deliverables: ['Fully functional e-commerce store', 'Payment gateway connection', 'Product catalog import'],
  },
  {
    id: 'landing-page-development',
    number: '44',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Landing Page Development',
    short: 'Laser-focused single-page funnels optimized for ad campaigns & pre-saves.',
    description:
      'High-converting landing pages built for one specific goal: album launch, event ticketing, course signup, or service lead generation with frictionless user experience.',
    features: [
      'Persuasive above-the-fold design with compelling value proposition',
      'Single clear call-to-action (CTA) removing distracting navigation',
      'Mobile-first layout optimized for TikTok/Instagram ad traffic',
      'A/B test ready with Google Analytics 4 and Meta Pixel tracking',
    ],
    forWho: 'Campaign launches, promotional advertising, and product announcements.',
    deliverables: ['High-converting landing page', 'Tracking pixel installation', 'Speed audit pass'],
  },
  {
    id: 'custom-website-design',
    number: '45',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Custom Website Design',
    short: 'Unique UI/UX design crafted in Figma with distinct artistic character.',
    description:
      'Reject boring generic templates. We build custom design systems, bespoke iconography, dark-mode color aesthetics, and motion prototypes that reflect your exact brand DNA.',
    features: [
      'Custom Figma wireframes and high-fidelity desktop/mobile mockups',
      'Tailored color palette, font pairings, and UI component kit',
      'Interactive prototype demonstrating hover states and micro-interactions',
      'Design handoff ready for direct frontend implementation',
    ],
    forWho: 'Brands and artists refusing to look like everyone else on the web.',
    deliverables: ['Figma design file', 'Exported vector UI assets', 'Interactive prototype preview'],
  },
  {
    id: 'website-redesign',
    number: '46',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Website Redesign',
    short: 'Modernizing outdated websites with refreshed aesthetics and modern code.',
    description:
      'Transform your legacy, slow, or outdated website into a modern, fast, mobile-friendly powerhouse while preserving existing search engine rankings and content.',
    features: [
      'Audit of existing website pain points, bounce rates, and broken links',
      'Fresh, elevated visual aesthetic reflecting current brand standing',
      'SEO URL mapping and 301 redirect architecture to protect rankings',
      'Content migration and database modernization',
    ],
    forWho: 'Companies and creators whose current website no longer matches their quality.',
    deliverables: ['Redesign comparative mockup', '301 redirect ledger', 'Newly deployed website'],
  },
  {
    id: 'responsive-website-development',
    number: '47',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Responsive Website Development',
    short: 'Pixel-perfect performance across smartphones, tablets, laptops, and 4K displays.',
    description:
      'Over 75% of your visitors are on mobile devices. We ensure your website looks stunning, navigates effortlessly, and functions smoothly on every screen size.',
    features: [
      'Fluid layouts built with CSS Grid, Flexbox, and modern viewport units',
      'Touch-friendly navigation menus, sliders, and audio controls',
      'Responsive image delivery serving appropriate resolutions per device',
      'Cross-browser testing across Safari, Chrome, Edge, and Firefox',
    ],
    forWho: 'Every modern website owner requiring flawless mobile accessibility.',
    deliverables: ['Multi-device test audit report', 'Responsive touch controls', 'Clean cross-platform layout'],
  },
  {
    id: 'website-maintenance',
    number: '48',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Website Maintenance',
    short: 'Ongoing security patches, content updates, backups, and uptime monitoring.',
    description:
      'Keep your digital presence secure, updated, and fast without lifting a finger. Includes regular package updates, emergency bug fixes, and monthly content refreshes.',
    features: [
      '24/7 automated uptime and SSL certificate expiration monitoring',
      'Routine dependency security patches and framework updates',
      'Scheduled weekly cloud backups with instant rollback capability',
      'Monthly allocated hours for content updates, banner changes, and fixes',
    ],
    forWho: 'Busy artists and businesses wanting guaranteed site reliability.',
    deliverables: ['Monthly maintenance report', 'Automated backup logs', 'Priority support access'],
  },
  {
    id: 'website-seo-optimization',
    number: '49',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Website SEO Optimization',
    short: 'Google Search visibility, Schema structured data, and keyword targeting.',
    description:
      'Dominate organic search results when fans and clients look for your name, music genre, or creative services. We implement technical SEO, rich snippets, and metadata.',
    features: [
      'Comprehensive keyword research for your niche and geographical target',
      'JSON-LD Schema structured data (MusicGroup, Organization, Person, CreativeWork)',
      'Open Graph and Twitter Card tags for beautiful social media link previews',
      'XML sitemap generation, Google Search Console indexing, and robots.txt setup',
    ],
    forWho: 'Artists seeking Google Knowledge Panels and businesses seeking organic leads.',
    deliverables: ['Technical SEO audit report', 'Schema markup validation', 'Search Console submission confirmation'],
    badge: 'Search Rank',
  },
  {
    id: 'website-performance-optimization',
    number: '50',
    categoryId: 'web-development',
    categoryName: 'Digital & Web Development',
    title: 'Website Performance Optimization',
    short: 'Sub-second page load speeds, Web Vitals perfection, and asset compression.',
    description:
      'Eliminate slow loading times. We optimize heavy media, implement WebP/AVIF images, minify code bundles, and leverage browser caching to score 90+ on Google PageSpeed.',
    features: [
      'Google Core Web Vitals optimization (LCP, FID, CLS scoring)',
      'Next-generation image compression (WebP/AVIF) with lazy-loading',
      'JavaScript and CSS bundle splitting and tree-shaking',
      'Browser cache-control header configuration and edge CDN deployment',
    ],
    forWho: 'Websites experiencing high bounce rates or sluggish mobile performance.',
    deliverables: ['Before/after PageSpeed benchmark', 'Optimized asset bundle', 'Performance audit certificate'],
  },
];

// Helper query functions
export function getServicesByCategory(categoryId: ServiceCategory['id']): Service[] {
  return allServices.filter((service) => service.categoryId === categoryId);
}

export function getServiceById(id: string): Service | undefined {
  return allServices.find((service) => service.id === id);
}

// Legacy alias to maintain backwards compatibility
export const services = allServices;
