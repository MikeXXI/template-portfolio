import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import temoignageImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TemoignageSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio de Mickaël ',
  description: "portfolio de Mickaël DJEGHERIF",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Temoignages: 'temoignages',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mickaël DJEGHERIF`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je suis actuellement Mentor Informatique à <strong className="text-stone-100">Sophia Ynov Campus</strong>, et suis
        le cursus de bachelor 3 Informatique option <strong className="text-stone-100">développement</strong>.
        <p>Passionné et déterminé. Après une expérience de développeur informatique, j’ai choisi l'alternance pour approfondir mes compétences dans le domaine.</p>
        <p>Toujours à la recherche de nouvelles technologies et de nouveaux projets pour nourrir ma soif de savoir.
          J’aime particulièrement travailler sur des projets <strong className="text-stone-100">complexes</strong> et me challengers pour sans cesse me <strong className="text-stone-100">dépasser</strong> et me <strong className="text-stone-100">perfectionner</strong>.</p>


      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <p>En dehors de l'informatique, je suis également un grand sportif et un passionné <strong className="text-stone-100">d'arts martiaux</strong>.
          Je passe une grande partie de mon temps libre à pratiquer diverses activités sportives.
          Je considère que la pratique sportive est essentielle pour maintenir un équilibre entre le <strong className="text-stone-100">corps</strong> et <strong className="text-stone-100">l'esprit</strong>, ce qui me permet de rester concentré et motivé dans mes projets.
        </p>
      </p>
    </>
  ),
  actions: [
    {
      href: '../data/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section 
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    { label: 'Ville', text: 'Mougins', Icon: MapIcon },
    { label: 'Age', text: '31', Icon: CalendarIcon },
    { label: 'Nationalité', text: 'Français', Icon: FlagIcon },
    { label: 'Intérêt', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon },
    { label: 'Etudes', text: 'Sophia Ynov Campus', Icon: AcademicCapIcon },
    { label: 'Entreprise', text: 'Sophia Ynov Campus', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'Français',
        level: 10,
      },
      {
        name: 'Anglais',
        level: 3,
      }
    ],
  },
  {
    name: 'Développement Frontend',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Html',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'JS',
        level: 7,
      }
    ],
  },
  {
    name: 'Développement Backend',
    skills: [
      {
        name: 'Symfony',
        level: 5,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Golang',
        level: 5,
      },
    ],
  },
  {
    name: 'Autre',
    skills: [
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'API',
        level: 6,
      },
      {
        name: 'JAVA',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pokedex',
    description: 'Voici une application réalisé en React dans le cadre d\'un projet au sein de Ynov.',
    url: 'https://pokedex-mikexxi.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Funko Pop Shop',
    description: 'Un shop réalisé en angular !',
    url: 'https://angular-projet.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Mario Portfolio',
    description: 'Voici une ébauche d\'un projet personnel réalisé en JS vanilla, dans le but de crée un mini jeux à travers un portfolio .',
    url: 'https://mikexxi.me',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2017',
    location: 'UFIP',
    title: 'Brevet de technicien supérieur - Services informatiques aux organisations',
    content: <p></p>,
  },
  {
    date: 'Actuellement',
    location: 'Sophia Ynov Campus',
    title: 'Bachelor 3 - Développement',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Aujourd\'hui',
    location: 'Sophia Ynov Campus',
    title: 'Mentor informatique',
    content: (
      <p>
        En charge des bachelors 1 et 2 dans l'apprentissage et la compréhension des
        langages informatiques. En charge de la correction des projets et de la
        mise en place des projets de groupe.
      </p>
    ),
  },
  {
    date: '2019 - 2022',
    location: 'DSO',
    title: 'Développeur informatique',
    content: (
      <p>
        J'ai pu travailler sur plusieurs projets, l'intranet de la société conernant le materiels informatiques, sur la création d'un bot de signature ou encore
        sur l'un des sites web pour la gestion des documents clients.
      </p>
    ),
  },
];

/**
 * Temoignage section
 */
export const temoignage: TemoignageSection = {
  imageSrc: temoignageImage,
  temoignages: [
    {
      name: 'John Doe',
      text: 'Mickaël est un développeur très compétent, il a su mener à bien le projet de création d\'un site web pour mon entreprise. Il a su répondre à toutes mes attentes et à toutes mes questions. Je le recommande vivement !',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Merci Mickaël pour ton travail sur le site web de mon entreprise. Tu as su répondre à toutes mes attentes et à toutes mes questions. Je te recommande vivement !',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Quelqu\'un d\'autre',
      text: 'Je suis fier de recommander Mickaël en tant que développeur compétent et talentueux. Pendant son temps chez nous, il a été responsable de plusieurs projets de développement logiciel, qui ont tous été réalisés avec succès.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactez-moi',
  description: 'L\'endroit parfait pour me joindre !',
  items: [
    {
      type: ContactType.Email,
      text: 'mike.dje@outlook.fr',
      href: 'mailto:mike.dje@outlook.fr',
    },
    {
      type: ContactType.Location,
      text: 'Mougins',
      href: 'https://goo.gl/maps/4iZvZDHNrJfzbsx47',
    },
    {
      type: ContactType.Instagram,
      text: '@k2v2.0',
      href: 'https://www.instagram.com/k2v2.0/',
    },
    {
      type: ContactType.Github,
      text: 'mikexxi',
      href: 'https://github.com/mikexxi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/mikexxi' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21632474/mikexxi' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mickael-djegherif/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/mikexxix' },
];
