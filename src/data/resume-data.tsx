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
    "Software Engineer driving impactful solutions for complex geo-spatial and data-driven challenges. Skilled in Python, Go, and graph theory.",
  summary:
  "Software Engineer with 5 years of experience delivering end-to-end solutions. Specializes in tackling complex data challenges through graph theory and geo-spatial analysis, optimizing algorithms for data processing. Led projects that improved outcomes by 60%, impacting large-scale real-world applications. Skilled in cross-functional collaboration, mentoring, and leveraging cutting-edge technology to drive impactful results. Eager to build solutions that reach hundreds of thousands of customers.",
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
      badges: ["Python", "Go", "Data analysis", "Graph-theory", "Geospatial data", "CLIs"],
      title: "Software Engineer (Algorithms & Data)",
      logo: IntelLogo,
      start: "Aug, 2021",
      end: "Today",
      description:
        "Designing and developing data processing & mainpulation and optimizations algorithms for graph-based problems using Python & Go.",
      bullets: [
        "**Developed a RESTful API for processing large, structured datasets representing graph topologies,**leveraging a**microservices architecture in Go for distributed analysis and scoring.**Enabled cloud-based assessment of design quality, improving the detection of inefficiencies and optimizing performance in scalable, data-intensive environments.",
        "**Applied graph theory to model complex GEO-based problems, representing large datasets as graphs**and developing advanced path optimization algorithms.**Achieved over 60% improvement**in quality during critical project phases and delivered these capabilities as a**SaaS solution.**",
        "**Designed and implemented a versatile python library**capable of reading diverse inputs, including**large datasets and files**that represent CPU layouts for**analysis & research (Deep Learning and Machine Learning).**This library significantly enhanced data accessibility and improved the quality of insights for ongoing projects",
        "**Developed a CLI toolkit for processing large datasets delivered in various formats,**with a primary focus on data analysis and manipulation. Streamlined workflows by implementing efficient algorithms and optimized processing techniques,**resulting in an 80% reduction in runtimes**for large-scale procedures.",
        "**Modernized infrastructure by transitioning multiple projects to cloud environments, adopting internal cloud solutions, Kubernetes, and Docker.**Enhanced deployment flexibility and efficiency, leading to a**2x improvement in development time**while ensuring smooth scalability and streamlined workflows.",
        "**Mentored and trained new team members,** conducted code reviews and demonstrated effective communication and collaboration skills within a team of 8-10 developers."
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
        "**Integrated C/C++ code with SWIG, facilitating seamless interaction with Python**and enhancing the functionality of the existing C++ infrastructure for improved runtime optimization.",
        "**Created a GUI application using PyQt5 that streamlined the internal production release process,**achieving a **90% reduction in release time through multi-processing and distributed computing techniques.**",
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
    "Kubernetes",
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
