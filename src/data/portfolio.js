import portrait from '../../assets/myPicture1.png'
import signature from '../../assets/signature1.gif'
import logo from '../../assets/Logo.png'
import emailIcon from '../../assets/email-logo.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import resumeIcon from '../../assets/resume.svg'
import arrowIcon from '../../assets/right-arrow.svg'
import externalIcon from '../../assets/live-link.svg'
import aboutPortrait from '../../assets/myPicture2.png'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import tailwindIcon from '../../assets/technologies/tailwindcss.svg'
import javascriptIcon from '../../assets/technologies/javascript.svg'
import typescriptIcon from '../../assets/technologies/typescript.svg'
import reactIcon from '../../assets/technologies/react.svg'
import axiosIcon from '../../assets/technologies/axios.svg'
import nodeIcon from '../../assets/technologies/nodedotjs.svg'
import expressIcon from '../../assets/technologies/express.svg'
import jwtIcon from '../../assets/technologies/jsonwebtokens.svg'
import mongooseIcon from '../../assets/technologies/mongoose.svg'
import sqlIcon from '../../assets/technologies/sql.svg'
import mongodbIcon from '../../assets/technologies/mongodb.svg'
import postgresqlIcon from '../../assets/technologies/postgresql.svg'
import supertestIcon from '../../assets/technologies/api.svg'
import gitIcon from '../../assets/technologies/git.svg'
import postmanIcon from '../../assets/technologies/postman.svg'
import restClientIcon from '../../assets/technologies/rest-client.png'
import codexIcon from '../../assets/technologies/codex.svg'
import problemSolvingCertificate from '../../assets/certificates/previews/problem-solving-basic.jpg'
import javascriptCertificate from '../../assets/certificates/previews/javascript-basic.jpg'
import awsAiPractitionerBadge from '../../assets/certificates/AWS Certified AI Practitioner certificate.png'

import warrantyKeepPreview from '../../assets/preview/warrantykeep.png'
import calculatorPreview from '../../assets/preview/calculator.png'
import etchASketchPreview from '../../assets/preview/etch-a-sketch.png'

// Keep personal content, assets, and links in this module.
// Use null to disable an action when its destination is unavailable.
export const portfolio = {
  name: 'Jason E. Espallardo',
  shortName: 'Jason',
  copyrightName: 'Jason Espallardo',
  role: 'Backend-Leaning Full Stack Developer',
  logo,
  portrait,
  signature,
  email: 'espallardo.je@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jason-espallardo-870913285/',
  github: 'https://github.com/dotjsonn',
  resume: 'https://drive.google.com/drive/folders/1GhSUvIZfTnY4UsYMpPdlz286S9dDE6Oi?usp=sharing',
  introduction: {
    paragraphs: [
      'I am Jason E. Espallardo, a Bachelor of Science in Computer Science graduate from the Polytechnic University of the Philippines. I graduated in September 2026 with Magna Cum Laude honors and was a DOST-SEI Undergraduate Scholar under Republic Act No. 7687.',
      'I\'m an aspiring Full-Stack Developer, leaning more toward backend development than frontend development. I primarily work with the JavaScript and TypeScript ecosystems, using the MERN and PERN stacks to build web applications.',
    ],
  },
  contact: {
    invitation: 'Have a web development idea or a problem to work through? Let’s start a conversation.',
    unavailableMessage: 'Contact details coming soon.',
  },
  unavailableActionsMessage: 'Social links, contact details, and resume coming soon.',
  projectsPage: {
    title: 'Projects',
    introduction: 'A selection of web applications, API projects, and interactive browser tools I’ve built.',
    galleryLabel: 'Project gallery',
  },
  projects: [
    {
      id: 'featured-project-01',
      title: 'WarrantyKeep',
      summary: 'A full-stack app for organizing product warranties, tracking expiration dates, and storing receipt links, with searchable records and an admin dashboard.',
      featured: true,
      image: warrantyKeepPreview,
      imageAlt: 'WarrantyKeep application preview',
      technologies: ['TypeScript', 'PostgreSQL', 'Express', 'React', 'Node', 'JWT'],
      github: 'https://github.com/dotjsonn/WarrantyKeep',
      demo: 'https://warranty-keep-five.vercel.app/',
    },
    {
      id: 'featured-project-02',
      title: 'Blog-List (with API testing)',
      summary: 'A REST API for managing blogs with authentication and CRUD operations. Automated tests use Node.js Test Runner and Supertest.',
      featured: true,
      image: null,
      imageAlt: '',
      technologies: ['MongoDB', 'Mongoose', 'Express', 'Node', 'JWT', 'Supertest'],
      github: 'https://github.com/dotjsonn/Blog-List',
      demo: null, // API project; no live preview.
    },
    {
      id: 'featured-project-03',
      title: 'Basic Calculator',
      summary: 'A browser calculator for basic arithmetic, decimals, and chained operations, with clear controls and invalid-input alerts.',
      featured: true,
      image: calculatorPreview,
      imageAlt: 'Basic Calculator interface preview',
      technologies: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/dotjsonn/calculator',
      demo: 'https://dotjsonn.github.io/calculator/',
    },
    {
      id: 'featured-project-04',
      title: 'Etch a Sketch',
      summary: 'An interactive grid-based drawing app with adjustable grid sizes, a color picker, and a reset control.',
      featured: true,
      image: etchASketchPreview,
      imageAlt: 'Etch a Sketch drawing app preview',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/dotjsonn/etch-a-sketch',
      demo: 'https://dotjsonn.github.io/etch-a-sketch/',
    },
  ],
  projectContent: {
    featuredHeading: 'Featured projects',
    noPreview: 'No preview available',
  },
  about: {
    headline: ['Full Stack.', 'Problem Solver.'],
    portrait: aboutPortrait,
    portraitAlt: 'Illustrated portrait of Jason E. Espallardo',
    paragraphs: [
      "I'm a Computer Science graduate and an aspiring Full-Stack Developer with a stronger interest in backend development. I enjoy building practical web applications and understanding how systems work behind the scenes. I'm continuously expanding my knowledge in backend development, software testing, AI engineering, and AWS cloud technologies.",
      "Beyond building projects, I enjoy solving coding challenges on LeetCode and HackerRank to strengthen my logical thinking and problem-solving skills. I believe in learning through hands-on experience, experimentation, and continuous improvement. My goal is to develop secure, reliable, and scalable applications while continuously growing as a software developer.",
    ],
  },
  technologies: [
    {
      id: 'front-end',
      label: 'Front-end',
      items: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'TailwindCSS', icon: tailwindIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Axios', icon: axiosIcon },
      ],
    },
    {
      id: 'back-end',
      label: 'Back-end',
      items: [
        { name: 'Node.js', icon: nodeIcon },
        { name: 'Express', icon: expressIcon },
        { name: 'JWT', icon: jwtIcon },
        { name: 'Mongoose', icon: mongooseIcon },
      ],
    },
    {
      id: 'database',
      label: 'Databases & Query Languages',
      items: [
        { name: 'SQL', icon: sqlIcon },
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
      ],
    },
    {
      id: 'testing',
      label: 'Testing',
      items: [
        { name: 'Supertest', icon: supertestIcon },
      ],
    },
    {
      id: 'development-tools',
      label: 'AI & Development Tools',
      items: [
        { name: 'Git', icon: gitIcon },
        { name: 'Postman', icon: postmanIcon },
        { name: 'VS Code REST Client', icon: restClientIcon, iconWidth: '40px', iconMaskSize: '160% auto' },
        { name: 'Codex', icon: codexIcon },
      ],
    },
  ],
  // Details use the supplied records/files; existing public certificate URLs are preserved.
  certifications: [
    {
      id: 'hackerrank-problem-solving-basic',
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      image: problemSolvingCertificate,
      imageAlt: 'HackerRank Problem Solving (Basic) certificate awarded to Jason Espallardo',
      url: 'https://www.hackerrank.com/certificates/iframe/629e41fd60fc',
    },
    {
      id: 'hackerrank-javascript-basic',
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      image: javascriptCertificate,
      imageAlt: 'HackerRank JavaScript (Basic) certificate awarded to Jason Espallardo',
      url: 'https://www.hackerrank.com/certificates/iframe/7641882c011e',
    },
    {
      id: 'aws-ai-practitioner',
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      image: awsAiPractitionerBadge,
      imageAlt: 'AWS Certified AI Practitioner foundational badge',
      url: 'https://www.credly.com/badges/7326e1d9-b5b6-449c-91e2-3d2eb1e49def/public_url',
    },
  ],
  certificateContent: {
    noPreview: 'No certificate preview available',
  },
}

export const icons = {
  github: githubIcon,
  arrow: arrowIcon,
  external: externalIcon,
}

export const emailHref = portfolio.email ? `mailto:${portfolio.email}` : null

export const socialActions = [
  { id: 'email', label: 'Email', href: emailHref, icon: emailIcon },
  { id: 'linkedin', label: 'LinkedIn', href: portfolio.linkedin, icon: linkedinIcon },
  { id: 'github', label: 'GitHub', href: portfolio.github, icon: githubIcon },
]

export const resumeAction = {
  id: 'resume',
  label: 'Resume',
  href: portfolio.resume,
  icon: resumeIcon,
}
