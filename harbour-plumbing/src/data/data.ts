// ============================================================================
// Single source of truth for ALL site content.
// Re-skin for a new client by editing this file only — no component changes.
// ============================================================================

export const business = {
  name: 'Harbour Plumbing Co.',
  tagline: "Sydney's Trusted 24/7 Emergency Plumbers",
  taglineAccent: '24/7 Emergency', // highlighted substring within tagline
  subheading:
    'On-time, upfront pricing, lifetime workmanship warranty. Servicing the Eastern Suburbs, Inner West & North Shore.',
  phone: '0400 123 456',
  phoneHref: 'tel:0400123456',
  email: 'info@harbourplumbing.com.au',
  licence: 'NSW Lic. 123456C',
  abn: '12 345 678 901',
  association: 'Master Plumbers Association Member',
  hours: { emergency: '24/7 Emergency Service', standard: 'Standard: Mon–Fri 7am–5pm' },
  availabilityBadge: 'Available Now in Sydney',
  responseTime: { label: 'Average Response Time', value: '47 Minutes' },
  topBar: '24/7 Emergency Plumbing · Licensed & Insured · NSW Lic. 123456C',
  heroImage: {
    src: '/hero-plumber.webp',
    alt: 'Friendly professional plumber in a clean navy uniform standing in a modern Sydney kitchen',
  },
  trustBadges: [
    { icon: 'verified', label: 'Fully Licensed' },
    { icon: 'shield', label: '$20M Insured' },
    { icon: 'star', label: '5.0 Google Rating' },
  ],
  google: { rating: '4.9/5', reviewCount: '340+', reviewsUrl: 'https://www.google.com/maps' },
  footerBlurb:
    "Premium, reliable 24/7 plumbing services for Sydney's residential and commercial properties.",
  copyrightYear: 2026,
} as const

export type Service = {
  icon: string
  title: string
  description: string
  priceHint: string
}

export const services: Service[] = [
  {
    icon: 'drop',
    title: 'Blocked Drains',
    description: 'Fast clearing of stubborn blockages using advanced CCTV and jet blasting technology.',
    priceHint: 'From $99 Assessment',
  },
  {
    icon: 'heat',
    title: 'Hot Water Systems',
    description: 'Repairs, replacements, and upgrades for gas, electric, and solar hot water units.',
    priceHint: 'Same Day Replacement',
  },
  {
    icon: 'gas',
    title: 'Gas Fitting',
    description: 'Licensed gas leak detection, appliance installation, and line repairs.',
    priceHint: 'Compliance Certified',
  },
  {
    icon: 'pipe',
    title: 'Burst Pipes',
    description: 'Emergency response to locate and repair burst or leaking pipes immediately.',
    priceHint: '24/7 Response',
  },
  {
    icon: 'toilet',
    title: 'Toilet Repairs',
    description: 'Fixing running, leaking, or blocked toilets, plus new suite installations.',
    priceHint: 'Fixed Pricing',
  },
  {
    icon: 'tools',
    title: 'Renovations',
    description: 'Professional plumbing rough-ins and fit-outs for bathroom and kitchen remodels.',
    priceHint: 'Custom Quotes',
  },
]

export type WhyPoint = { icon: string; title: string; description: string }

export const whyChooseUs: WhyPoint[] = [
  {
    icon: 'timer',
    title: 'On Time, Every Time',
    description: "47-minute average emergency response. If we're late, your call-out fee is waived.",
  },
  {
    icon: 'quote',
    title: 'Upfront Fixed Pricing',
    description: 'You approve the exact price before any work begins. No hourly surprises, ever.',
  },
  {
    icon: 'shield',
    title: 'Lifetime Workmanship Warranty',
    description: 'Every job is backed for life. Fully licensed and insured up to $20M.',
  },
  {
    icon: 'verified',
    title: 'Local Licensed Experts',
    description: 'Master Plumbers Association members who live and work in your suburb.',
  },
]

export type AreaGroup = { region: string; suburbs: string[] }

// 12 suburbs across three regions
export const serviceAreas: AreaGroup[] = [
  { region: 'Eastern Suburbs', suburbs: ['Bondi', 'Double Bay', 'Randwick', 'Coogee'] },
  { region: 'Inner West', suburbs: ['Newtown', 'Marrickville', 'Balmain', 'Leichhardt'] },
  { region: 'North Shore', suburbs: ['Mosman', 'Neutral Bay', 'Chatswood', 'Lane Cove'] },
]

export type Review = { name: string; suburb: string; rating: number; text: string }

export const reviews: Review[] = [
  {
    name: 'Sarah Jenkins',
    suburb: 'Double Bay',
    rating: 5,
    text: 'Incredible service! Called at 2am for a burst pipe and they were here in 40 minutes. Clean, professional, and explained the pricing upfront before starting any work.',
  },
  {
    name: 'Michael Tran',
    suburb: 'Marrickville',
    rating: 5,
    text: 'Replaced our hot water system the same day we called. Tidy work, fair price, and they even walked us through the warranty paperwork.',
  },
  {
    name: 'Priya Sharma',
    suburb: 'Mosman',
    rating: 5,
    text: "The CCTV drain inspection found a root intrusion two other plumbers missed. Fixed properly the first time. Couldn't recommend more highly.",
  },
  {
    name: "James O'Connor",
    suburb: 'Balmain',
    rating: 5,
    text: 'Professional from the first phone call. Fixed our blocked drain in under an hour and left the bathroom cleaner than they found it.',
  },
  {
    name: 'Emma Liu',
    suburb: 'Lane Cove',
    rating: 5,
    text: 'Used them for our full bathroom renovation rough-in. Showed up on schedule every day and the certifier signed off without a single issue.',
  },
  {
    name: 'David Papadopoulos',
    suburb: 'Coogee',
    rating: 5,
    text: 'Gas fitting for our new cooktop done quickly with full compliance certificate. Transparent pricing and friendly technician.',
  },
  {
    name: 'Rachel Nguyen',
    suburb: 'Newtown',
    rating: 4,
    text: 'Great communication and a fair fixed quote for our toilet replacement. Arrived right at the start of the window they promised.',
  },
  {
    name: 'Tom Whitfield',
    suburb: 'Chatswood',
    rating: 5,
    text: "Our strata uses them for all three buildings now. Reliable, well-documented work and they never miss a scheduled visit.",
  },
]

export type Step = { icon: string; title: string; description: string; variant: 'navy' | 'outline' | 'orange' }

export const processSteps: Step[] = [
  {
    icon: 'phone',
    title: 'Contact Us',
    description: 'Call or book online. Our local Sydney team is ready to dispatch a technician.',
    variant: 'navy',
  },
  {
    icon: 'quote',
    title: 'Upfront Quote',
    description: 'We assess the issue on-site and provide a fixed price before any work begins.',
    variant: 'outline',
  },
  {
    icon: 'tools',
    title: 'Expert Repair',
    description: 'Job completed cleanly and efficiently, backed by our lifetime workmanship guarantee.',
    variant: 'orange',
  },
]

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'Do you really operate 24/7, including public holidays ? ',
    answer:
      'Yes — a licensed plumber is on call every hour of every day, including Christmas and public holidays. Our average emergency response time across Sydney is 47 minutes.',
  },
  {
    question: 'How does your upfront fixed pricing work?',
    answer:
      'Once our technician assesses the issue on-site, you receive a fixed written price before any work begins. The price you approve is the price you pay — regardless of how long the job takes.',
  },
  {
    question: 'What does the lifetime workmanship warranty cover?',
    answer:
      "It covers the quality of our labour for the life of the installation. If anything we've worked on fails due to workmanship, we return and fix it at no charge. Manufacturer parts warranties apply separately.",
  },
  {
    question: 'Is there a call-out fee?',
    answer:
      "Standard-hours quotes are free for most jobs. Emergency and after-hours call-outs carry a modest fee, which we confirm with you on the phone before dispatching — and it's waived if we arrive late.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Fully. We hold NSW Plumbing Licence No. 123456C, carry $20M public liability insurance, and are members of the Master Plumbers Association of NSW.',
  },
]

export const quoteSection = {
  heading: 'Get Your Free, Fixed-Price Quote',
  copy: "Tell us what's going on and we'll come back to you within 30 minutes during business hours — or call us right now for emergencies.",
  points: [
    'No-obligation, fixed-price quote',
    '30-minute response during business hours',
    'Lifetime workmanship warranty on all jobs',
  ],
  finePrint: 'We respond within 30 minutes during business hours. Your details are never shared.',
  serviceOptions: [...services.map((s) => s.title), 'Other / Not sure'],
} as const

export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Get a Free Quote',
} as const

export const sectionCopy = {
  services: {
    heading: 'Comprehensive Plumbing Solutions',
    sub: 'From minor leaks to major installations, our expert team is equipped to handle all your residential and commercial plumbing needs across Sydney.',
  },
  whyUs: {
    heading: 'Why Sydney Chooses Harbour Plumbing',
    sub: 'Premium trade professionalism — rugged reliability with a modern, transparent approach.',
  },
  process: {
    heading: 'Simple, Transparent Process',
    sub: 'No surprises, no hidden fees. Just reliable plumbing service when you need it.',
  },
  areas: {
    heading: "Servicing Sydney's Best Suburbs",
    sub: 'Local teams stationed across the Eastern Suburbs, Inner West and North Shore for the fastest possible response.',
    note: "Don't see your suburb? We likely still cover you —",
    noteCta: 'call to check.',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    sub: 'Straight answers to the questions Sydney homeowners ask us most.',
  },
} as const
