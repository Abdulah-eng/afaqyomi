export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo?: string;
  shortBio: string;
  fullBio: string;
  experience?: string;
  specialties: string[];
  responsibilities: string[];
  socialLinks: { label: string; href: string }[];
  projects: string[];
  displayOrder: number;
  isActive: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'afolabi-ayodeji-quadri',
    slug: 'afolabi-ayodeji-quadri',
    name: 'AFOLABI AYODEJI QUADRI',
    role: 'Founder & Creative Director',
    photo: '/media/afaqyomi-founder.jpeg',
    shortBio: 'Founder-led creative direction across music marketing, artist development, digital distribution and creative technology.',
    fullBio:
      'AFOLABI AYODEJI QUADRI is the founder and creative director of AFAQYOMI, bringing 5+ years of experience across music marketing, digital distribution, brand visibility, and innovative digital experiences.',
    experience: 'Founder & Creative Director',
    specialties: [
      'Music Promotion & Marketing',
      'Digital Music Distribution',
      'Playlist Outreach & Pitching',
      'Royalty & Rights Guidance',
      'Creative Direction',
      'Website & Digital Development',
    ],
    responsibilities: ['Executive direction', 'Creative supervision', 'Agency strategy'],
    socialLinks: [],
    projects: ['spotify-promotion-campaign', 'single-release-delivery', 'artist-website-showcase'],
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'jeffery',
    slug: 'jeffery',
    name: 'Jeffery',
    role: 'Head of Music & Distribution',
    photo: '/media/team-jeffery.jpeg',
    shortBio: 'Oversees music distribution, artist releases, streaming platforms, and industry relationships, helping independent artists take their music to a wider audience.',
    fullBio:
      'Jeffery serves as Head of Music & Distribution at AFAQYOMI. He oversees music distribution, artist releases, streaming platforms, and industry relationships, helping independent artists take their music to a wider audience across 150+ worldwide DSPs.',
    experience: 'Head of Music & Distribution',
    specialties: [
      'Digital Music Distribution',
      'DSP Platform Relationships',
      'Artist Release Rollouts',
      'Catalogue Ingestion',
      'ISRC & Metadata Architecture',
    ],
    responsibilities: ['Global music distribution', 'Platform partner coordination', 'Release scheduling QA'],
    socialLinks: [],
    projects: ['single-distribution-project', 'ep-release-sequencing-project', 'album-distribution-mastering-project'],
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'micheal',
    slug: 'micheal',
    name: 'Micheal',
    role: 'Audio Production Director',
    photo: '/media/team-micheal.jpeg',
    shortBio: 'Manages music production, audio engineering, mixing, and mastering to ensure every project meets professional sound quality standards.',
    fullBio:
      'Micheal leads the sonic excellence at AFAQYOMI as Audio Production Director. He manages music production, audio engineering, mixing, and mastering to ensure every project meets professional industry sound quality standards and streaming loudness specifications.',
    experience: 'Audio Production Director',
    specialties: [
      'Audio Production',
      'Studio Mixing & Mastering',
      'Loudness Optimization (-14 LUFS)',
      'Audio Engineering QA',
      'Sound Design',
    ],
    responsibilities: ['Audio engineering standards', 'Master file verification', 'Acoustic quality control'],
    socialLinks: [],
    projects: ['track-mastering-mixing', 'we-could-be-love-commercial-master'],
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'clara',
    slug: 'clara',
    name: 'Clara',
    role: 'Marketing & Artist Relations Manager',
    photo: '/media/team-clara.jpeg',
    shortBio: 'Develops promotional strategies, playlist pitching campaigns, artist relationships, and audience growth initiatives.',
    fullBio:
      'Clara directs marketing execution and artist partnerships at AFAQYOMI. She develops targeted promotional strategies, playlist pitching campaigns, artist relationships, and authentic audience growth initiatives across streaming and social platforms.',
    experience: 'Marketing & Artist Relations',
    specialties: [
      'Promotional Strategy',
      'Playlist Pitching Campaigns',
      'Artist Relations',
      'Audience Growth Initiatives',
      'Tastemaker Seeding',
    ],
    responsibilities: ['Campaign management', 'Curator communications', 'Audience growth strategy'],
    socialLinks: [],
    projects: ['spotify-promotional-campaign-framework', 'curator-outreach-deck-presentation'],
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'martha-j',
    slug: 'martha-j',
    name: 'Martha J',
    role: 'Media & Video Production Manager',
    photo: '/media/team-martha.jpeg',
    shortBio: 'Oversees cinematic visuals, AI-assisted music videos, digital content production, and multimedia projects.',
    fullBio:
      'Martha J leads visual storytelling at AFAQYOMI as Media & Video Production Manager. She oversees cinematic visuals, AI-assisted music videos, digital content production, and multimedia projects that command attention on social feeds and YouTube.',
    experience: 'Media & Video Production',
    specialties: [
      'Cinematic Video Direction',
      'AI-Assisted Music Videos',
      'Digital Content Production',
      'Multimedia Editing',
      'Visual Storytelling',
    ],
    responsibilities: ['Video production supervision', 'Visual creative direction', 'Multimedia asset QA'],
    socialLinks: [],
    projects: ['cinematic-music-video-promotion', 'youtube-music-video-promotion-suite'],
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'angelica',
    slug: 'angelica',
    name: 'Angelica',
    role: 'Client Success & Operations Manager',
    photo: '/media/team-angelica.jpeg',
    shortBio: 'Coordinates client projects, manages communication, monitors service delivery, and ensures clients receive a smooth and professional experience.',
    fullBio:
      'Angelica is the operational heartbeat of AFAQYOMI as Client Success & Operations Manager. She coordinates client projects, manages cross-department communication, monitors service delivery, and ensures clients receive a smooth, responsive, and professional experience.',
    experience: 'Client Success & Operations',
    specialties: [
      'Client Success Management',
      'Project Coordination',
      'Service Delivery Monitoring',
      'Quality Assurance',
      'Communication Workflows',
    ],
    responsibilities: ['Client onboarding', 'Milestone tracking', 'Support issue resolution'],
    socialLinks: [],
    projects: ['artist-official-music-website', 'release-announcement-graphics-pack'],
    displayOrder: 6,
    isActive: true,
  },
  {
    id: 'salahudeen-abdulrasaq',
    slug: 'salahudeen-abdulrasaq',
    name: 'Salahudeen AbdulRasaq',
    role: 'Technical Operations Manager',
    photo: '/media/salahudeen_abdulrasaq.png',
    shortBio: 'Operations manager focused on website development, release systems and digital infrastructure.',
    fullBio:
      'Salahudeen AbdulRasaq oversees technical execution, website development, metadata workflow validation and web infrastructure at AFAQYOMI.',
    experience: 'Technical Operations',
    specialties: ['Website Development', 'Technical Systems', 'Release Operations', 'SEO & Performance'],
    responsibilities: ['Technical project management', 'Web development', 'Operations QA'],
    socialLinks: [],
    projects: ['business-website-development', 'music-metadata-pipeline'],
    displayOrder: 7,
    isActive: true,
  },
];
