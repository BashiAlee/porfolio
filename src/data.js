export const profile = {
  name: 'Abdul Basit',
  title: 'Full Stack JavaScript Engineer',
  tagline: 'MEAN / MERN / MEVN specialist and team lead. 10+ years building web and mobile products for startups and enterprise.',
  email: 'abasitz1994@hotmail.com',
  phone: '+92 311 1898970',
  linkedin: 'https://www.linkedin.com/in/bashialee/',
  github: 'https://github.com/BashiAlee',
  cv: '/Abdul-Basit-CV.pdf',
  location: 'Rawalpindi, Punjab, Pakistan · Remote',
}

export const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '8', label: 'Companies' },
  { value: '4+', label: 'Industries' },
  { value: '5+', label: 'Frameworks' },
]

export const about = [
  'Dynamic, adaptable developer with a talent for learning new technologies quickly, building efficient, scalable web and mobile applications with modern languages, frameworks and tools.',
  'Expertise in Angular, TypeScript, Node.js, Express.js, React, Redux, Vue and Ionic, on both frontend and backend; databases include MongoDB and MySQL.',
  'Extensive experience with real-time communication using Socket.io, and with project management tools like Jira and Trello.',
  'Full-stack JavaScript (MERN/MEAN/MEVN), API development, cross-platform mobile and cloud deployment on OpenShift.',
  'Progressed from trainee to Senior Frontend Developer, taking on lead roles: client communication, technical decisions and team ownership across travel, e-commerce, blockchain and SaaS.',
  'Delivered end-to-end solutions for startups and enterprise clients, working in remote and cross-border teams.',
]

export const achievements = [
  'Performance improvements: faster load times and smaller bundles',
  'Mentored team members as a lead',
  'Built a reusable component library and standardized front-end practices',
]

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Eclevar',
    period: 'Nov 2024 – Jun 2026',
    points: [
      'Architect clean, high-performance code while continuously growing software design skills.',
      'Orchestrate the development lifecycle to build secure, fast and scalable solutions.',
      'Work with product, UI/UX and dev teams to champion best practices.',
      'Turn creative designs into pixel-perfect React implementations.',
      'Ensure seamless experiences across all browsers and platforms.',
      'Hunt down bugs and optimize performance for smooth interactions.',
      'Engineer robust, testable, performance-oriented software.',
      'Select architectural patterns for complex business challenges.',
      'Create standardized front-end practices and a library of reusable components.',
    ],
    stack: ['React', 'Component library', 'Performance'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Moniepoint',
    period: 'Aug 2022 – Oct 2024',
    points: [
      'Developed and maintained scalable, reusable, modular user interfaces in Angular and React.',
      'Collaborated with backend engineers, designers and product managers on responsive web applications.',
      'Translated designs and wireframes into high-quality, efficient code.',
      'Wrote clean, maintainable, well-documented code following best practices.',
      'Debugged UI/UX issues across browsers and platforms.',
      'Took part in code reviews to keep the codebase consistent and high quality.',
      'Checked the technical feasibility of UI/UX designs and proposed improvements.',
      'Kept up with emerging frontend technologies and practices.',
    ],
    stack: ['Angular', 'React', 'Fintech'],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Travel Resorts of America, Inc',
    period: 'Jul 2019 – Sep 2024',
    points: [
      'Designed and maintained React and Angular applications and websites.',
      'Handled communication with clients abroad.',
      'Created APIs in Node.js with MongoDB as the database.',
      'Owned build creation and deployment on OpenShift.',
    ],
    stack: ['Angular', 'React', 'Node.js', 'MongoDB', 'OpenShift'],
  },
  { role: 'Project Management & MeanStack Developer', company: 'QMESpotlight (United States)', period: 'Aug 2019 – Nov 2019' },
  { role: 'JavaScript Developer', company: 'iPlex Pvt Ltd', period: 'Apr 2019 – Jun 2019', points: ['Development in React.js, Angular and JavaScript.', 'Technical tests and client communication.'], stack: ['React', 'Angular', 'JavaScript'] },
  { role: 'JavaScript Developer', company: 'Expanse.Tech', period: 'Mar 2018 – Apr 2019', points: ['Built apps with Angular 6, VueJS, Electron, JavaScript, LESS/SCSS and HighCharts.', 'Developed hybrid mobile apps with the Ionic framework.'], stack: ['Angular 6', 'Vue', 'Electron', 'Ionic', 'HighCharts'] },
  { role: 'AngularJS Developer', company: 'Barefoot&Co', period: 'May 2017 – Mar 2018', points: ['Worked on Angular 1, 2 and 5 applications and Ionic hybrid apps.', 'Used Node.js, Bootstrap 4 and Trello.'], stack: ['Angular', 'Ionic', 'Node.js', 'Bootstrap 4'] },
  { role: 'Junior Web Developer', company: 'Brain Logix Private Limited', period: 'Sep 2016 – Mar 2017', points: ['Front-end development with Bootstrap, CSS3, HTML5, LESS, SASS and SCSS.', 'WordPress and Joomla theme customization, website maintenance and AngularJS.'], stack: ['HTML5', 'CSS3', 'SASS', 'WordPress', 'AngularJS'] },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'Angular', 'Vue.js', 'Svelte', 'Electron', 'JavaScript', 'jQuery'] },
  { group: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'SASS / LESS', 'CSS'] },
  { group: 'Mobile', items: ['Ionic', 'Hybrid apps', 'REST on mobile'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'MySQL', 'Python', 'REST APIs', '.NET / C#'] },
  { group: 'DevOps', items: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git'] },
  { group: 'Tools', items: ['VS Code', 'Visual Studio', 'Jira', 'Trello', 'SourceTree'] },
]

// kind: 'phones' | 'stockbill' | 'tracker' | 'studio'
export const current = [
  {
    title: 'Apex Mobile Store',
    badge: 'In progress',
    kind: 'phones',
    blurb:
      'Headless online store for a phone shop. WooCommerce is the source of truth and a Next.js 16 + TypeScript storefront sits on top.',
    points: ['123 real products live in the catalogue, with photos and product videos', 'Grouped accessories menu, search, guest checkout with Cash on Delivery', 'Checked at desktop, tablet and phone widths after every change'],
    tags: ['Next.js 16', 'TypeScript', 'WooCommerce', 'WordPress', 'CSS Modules'],
  },
  {
    title: 'Universal Billing System',
    badge: 'v1.0 · Windows',
    kind: 'stockbill',
    blurb:
      'Offline desktop billing for small shops, shipped as a Windows installer. Each shop sets its own name and logo.',
    points: ['Stock, QR and barcode labels, billing by scanner, IMEI tracking', 'Per-item discounts, returns, suppliers, day book and reports', 'PDF and CSV export, one-click backup and restore, licensing'],
    tags: ['Electron', 'React', 'TypeScript', 'SQLite', 'Vitest', 'Playwright'],
  },
  {
    title: 'Installment Tracker',
    badge: 'Active',
    kind: 'tracker',
    blurb:
      'Tracks customers buying phones on installments: who owes what, when it is due and who is behind.',
    points: ['Custom schedules, partial payments and a plan calculator', 'Owner and staff logins, cash ledger, PDF statements and overdue sheets', 'One-click WhatsApp reminders that you review before sending'],
    tags: ['Node.js', 'Express', 'SQLite', 'PDFKit'],
  },
  {
    title: 'Studio Manager',
    badge: 'New · v0.1',
    kind: 'studio',
    blurb:
      'Desktop app for running a studio: sales, expenses, events, payments, shifts and equipment in one place.',
    points: ['Alerts when bookings or equipment overlap', 'Portable Windows build, no install needed'],
    tags: ['Electron', 'JavaScript'],
  },
]

export const earlier = [
  { title: 'Moniepoint', area: 'Fintech', blurb: 'Payments and banking interfaces built with Angular and React.' },
  { title: 'Membership & Contract Management', area: 'SaaS', blurb: 'Membership, contracts, agents, lead assignment, upgrades and dues for a travel-resorts business.' },
  { title: 'Cliiimb & KOWO', area: 'Social', blurb: 'Community platforms on web and mobile, plus a Messenger with chat, audio and conference calls and location tracking.' },
  { title: 'Outfitters · Ethnic · Super Squad · Minnie Minors', area: 'Retail', blurb: 'Fashion e-commerce storefronts.' },
  { title: 'IdeasPk · CERP · CarolineDiana', area: 'NGO & lifestyle', blurb: 'Research and non-profit sites and a personal lifestyle brand site.' },
  { title: 'Medical Software', area: 'Healthcare', blurb: 'Healthcare and medical systems.' },
]

export const marquee = ['React', 'Next.js', 'TypeScript', 'Angular', 'Vue', 'Node.js', 'Electron', 'Ionic', 'MongoDB', 'SQLite', 'Socket.io', 'Docker', 'OpenShift']

export const extras = {
  languages: 'English (native or bilingual) · Urdu (full professional)',
  certifications: 'Angular (Intermediate) Certificate · Angular Basic · Shaping up with Angular.js · Git from Basics to Advanced',
  education: 'BS Software Engineering · Riphah International University (2012 – 2016)',
}
