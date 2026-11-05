export const profile = {
  name: 'Abdul Basit',
  title: 'Senior Full-Stack Developer',
  tagline: 'MEAN / MERN / MEVN specialist and team lead. 10+ years building web and mobile products for startups and enterprise.',
  email: 'abasitz1994@hotmail.com',
  phone: '+92 311 1898970',
  linkedin: 'https://www.linkedin.com/in/bashialee/',
  github: 'https://github.com/BashiAlee',
  cv: '/Abdul-Basit-CV.pdf',
  location: 'Pakistan · Remote',
}

export const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '8', label: 'Companies' },
  { value: '4+', label: 'Industries' },
  { value: '5+', label: 'Frameworks' },
]

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Eclevar',
    period: 'Nov 2024 – Present',
    points: [
      'Architect clean, high-performance React code and a library of reusable components.',
      'Set standardized front-end practices; turn designs into pixel-perfect implementations.',
      'Work with product, UI/UX and dev teams on secure, fast, scalable solutions.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Moniepoint',
    period: 'Aug 2022 – Oct 2024',
    points: [
      'Built scalable, modular fintech interfaces in Angular and React.',
      'Collaborated with backend, design and product on responsive web apps; ran code reviews.',
    ],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Travel Resorts of America',
    period: 'Jul 2019 – Sep 2024',
    points: [
      'Designed and maintained React and Angular applications; built Node.js + MongoDB APIs.',
      'Owned build and deployment on OpenShift and handled communication with US clients.',
    ],
  },
  { role: 'Project Manager & Developer', company: 'QMESpotlight', period: 'Aug 2019 – Nov 2019' },
  { role: 'JavaScript Developer', company: 'Iplex', period: 'Apr 2019 – Jun 2019' },
  { role: 'JavaScript Developer', company: 'Expanse.tech', period: 'Mar 2018 – Apr 2019' },
  { role: 'AngularJS Developer', company: 'Barefoot&Co', period: 'May 2017 – Mar 2018' },
  { role: 'Web Developer', company: 'BrainLogix', period: 'Sep 2016 – Mar 2017' },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Angular', 'Vue.js', 'Svelte', 'Electron', 'JavaScript', 'jQuery'] },
  { group: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'SASS / LESS', 'CSS'] },
  { group: 'Mobile', items: ['Ionic', 'Hybrid apps', 'REST on mobile'] },
  { group: 'Backend', items: ['Node.js', 'MongoDB', 'REST APIs', '.NET / C#', 'ASP.NET MVC'] },
  { group: 'DevOps', items: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git'] },
  { group: 'Tools', items: ['VS Code', 'Visual Studio', 'Jira', 'Trello', 'SourceTree'] },
]

// kind: 'phones' | 'stockbill' | 'tracker' | 'plain'
export const projects = [
  {
    title: 'Apex Mobile Store',
    badge: 'Currently building',
    kind: 'phones',
    blurb:
      'Headless e-commerce store for a phone shop: new, used and refurbished phones plus accessories. WooCommerce is the source of truth, Next.js 16 + TypeScript is the storefront.',
    tags: ['Next.js', 'TypeScript', 'WordPress', 'WooCommerce', 'CSS Modules'],
  },
  {
    title: 'Universal Billing System',
    badge: 'Desktop app',
    kind: 'stockbill',
    blurb:
      'Offline Electron app for small shops: stock, QR/barcode labels, billing by scanning, IMEI tracking, returns, suppliers, day book, reports and backup. Each shop sets its own name and logo.',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite', 'Vitest', 'Playwright'],
  },
  {
    title: 'Installment Tracker',
    badge: 'Local tool',
    kind: 'tracker',
    blurb:
      'Tracks customers buying phones on installments: auto-generated schedules, partial payments, overdue dashboard and one-click WhatsApp reminders.',
    tags: ['Node.js', 'Express', 'SQLite'],
  },
  {
    title: 'Moniepoint',
    badge: 'Fintech',
    kind: 'plain',
    blurb: 'Payments and banking interfaces for a fast-growing African fintech, built with Angular and React.',
    tags: ['Angular', 'React', 'Fintech'],
  },
  {
    title: 'Membership & Contract Management',
    badge: 'SaaS',
    kind: 'plain',
    blurb:
      'Membership, contract, agent, lead assignment, upgrade and dues management for a travel-resorts business.',
    tags: ['Angular', 'React', 'Node.js', 'MongoDB', 'OpenShift'],
  },
  {
    title: 'Cliiimb & KOWO',
    badge: 'Social',
    kind: 'plain',
    blurb: 'Social and community platforms, web and mobile, including Messenger with chat, audio calls, conference calls and location tracking.',
    tags: ['Ionic', 'React', 'Realtime'],
  },
  {
    title: 'Fashion E-commerce',
    badge: 'Retail',
    kind: 'plain',
    blurb: 'Storefronts for Outfitters, Ethnic, Super Squad and Minnie Minors.',
    tags: ['E-commerce', 'Responsive UI'],
  },
  {
    title: 'IdeasPk · CERP · CarolineDiana',
    badge: 'NGO & lifestyle',
    kind: 'plain',
    blurb: 'Research and non-profit sites plus a personal lifestyle brand site.',
    tags: ['Web', 'CMS'],
  },
]
