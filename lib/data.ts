export const profile = {
  name: "Abdullah Ahsen",
  role: "Full Stack Web Dev",
  tagline:
    "Full-stack web developer specializing in AI-integrated SaaS and rapid MVPs.",
  email: "abdullahahsen05@gmail.com",
  github: "https://github.com/abdullahahsen05",
  linkedin:
    "https://www.linkedin.com/in/muhammad-abdullah-ahsen-4a0554219/",
  availability: "Open to freelance & full-time",
  roles: [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "AI Integration Engineer",
    "SaaS & MVP Builder",
  ],
  about:
    "I'm a full-stack web developer focused on shipping production-ready AI products. Over the last few years I've built 15+ projects and deployed 10+ of them — spanning SaaS dashboards, fintech UIs, AI-driven wellness platforms, and more. I work end-to-end: design, build, deploy.",
  heroStats: [
    { value: "15+", label: "Projects Built" },
    { value: "10+", label: "Deployed Products" },
    { value: "AI-First", label: "Engineering" },
    { value: "Remote", label: "Worldwide" },
  ],
  stats: [
    { value: "15+", label: "Projects built" },
    { value: "10+", label: "Deployed products" },
    { value: "AI-first", label: "Engineering approach" },
    { value: "Worldwide", label: "Available remote" },
  ],
};

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Firebase",
  "Tailwind CSS",
  "OpenAI API",
  "Gemini API",
  "LangChain",
  "AI Agents",
  "REST APIs",
  "Prisma",
  "Framer Motion",
  "TanStack Query",
  "Vercel",
  "Git",
  "shadcn/ui",
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma", "TanStack Query"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  },
  {
    label: "AI & LLMs",
    skills: ["OpenAI API", "Gemini API", "LangChain", "AI Agents", "AI Integration"],
  },
];

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  live: string;
  github: string;
  accent: "blue" | "purple" | "cyan";
  screenshot: string;
};

export const projects: Project[] = [
  {
    name: "HireMind AI",
    description: "AI-powered HR SaaS dashboard for modern hiring teams",
    longDescription:
      "Comprehensive HR analytics dashboard combining candidate insights, hiring metrics, and AI-driven recommendations into a single workspace.",
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Framer Motion", "Recharts"],
    live: "https://hiremind-jade.vercel.app/dashboard",
    github: "https://github.com/abdullahahsen05/hiremind-ai",
    accent: "blue",
    screenshot: "/images/hiremind.png",
  },
  {
    name: "Paytech",
    description: "Fintech crypto wallet UI with modern transaction flows",
    longDescription:
      "Sleek cryptocurrency wallet interface with multi-asset support, transaction history, and a polished portfolio overview built around modern fintech UX patterns.",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    live: "https://paytech-two.vercel.app",
    github: "https://github.com/abdullahahsen05/paytech",
    accent: "purple",
    screenshot: "/images/paytech.png",
  },
  {
    name: "NourishIQ",
    description: "AI-driven nutrition and wellness tracking dashboard",
    longDescription:
      "Wellness platform that tracks meals, hydration, sleep, and exercise — surfacing AI-powered, data-driven recommendations to help users improve daily habits.",
    stack: ["React 18", "Vite", "TypeScript", "Tailwind", "shadcn/ui", "TanStack Query"],
    live: "https://nourish-iq-green.vercel.app",
    github: "https://github.com/abdullahahsen05/NourishIQ",
    accent: "cyan",
    screenshot: "/images/nourishiq.png",
  },
];

export const services = [
  {
    title: "SaaS MVP Development",
    description:
      "From idea to deployed product. Full-stack builds optimized for fast iteration and real users.",
  },
  {
    title: "AI Integration",
    description:
      "LLM features, intelligent chatbots, and AI-powered workflows wired into your existing product.",
  },
  {
    title: "Full-Stack Consulting",
    description:
      "Architecture reviews, code audits, and engineering support for teams shipping ambitious products.",
  },
];
