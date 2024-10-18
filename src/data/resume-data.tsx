import {
  IntelLogo,
  OpenULogo,
} from "@/images/logos";
import {EMPLOYMENT_TYPES} from "@/app/constants"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Matan Cohen",
  initials: "MC",
  location: "Earth",
  locationLink: null,
  about:
    "Algorithms & Backend engineer, focused on building optimized solutions for difficult problems!",
  summary:
  "Results-driven Software Engineer with experience in algorithm development and backend systems. \
Specializes in designing and implementing optimization algorithms and leading research projects, mainly in the field of Graphs. \
Experienced in mentoring teams and improving system performance. Committed to leveraging cutting-edge technology to address real-world challenges and deliver impactful solutions. \
Taking ideas from zero to production,  \
**GOT A CHALLENGE? I'M IN!💪🏻**",
  avatarUrl: "https://avatars.githubusercontent.com/u/34000779?s=400&u=9ac2e39dcb216332c2890f5a0480724ad9dfdae4&v=4",
  personalWebsiteUrl: "https://comatan96.github.io",
  contact: {
    email: "comatan96@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/comatan96",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matancoh3n/",
        icon: LinkedInIcon,
      },

    ],
  },
  education: [
    {
      school: "The Open University of Israel",
      degree: "Bachelor's Degree in Computer Science",
      logo: OpenULogo,
      GPA: "90",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Intel",
      type: EMPLOYMENT_TYPES.FULL_TIME,
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: ["Python", "Go", "Graph-theory", "Geospatial data"],
      title: "Algorithms & Backend engineer",
      logo: IntelLogo,
      start: "Aug, 2021",
      end: "Today",
      description:
        "Designing and developing optimizations algorithms for graph-based problems using Python & Go.",
      bullets: [
        "**Applied graph theory to model complex GEO-based problems,** representing large datasets as **3D graphs** and developing advanced path optimization algorithms. **Achieved over 60% improvement** in quality during critical project phases and delivered these capabilities as a SaaS solution.",
        "**Architected and implemented a scalable microservices system in Go for analyzing and optimizing geometric-based graph topologies.** Enhanced the ability to detect inefficiencies and improve performance in real-time, enabling high accuracy and scalability across large-scale applications.",
        "**Directed the design and implementation of a custom ORM (Object-Relations Mapping) in Python** for the efficient processing, analysis, and visualization of large datasets. Enhanced deep-learning research quality significantly and reduced CAD design **optimization time by 30%.**",
        "**Developed CLI applications using Golang and Python,** creating efficient tools that **improved workflows by 60%** and boosted productivity in addressing operational tasks.",
        "**Modernized infrastructure by adopting internal cloud solutions and Docker,** enhancing deployment flexibility and efficiency, and **achieving a 2x improvement** in development time.",
        "**Mentored and trained new team members,** conducted code reviews and demonstrated effective communication and collaboration skills within a team of 10-15 developers."
      ]
    },
    {
      company: "Intel",
      type: EMPLOYMENT_TYPES.PART_TIME,
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: ["Python", "tcl", "PyQt", "GUI", "SWIG"],
      title: "Software Engineering Student",
      logo: IntelLogo,
      start: "Aug, 2019",
      end: "Aug, 2021",
      description:
        "Wrapping C++ code for performance optimization with Python & improving development procedures.",
      bullets: [
        "**Wrapped C/C++ code with SWIG, enabling seamless integration with Python** and extending the functionality of the existing C++ infrastructure for runtime optimization.",
        "**Developed a GUI application (PyQt5)** that reduced the production release process time by 90% using multi-processing and distirbuted computing power.",
      ]
    },
    {
      company: "The Open University of Israel",
      type: EMPLOYMENT_TYPES.PART_TIME,
      link: "https://www.openu.ac.il/",
      badges: ["Machine-Learning"],
      title: "Teaching Assistant",
      logo: OpenULogo,
      start: "Aug, 2022",
      end: "Jan, 2023",
      description:
        "TA at Introduction to Machine Learning course",
      bullets: [
        "Held regular office hours to assist students with their questions and enhance their understanding of the course material.",
        "Reviewed and assessed student assignments.",
      ]
    },

  ],
  skills: [
    "Python",
    "Go",
    "Graph-Theory",
    "Path optimization",
    "git",
    "Linux",
    "Windows",
    "Docker",
    "Data analysis",
    "GeoSpatial",
    "R-Tree",
    "Multi-processing",
    "REST-api",
    "gRPC",
  ],

  libraries: [
    "PyQt",
    "pandas",
    "numpy",
    "matplotlib",
    "scikit-learn",
    "pytorch",
    "fast-api",
    "streamlit",
    "Echo"
  ],

  languages: [
    "Hebrew",
    "English",
    "Japanese",
  ],

  projects: [
    {
      title: "B.Sc final project",
      techStack: [
        "Python",
        "HuggingFace",
        "Pytorch",
        "scikit-learn",
        "pandas",
        "numpy",
      ],
      description:
        "NLP model for read-accident classification based on CBS, “MADA” & news-sites",
      logo: null,
      link: {
        label: "github.com",
        href: "",
      },
    },
   
  ],
} as const;
