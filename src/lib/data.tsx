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
  CertificationDetails,
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
    label: 'Certifications',
    href: '#certifications',
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
    position: 'Data Scientist',
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 6),
    currentlyWorkHere: true,
    job_summary:'As a Graduate Data Scientist at Rebel Energy Labs, I apply my expertise in AI and machine learning to develop innovative solutions that drive operational efficiency and enhance customer experience. My role involves building advanced data models, automating processes, and delivering actionable insights to support strategic decision-making.',
    summary: [
      'Computer Vision for Conservation:  Partnered with Rebel Restoration to develop a fish population monitoring system from underwater footage as part of a seagrass rewilding initiative. Trained object detection models (YOLOv8/YOLOv11) integrated with ByteTrack to explore automated species identification and tracking. The project demonstrated potential applications of computer vision in biodiversity restoration.',
      'Exception Management System: Designed and deployed a Django-based enterprise exception & data quality platform that consolidated billing errors, customer data mismatches, and operational anomalies into a real-time dashboard (TailwindCSS, Plotly). Integrated 40+ SQL-driven data quality tests, enabling closure of 67,000+ quality issues within 2 months and giving operations instant visibility to fix root causes. Post-launch, open exceptions fell by 20% through improved transparency and ownership.',
      'Business-Facing Data Analysis: Collaborated with the Supply team to deliver ad-hoc analyses and reporting pipelines via SQL and PySpark, working within Confluence (documentation) and Jira (task management). Produced actionable insights supporting operational decisions, including validation work on the commission model, and strengthened engagement between data and business teams.',
      'Payment Allocation Model: Designed a framework to automate Rebel’s manual bulk billing payment allocation process, reducing reconciliation time and enhancing financial accuracy. Delivered a proposal to the Finance team outlining how SQL-driven rules could streamline allocation workflows, providing a blueprint for future implementation.',
      'Regulations LLM: Built a prototype AI compliance assistant using Llama 3, LangChain, and retrieval-augmented generation (RAG), presented through a Streamlit web app. The system let non-specialists, including the Legal team, ask natural language questions about Ofgem regulations and instantly receive clear answers. This proof-of-concept demonstrated how advanced AI tools can simplify access to complex regulatory information across the business.',
      'Anomaly Detection Research: Conducted research and implemented techniques for identifying irregularities in 19 million meter readings and billing transactions, performing benchmarking on Isolation Forest, Local Outlier Factor (LOF), autoencoders, and clustering methodologies. Applied an ensemble approach for anomaly detection, highlighting LOF as a particularly effective method for identifying unusual consumption patterns and operational errors in large-scale energy data.',
      'Commission model:   Conducted a forensic reconstruction of Rebel’s commission framework during administration proceedings. Applied SQL and Python to rebuild receivables models, collaborating within a four-person data team to support external administrators. The analysis uncovered a £6M+ discrepancy, providing critical evidence of system gaps and informing creditor reporting.',
    ],
  },

  {
    logo: LogoCheckLens,
    logoAlt: 'CheckLens logo',
    position: 'Computer Vision Intern',
    startDate: new Date(2024, 3),
    endDate: new Date(2024, 6),
    currentlyWorkHere: false,
    job_summary:'Worked within the Computer Vision team on real-time self-checkout systems, focusing on model training, data annotation, and evaluation to support object detection research.',
    summary: [
      'Trained and evaluated YOLOv8 models on video frames from self-checkout systems, combining pre-labelled data with manually annotated items to improve model understanding.',
      'Conducted firsthand data annotation and model performance assessment, gaining practical experience with object detection workflows and ML evaluation techniques.',
    ],
  },

  {
    logo: LogoSoftwire,
    logoAlt: 'Sofwire logo',
    position: 'Web Technology Intern',
    startDate: new Date(2019, 9),
    endDate: new Date(2019, 9),
    currentlyWorkHere: false,
    job_summary:'Worked within the web development team to build a prototype interactive quiz application, focusing on front-end integration and API-based automated grading.',
    summary: [
      'Developed a dynamic quiz interface using HTML, CSS, and JavaScript, allowing users to answer questions and receive immediate feedback.',
      'Integrated API calls to load questions and automatically grade responses, enabling a fully functional prototype for testing and demonstration.',
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

export const CERTIFICATIONS: CertificationDetails[] = [
  {
    name: 'MSc Artificial Intelligence (Distinction)',
    issuer: 'Queen Mary University of London',
    date: new Date(2024, 8),
    // credentialId: 'AI-2024-001',
    // url: 'https://example.com/verify',
    // logo: LogoUniversityLondon,
  },
  {
    name: 'BSc Computer Science (First Class Honours)',
    issuer: 'Queen Mary University of London',
    date: new Date(2023, 5),
    // credentialId: 'CS-2023-001',
    // url: 'https://example.com/verify',
    // logo: LogoUniversity,
  },
  {
    name: 'Python Django, the Practical Guide',
    issuer: 'Udemy',
    date: new Date(2024, 12),
    // credentialId: 'UDEMY-DJANGO-001',
    // url: 'https://www.udemy.com/certificate/example',
    // logo: LogoUdemy,
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: new Date(2025, 6),
    // credentialId: 'COURSERA-ML-001',
    // url: 'https://www.coursera.org/account/accomplishments/specialization/example',
    // logo: LogoCoursera,
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera',
    date: new Date(2025, 7),
    // credentialId: 'COURSERA-DL-001',
    // url: 'https://www.coursera.org/account/accomplishments/specialization/example',
    // logo: LogoCoursera,
  },
  // Add more certifications as needed
];
