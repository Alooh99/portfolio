import { html, css, js, react, tailwind, typescript, nextjs, figma, intractivefrontend, responsive, support, dot, weather, tsuragi } from '../assets';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const skillsImages = [
  { img: html, alt: 'HTML' },
  { img: css, alt: 'CSS' },
  { img: js, alt: 'JavaScript' },
  { img: react, alt: 'React' },
  { img: tailwind, alt: 'tailwind CSS' },
  { img: typescript, alt: 'typescript' },
  { img: nextjs, alt: 'nextjs' },
  { img: figma, alt: 'figma' },
  
];

export const moreSkills = [
  {
    id: 'moreSkills-1',
    icon: intractivefrontend,
    heading: 'Front-End Development',
    dot: dot,
    content1: 'Responsive and accessible website development.',
    dot: dot,
    content2: 'React.js, Next.js & Tailwind CSS.',
    dot: dot,
    content3: 'UI/UX implementation from design tools.',
    dot: dot,
    content4: 'Performance optimization and best practices.',
  },
  {
    id: 'moreSkills-2',
    icon: support,
    heading: 'Maintenance & SEO',
    dot: dot,
    content1: 'Website updates and bug fixes.',
    dot: dot,
    content2: 'Performance and SEO optimization.',
    dot: dot,
    content3: 'Technical issue resolution.',
    dot: dot,
    content4: 'Consistent monitoring and support.',
  },
  {
    id: 'moreSkills-3',
    icon: responsive,
    heading: 'Responsive Design',
    dot: dot,
    content1: 'Mobile-first and cross-device layouts.',
    dot: dot,
    content2: 'Tested across multiple screen sizes.',
    dot: dot,
    content3: 'Modern, scalable UI components.',
    dot: dot,
    content4: 'Smooth user experience across all devices.',
  },
];


export const projects = [
  {image: weather,
    title: 'Weather App',
    description: 'A project where I solidified my skills in TypeScript and API communication while delivering a polished, modern user interface.',
    icon: [nextjs, tailwind, typescript],
    link: 'https://weather-app-one-tan-47.vercel.app/'
  },
  {image: tsuragi,
    title: 'Japanese Resturant',
    description: 'A personal project designed to improve my front-end workflow in React while crafting a sleek restaurant interface with a focus on real-world usability.',
    icon: [react, css],
    link: 'http://tsuragi-restaurant.vercel.app/'
  }
]