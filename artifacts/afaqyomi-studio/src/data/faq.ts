export type FAQCategory = 'GENERAL' | 'COVER ART' | 'AI MUSIC VIDEO' | '3D / CAD' | 'PRODUCT DESIGN' | 'WEBSITE DEVELOPMENT' | 'MUSIC MIXING & MASTERING' | 'PAYMENT' | 'PROCESS';

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  displayOrder: number;
  isPublished: boolean;
};

export const faqs: FAQ[] = [
  {
    id: 'services',
    question: 'What services does AFAQYOMI offer?',
    answer: 'AFAQYOMI offers cover art and visual design, AI music video creation, 3D/CAD and 3D printing-related design, product design, website development, and music mixing and mastering.',
    category: 'GENERAL',
    displayOrder: 1,
    isPublished: true,
  },
  {
    id: 'custom-project',
    question: 'Can I request a custom project?',
    answer: 'Yes. Custom projects are welcome. If your project does not fit one of the standard packages, you can send the requirements through the contact form and receive a project-specific quote.',
    category: 'GENERAL',
    displayOrder: 2,
    isPublished: true,
  },
  {
    id: 'prices-fixed',
    question: 'Are the prices fixed?',
    answer: 'The displayed prices are starting prices. Final pricing may vary depending on the complexity of the project, scope, number of deliverables, revisions, timeline and other requirements.',
    category: 'PAYMENT',
    displayOrder: 3,
    isPublished: true,
  },
  {
    id: 'start-project',
    question: 'How do I start a project?',
    answer: 'Click “Start a Project” and submit the project inquiry form. Include as much information as possible about what you want to create, your preferred timeline and any reference materials.',
    category: 'PROCESS',
    displayOrder: 4,
    isPublished: true,
  },
  {
    id: 'provide-references',
    question: 'Can I provide references or examples?',
    answer: 'Yes. You can provide reference images, links, sketches, examples or other materials that help communicate your creative direction.',
    category: 'PROCESS',
    displayOrder: 5,
    isPublished: true,
  },
  {
    id: 'custom-cover-art',
    question: 'Do you create custom cover art?',
    answer: 'Yes. Cover art can be developed around the artist, song, theme, mood and creative direction of the project.',
    category: 'COVER ART',
    displayOrder: 6,
    isPublished: true,
  },
  {
    id: 'ai-music-video',
    question: 'Can you create an AI music video from my song?',
    answer: 'Yes. AI-assisted music videos can be developed around the song’s mood, lyrics, concept and visual direction. The exact production approach depends on the project requirements.',
    category: 'AI MUSIC VIDEO',
    displayOrder: 7,
    isPublished: true,
  },
  {
    id: 'cad-from-reference',
    question: 'Can you create 3D/CAD designs from an idea or reference?',
    answer: 'Yes. A project can begin from sketches, reference images, dimensions or an existing concept. The available design process depends on the complexity and requirements of the project.',
    category: '3D / CAD',
    displayOrder: 8,
    isPublished: true,
  },
  {
    id: '3d-printing',
    question: 'Do you provide 3D printing?',
    answer: '3D printing-related design and preparation can be supported. Physical printing availability should be confirmed based on the specific project, location and production requirements.',
    category: '3D / CAD',
    displayOrder: 9,
    isPublished: true,
  },
  {
    id: 'revisions',
    question: 'Can I request revisions?',
    answer: 'Yes. Revision allowances depend on the selected package and project scope. Custom projects can include a revision process agreed upon before production begins.',
    category: 'PROCESS',
    displayOrder: 10,
    isPublished: true,
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer: 'Project timelines depend on the type, complexity and scope of the work. A specific delivery timeline can be discussed after reviewing the project requirements.',
    category: 'PROCESS',
    displayOrder: 11,
    isPublished: true,
  },
  {
    id: 'payment',
    question: 'How do I pay for a project?',
    answer: 'Payment arrangements can be discussed and confirmed before production begins. The exact payment process should be agreed upon based on the project and client requirements.',
    category: 'PAYMENT',
    displayOrder: 12,
    isPublished: true,
  },
  {
    id: 'previous-work',
    question: 'Can I see examples of previous work?',
    answer: 'Yes. Visit the Work section to explore selected AFAQYOMI projects across cover art, AI music videos, 3D/CAD and product design.',
    category: 'GENERAL',
    displayOrder: 13,
    isPublished: true,
  },
  {
    id: 'contact-before-purchasing',
    question: 'Can I contact AFAQYOMI before purchasing?',
    answer: 'Absolutely. If you have questions or are unsure which service is suitable for your project, contact AFAQYOMI before starting the project.',
    category: 'GENERAL',
    displayOrder: 14,
    isPublished: true,
  },

  {
    id: 'website-types',
    question: 'What type of websites do you create?',
    answer: "AFAQYOMI can create landing pages, portfolio websites, business websites, service websites, artist websites, promotional websites and custom digital experiences based on the project's requirements.",
    category: 'WEBSITE DEVELOPMENT', displayOrder: 15, isPublished: true,
  },
  {
    id: 'website-from-scratch',
    question: 'Can you design the website from scratch?',
    answer: "Yes. Website projects can include custom visual design, responsive layouts, typography, spacing, interactions and overall user experience based on the project's requirements.",
    category: 'WEBSITE DEVELOPMENT', displayOrder: 16, isPublished: true,
  },
  {
    id: 'website-redesign',
    question: 'Can you redesign an existing website?',
    answer: 'Yes. Existing websites can be redesigned to improve their visual presentation, responsiveness, user experience and overall structure.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 17, isPublished: true,
  },
  {
    id: 'website-mobile',
    question: 'Will the website work on mobile?',
    answer: 'Yes. Website projects are designed to work across desktop, tablet and mobile screen sizes.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 18, isPublished: true,
  },
  {
    id: 'website-contact-form',
    question: 'Can you add a contact form?',
    answer: 'Yes. Contact and project inquiry forms can be included depending on the selected package and project requirements.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 19, isPublished: true,
  },
  {
    id: 'website-social',
    question: 'Can you connect social media to my website?',
    answer: 'Yes. Social media profiles and relevant social links can be integrated into the website.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 20, isPublished: true,
  },
  {
    id: 'website-ecommerce',
    question: 'Can you build an online store?',
    answer: "E-commerce functionality can be discussed as part of a custom website project. The final scope and pricing depend on the required products, payment system, features and integrations.",
    category: 'WEBSITE DEVELOPMENT', displayOrder: 21, isPublished: true,
  },
  {
    id: 'website-booking',
    question: 'Can you add booking or appointment functionality?',
    answer: "Yes, booking functionality can be included when required. The exact implementation depends on the project's requirements and selected services.",
    category: 'WEBSITE DEVELOPMENT', displayOrder: 22, isPublished: true,
  },
  {
    id: 'website-api',
    question: 'Can you connect external services or APIs?',
    answer: 'Custom integrations and third-party services can be included in advanced website projects where technically appropriate.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 23, isPublished: true,
  },
  {
    id: 'website-timeline',
    question: 'How long does website development take?',
    answer: 'Project timelines depend on the number of pages, functionality, content, integrations and overall complexity. A specific timeline can be discussed after reviewing the project requirements.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 24, isPublished: true,
  },
  {
    id: 'website-hosting',
    question: 'Do you provide website hosting?',
    answer: 'Hosting and deployment assistance can be provided depending on the project requirements. The hosting provider and setup can be discussed before deployment.',
    category: 'WEBSITE DEVELOPMENT', displayOrder: 25, isPublished: true,
  },
  {
    id: 'website-maintenance',
    question: 'Can you maintain the website after delivery?',
    answer: "Post-launch updates and maintenance can be discussed depending on the client's requirements.",
    category: 'WEBSITE DEVELOPMENT', displayOrder: 26, isPublished: true,
  },
  {
    id: 'mix-master-included',
    question: 'What is included in your Music Mixing & Mastering service?',
    answer: 'The service can include vocal and instrumental balancing, EQ, compression, effects, automation, stereo refinement, mastering, loudness optimization and final delivery depending on the selected package.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 27, isPublished: true,
  },
  {
    id: 'mix-only',
    question: 'Can I request mixing only?',
    answer: 'Yes. If you only need mixing and do not require mastering, mention this in your project inquiry and the project can be quoted according to the required scope.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 28, isPublished: true,
  },
  {
    id: 'master-only',
    question: 'Can I request mastering only?',
    answer: 'Yes. If your mix is already finished and you only need mastering, mention this when submitting your project requirements so the appropriate service can be discussed.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 29, isPublished: true,
  },
  {
    id: 'mix-stems',
    question: 'Can you mix vocals and instrumental tracks separately?',
    answer: 'Yes, where the required stems or individual audio files are provided. The final workflow depends on the number of stems and complexity of the production.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 30, isPublished: true,
  },
  {
    id: 'mix-albums',
    question: 'Do you work on EPs and albums?',
    answer: 'Yes. Larger releases can be handled as custom projects, including consistency and quality control across multiple tracks.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 31, isPublished: true,
  },
  {
    id: 'mix-files',
    question: 'What files should I send for mixing?',
    answer: 'The required files depend on the project. Where possible, provide high-quality stems or properly exported audio files along with any relevant references and creative instructions.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 32, isPublished: true,
  },
  {
    id: 'mix-format',
    question: 'What format will I receive?',
    answer: 'Final delivery formats depend on the selected package and project requirements. WAV and MP3 can be supported, with streaming-ready masters available where applicable.',
    category: 'MUSIC MIXING & MASTERING', displayOrder: 33, isPublished: true,
  },
];

export const publishedFAQs = faqs
  .filter((faq) => faq.isPublished)
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const homepageFAQs = publishedFAQs.slice(0, 5);
export const faqCategories: Array<'ALL' | FAQCategory> = ['ALL', 'GENERAL', 'COVER ART', 'AI MUSIC VIDEO', '3D / CAD', 'PRODUCT DESIGN', 'WEBSITE DEVELOPMENT', 'MUSIC MIXING & MASTERING', 'PAYMENT', 'PROCESS'];