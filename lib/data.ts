import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Smartphone,
  Globe,
  Sparkles,
  BarChart3,
  Brain,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Anurodh Kumar",
  firstName: "Anurodh",
  role: "Python Full Stack Developer",
  subRole: "Django · React · Machine Learning",
  tagline: "Building scalable web apps with clean code & smart ideas.",
  bio: "Reliable and committed Computer Science Engineering student with hands-on experience in Python Full Stack development using Django. Skilled in building efficient and scalable web applications. Passionate about learning new technologies, writing clean, maintainable code and working on real-time projects.",
  location: "Delhi, India",
  email: "anurodhkumar843320@gmail.com",
  phone: "+91 91358 95389",
  resume: "/resume.pdf",
  avatar: "/anurodh.png",
  available: true,
  social: {
    github: "https://github.com/Anurodh9550",
    linkedin: "https://linkedin.com/in/anurodh-kumar",
    leetcode: "https://leetcode.com/anurodhkumar",
    email: "mailto:anurodhkumar843320@gmail.com",
  },
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "4", label: "Work Experiences" },
  { value: "5+", label: "Certifications" },
  { value: "7.4", label: "CGPA" },
];

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "SQL"],
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Backend & Frameworks",
    skills: ["Django", "Django REST", "Flask", "Node.js", "REST APIs"],
    color: "from-violet-400 to-fuchsia-500",
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind"],
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Database,
    title: "Databases & Auth",
    skills: ["MySQL", "Firebase Realtime DB", "Firebase Auth", "PostgreSQL"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Brain,
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Machine Learning", "Power BI", "Excel"],
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "AWS Basics", "Postman", "DSA"],
    color: "from-emerald-400 to-teal-500",
  },
];

export const techStack = [
  "Python",
  "Django",
  "React.js",
  "Next.js",
  "Flask",
  "Django REST",
  "Firebase",
  "MySQL",
  "JavaScript",
  "C++",
  "Pandas",
  "NumPy",
  "Machine Learning",
  "Power BI",
  "Git",
  "REST APIs",
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  github: string;
  image?: string;
  featured?: boolean;
  category?: string;
  period?: string;
}

export const projects: Project[] = [
  {
    title: "Real-Time Attendance System",
    description:
      "Employee/HR focused attendance management built with Django + Firebase. Features automated web-based marking, secure data storage, real-time dashboard, and accurate reporting for organizations.",
    tags: ["Django", "Firebase", "Python", "Realtime DB"],
    github: "https://github.com/Anurodh9550/attendance_system",
    href: "#",
    featured: true,
    category: "Web App",
    period: "Sep 2025 – Dec 2025",
  },
  {
    title: "Smart Air Pollution Monitoring",
    description:
      "IoT-based AQI monitoring system using ESP32 sensors and GPS. Trained ML models to predict AQI, exposed a Flask API for real-time data, and visualized pollution levels on Google Maps inside a Flutter app.",
    tags: ["IoT", "ESP32", "Flask", "ML", "Flutter"],
    github: "https://github.com/Anurodh9550",
    href: "#",
    featured: true,
    category: "IoT + ML",
    period: "Jan 2024 – Apr 2024",
  },
  {
    title: "Real-Time Bus Tracking System",
    description:
      "Android app for live bus tracking using Firebase and GPS, integrated with Google Maps. Provides real-time route visualization, seamless data updates, and push notifications for commuters.",
    tags: ["Android", "Firebase", "GPS", "Google Maps"],
    github: "https://github.com/Anurodh9550",
    href: "#",
    category: "Mobile",
    period: "Aug 2023 – Nov 2023",
  },
  {
    title: "Gau Seva Platform",
    description:
      "Full-stack platform for Rashtriya Gau Seva Sangh — member management, donations, events, and admin dashboard. Built with a Django backend and modern web frontend.",
    tags: ["Django", "DRF", "React", "MySQL"],
    github: "https://github.com/Anurodh9550/gau-seva",
    href: "#",
    category: "Full Stack",
  },
  {
    title: "Kansa Collective — E-commerce",
    description:
      "E-commerce experience for an artisan brand with product catalog, cart, checkout flow, and CMS. Focused on smooth UX and clean storefront design.",
    tags: ["Next.js", "React", "API", "Stripe"],
    github: "https://github.com/Anurodh9550/Kansa-Collective",
    href: "#",
    category: "E-commerce",
  },
  {
    title: "Billing & Invoice App",
    description:
      "Lightweight billing system to generate invoices, manage customers, track payments, and export reports — built for small businesses and freelancers.",
    tags: ["Django", "MySQL", "PDF", "Reports"],
    github: "https://github.com/Anurodh9550/billing-app",
    href: "#",
    category: "Business App",
  },
  {
    title: "Counselling Platform",
    description:
      "Online counselling and admission management portal with student profiles, slot booking, and admin controls — streamlining the counselling workflow.",
    tags: ["Django", "Auth", "Dashboard"],
    github: "https://github.com/Anurodh9550/Counslling",
    href: "#",
    category: "EdTech",
  },
  {
    title: "Admin Panel Suite",
    description:
      "Reusable admin panel with role-based access, CRUD modules, charts, and analytics — ready to plug into any Django backend.",
    tags: ["Django", "Charts", "RBAC"],
    github: "https://github.com/Anurodh9550/admin-panel",
    href: "#",
    category: "Internal Tool",
  },
];

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Kalpna Traders",
    location: "Delhi, India",
    period: "2026 — Present",
    description:
      "Building and maintaining the company's full-stack web platform — owning everything from database schema to UI. Shipping features that directly impact day-to-day business operations.",
    highlights: [
      "Architected and deployed a full-stack web platform using Django and React for real business operations.",
      "Designed REST APIs, authentication and role-based admin dashboards used by the team daily.",
      "Implemented billing, inventory and reporting modules with focus on performance and reliability.",
    ],
    tags: ["Django", "React", "Next.js", "REST API", "MySQL"],
  },
  {
    role: "Full Stack Developer",
    company: "BlackOS Software",
    location: "Remote",
    period: "2 months · 2025",
    description:
      "Worked end-to-end on client projects as a full-stack developer — translating requirements into production-ready features across the stack.",
    highlights: [
      "Delivered full-stack features using Django on the backend and React on the frontend.",
      "Built REST APIs, integrated auth flows, and shipped responsive UIs to client codebases.",
      "Collaborated with the team via Git/GitHub on the BlackOSSoftware/pioneer project.",
    ],
    tags: ["Django", "React", "REST API", "Git", "Full Stack"],
  },
  {
    role: "Django Intern",
    company: "Indie Infotech Pvt. Ltd.",
    location: "Indore, MP",
    period: "Jul 2024 — Nov 2024",
    description:
      "Worked on production Django applications — designing modular, reusable backend components that the wider team could ship features on top of.",
    highlights: [
      "Built modular & reusable Django components, boosting development efficiency by 40%.",
      "Wrote clean REST APIs and integrated authentication & database layers.",
      "Collaborated with senior devs on code reviews and feature rollouts.",
    ],
    tags: ["Django", "Python", "REST API", "MySQL"],
  },
  {
    role: "Web Development Intern",
    company: "InternsFlow Pvt. Ltd.",
    location: "Remote",
    period: "Jul 2023 — Aug 2023",
    description:
      "Designed and deployed responsive web applications, focusing on dynamic UIs and seamless database integration.",
    highlights: [
      "Built responsive web pages with HTML, CSS, JavaScript, and Django.",
      "Integrated MySQL and Firebase to improve data management and engagement.",
      "Optimised application performance and improved page load times.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Django", "Firebase"],
  },
];

export interface Education {
  degree: string;
  institute: string;
  location?: string;
  period: string;
  score: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    institute: "Malwa Institute of Technology",
    location: "Indore, M.P.",
    period: "Aug 2021 — May 2025",
    score: "CGPA 7.4",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "L.C.S. College",
    location: "Darbhanga, Bihar",
    period: "Jul 2018 — Jun 2020",
    score: "74%",
  },
  {
    degree: "Secondary (10th)",
    institute: "S.L.N.S.U.M.S.",
    location: "Charout, Bihar",
    period: "Jul 2017 — Jun 2018",
    score: "Passed",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  period?: string;
  icon: LucideIcon;
}

export const certificates: Certificate[] = [
  {
    title: "Data Processing & Business Analysis",
    issuer: "Anudeep Foundation × Axis Bank",
    period: "Mar 2023 — Apr 2023",
    icon: BarChart3,
  },
  {
    title: "Cloud Computing",
    issuer: "IIT Kharagpur — Prof. Hemant Banerji",
    period: "Aug 2023 — Nov 2023",
    icon: Cloud,
  },
  {
    title: "Full Stack Java Development",
    issuer: "Udemy — Chand Sheikh",
    icon: Code2,
  },
  {
    title: "Android Studio App Development",
    issuer: "Udemy",
    period: "Dec 2022 — Jan 2023",
    icon: Smartphone,
  },
  {
    title: "Introduction to Cloud",
    issuer: "AWS",
    icon: Cloud,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Self-Practice · LeetCode",
    icon: Cpu,
  },
];

export const services = [
  {
    icon: Globe,
    title: "Full Stack Web Apps",
    description:
      "Production-ready Django + React apps with REST APIs, authentication and clean dashboards.",
  },
  {
    icon: Cpu,
    title: "Django Backends",
    description:
      "Modular, reusable Django modules and DRF APIs that scale with your product.",
  },
  {
    icon: Sparkles,
    title: "Realtime Features",
    description:
      "Firebase, WebSockets & GPS-powered features — attendance, tracking and live dashboards.",
  },
  {
    icon: BarChart3,
    title: "Data & Reports",
    description:
      "Pandas pipelines, Power BI reports, and ML-powered insights for business decisions.",
  },
];
