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
    experience: '5+ years of experience',
    specialties: [
      'Music Promotion & Marketing',
      'Digital Music Distribution',
      'Playlist Outreach & Pitching',
      'Royalty & Rights Guidance',
      'Creative Direction',
      'Website & Digital Development',
    ],
    responsibilities: ['Executive direction', 'Creative supervision', 'Campaign strategy'],
    socialLinks: [],
    projects: ['spotify-promotion-campaign', 'single-release-delivery', 'artist-website-showcase'],
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'micheal',
    slug: 'micheal',
    name: 'Micheal',
    role: 'Audio Production Director',
    photo: '/media/team/micheal.jpg',
    shortBio: 'Manages music production, audio engineering, mixing, and mastering to ensure every project meets professional sound quality standards.',
    fullBio:
      'Micheal leads sound engineering and audio quality assurance at AFAQYOMI. He manages music production, audio engineering, mixing, and mastering to ensure every project meets professional sound quality standards.',
    experience: 'Audio Engineering Lead',
    specialties: ['Audio Engineering', 'Mixing & Mastering', 'Sound Quality QA', 'Studio Production'],
    responsibilities: ['Audio mastering', 'Sound quality control', 'Studio engineering'],
    socialLinks: [],
    projects: ['audio-mastering-showcase'],
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'martha-j',
    slug: 'martha-j',
    name: 'Martha J',
    role: 'Media & Video Production Manager',
    photo: '/media/team/martha-j.jpg',
    shortBio: 'Oversees cinematic visuals, AI-assisted music videos, digital content production, and multimedia projects.',
    fullBio:
      'Martha J oversees cinematic visuals, AI-assisted music videos, digital content production, and multimedia projects at AFAQYOMI, transforming musical narratives into compelling visual campaigns.',
    experience: 'Media Production Lead',
    specialties: ['Visual Direction', 'Music Video Production', 'AI-Assisted Video', 'Digital Content Creation'],
    responsibilities: ['Cinematic visual production', 'Video editing & motion', 'Multimedia project management'],
    socialLinks: [],
    projects: ['cinematic-video-production'],
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'clara',
    slug: 'clara',
    name: 'Clara',
    role: 'Marketing & Artist Relations Manager',
    photo: '/media/team/clara.jpg',
    shortBio: 'Develops promotional strategies, playlist pitching campaigns, artist relationships, and audience growth initiatives.',
    fullBio:
      'Clara develops promotional strategies, playlist pitching campaigns, artist relationships, and audience growth initiatives at AFAQYOMI, bridging the gap between independent musicians and global listener audiences.',
    experience: 'Artist Growth Specialist',
    specialties: ['Promotional Campaigns', 'Playlist Pitching', 'Artist Relations', 'Audience Growth'],
    responsibilities: ['Campaign strategy', 'Playlist curator outreach', 'Artist partner relations'],
    socialLinks: [],
    projects: ['spotify-promotion-campaign'],
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'angelica',
    slug: 'angelica',
    name: 'Angelica',
    role: 'Client Success & Operations Manager',
    photo: '/media/team/angelica.jpg',
    shortBio: 'Coordinates client projects, manages communication, monitors service delivery, and ensures clients receive a smooth and professional experience.',
    fullBio:
      'Angelica coordinates client projects, manages communication, monitors service delivery, and ensures clients receive a smooth and professional experience at AFAQYOMI.',
    experience: 'Client Operations Lead',
    specialties: ['Client Success', 'Project Coordination', 'Service Delivery Monitoring', 'Client Communications'],
    responsibilities: ['Client project coordination', 'Service delivery oversight', 'Support management'],
    socialLinks: [],
    projects: ['client-onboarding-workflow'],
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'jeffery',
    slug: 'jeffery',
    name: 'Jeffery',
    role: 'Head of Music & Distribution',
    photo: '/media/team/jeffery.jpg',
    shortBio: 'Oversees music distribution, artist releases, streaming platforms, and industry relationships, helping independent artists take their music to a wider audience.',
    fullBio:
      'Jeffery oversees music distribution, artist releases, streaming platforms, and industry relationships at AFAQYOMI, helping independent artists take their music to a wider audience across 150+ global platforms.',
    experience: 'Distribution & Industry Relations Head',
    specialties: ['Global Music Distribution', 'Streaming Platforms', 'Release Strategy', 'Industry Partnerships'],
    responsibilities: ['Distribution channel operations', 'DSP relationships', 'Global release execution'],
    socialLinks: [],
    projects: ['single-release-delivery'],
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
    experience: '3+ years of experience',
    specialties: ['Website Development', 'Technical Systems', 'Release Operations', 'SEO & Performance'],
    responsibilities: ['Technical project management', 'Web development', 'Operations QA'],
    socialLinks: [],
    projects: ['business-website-development', 'music-metadata-pipeline'],
    displayOrder: 7,
    isActive: true,
  },
];
