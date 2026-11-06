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
    displayOrder: 2,
    isActive: true,
  },
];
