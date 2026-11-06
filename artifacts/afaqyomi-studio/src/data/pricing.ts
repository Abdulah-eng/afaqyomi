export type PricingCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type PricingPackage = {
  id: string;
  category: string;
  name: 'Starter' | 'Pro' | 'Custom';
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  featured: boolean;
  ctaText: string;
  displayOrder: number;
};

export const pricingCategories: PricingCategory[] = [
  { id: 'cover-art', number: '01', title: 'Cover Art', description: 'Visual identity for music, stories and creative releases.' },
  { id: 'ai-music-video', number: '02', title: 'AI Music Video', description: 'AI-assisted visual experiences shaped around a song and its mood.' },
  { id: '3d-cad-printing', number: '03', title: '3D / CAD & 3D Printing', description: 'Detailed modeling and technical preparation for physical ideas.' },
  { id: 'product-design', number: '04', title: 'Product Design', description: 'From early concept to clear, presentation-ready product visuals.' },
  { id: 'website-development', number: '05', title: 'Website Development', description: 'Responsive digital experiences for businesses, creators and brands.' },
  { id: 'music-mixing-mastering', number: '06', title: 'Music Mixing & Mastering', description: 'Balanced, polished audio prepared around your release and production needs.' },
];

const pkg = (
  id: string, category: string, name: PricingPackage['name'], price: string, priceLabel: string,
  description: string, features: string[], displayOrder: number, featured = false, ctaText = 'Start a project',
): PricingPackage => ({ id, category, name, price, priceLabel, description, features, displayOrder, featured, ctaText });

export const pricingPackages: PricingPackage[] = [
  pkg('cover-art-starter','cover-art','Starter','5','Starting at $5','Professional artwork for a single release or creative project.',['1 cover artwork concept','High-resolution final artwork','Professional composition','Basic revisions','Digital delivery'],1),
  pkg('cover-art-pro','cover-art','Pro','15','Starting at $15','A more detailed visual package for artists and music releases.',['Premium cover artwork','Multiple creative directions','High-resolution final files','Multiple revisions','Social media version','Professional presentation'],2,true),
  pkg('cover-art-custom','cover-art','Custom','35','Starting at $35','For advanced artwork, complete visual concepts or larger creative projects.',['Custom creative direction','Multiple artwork variations','Extended visual development','Additional deliverables','Custom requirements'],3,false),
  pkg('ai-music-video-starter','ai-music-video','Starter','35','Starting at $35','A short AI-powered visual experience for a song or promotional project.',['Short-form AI video','Creative visual direction','AI-generated scenes','Basic editing','Music synchronization'],1),
  pkg('ai-music-video-pro','ai-music-video','Pro','120','Starting at $120','A more developed cinematic AI music video designed around the song and creative direction.',['Extended video production','Multiple AI-generated scenes','Cinematic visual direction','Advanced editing','Music synchronization','Visual effects','Multiple revisions'],2,true),
  pkg('ai-music-video-custom','ai-music-video','Custom','200','Starting at $200','For full-length music videos, complex storytelling or advanced visual production.',['Custom story development','Full creative direction','Multiple scenes','Advanced AI production','Professional editing','Custom deliverables'],3,false),
  pkg('3d-cad-printing-starter','3d-cad-printing','Starter','80','Starting at $80','For simple 3D modeling and CAD requirements.',['Basic 3D model','CAD development','Basic revisions','Standard file delivery'],1),
  pkg('3d-cad-printing-pro','3d-cad-printing','Pro','150','Starting at $150','For detailed product, jewelry or manufacturing-oriented CAD projects.',['Detailed 3D modeling','CAD development','Multiple views','Technical refinement','STL/production-ready files where applicable','Multiple revisions'],2,true),
  pkg('3d-cad-printing-custom','3d-cad-printing','Custom','300','Starting at $300','For complex jewelry, product or manufacturing projects requiring detailed modeling and technical development.',['Complex CAD modeling','Detailed technical development','Multiple components','Production considerations','Custom file requirements'],3,false),
  pkg('product-design-starter','product-design','Starter','15','Starting at $15','For simple product concepts and visual development.',['Initial product concept','Basic 3D visualization','Concept refinement','Presentation image'],1),
  pkg('product-design-pro','product-design','Pro','50','Starting at $50','For more detailed product concepts and visual development.',['Product concept development','Detailed 3D design','Multiple views','Product visualization','Design refinement','Presentation renders'],2,true),
  pkg('product-design-custom','product-design','Custom','80','Starting at $80','For complex products requiring extensive design development, visualization or prototype preparation.',['Full design development','Detailed 3D modeling','Multiple product views','Design refinement','Custom deliverables','Project-specific requirements'],3,false),
  pkg('website-development-starter','website-development','Starter','100','Starting at $100','A professional, responsive landing page designed to give a business, creator, artist or product a strong online presence.',['Custom landing page design','Responsive desktop, tablet and mobile layout','Hero section','About/introduction section','Services or product section','Call-to-action sections','Contact/inquiry form','Social media links','Basic SEO setup','Performance optimization','Deployment assistance','Basic revisions'],1),
  pkg('website-development-pro','website-development','Pro','250','Starting at $250','A complete professional website for businesses, brands, creators and professionals who need a stronger online presence.',['Multi-page website','Custom UI/UX design','Responsive desktop, tablet and mobile design','Home, About, Services and Contact pages','Portfolio/gallery where required','Contact/inquiry forms','Social media integration','Basic SEO and Open Graph setup','Performance optimization','Interactive sections and appropriate animations','Deployment assistance','Multiple revisions'],2,true),
  pkg('website-development-custom','website-development','Custom','Custom quote','Custom quote','A customized website solution for businesses and projects that require advanced functionality or a more complex digital experience.',['Custom website architecture and UI/UX','Advanced responsive layouts','Custom pages and components','Advanced forms and workflows','Booking or inquiry systems where required','Portfolio and content systems','Database-backed functionality where required','Authentication where required','Custom and third-party integrations','E-commerce where applicable','Performance optimization and SEO foundation','Deployment and configuration'],3,false,'Request a custom quote'),
  pkg('music-mixing-mastering-starter','music-mixing-mastering','Starter','To be confirmed','Starting price to be confirmed','A professional mixing and mastering package for artists who need a clean, balanced and release-ready track.',['Vocal and instrumental balancing','EQ and compression','Basic vocal processing','Reverb and delay where appropriate','Stereo balance and basic audio cleanup','Stereo mastering and loudness optimization','WAV and MP3 delivery','1 revision'],1),
  pkg('music-mixing-mastering-pro','music-mixing-mastering','Pro','To be confirmed','Starting price to be confirmed','A more detailed mixing and mastering service designed for artists who want a polished and professional final track.',['Full track mixing','Vocal processing and instrumental balancing','EQ, compression, reverb and delay','Automation and creative effects','Stereo imaging and detailed mix refinement','Professional mastering and tonal balancing','Dynamic control and loudness optimization','Streaming-ready master','WAV and MP3 delivery','Multiple revisions'],2,true),
  pkg('music-mixing-mastering-custom','music-mixing-mastering','Custom','Custom quote','Custom quote','For complex productions, multiple tracks, EPs, albums or projects requiring a customized mixing and mastering workflow.',['Multi-track mixing','Advanced lead and background vocal processing','Detailed automation and creative effects','Instrument balancing and stereo imaging','Detailed mix refinement and professional mastering','Consistent loudness and tonal balance across tracks','Track-to-track quality control','WAV delivery and streaming-ready masters','Custom deliverables and revision requirements'],3,false,'Request a custom quote'),
];

export const getPricingPackages = (category: string) =>
  pricingPackages.filter((item) => item.category === category).sort((a, b) => a.displayOrder - b.displayOrder);
