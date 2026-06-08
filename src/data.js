// Single source of truth for all site content, extracted & improved from the
// MARKVANCE wireframe.

export const BRAND = {
  name: 'MARKVANCE',
  tagline: 'Advancing growth through smarter marketing.',
  blurb:
    'A full-stack marketing agency for founders, creators & ambitious brands. Strategy, creative and growth -under one roof.',
  phone: '+91 8006986871',
  phoneHref: 'tel:+918006986871',
  email: 'hello@markvance.com',
  location: 'Vasant Kunj, New Delhi · 110070',
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const STATS = [
  { big: '25+', sm: 'Years cumulative experience' },
  { big: '4,200+', sm: 'Founders mentored' },
  { big: '₹12 Cr', sm: 'Capital deployed' },
  { big: '6', sm: 'Core service lines' },
]

export const DIFFERENTIATORS = [
  {
    title: 'Strategy',
    body: 'GTM definition, positioning, brand storytelling and the market research that makes it all stand up to scrutiny.',
  },
  {
    title: 'Execution',
    body: 'We run the playbook from day one -not just write it. Plans only matter when they ship.',
  },
  {
    title: 'One Team',
    body: 'Branding, content, web and growth under one roof, moving in the same direction.',
  },
]

export const SERVICES = [
  {
    id: 'personal-branding',
    num: '01',
    name: 'Personal Branding',
    intro: 'Mark builds your authority',
    short: 'Build authority for founders, entrepreneurs and creators.',
    long:
      'Helping founders, entrepreneurs and creators build authority through social media strategy, profile positioning, content writing and thought leadership.',
    deliverables: ['Social media strategy', 'Profile positioning', 'Content writing', 'Thought leadership'],
  },
  {
    id: 'content-social',
    num: '02',
    name: 'Content & Social Media',
    intro: 'Mark feeds your channels',
    short: 'Grow your presence across every channel.',
    long:
      'Managing and growing brand presence across Instagram, LinkedIn, YouTube, Facebook, X (Twitter) and other digital channels. We create posts, reels, videos, carousels, scripts, captions and campaign content that attracts attention and builds engagement -plus blogs, newsletters, case studies, website content and long-form content that builds credibility and supports business growth.',
    deliverables: ['Content strategy', 'Visual storytelling', 'Campaign ideas', 'Account handling', 'Audience engagement'],
  },
  {
    id: 'website-seo',
    num: '03',
    name: 'Website Development & SEO',
    intro: 'Mark builds your home base',
    short: 'Conversion-friendly sites that improve visibility.',
    long:
      'Creating professional, conversion-friendly websites, landing pages and digital experiences that support business goals. We help brands improve online visibility through search-focused content, keyword planning, on-page SEO and website content optimization.',
    deliverables: ['Website development', 'Landing pages', 'Keyword planning', 'On-page SEO', 'Content optimization'],
  },
  {
    id: 'branding-creative',
    num: '04',
    name: 'Branding & Creative Direction',
    intro: 'Mark sharpens your identity',
    short: 'Build a consistent, ownable brand identity.',
    long:
      'Building brand identity, messaging, visual direction, logo concepts, launch creatives and consistent brand communication.',
    deliverables: ['Brand growth strategy', 'Brand positioning', 'Product marketing', 'Campaign planning', 'Growth strategy'],
  },
  {
    id: 'community-building',
    num: '05',
    name: 'Community Building',
    intro: 'Mark grows your community',
    short: 'Build and nurture engaged communities around your brand.',
    long:
      'Building and nurturing engaged communities that strengthen your brand and support long-term, sustainable growth.',
    deliverables: ['Community strategy', 'Audience engagement', 'Brand advocacy'],
  },
  {
    id: 'gtm-leadgen',
    num: '06',
    name: 'GTM Strategy & Lead Generation',
    intro: 'Mark fills your pipeline',
    short: 'Go-to-market motions that turn attention into opportunity.',
    long:
      'Supporting startups and businesses with go-to-market planning, positioning, offer clarity, launch strategy and audience targeting. We create campaigns and funnels that help businesses attract qualified leads, improve engagement and convert attention into business opportunities.',
    deliverables: ['GTM strategy', 'Meta Ads', 'Google Ads', 'Lead generation', 'Retargeting campaigns'],
  },
]

export const PROCESS = [
  {
    n: '01',
    title: 'Discover',
    body: 'We dig into your market, customers and numbers to find the real lever for growth.',
  },
  {
    n: '02',
    title: 'Position',
    body: 'We define the story, the offer and the go-to-market that makes you the obvious choice.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Brand, content, site and creative get produced in-house and shipped -fast.',
  },
  {
    n: '04',
    title: 'Grow',
    body: 'We run the engine, read the data and compound what works month over month.',
  },
]

export const TEAM = [
  {
    name: 'Aarushi Chauhan',
    role: 'Startup Mentor · Growth & Fundraising Strategist',
    bio: 'Helps founders turn raw ideas into structured, market-ready and fundable businesses -across market research, positioning, GTM, pitch decks, financial projections, fundraising documentation and investor connects.',
    stats: [
      { v: '4,200+', l: 'Founders mentored' },
      { v: 'EMBA', l: 'K J Somaiya' },
    ],
  },
]

export const FOUNDERS = [
  {
    name: 'Aarushi Chauhan',
    role: 'Co-founder · CBO',
    title: 'The ecosystem architect',
    image: 'aarushi.png',
    bio: "Chief Business Officer at Lavi Software & Technology Pvt Ltd and a startup mentor who has guided 4,200+ founders from idea stage to investor readiness -across market research, positioning, GTM, pitch decks, financial projections and investor connects.",
    bullets: [
      'Mentored 4,200+ startup founders',
      'Fundraising readiness & investor communication',
      'Market research, positioning & founder-led branding',
    ],
  },
  {
    name: 'Sumit Yadav',
    role: 'Co-founder · CEO',
    title: 'The growth operator',
    image: 'founder.jpg',
    bio: 'Angel Investor and Director at Lavi Software & Technology Pvt Ltd, backing founders across marketing, fintech, D2C, AI and technology. With a ₹12 crore corpus deployed across multiple startups, his work sits at the intersection of capital, brand growth, digital strategy and scalable execution.',
    bullets: [
      'Angel investor · ₹12 Cr deployed across startups',
      'Focus on D2C, fintech, AI & technology brands',
      'Brand positioning, customer acquisition & GTM clarity',
    ],
  },
]

// Full founder profiles -sourced entirely from the official Markvance content.
export const FOUNDER_PROFILES = [
  {
    name: 'Sumit Yadav',
    image: 'founder.jpg',
    role: 'Co-founder',
    headline: 'Angel Investor | Director at Lavi Software & Technology Pvt Ltd | Backing founders across marketing, fintech, D2C, AI, and technology',
    bio: [
      'Sumit is an angel investor and operator who backs founders across marketing, fintech, D2C, AI, and technology. With a ₹12 crore investment corpus deployed across multiple startups, his focus is on how businesses actually scale -through market positioning, brand visibility, customer acquisition, and execution, not capital alone.',
      'As Director at Lavi Software & Technology, he is connected to a technology-first ecosystem building scalable digital systems, SaaS platforms, fintech solutions, and software infrastructure for modern businesses.',
    ],
    positioning: [
      'Brand positioning & go-to-market strategy',
      'Customer acquisition & digital growth',
      'D2C, fintech, AI, and technology brands',
      'Startup investing & founder scaling',
      'Combining capital, technology, and marketing execution',
      'Combining capital, technology, and marketing execution',
      'Building visibility, trust, and long-term business value',
    ],
    roles: [
      { org: 'Lavi Software & Technology Pvt Ltd', detail: 'Director -technology-first ecosystem building scalable digital systems, SaaS platforms, fintech solutions and software infrastructure.' },
      { org: 'Previously', detail: 'Riley Cillian Corp · Asia Innovation Group · Synergy Exchange.' },
    ],
    quote: 'Capital should not just fund companies. It should help founders build visibility, trust, distribution, and long-term business value.',
  },
  {
    name: 'Aarushi Chauhan',
    image: 'aarushi.png',
    role: 'Co-founder',
    headline: 'Startup Mentor | Fundraising Consultant | Market Research Specialist | Marketing & Branding Strategist | AI-Powered Growth Advisor',
    bio: [
      'Aarushi Chauhan is a startup mentor, fundraising consultant, and growth strategist who helps founders build, position, and scale businesses. Having mentored 4,200+ founders, her expertise spans branding, market research, fundraising readiness, investor communication, and business growth.',
      'Her work focuses on helping startups move from idea to execution by building strong market positioning, clear business narratives, and growth strategies that customers, investors, and partners can trust.',
    ],
    expertise: [
      'Market research and idea validation',
      'Brand positioning and messaging',
      'Go-to-market planning',
      'Fundraising & Investor Communication',
      'Founder promotion and personal branding',
      'AI-powered marketing solutions',
    ],
    roles: [
      { org: 'Lavi Software & Technology Pvt Ltd', detail: 'Chief Business Officer -business vision, strategy, growth roadmap, revenue opportunities, product-business alignment, operations, team management, GTM strategy, customer acquisition, partnerships and market positioning.' },
      { org: 'Previously', detail: 'RISE -Jhansi · AIM4BIG · The Bharat Groups · Intellibus' },
    ],
    education: 'Executive MBA in Marketing -K J Somaiya Institute of Management',
    quote: 'Make the startup clear enough for customers to understand, strong enough for the market to notice, and credible enough for investors to trust.',
  },
]

// Featured Work -placeholder slots until real Markvance projects are supplied.
// Each card is intentionally marked as a placeholder; swap in real projects
// (title, category, summary, optional metric) when available.
export const WORK = [
  {
    title: 'Your project here',
    tag: 'Branding',
    role: 'Add service line',
    metric: 'Add a result',
    summary: 'A short, honest description of a real Markvance engagement goes here -the challenge, what we did, and the outcome.',
    isPlaceholder: true,
  },
  {
    title: 'Your project here',
    tag: 'Content',
    role: 'Add service line',
    metric: 'Add a result',
    summary: 'A short, honest description of a real Markvance engagement goes here -the challenge, what we did, and the outcome.',
    isPlaceholder: true,
  },
  {
    title: 'Your project here',
    tag: 'GTM',
    role: 'Add service line',
    metric: 'Add a result',
    summary: 'A short, honest description of a real Markvance engagement goes here -the challenge, what we did, and the outcome.',
    isPlaceholder: true,
  },
]

// Testimonials -placeholder slots reserved for real client reviews.
export const TESTIMONIALS = [
  { quote: 'Your review here -real client feedback will appear in this space.', name: 'Client name', role: 'Company / role', isPlaceholder: true },
  { quote: 'Your review here -real client feedback will appear in this space.', name: 'Client name', role: 'Company / role', isPlaceholder: true },
  { quote: 'Your review here -real client feedback will appear in this space.', name: 'Client name', role: 'Company / role', isPlaceholder: true },
]

export const FAQ = [
  {
    q: 'How is Markvance different from a typical agency?',
    a: 'Most agencies hand over a strategy and step back. We build it with you and stay to execute -strategy, creative, content and growth live under one roof and one team.',
  },
  {
    q: 'Do you work with early-stage founders or only established brands?',
    a: 'Both. We have mentored 4,200+ founders from idea stage and also support funded, scaling brands. The engagement is scoped to where you actually are.',
  },
  {
    q: 'Can I engage you for just one service?',
    a: 'Yes. You can start with a single service line -say content or website & SEO -and expand into the full stack as it makes sense. Nothing is forced.',
  },
  {
    q: 'How do engagements usually start?',
    a: 'With a free strategy call. We pressure-test your goals, find the real growth lever and propose a focused scope before any commitment.',
  },
  {
    q: 'Where are you based and who do you work with?',
    a: 'We are based in Vasant Kunj, New Delhi and work with founders, creators and brands across India and beyond, remote-first.',
  },
]
