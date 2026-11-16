/* =========================================================
   COPO STUDIO — SERVICES DATA (single source of truth)
   Approved catalogue: 8 categories, 48 services (brief, 16 Nov 2026).
   The /services page renders entirely from this file.

   PUBLIC FILE. Never add prices here. Service-level starting prices are
   internal quoting references only and live outside the deployed site.
   Public engagement prices are on /pricing.

   categories: shown in this order everywhere.
     id      — used in links, e.g. /services#ux-ui
     note    — optional small print shown under the category
   services:
     categories — first id is the primary category; add more ids to
                  tag a service under several categories (it is still
                  one record, never duplicated).
     subtitle   — optional question shown above the description
     summary    — approved public description (do not reword silently)
     img        — hover preview (760px wide JPEG in assets/services/); leave out to
                  show the "work coming soon" placeholder until a photo is added
     keywords   — extra search terms that aren't services of their own
   ========================================================= */
window.COPO_SERVICES = {
  categories: [
    {
      id: 'product-strategy', num: '01', title: 'Product Strategy',
      desc: 'Business, product, brand, marketing, investor and user research strategy.',
      icon: '<rect x="7" y="6" width="18" height="22" rx="1.5"/><rect x="12" y="3" width="8" height="5" rx="1"/><path d="M11 14h10M11 18h10M11 22h6"/>'
    },
    {
      id: 'ux-ui', num: '02', title: 'UX/UI Design',
      desc: 'Mobile apps, web apps, product redesigns, interactive prototypes and demos.',
      icon: '<rect x="2" y="6" width="20" height="13" rx="1.5"/><path d="M2 22h20"/><rect x="20" y="11" width="10" height="17" rx="1.5" fill="var(--paper, #fff)"/><path d="M23 25h4"/>'
    },
    {
      id: 'web-conversion', num: '03', title: 'Web & Conversion',
      desc: 'Websites, landing pages, redesigns, conversion audits, features and integrations.',
      icon: '<circle cx="16" cy="14" r="4"/><path d="M9 24c1-3 4-5 7-5s6 2 7 5"/><path d="M27 8l3 3-3 3"/><path d="M30 11H22"/><path d="M5 24l-3-3 3-3"/><path d="M2 21h8"/>'
    },
    {
      id: 'brand-identity', num: '04', title: 'Brand Identity',
      desc: 'Visual foundations, logos, brand refreshes, naming, brand audits and brand & UI guidelines.',
      icon: '<path d="M16 3l11 11-11 15L5 14z"/><path d="M5 14h22"/><path d="M11 14l5 15 5-15"/><path d="M11 14l5-11 5 11"/>'
    },
    {
      id: 'graphic-design', num: '05', title: 'Graphic Design',
      desc: 'Illustration, print, motion, video, infographics, presentations, packaging and editorial.',
      icon: '<path d="M16 4l8 12-5 11h-6L8 16z"/><path d="M16 4v9.5"/><circle cx="16" cy="16" r="2.5"/><path d="M12 30h8"/>'
    },
    {
      id: 'launch-marketing', num: '06', title: 'Launch & Marketing',
      desc: 'App Store assets, social content, ads, email templates, copywriting and campaign direction.',
      icon: '<path d="M28 6v20l-16-5V11z"/><path d="M12 11H6a3 3 0 0 0 0 6h6"/><path d="M11 21l2 6h4l-2-6"/><path d="M28 11h2M28 16h3M28 21h2"/>'
    },
    {
      id: 'development', num: '07', title: 'Development Services',
      desc: 'AI-assisted development of websites, web apps, mobile app MVPs and working prototypes.',
      note: 'Full custom development can also be supported through trusted technical collaborators, depending on project scope.',
      icon: '<path d="M16 2c5 3 8 8 8 14v6l-4-3h-8l-4 3v-6c0-6 3-11 8-14z"/><circle cx="16" cy="13" r="2.5"/><path d="M12 25l-2 5 4-2M20 25l2 5-4-2"/>'
    },
    {
      id: 'business-events', num: '08', title: 'Business & Events',
      desc: 'Product advisory, pitch decks, stands, activations, merch and production.',
      icon: '<rect x="4" y="5" width="24" height="15" rx="1"/><path d="M9 15l4-4 3 3 6-6"/><path d="M16 20v4M11 29l5-5 5 5"/>'
    }
  ],

  services: [
    /* ---------- 01 Product Strategy (6) ---------- */
    {
      id: 'business-strategy', title: 'Business Strategy', subtitle: 'What is the business?',
      img: 'assets/services/business-strategy.jpg',
      categories: ['product-strategy'],
      summary: 'Problem definition, market research, positioning, competitor analysis and business model.',
      keywords: ['competitors', 'benchmark', 'market research', 'positioning', 'business model', 'value proposition', 'differentiation']
    },
    {
      id: 'brand-strategy', title: 'Brand Strategy', subtitle: 'Who is the brand?',
      categories: ['product-strategy', 'brand-identity'],
      summary: 'Purpose, mission, vision, target audience and brand identity direction.',
      keywords: ['purpose', 'mission', 'vision', 'values', 'audience', 'brand direction']
    },
    {
      id: 'product-roadmap-strategy', title: 'Product Strategy', subtitle: 'What are we building?',
      img: 'assets/services/product-roadmap-strategy.jpg',
      categories: ['product-strategy'],
      summary: 'Product vision, user journey, information architecture, MVP scope, roadmap and timeline.',
      keywords: ['mvp', 'mvp planning', 'scope', 'scoping', 'roadmap', 'information architecture', 'prioritisation', 'feature list', 'discovery', 'planning']
    },
    {
      id: 'marketing-strategy', title: 'Marketing Strategy', subtitle: 'How will we reach and grow our audience?',
      categories: ['product-strategy', 'launch-marketing'],
      summary: 'Marketing channels, website, waitlist, campaigns, partnerships, referrals and launch planning.',
      keywords: ['go to market', 'gtm', 'growth', 'channels', 'waitlist', 'referrals', 'launch plan']
    },
    {
      id: 'investor-strategy', title: 'Investor Strategy', subtitle: 'How will we fundraise?',
      categories: ['product-strategy', 'business-events'],
      summary: 'Investor fit, fundraising approach, meeting preparation and investor FAQs. Specialist support may be provided through a trusted partner.',
      keywords: ['fundraising', 'investors', 'seed', 'pre-seed', 'vc', 'investor meetings']
    },
    {
      id: 'user-research-strategy', title: 'User Research & Strategy', subtitle: 'Who are we building for?',
      img: 'assets/services/user-research-strategy.jpg',
      categories: ['product-strategy', 'ux-ui'],
      summary: 'Target users, interviews, audience needs, pain points, user personas, journey mapping and A/B testing strategy.',
      keywords: ['user research', 'interviews', 'personas', 'journey mapping', 'a/b testing', 'usability', 'discovery']
    },

    /* ---------- 02 UX/UI Design (4) ---------- */
    {
      id: 'mobile-app-design', title: 'Mobile App Design',
      img: 'assets/services/mobile-app-design.jpg',
      categories: ['ux-ui'],
      summary: 'End-to-end UX/UI design for iOS and Android apps, including user flows, wireframes, interface design, responsive states, prototypes and developer-ready files.',
      keywords: ['ios', 'android', 'app', 'mobile', 'wireframes', 'user flows', 'ui', 'ux', 'screens', 'onboarding', 'figma', 'handoff']
    },
    {
      id: 'web-app-design', title: 'Web App Design',
      img: 'assets/services/web-app-design.jpg',
      categories: ['ux-ui'],
      summary: 'UX/UI design for SaaS products, web applications, dashboards and digital platforms, including navigation, workflows, responsive layouts and component design.',
      keywords: ['saas', 'dashboard', 'platform', 'b2b', 'portal', 'admin', 'wireframes', 'components', 'design system', 'ai product', 'handoff']
    },
    {
      id: 'product-redesign', title: 'Product Redesign',
      img: 'assets/services/product-redesign.jpg',
      categories: ['ux-ui'],
      summary: 'Redesign existing mobile apps or platforms to improve usability, visual consistency, navigation and the overall product experience.',
      keywords: ['redesign', 'revamp', 'refresh', 'modernise', 'improve', 'ux audit', 'usability']
    },
    {
      id: 'interactive-prototypes-demos', title: 'Interactive Prototypes & Demos',
      img: 'assets/services/interactive-prototypes-demos.jpg',
      categories: ['ux-ui'],
      summary: 'Clickable Figma prototypes and interactive product demos for testing concepts, presenting to investors and demonstrating key journeys.',
      keywords: ['prototype', 'prototyping', 'clickable', 'demo', 'investor demo', 'user testing', 'figma']
    },

    /* ---------- 03 Web & Conversion (5) ---------- */
    {
      id: 'website-design', title: 'Website Design',
      img: 'assets/services/website-design.jpg',
      categories: ['web-conversion'],
      summary: 'Custom UX/UI design for business and marketing websites, including sitemap, responsive layouts and conversion-focused page design.',
      keywords: ['website', 'marketing site', 'company website', 'responsive', 'sitemap', 'multi-page']
    },
    {
      id: 'landing-page-design', title: 'Landing Page Design',
      img: 'assets/services/landing-page-design.jpg',
      categories: ['web-conversion'],
      summary: 'Single-page designs for campaigns, launches, waitlists and lead generation.',
      keywords: ['landing page', 'waitlist', 'pre-launch', 'sign up', 'campaign page', 'lead generation']
    },
    {
      id: 'website-redesign', title: 'Website Redesign',
      img: 'assets/services/website-redesign.jpg',
      categories: ['web-conversion'],
      summary: 'Refresh existing websites to improve usability, visual design, messaging and conversions.',
      keywords: ['redesign', 'refresh', 'revamp', 'website update']
    },
    {
      id: 'conversion-audit-optimisation', title: 'Conversion Audit & Optimisation',
      img: 'assets/services/conversion-audit-optimisation.jpg',
      categories: ['web-conversion'],
      summary: 'Audit website performance, user journeys, calls to action, forms and conversion funnels, with actionable recommendations and optional design improvements.',
      keywords: ['cro', 'conversion', 'funnel', 'customer journey', 'drop-off', 'a/b testing', 'checkout', 'audit']
    },
    {
      id: 'website-features-integrations', title: 'Website Features & Integrations',
      categories: ['web-conversion', 'development'],
      summary: 'Additional website functionality including blogs, CMS, booking funnels, e-commerce, marketplaces, forms, payments and third-party integrations. Quoted according to complexity.',
      keywords: ['blog', 'cms', 'booking', 'ecommerce', 'e-commerce', 'shop', 'marketplace', 'forms', 'payments', 'stripe', 'integrations']
    },

    /* ---------- 04 Brand Identity (7) ---------- */
    {
      id: 'visual-brand-foundations', title: 'Visual Brand Foundations',
      img: 'assets/services/visual-brand-foundations.jpg',
      categories: ['brand-identity'],
      summary: 'Establish the essential visual identity for a brand, including colour palette, typography, visual direction and basic brand guidelines. Ideal for businesses that already have a logo.',
      keywords: ['branding', 'visual identity', 'brand identity', 'colour', 'typography', 'art direction']
    },
    {
      id: 'brand-refresh', title: 'Brand Refresh',
      img: 'assets/services/brand-refresh.jpg',
      categories: ['brand-identity'],
      summary: 'Refine an existing visual identity, including relevant updates to the logo, colours, typography and overall visual direction.',
      keywords: ['rebrand', 'refresh', 'evolve', 'update logo', 'modernise brand']
    },
    {
      id: 'logo-design', title: 'Logo Design',
      img: 'assets/services/logo-design.jpg',
      categories: ['brand-identity'],
      summary: 'Custom logo design with relevant variations, export formats and usage guidance.',
      keywords: ['logo', 'wordmark', 'brand mark', 'logomark', 'icon']
    },
    {
      id: 'brand-asset-design', title: 'Brand Asset Design',
      img: 'assets/services/brand-asset-design.jpg',
      categories: ['brand-identity'],
      summary: 'Supporting brand visuals such as backgrounds, patterns, textures, imagery direction and simple graphic elements.',
      keywords: ['patterns', 'backgrounds', 'textures', 'graphics', 'brand kit']
    },
    {
      id: 'brand-naming-verbal-identity', title: 'Brand Naming & Verbal Identity',
      categories: ['brand-identity'],
      summary: 'Brand name development, slogans, taglines, tone of voice and core messaging.',
      keywords: ['naming', 'name', 'slogan', 'tagline', 'tone of voice', 'messaging', 'copy']
    },
    {
      id: 'brand-audit', title: 'Brand Audit',
      img: 'assets/services/brand-audit.jpg',
      categories: ['brand-identity'],
      summary: "Evaluate an existing brand's visual consistency, messaging and presentation, with actionable recommendations.",
      keywords: ['audit', 'review', 'consistency', 'brand review']
    },
    {
      id: 'brand-ui-guidelines', title: 'Brand & UI Guidelines',
      img: 'assets/services/brand-ui-guidelines.jpg',
      categories: ['brand-identity', 'ux-ui'],
      summary: 'Document visual identity usage and digital interface rules, including typography scales, buttons, components, border radii, spacing, padding and layout conventions.',
      keywords: ['brand book', 'style guide', 'guidelines', 'logo usage', 'ui kit', 'components', 'tokens', 'design system']
    },

    /* ---------- 05 Graphic Design (8) ---------- */
    {
      id: 'custom-illustration-design', title: 'Custom Illustration Design',
      categories: ['graphic-design'],
      summary: 'Bespoke illustrations, characters, mascots and original artwork for brands, websites, products and campaigns. Excludes custom icon sets.',
      keywords: ['illustration', 'characters', 'mascot', 'artwork', 'drawing']
    },
    {
      id: 'print-design', title: 'Print Design',
      categories: ['graphic-design'],
      summary: 'Print-ready artwork for posters, flyers, brochures, business cards, signage and other single-page or short-form printed materials.',
      keywords: ['print', 'flyers', 'posters', 'brochures', 'business cards', 'stationery', 'cmyk', 'printer']
    },
    {
      id: 'motion-graphics-gifs', title: 'Motion Graphics & GIFs',
      categories: ['graphic-design'],
      summary: 'Animated graphic elements, GIFs, typography animations, logo animations and short motion assets.',
      keywords: ['motion', 'animation', 'gif', 'animated', 'lottie', 'logo animation']
    },
    {
      id: 'custom-video-production', title: 'Custom Video Production',
      categories: ['graphic-design', 'launch-marketing'],
      summary: 'Edited or AI-generated videos, including product demos, explainer videos, promotional videos, animated walkthroughs and AI avatar videos. No live filming.',
      keywords: ['video', 'demo', 'product demo', 'walkthrough', 'explainer', 'promo video', 'ai video', 'avatar']
    },
    {
      id: 'infographics-data-visualisation', title: 'Infographics & Data Visualisation',
      categories: ['graphic-design'],
      summary: 'Visual explanations of statistics, processes, comparisons, research and complex information for websites, reports and presentations.',
      keywords: ['infographic', 'charts', 'data', 'diagrams', 'statistics']
    },
    {
      id: 'presentation-design', title: 'Presentation Design',
      categories: ['graphic-design', 'business-events'],
      summary: 'Professionally designed slides for business presentations, workshops, sales meetings, conferences and internal communications.',
      keywords: ['presentation', 'slides', 'keynote', 'powerpoint', 'google slides', 'sales deck', 'conference']
    },
    {
      id: 'packaging-label-design', title: 'Packaging & Label Design',
      categories: ['graphic-design'],
      summary: 'Branded product packaging, labels, packaging layouts and print-ready production artwork.',
      keywords: ['packaging', 'labels', 'box', 'product packaging']
    },
    {
      id: 'editorial-publication-design', title: 'Editorial & Publication Design',
      categories: ['graphic-design'],
      summary: 'Multi-page layout and design for booklets, ebooks, guides, reports, catalogues and extensive brochures.',
      keywords: ['report', 'ebook', 'booklet', 'guide', 'catalogue', 'brochure', 'whitepaper', 'documents', 'pdf', 'annual report']
    },

    /* ---------- 06 Launch & Marketing (7) ---------- */
    {
      id: 'app-store-assets', title: 'App Store Assets',
      img: 'assets/services/app-store-assets.jpg',
      categories: ['launch-marketing'],
      summary: 'App Store and Google Play listing visuals, including screenshots, feature graphics and promotional artwork.',
      keywords: ['app store', 'play store', 'screenshots', 'aso', 'store listing']
    },
    {
      id: 'social-media-design', title: 'Social Media Design',
      img: 'assets/services/social-media-design.jpg',
      categories: ['launch-marketing'],
      summary: 'Branded social media posts, carousels, stories and reusable graphics for different platforms.',
      keywords: ['social media', 'instagram', 'linkedin', 'carousel', 'templates', 'posts', 'stories']
    },
    {
      id: 'social-media-video-content', title: 'Social Media Video Content',
      categories: ['launch-marketing'],
      summary: 'Short-form videos, Reels, TikToks and social ads created using supplied footage, existing assets or AI-generated content. No live filming.',
      keywords: ['reels', 'tiktok', 'short-form', 'video', 'video editing', 'shorts', 'ugc']
    },
    {
      id: 'digital-ad-design', title: 'Digital Ad Design',
      img: 'assets/services/digital-ad-design.jpg',
      categories: ['launch-marketing'],
      summary: 'Static and animated advertising creatives for Meta, Google, LinkedIn and other digital platforms.',
      keywords: ['ads', 'advertising', 'paid social', 'meta ads', 'google ads', 'display ads', 'creatives', 'banners']
    },
    {
      id: 'email-template-design', title: 'Email Template Design',
      categories: ['launch-marketing'],
      summary: 'Branded, reusable email templates for newsletters, announcements, promotions and customer communications.',
      keywords: ['email', 'newsletter', 'mailchimp', 'klaviyo', 'email design']
    },
    {
      id: 'marketing-copywriting', title: 'Marketing Copywriting',
      categories: ['launch-marketing'],
      summary: 'Campaign headlines, advertising copy, promotional messaging, email copy and calls to action.',
      keywords: ['copy', 'copywriting', 'headlines', 'messaging', 'cta']
    },
    {
      id: 'campaign-strategy-creative-direction', title: 'Campaign Strategy & Creative Direction',
      img: 'assets/services/campaign-strategy-creative-direction.jpg',
      categories: ['launch-marketing'],
      summary: 'End-to-end planning for a specific marketing objective, such as an event, product launch or user acquisition campaign. Includes campaign concept, audience, messaging, channels, creative direction and an execution plan. Asset production and campaign management scoped separately.',
      keywords: ['launch', 'campaign', 'product launch', 'creative direction', 'concept', 'announcement', 'user acquisition']
    },

    /* ---------- 07 Development Services (5) ---------- */
    {
      id: 'website-development', title: 'Website Development',
      img: 'assets/services/website-development.jpg',
      categories: ['development', 'web-conversion'],
      summary: 'Build and launch responsive websites using AI-assisted development, including basic interactions, simple animations, mobile optimisation and deployment. Website design is supplied and priced separately. Advanced functionality is scoped separately.',
      keywords: ['website build', 'build', 'launch', 'hosting', 'deployment', 'ai-assisted', 'code']
    },
    {
      id: 'web-app-platform-development', title: 'Web App & Platform Development',
      categories: ['development'],
      summary: 'Build functional web applications, SaaS platforms, dashboards and browser-based MVPs, including core workflows, user accounts, databases and integrations as required by the agreed scope.',
      keywords: ['saas', 'mvp', 'web app', 'platform', 'dashboard', 'database', 'accounts', 'login', 'ai-assisted']
    },
    {
      id: 'mobile-app-development', title: 'Mobile App Development',
      categories: ['development'],
      summary: 'Build iOS and Android mobile app MVPs using AI-assisted development, including core screens, functionality, testing and preparation for app store submission. App Store approval and third-party costs are not guaranteed or included.',
      keywords: ['ios', 'android', 'app', 'mvp', 'app store', 'mobile', 'ai-assisted']
    },
    {
      id: 'interactive-web-prototypes', title: 'Interactive Web Prototypes',
      img: 'assets/services/interactive-web-prototypes.jpg',
      categories: ['development'],
      summary: 'Build working browser-based prototypes and product demos to test ideas, demonstrate interactions and validate concepts before full development.',
      keywords: ['prototype', 'functional prototype', 'coded prototype', 'proof of concept', 'poc', 'demo', 'validate']
    },
    {
      id: 'website-maintenance-updates', title: 'Website Maintenance & Updates',
      categories: ['development', 'web-conversion'],
      summary: 'Make updates, fixes, content changes and functional improvements to existing websites. Scoped and quoted per request.',
      keywords: ['maintenance', 'updates', 'fixes', 'bugs', 'content changes', 'support']
    },

    /* ---------- 08 Business & Events (6) ---------- */
    {
      id: 'product-advisory', title: 'Product Advisory',
      categories: ['business-events', 'product-strategy'],
      summary: 'One-hour, one-to-one consultation for early-stage founders covering idea validation, product direction, MVP priorities, launch preparation and next steps. Includes preliminary review of materials supplied before the call. Full product audits and additional deliverables excluded.',
      keywords: ['consultation', 'advice', 'call', 'session', 'mentoring', 'founder', 'validate', 'idea']
    },
    {
      id: 'investor-pitch-decks', title: 'Investor Pitch Decks',
      img: 'assets/services/investor-pitch-decks.jpg',
      categories: ['business-events'],
      summary: 'Investor-focused pitch decks combining fundraising storytelling, content structure and presentation design, including the opportunity, market, product, business model and traction.',
      keywords: ['pitch deck', 'investor deck', 'fundraising', 'seed', 'presentation', 'slides']
    },
    {
      id: 'exhibition-stands-signage', title: 'Exhibition Stands & Signage',
      categories: ['business-events'],
      summary: 'Design for exhibition stands, pull-up banners, backdrops, branded displays, event signage and other physical exhibition graphics. Includes production-ready artwork where applicable.',
      keywords: ['exhibition', 'expo', 'trade show', 'booth', 'stand', 'banner', 'roll-up', 'pull-up', 'signage', 'backdrop', 'large format', 'event']
    },
    {
      id: 'promotional-props-activations', title: 'Promotional Props & Activations',
      img: 'assets/services/promotional-props-activations.jpg',
      categories: ['business-events', 'launch-marketing'],
      summary: 'Creative concepts and designs for branded props, photo opportunities, interactive displays and memorable event activations.',
      keywords: ['props', 'activation', 'photo moment', 'foam', 'stunt', 'experiential', 'event marketing']
    },
    {
      id: 'merchandise-giveaway-design', title: 'Merchandise & Giveaway Design',
      img: 'assets/services/merchandise-giveaway-design.jpg',
      categories: ['business-events'],
      summary: 'Custom designs for branded T-shirts, tote bags, pens, stickers, stationery and promotional products for events or everyday business use. Production-ready artwork included.',
      keywords: ['merch', 'merchandise', 't-shirt', 'tee', 'tote', 'stickers', 'apparel', 'swag', 'giveaways']
    },
    {
      id: 'supplier-production-coordination', title: 'Supplier & Production Coordination',
      categories: ['business-events'],
      summary: 'Research suppliers, request and compare quotes, prepare production specifications, coordinate orders and manage production communication. Manufacturing, printing and shipping costs are separate.',
      keywords: ['suppliers', 'production', 'printing', 'manufacturing', 'quotes', 'orders', 'coordination']
    }
  ]
};
