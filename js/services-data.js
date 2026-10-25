/* =========================================================
   COPO STUDIO — SERVICES DATA (single source of truth)
   Edit titles, descriptions, categories and inclusions here.
   The /services page renders entirely from this file.

   categories: shown in this order everywhere.
     id      — used in links, e.g. /services#ux-ui
     note    — optional small print shown under the category
   services:
     categories — first id is the primary category; add more ids to
                  tag a service under several categories (it is still
                  one record, never duplicated).
     includes   — what the client gets (shown when expanded)
     keywords   — extra search terms that aren't services of their own
                  (e.g. "wireframes" finds the UX/UI services)
   ========================================================= */
window.COPO_SERVICES = {
  categories: [
    {
      id: 'product-strategy', num: '01', title: 'Product Strategy',
      desc: 'Discovery, user research, MVP planning, UX audits and defining exactly what to build.',
      icon: '<rect x="7" y="6" width="18" height="22" rx="1.5"/><rect x="12" y="3" width="8" height="5" rx="1"/><path d="M11 14h10M11 18h10M11 22h6"/>'
    },
    {
      id: 'ux-ui', num: '02', title: 'UX/UI Design',
      desc: 'Mobile apps, web apps, product redesigns, design systems, prototypes and product demos.',
      icon: '<rect x="2" y="6" width="20" height="13" rx="1.5"/><path d="M2 22h20"/><rect x="20" y="11" width="10" height="17" rx="1.5" fill="var(--paper, #fff)"/><path d="M23 25h4"/>'
    },
    {
      id: 'web-conversion', num: '03', title: 'Web & Conversion',
      desc: 'Websites, landing pages, redesigns, customer journeys and conversion optimisation.',
      icon: '<circle cx="16" cy="14" r="4"/><path d="M9 24c1-3 4-5 7-5s6 2 7 5"/><path d="M27 8l3 3-3 3"/><path d="M30 11H22"/><path d="M5 24l-3-3 3-3"/><path d="M2 21h8"/>'
    },
    {
      id: 'brand-identity', num: '04', title: 'Brand Identity',
      desc: 'Logos, visual identity systems, brand refreshes, guidelines and branded visual assets.',
      icon: '<path d="M16 3l11 11-11 15L5 14z"/><path d="M5 14h22"/><path d="M11 14l5 15 5-15"/><path d="M11 14l5-11 5 11"/>'
    },
    {
      id: 'graphic-design', num: '05', title: 'Graphic Design',
      desc: 'Illustrations, icons, digital graphics, print, merchandise, GIFs and motion assets.',
      icon: '<path d="M16 4l8 12-5 11h-6L8 16z"/><path d="M16 4v9.5"/><circle cx="16" cy="16" r="2.5"/><path d="M12 30h8"/>'
    },
    {
      id: 'launch-marketing', num: '06', title: 'Launch & Marketing',
      desc: 'App Store assets, social content, videos, ad creatives, collateral and launch campaigns.',
      icon: '<path d="M28 6v20l-16-5V11z"/><path d="M12 11H6a3 3 0 0 0 0 6h6"/><path d="M11 21l2 6h4l-2-6"/><path d="M28 11h2M28 16h3M28 21h2"/>'
    },
    {
      id: 'no-code-development', num: '07', title: 'No-Code Development',
      desc: 'Framer websites, functional prototypes, no-code builds and AI-assisted MVP development.',
      note: 'Full custom development can also be supported through trusted technical collaborators, depending on project scope.',
      icon: '<path d="M16 2c5 3 8 8 8 14v6l-4-3h-8l-4 3v-6c0-6 3-11 8-14z"/><circle cx="16" cy="13" r="2.5"/><path d="M12 25l-2 5 4-2M20 25l2 5-4-2"/>'
    },
    {
      id: 'business-events', num: '08', title: 'Business & Events',
      desc: 'Pitch decks, presentations, company documents, exhibition stands, signage and event props.',
      icon: '<rect x="4" y="5" width="24" height="15" rx="1"/><path d="M9 15l4-4 3 3 6-6"/><path d="M16 20v4M11 29l5-5 5 5"/>'
    }
  ],

  services: [
    /* ---------- 01 Product Strategy ---------- */
    {
      id: 'discovery-planning', title: 'Discovery & Planning',
      categories: ['product-strategy'],
      summary: 'A focused kick-off to understand your users, market and goals, then turn them into a clear plan for what to design and build first.',
      includes: ['Stakeholder & founder workshops', 'User & market research', 'Problem definition & positioning', 'User journeys & key flows', 'Prioritised product roadmap'],
      keywords: ['research', 'workshop', 'roadmap', 'user research', 'interviews', 'personas', 'positioning', 'value proposition', 'strategy', 'kick-off']
    },
    {
      id: 'mvp-planning', title: 'MVP Planning',
      categories: ['product-strategy'],
      summary: 'Define the smallest version of your product that proves the idea, so you launch faster without building the wrong thing.',
      includes: ['Feature scoping & prioritisation', 'Core user flows', 'Launch scope & phasing', 'Success metrics', 'Developer-ready brief'],
      keywords: ['mvp', 'scope', 'scoping', 'prioritisation', 'feature list', 'roadmap', 'startup', 'validate', 'idea']
    },
    {
      id: 'ux-audits', title: 'UX Audits',
      categories: ['product-strategy', 'ux-ui'],
      summary: 'An honest review of where your product or website loses users, with clear, prioritised fixes your team can act on.',
      includes: ['Heuristic & usability review', 'Onboarding & funnel review', 'Accessibility check', 'Prioritised recommendations', 'Annotated before/after examples'],
      keywords: ['audit', 'review', 'usability', 'heuristics', 'accessibility', 'drop-off', 'retention', 'onboarding', 'app store readiness', 'pre-launch']
    },
    {
      id: 'competitor-analysis', title: 'Competitor Analysis',
      categories: ['product-strategy'],
      summary: 'A clear picture of your market: what competitors do well, where they fall short and the gap your product should own.',
      includes: ['Competitor & feature benchmarking', 'UX & brand comparison', 'Pricing & business model review', 'Opportunity gaps', 'Positioning recommendations'],
      keywords: ['competitors', 'benchmark', 'market research', 'landscape', 'positioning', 'pricing', 'differentiation']
    },

    /* ---------- 02 UX/UI Design ---------- */
    {
      id: 'mobile-app-design', title: 'Mobile App Design',
      categories: ['ux-ui'],
      summary: 'iOS and Android apps designed end to end, from first flows to polished, developer-ready screens.',
      includes: ['User flows & wireframes', 'High-fidelity UI design', 'Onboarding & empty states', 'Interaction & micro-animation specs', 'Developer handoff in Figma'],
      keywords: ['ios', 'android', 'app', 'mobile', 'wireframes', 'wireframing', 'user flows', 'ui', 'ux', 'screens', 'onboarding', 'figma']
    },
    {
      id: 'web-app-design', title: 'Web App Design',
      categories: ['ux-ui'],
      summary: 'Web platforms, dashboards and SaaS products that make complex data and actions feel simple.',
      includes: ['Information architecture', 'User flows & wireframes', 'Dashboard & data-heavy UI', 'Responsive layouts', 'Developer handoff in Figma'],
      keywords: ['saas', 'dashboard', 'platform', 'b2b', 'portal', 'admin', 'wireframes', 'wireframing', 'information architecture', 'data visualisation', 'ai product', 'chat interface']
    },
    {
      id: 'product-redesign', title: 'Product Redesign',
      categories: ['ux-ui'],
      summary: 'Modernise an existing product so it is easier to use and looks as good as it works, without starting from scratch.',
      includes: ['UX audit of the current product', 'Redesigned key flows', 'Updated visual language', 'Migration plan for your team', 'Developer handoff'],
      keywords: ['redesign', 'revamp', 'refresh', 'modernise', 'improve', 'ui update', 'usability']
    },
    {
      id: 'design-systems', title: 'Design Systems',
      categories: ['ux-ui'],
      summary: 'Scalable Figma systems with tokens, components and clear rules, so your product stays consistent as it grows.',
      includes: ['Colour, type & spacing tokens', 'Component library', 'Icon set', 'Usage guidelines', 'Dev-ready token handover'],
      keywords: ['components', 'component library', 'tokens', 'figma', 'ui kit', 'style guide', 'variables', 'consistency']
    },
    {
      id: 'interactive-prototypes-demos', title: 'Interactive Prototypes & Demos',
      categories: ['ux-ui', 'business-events'],
      summary: 'Clickable prototypes that feel like the real thing, for user testing, investor demos and getting buy-in before you build.',
      includes: ['Clickable Figma prototypes', 'Investor & sales demo flows', 'User testing prototypes', 'Screen recordings of key flows'],
      keywords: ['prototype', 'prototyping', 'clickable', 'demo', 'investor demo', 'user testing', 'wireframes', 'figma']
    },

    /* ---------- 03 Web & Conversion ---------- */
    {
      id: 'website-design', title: 'Website Design',
      categories: ['web-conversion'],
      summary: 'Company and marketing websites that explain what you do, build trust and turn visitors into customers.',
      includes: ['Sitemap & page structure', 'Copy direction', 'Responsive page designs', 'Interaction details', 'SEO-ready structure'],
      keywords: ['website', 'marketing site', 'company website', 'responsive', 'seo', 'multi-page', 'enterprise website', 'ecommerce']
    },
    {
      id: 'landing-page-design', title: 'Landing Page Design',
      categories: ['web-conversion', 'launch-marketing'],
      summary: 'Focused, single-goal pages for launches, waitlists, campaigns and ads, designed to convert.',
      includes: ['Conversion-led page structure', 'Headline & copy direction', 'Responsive design', 'Waitlist or sign-up flow', 'A/B test variations'],
      keywords: ['landing page', 'waitlist', 'pre-launch', 'sign up', 'campaign page', 'lead generation', 'conversion']
    },
    {
      id: 'website-redesign', title: 'Website Redesign',
      categories: ['web-conversion'],
      summary: 'Rework an existing site so it reflects where your business is today and performs better.',
      includes: ['Review of the current site', 'Updated structure & navigation', 'Redesigned key pages', 'Responsive design', 'Launch support'],
      keywords: ['redesign', 'refresh', 'revamp', 'website update', 'rebrand website']
    },
    {
      id: 'conversion-optimisation', title: 'Conversion Optimisation',
      categories: ['web-conversion', 'product-strategy'],
      summary: 'Find where visitors drop off across your site, funnel or onboarding, and redesign the journey to fix it.',
      includes: ['Funnel & journey review', 'Drop-off analysis', 'Redesigned pages & steps', 'Test ideas & variations', 'Tracking recommendations'],
      keywords: ['cro', 'conversion', 'funnel', 'customer journey', 'drop-off', 'a/b testing', 'checkout', 'sign-up flow', 'onboarding']
    },

    /* ---------- 04 Brand Identity ---------- */
    {
      id: 'brand-identity-design', title: 'Brand Identity Design',
      categories: ['brand-identity'],
      summary: 'A complete visual identity that instantly communicates what your company stands for.',
      includes: ['Logo & logo system', 'Colour palette', 'Typography', 'Imagery direction', 'Core brand applications'],
      keywords: ['logo', 'branding', 'visual identity', 'colour', 'typography', 'wordmark', 'brand mark', 'art direction']
    },
    {
      id: 'brand-refresh', title: 'Brand Refresh',
      categories: ['brand-identity'],
      summary: 'Evolve an existing brand for a new market, audience or stage, without losing what people already recognise.',
      includes: ['Brand review', 'Logo refinements', 'Updated palette & type', 'Refreshed key assets'],
      keywords: ['rebrand', 'refresh', 'evolve', 'update logo', 'modernise brand']
    },
    {
      id: 'brand-guidelines', title: 'Brand Guidelines',
      categories: ['brand-identity'],
      summary: 'Clear rules for using your brand, so it stays consistent whoever is designing.',
      includes: ['Logo usage & clear space', 'Colour & type rules', 'Imagery & tone', 'Do’s and don’ts', 'Shareable guideline document'],
      keywords: ['brand book', 'style guide', 'guidelines', 'brand rules', 'logo usage']
    },
    {
      id: 'brand-asset-design', title: 'Brand Asset Design',
      categories: ['brand-identity', 'graphic-design'],
      summary: 'Everyday branded assets your team actually needs, ready to use across digital and print.',
      includes: ['Business cards & stationery', 'Email signatures', 'Templates for decks & documents', 'Social profile assets', 'Print-ready logo files'],
      keywords: ['business cards', 'stationery', 'templates', 'email signature', 'logo files', 'cmyk', 'eps', 'brand kit']
    },

    /* ---------- 05 Graphic Design ---------- */
    {
      id: 'illustration-icon-design', title: 'Illustration & Icon Design',
      categories: ['graphic-design'],
      summary: 'Custom illustrations and icon sets that give your product and brand a personality of their own.',
      includes: ['Custom icon sets', 'Spot & hero illustrations', 'Empty-state illustrations', 'SVG & PNG exports'],
      keywords: ['icons', 'iconography', 'illustration', 'svg', 'graphics']
    },
    {
      id: 'digital-graphic-design', title: 'Digital Graphic Design',
      categories: ['graphic-design'],
      summary: 'On-brand graphics for web, email, product and presentations, delivered in the right formats.',
      includes: ['Web & email graphics', 'Banners & headers', 'Infographics', 'Image editing & compositing'],
      keywords: ['graphics', 'banners', 'infographics', 'email design', 'newsletter', 'image editing']
    },
    {
      id: 'print-design', title: 'Print Design',
      categories: ['graphic-design', 'business-events'],
      summary: 'Flyers, brochures and printed collateral, supplied as production-ready files for your printer.',
      includes: ['Flyers & brochures', 'Posters', 'Packaging & labels', 'Print-ready files with bleed & CMYK'],
      keywords: ['print', 'flyers', 'brochures', 'posters', 'packaging', 'cmyk', 'printer']
    },
    {
      id: 'merchandise-design', title: 'Merchandise Design',
      categories: ['graphic-design', 'business-events'],
      summary: 'Tees, caps and branded merch people actually want to wear, from concept to print files.',
      includes: ['Apparel concepts', 'Print placement & sizing', 'Colourway options', 'Mock-ups', 'Print-ready files'],
      keywords: ['merch', 'merchandise', 't-shirt', 'tee', 'apparel', 'caps', 'swag', 'team merch']
    },
    {
      id: 'motion-graphics-gifs', title: 'Motion Graphics & GIFs',
      categories: ['graphic-design', 'launch-marketing'],
      summary: 'Short animations, GIFs and animated assets that bring your product and brand to life.',
      includes: ['Animated logos', 'Product & UI animations', 'GIFs & stickers', 'Loading & micro-animations'],
      keywords: ['motion', 'animation', 'gif', 'animated', 'lottie', 'micro-interactions']
    },

    /* ---------- 06 Launch & Marketing ---------- */
    {
      id: 'app-store-assets', title: 'App Store Assets',
      categories: ['launch-marketing'],
      summary: 'App Store and Google Play screenshots and previews that sell your product within seconds.',
      includes: ['Store screenshots', 'Feature graphics', 'App icon refinement', 'Listing copy direction'],
      keywords: ['app store', 'play store', 'screenshots', 'aso', 'app icon', 'store listing']
    },
    {
      id: 'product-demo-videos', title: 'Product Demo Videos',
      categories: ['launch-marketing', 'ux-ui'],
      summary: 'Clear walkthrough videos that show how your product works, for your website, sales and investors.',
      includes: ['Script & storyboard', 'Screen recordings', 'Edited walkthroughs', 'Captions & formats for each channel'],
      keywords: ['video', 'demo', 'walkthrough', 'explainer', 'product video', 'screen recording']
    },
    {
      id: 'social-media-design', title: 'Social Media Design',
      categories: ['launch-marketing'],
      summary: 'Reusable, on-brand social templates and content so posting stays fast and consistent.',
      includes: ['Post & carousel templates', 'Profile & highlight assets', 'Content pillars', 'Content calendar'],
      keywords: ['social media', 'instagram', 'linkedin', 'carousel', 'templates', 'content calendar', 'posts']
    },
    {
      id: 'social-media-video-content', title: 'Social Media Video Content',
      categories: ['launch-marketing'],
      summary: 'Scroll-stopping short-form videos for TikTok, Instagram Reels and LinkedIn.',
      includes: ['Hooks & scripts', 'Video editing', 'Captions & text overlays', 'Covers & formats'],
      keywords: ['reels', 'tiktok', 'short-form', 'video', 'video editing', 'shorts', 'ugc']
    },
    {
      id: 'digital-ad-design', title: 'Digital Ad Design',
      categories: ['launch-marketing', 'graphic-design'],
      summary: 'Advertising creatives for social and display, built to stop the scroll and drive clicks.',
      includes: ['Static ad creatives', 'Ad variations for testing', 'Sizes for each platform', 'Animated ads'],
      keywords: ['ads', 'advertising', 'paid social', 'meta ads', 'display ads', 'creatives', 'banners']
    },
    {
      id: 'launch-campaign-design', title: 'Launch Campaign Design',
      categories: ['launch-marketing'],
      summary: 'Coordinated assets across web, social, email and events for the moment your product goes live.',
      includes: ['Campaign concept', 'Key visual', 'Asset set across channels', 'Launch timeline'],
      keywords: ['launch', 'campaign', 'go to market', 'gtm', 'product launch', 'announcement']
    },
    {
      id: 'marketing-collateral', title: 'Marketing Collateral',
      categories: ['launch-marketing', 'business-events'],
      summary: 'Sales and marketing materials that help your team explain the product and close deals.',
      includes: ['One-pagers & sales sheets', 'Case study layouts', 'Email templates', 'Brochures'],
      keywords: ['one-pager', 'sales sheet', 'collateral', 'case studies', 'brochure', 'sales enablement']
    },

    /* ---------- 07 No-Code Development ---------- */
    {
      id: 'framer-website-development', title: 'Framer Website Development',
      categories: ['no-code-development', 'web-conversion'],
      summary: 'Your website designed and built in Framer, so your team can update it without a developer.',
      includes: ['Responsive Framer build', 'CMS setup', 'Animations & interactions', 'SEO basics & analytics', 'Domain & launch support'],
      keywords: ['framer', 'no-code', 'website build', 'cms', 'webflow', 'launch', 'hosting', 'domain']
    },
    {
      id: 'no-code-mvp-development', title: 'No-Code MVP Development',
      categories: ['no-code-development', 'product-strategy'],
      summary: 'A working first version of your product built with no-code and AI-assisted tools, to validate the idea fast.',
      includes: ['MVP build with no-code tools', 'AI-assisted features & workflows', 'Basic integrations', 'Launch & iteration support'],
      keywords: ['no-code', 'mvp', 'ai', 'ai-assisted', 'automation', 'bubble', 'tools', 'validate']
    },
    {
      id: 'interactive-web-prototypes', title: 'Interactive Web Prototypes',
      categories: ['no-code-development', 'ux-ui'],
      summary: 'Functional, coded prototypes that run in the browser, for testing real interactions before full development.',
      includes: ['Working browser prototype', 'Realistic data & interactions', 'Shareable link', 'Feedback round'],
      keywords: ['prototype', 'functional prototype', 'coded prototype', 'proof of concept', 'poc', 'demo']
    },
    {
      id: 'development-handoff-support', title: 'Development Handoff & Support',
      categories: ['no-code-development', 'ux-ui'],
      summary: 'Everything your developers need to build the design exactly as intended, plus support during the build.',
      includes: ['Annotated Figma files', 'Design tokens & specs', 'Asset exports', 'Design QA of builds', 'Ongoing developer support'],
      keywords: ['handoff', 'handover', 'developer', 'specs', 'tokens', 'qa', 'design qa', 'custom development', 'collaborators']
    },

    /* ---------- 08 Business & Events ---------- */
    {
      id: 'investor-pitch-decks', title: 'Investor Pitch Decks',
      categories: ['business-events'],
      summary: 'Decks that tell your story clearly and help investors understand the opportunity in minutes.',
      includes: ['Story & slide structure', 'Slide design', 'Charts & data visuals', 'Editable template'],
      keywords: ['pitch deck', 'investor deck', 'fundraising', 'seed', 'presentation', 'slides']
    },
    {
      id: 'business-presentations', title: 'Business Presentations',
      categories: ['business-events'],
      summary: 'Sales decks, keynotes and talk slides designed to be understood, even from the back of the room.',
      includes: ['Sales & partnership decks', 'Keynote & talk slides', 'Presentation templates', 'Speaker-friendly layouts'],
      keywords: ['presentation', 'keynote', 'sales deck', 'slides', 'powerpoint', 'google slides', 'talk', 'conference']
    },
    {
      id: 'business-documents-reports', title: 'Business Documents & Reports',
      categories: ['business-events'],
      summary: 'Reports, proposals and company documents that look as credible as the work behind them.',
      includes: ['Reports & whitepapers', 'Proposals', 'Company profiles', 'Document templates'],
      keywords: ['report', 'whitepaper', 'proposal', 'company profile', 'documents', 'pdf', 'annual report']
    },
    {
      id: 'exhibition-stand-design', title: 'Exhibition Stand Design',
      categories: ['business-events'],
      summary: 'Trade show and expo stands that stand out on a busy floor, delivered as production-ready files.',
      includes: ['Stand concept & layout', 'Wall & panel graphics', 'Production files to exact specs', 'Coordination with stand builders'],
      keywords: ['exhibition', 'expo', 'trade show', 'booth', 'stand', 'conference', 'large format']
    },
    {
      id: 'event-graphics-signage', title: 'Event Graphics & Signage',
      categories: ['business-events', 'graphic-design'],
      summary: 'Banners, signage and printed event graphics that make your brand easy to find and remember.',
      includes: ['Roll-up banners', 'Signage & wayfinding', 'Badges & lanyards', 'Print-ready large-format files'],
      keywords: ['banner', 'roll-up', 'signage', 'event', 'badges', 'large format', 'backdrop']
    },
    {
      id: 'promotional-props-activations', title: 'Promotional Props & Activations',
      categories: ['business-events', 'launch-marketing'],
      summary: 'Memorable physical props and brand moments that get people stopping, talking and taking photos.',
      includes: ['Prop & activation concepts', 'Designs to scale', 'Print & cut files', 'Mock-ups for sign-off'],
      keywords: ['props', 'activation', 'photo moment', 'foam', 'stunt', 'experiential', 'event marketing']
    }
  ]
};
