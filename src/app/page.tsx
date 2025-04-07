import SocialMedia from "@/components/SocialMedia";
import { Github, Twitter, Mail, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 max-w-2xl mx-auto px-4 py-16 md:py-24 md:pb-16">
      <section>
        <h1 className="text-3xl font-medium tracking-tight mb-4">Hey, I'm Ahmet</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
          London-based full-stack developer passionate about crafting exceptional digital experiences. I transform complex challenges into elegant, user-centric
          solutions.
        </p>

        <div className="flex items-center gap-5 mb-16">
          <SocialMedia />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-medium tracking-tight mb-6">Projects</h2>
        <ul className="space-y-10">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                    {tech}
                    {techIndex < project.technologies.length - 1 ? " /" : ""}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-medium tracking-tight mb-6">Experience</h2>
        <ul className="space-y-10">
          {experience.map((job, index) => (
            <li key={index}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium">
                  {job.role} @ {job.company}
                </h3>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                    {tech}
                    {techIndex < job.technologies.length - 1 ? " /" : ""}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-medium tracking-tight mb-6">Tools & Software</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-y-6 gap-x-4">
          {tools.map(({ logo, title }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative h-12 w-12 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                <Image src={logo} alt={`${title} logo`} fill className="object-contain drop-shadow-md" loading="eager" />
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{title}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="pt-6 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
        <div>ahmetkdev</div>
        <div>Built with Next.js</div>
      </footer>
    </main>
  );
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    link: "https://payload-ecommerce-app.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
    link: "https://ahmetkdev.dev/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Work Hours Tracker",
    description: "A collaborative task management application with real-time updates and team functionality.",
    link: "https://work-hours-tracker-chi.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Supabase"],
  },
  {
    title: "Payload CMS Appointment Scheduling Plugin",
    description: "A plugin for Payload CMS that allows users to schedule appointments.",
    link: "https://github.com/ahmetskilinc/payload-appointments-plugin/",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
  {
    title: "Payload CMS Media Grid View Plugin",
    description: "A plugin for Payload CMS that allows users to view media in a grid view.",
    link: "https://github.com/ahmetskilinc/payload-media-grid-view-plugin/",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
];

const experience = [
  {
    role: "Lead Engineer",
    company: "Zero Email Inc.",
    period: "Feb 2025 - Present",
    description: "Leading the frontend development team, implementing new features, and optimizing performance for a SaaS platform with over 50,000 users.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Google APIs"],
  },
  {
    role: "Self Employed",
    company: "Various Clients",
    period: "Mar 2024 - Present",
    description: "Worked with various clients on a wide range of projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "MongoDB", "PayloadCMS", "Google APIs"],
  },
  {
    role: "Front End Developer",
    company: "Executives Place",
    period: "Oct 2023 - Feb 2024",
    description: "Developed and maintained multiple features for the SaaS product, from performance improvements to new features.",
    technologies: ["Vue.js", "Node.js", "Laravel", "SQL"],
  },
  {
    role: "Full Stack Developer",
    company: "XLN Telecom (Daisy Comms)",
    period: "Nov 2020 - Aug 2023",
    description: "Developed and maintained the company brochure site to guide and increase sales.",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "SQL", "MongoDB", "C#", "ASP.NET", "WordPress"],
  },
];

const tools = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "NextJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    title: "VueJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    title: "NuxtJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "Typescript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    title: "Sass",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "TailwindCSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "GIT",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    title: "Sketch",
  },
];
