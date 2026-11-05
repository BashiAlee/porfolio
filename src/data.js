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
  { role: 'Teaching Assistant', company: 'Riphah International University', period: 'Feb 2016 – May 2016', points: ['Helped students during class activities, invigilated exams and answered semester-project queries.'] },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'Angular', 'Vue.js', 'Svelte', 'Electron', 'JavaScript', 'jQuery'] },
  { group: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'SASS / LESS', 'CSS'] },
  { group: 'Mobile', items: ['Ionic', 'Hybrid apps', 'REST on mobile'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'MySQL', 'Python', 'REST APIs', '.NET / C#'] },
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

export const extras = {
  languages: 'English (native or bilingual) · Urdu (full professional)',
  certifications: 'Angular (Intermediate) Certificate · Angular Basic · Shaping up with Angular.js · Git from Basics to Advanced',
  education: 'BS Software Engineering · Riphah International University (2012 – 2016)',
}
