export interface InsightItem {
  id: string
  title: string
  date: string
  tag: string
  excerpt: string
}

export interface CardItem {
  title: string
  body: string
}

export interface StatItem {
  value: string
  label: string
}

export interface SiteContent {
  meta: { siteName: string; description: string }
  nav: { initials: string; name: string; ctaLabel: string }
  hero: {
    eyebrow: string
    name: string
    title: string
    statement: string
    bio: string
    ctaPrimary: string
    ctaSecondary: string
    badge1: string
    badge2: string
    badge3: string
    photo: string
    photoAlt: string
    photoTagLabel: string
    photoTagValue: string
  }
  bring: {
    heading: string
    intro: string
    cards: CardItem[]
    stats: StatItem[]
  }
  insights: {
    heading: string
    intro: string
    items: InsightItem[]
  }
  about: {
    heading: string
    paragraphs: string[]
    credentialsHeading: string
    credentials: string[]
    builtHeading: string
    builtItems: CardItem[]
  }
  services: {
    heading: string
    intro: string
    cards: CardItem[]
    ctaLabel: string
    ctaNote: string
  }
  contact: {
    heading: string
    statement: string
    email: string
    linkedin: string
    phone: string
    location: string
    footerNote: string
  }
}

export const defaultContent: SiteContent = {
  meta: {
    siteName: 'Rajat Srivastava',
    description: 'Delivery Director driving digital transformation for small businesses and enterprises alike',
  },
  nav: {
    initials: 'RS',
    name: 'Rajat Srivastava',
    ctaLabel: 'Get in touch',
  },
  hero: {
    eyebrow: 'Digital Transformation · Delivery Leadership',
    name: 'Rajat Srivastava',
    title: 'Delivery Director, PaaS & Agentic AI Solutions',
    statement:
      'I help organizations plan and deliver digital transformation — from small businesses standing up their first real platform to enterprises modernizing across multiple accounts.',
    bio: '20+ years in application design and development, with 14+ years of technical leadership delivering for clients of every size. That toolkit spans custom development, COTS and low-code platforms, and, more recently, agentic AI and multi-agent orchestration — applied wherever it genuinely moves the needle, not as the whole story.',
    ctaPrimary: 'Work with me',
    ctaSecondary: 'Explore my work',
    badge1: 'Digital Transformation Leader',
    badge2: 'Delivery Director',
    badge3: '20+ years in IT',
    photo: '/rajat-srivastava.jpg',
    photoAlt: 'Rajat Srivastava',
    photoTagLabel: 'Experience',
    photoTagValue: '20+ Years in IT',
  },
  bring: {
    heading: 'What I Bring',
    intro:
      'Two decades of delivery experience spanning small-business engagements and enterprise programs alike — pairing platform and COTS delivery with hands-on agentic AI practice where it genuinely helps.',
    cards: [
      {
        title: 'Digital Transformation, Any Scale',
        body: 'Guiding small businesses and enterprises alike through digital transformation — from a first platform build to multi-account modernization programs.',
      },
      {
        title: 'Delivery & Program Leadership',
        body: 'Heading delivery of platform and COTS projects across clients of every size, from presales and RFP strategy through go-live.',
      },
      {
        title: 'Platform, COTS & Low-Code Delivery',
        body: 'Designing and delivering Appian low-code/no-code and COTS solutions, including approval and audit workflows, sized to what each business actually needs.',
      },
      {
        title: 'Agentic AI, Applied Where It Helps',
        body: 'Applying multi-agent orchestration and LangGraph patterns as one tool in the delivery toolkit — not the whole strategy.',
      },
      {
        title: 'Talent & Team Building',
        body: 'Recruiting, mentoring, and grooming talent, and standing up high-performing scrum teams from the ground up.',
      },
      {
        title: 'Technology Partnerships',
        body: 'Driving presales and business development with technology partners including Microsoft, Salesforce Agentforce, and ServiceNow AI/Now Assist.',
      },
    ],
    stats: [
      { value: '20+', label: 'Years in IT' },
      { value: '14+', label: 'Years of technical leadership' },
      { value: '10+', label: 'Years building & scaling teams' },
      { value: '5+', label: 'Clients delivered for, enterprise to SMB' },
      { value: '2026', label: 'Certified Agentic AI Developer' },
    ],
  },
  insights: {
    heading: 'Insights',
    intro:
      'Notes on delivering digital transformation for businesses of every size — platforms, low-code, agentic AI, and the teams that ship it.',
    items: [
      {
        id: 'insight-0',
        title: "Digital Transformation Isn't One-Size-Fits-All",
        date: '2026-02',
        tag: 'Digital Transformation',
        excerpt:
          'Why the right platform, process, and pace of change look different for a five-person business than a five-thousand-person enterprise — and why the delivery discipline underneath stays the same.',
      },
      {
        id: 'insight-1',
        title: 'Applying Agentic AI Patterns to Enterprise Delivery',
        date: '2026-01',
        tag: 'Agentic AI',
        excerpt:
          'How multi-agent orchestration and LangGraph patterns are finding their way into everyday delivery work.',
      },
      {
        id: 'insight-2',
        title: 'Why Low-Code Platforms Still Need Delivery Discipline',
        date: '2025-11',
        tag: 'Platform',
        excerpt:
          'COTS and low-code speed up delivery, but they still demand the same rigor as custom builds.',
      },
      {
        id: 'insight-3',
        title: 'Building High-Performing Scrum Teams from Scratch',
        date: '2025-06',
        tag: 'Leadership',
        excerpt:
          'Lessons from a decade of recruiting, mentoring, and standing up cross-functional teams.',
      },
    ],
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I'm Rajat Srivastava — I help organizations plan and deliver digital transformation, from small businesses standing up their first real platform to enterprises modernizing across multiple accounts. My toolkit spans custom development, COTS and low-code platforms, and agentic AI, applied wherever it genuinely moves the needle.",
      "I have 20+ years in application design and development — full-stack Java — completing two decades in IT in September 2026, with 14+ years of technical leadership managing delivery and architecting portal and digital applications.",
      "I'm a certified Agentic AI Developer (REVA University, Bangalore) and apply agentic AI patterns, including multi-agent orchestration and LangGraph, as part of a broader delivery toolkit that also covers the full SDLC and cloud/on-prem Liferay Portal implementations.",
    ],
    credentialsHeading: 'Credentials',
    credentials: [
      'Delivery Director, PaaS & Agentic AI Solutions — Zillion Technologies, Inc.',
      'Certified Agentic AI Developer — REVA University, Bangalore (2026)',
      'B.E., Computer Science & Engineering — Technocrats Institute of Technology, Bhopal',
      '20+ years in application design and development; 14+ years of technical leadership',
    ],
    builtHeading: "What I've Built",
    builtItems: [
      {
        title: "AARP Office of General Counsel Platform",
        body: 'A low-code/no-code Appian solution supporting approval and audit workflows for published content.',
      },
      {
        title: 'Company Mobile App Launch',
        body: "Led the company's mobile app end-to-end — ideation, design, development, and delivery (2023).",
      },
      {
        title: 'Enterprise Portal Platforms',
        body: 'Architected and administered cloud/on-prem Liferay Portal implementations across FordDirect, Verizon Telematics, and Tata Consultancy Services.',
      },
    ],
  },
  services: {
    heading: 'Ways to Work Together',
    intro: 'Open to digital transformation, delivery leadership, advisory, and technology partnership conversations — for small businesses and enterprises alike.',
    cards: [
      {
        title: 'Digital Transformation for Growing Businesses',
        body: 'Helping small and mid-sized businesses plan and stand up their first real platforms — sized right, without enterprise overhead.',
      },
      {
        title: 'Delivery & Program Leadership',
        body: 'Heading end-to-end delivery of COTS and low-code platform projects, from presales through production support.',
      },
      {
        title: 'Platform, COTS & Low-Code Advisory',
        body: 'Designing Appian low-code/no-code solutions for approval, audit, and business-process workflows, fit to the business.',
      },
      {
        title: 'Agentic AI Advisory',
        body: 'Helping teams apply multi-agent orchestration and LangGraph patterns to enterprise delivery and internal tooling — where it earns its place.',
      },
      {
        title: 'Talent & Team Building',
        body: 'Recruiting, mentoring, and standing up high-performing scrum teams across billable and non-billable work.',
      },
    ],
    ctaLabel: 'Start a conversation',
    ctaNote: 'Open to delivery leadership, advisory, and technology partnership opportunities.',
  },
  contact: {
    heading: "Let's Talk",
    statement:
      "Whether you're a small business taking your first step into digital transformation or an enterprise scaling a multi-account program — if you're evaluating platforms, delivery leadership, or where agentic AI actually fits, I'd like to hear from you.",
    email: 'rajat@zilliontechnologies.com',
    linkedin: 'linkedin.com/in/rajat007srivastava',
    phone: '+91 97308 99901',
    location: 'Pune, Maharashtra, India',
    footerNote: '© 2026 Rajat Srivastava. Delivery leadership for digital transformation, at any scale.',
  },
}
