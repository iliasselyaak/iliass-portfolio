import { Check, Github, Link, Linkedin } from 'lucide-react';
import { Kaggle } from '@/components/icons/Kaggle';

import LogoPython from '/public/images/logos/icon-python.svg';
import LogoHtml from '/public/images/logos/icon-html.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoDjango from '/public/images/logos/icon-django.svg';
import LogoPytorch from '/public/images/logos/icon-pytorch.svg';
import LogoTensorFlow from '/public/images/logos/icon-tensorflow.svg';
import LogoKeras from '/public/images/logos/icon-keras.svg';
import LogoMySQL from '/public/images/logos/icon-mysql.svg';
import LogoDBT from '/public/images/logos/icon-dbt.svg';
import LogoAzure from '/public/images/logos/icon-azure.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoCheckLens from '/public/images/logos/logo-checklens.svg';
import LogoRebelEnergy from '/public/images/logos/logo-rebelenergy.svg';
import LogoSoftwire from '/public/images/logos/logo-softwire.svg';

import ProjectFootballCV from '/public/images/project-footballCV.png';
import ProjectVisionbuilder from '/public/images/project-visionbuilder.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';
import { url } from 'inspector';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/iliasselyaak',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/iliasselyaak',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/iliass-elyaakoubi-benssaleh-2840561b4/',
  },
  {
    icon: Kaggle,
    url: 'https://www.kaggle.com/iliasselyaakoubi',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://docs.python.org/3/',
  },
  {
    label: 'HTML',
    logo: LogoHtml,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: ' Django',
    logo: LogoDjango,
    url: 'https://docs.djangoproject.com/en/5.2/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Pytorch',
    logo: LogoPytorch,
    url: 'https://pytorch.org/docs/stable/index.html',
  },
  {
    label: 'TensorFlow',
    logo: LogoTensorFlow,
    url: 'https://www.tensorflow.org/api_docs/python/tf',
  },
  {
    label: 'Keras',
    logo: LogoKeras,
    url: 'https://keras.io/api/#keras-3-api-documentation',
  },
  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://dev.mysql.com/doc/',
  },
  {
    label: 'DBT',
    logo: LogoDBT,
    url: 'https://docs.getdbt.com/docs/build/documentation',
  },
  {
    label: 'Azure DevOps',
    logo: LogoAzure,
    url: 'https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [

  {
    logo: LogoRebelEnergy,
    logoAlt: 'Rebel Energy logo',
    position: 'Graduate Data Scientist',
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 6),
    currentlyWorkHere: true,
    summary: [
      'Developed a Fish Counter for a seagrass re-wilding charity using YOLOv8/11 and ByteTrack, enabling accurate tracking of fish populations in restoration projects.',
      'Build a full-stack exception management system using Django, TailwindCSS, Plotly, and Polars, reducing 20% of exceptions since release.',
      'Performed business-facing data analysis using SQL and PySpark, engaging in requirement gathering to extract insights and optimize workflows based on stakeholder needs.',
      'Designed and proposed a payment allocation model to improve the efficiency and accuracy of the business\'s bulk billing process, ensuring smoother payment handling and better financial management.',
      'Managed and mentored data analysis interns, providing guidance and technical QA.',
      'Conducted anomaly detection research, evaluating multiple techniques such as Isolation Forest, Autoencoders, Local Outlier Factor (LOF), and Clustering to enhance data-driven decision-making.',
      'Engineered RegulationsLLM, an AI compliance assistant using LangChain, RAG, and prompt engineering that extracts insights from Ofgem regulations through a Streamlit interface, enabling non-regulatory teams to easily understand compliance requirements.',
    ],
  },

  {
    logo: LogoCheckLens,
    logoAlt: 'CheckLens logo',
    position: 'Computer Vision trainee',
    startDate: new Date(2024, 3),
    endDate: new Date(2024, 6),
    currentlyWorkHere: false,
    summary: [
      'Collaborated with the head of the Computer Vision team, gaining hands-on experience in object detection for self-checkout systems.',
      'Applied deep learning techniques to develop a model capable of accurately detecting items in real-time.',
    ],
  },

  {
    logo: LogoSoftwire,
    logoAlt: 'Sofwire logo',
    position: 'Web Technology Intern',
    startDate: new Date(2019, 9),
    endDate: new Date(2019, 9),
    currentlyWorkHere: false,
    summary: [
      'Shadowed employees in the web development division and gained an insight into project management and teamwork with other employees.',
      'Developed a quiz website using HTML, CSS, and JS. The website extracted data from an API and automatically displays the quiz results.',
    ],
  },

  
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Bundesliga Football player detection',
    description:
      'A real-time football player detection and tracking system using YOLOv8, combined with advanced tracking  algorithms such as ByteTrack and DeepSORT. The system ensures accurate player identification and continuous tracking across frames, enabling  detailed performance analysis and providing valuable tactical insights for match evaluation.',
    url: 'https://github.com/iliasselyaak/football_analysis-main',
    previewImage: ProjectFootballCV,
    technologies: [
      'Python',
      'Ultralytics - Yolov8',
      'Supervision',
      'OpenCV',
      'NumPy',
      'Matplotlib',
      'Pandas',
    ],
  },
  {
    name: 'VisionBuilder',
    description:
      'A user-friendly drag-and-drop website builder designed for developers. It allows seamless integration of pre-existing code into the  design interface, enabling real-time code viewing and editing. The streamlined workflow ensures easy export of completed designs as HTML and CSS files, blending the complexity of coding with the simplicity of visual design. ',
    url: 'https://github.com/iliasselyaak/finalYearProject',
    previewImage: ProjectVisionbuilder,
    technologies: [
      'Python',
      'Django',
      'Django REST',
      'Vue',
      'TailwindCSS',
    ],
  },
  
];
/*
export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  
];*/
