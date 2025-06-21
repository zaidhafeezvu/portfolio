"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-6">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
              <span>Hey, I&apos;m Ahmet</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
              Software Engineer from London. Open to work. Contact me below. Currently building{" "}
              <a
                href="https://0.email"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                onClick={() => track("zero_email_clicked")}
              >
                Zero
              </a>{" "}
              and{" "}
              <a
                href="https://oss.now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                onClick={() => track("oss.now_clicked")}
              >
                oss.now
              </a>
              .
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <Tabs defaultValue="projects">
        <AnimateIn variant="fadeUp" delay={0.2}>
          <TabsList className="mb-4 border-none bg-transparent p-0 -ml-[8px]">
            <TabsTrigger value="projects" className="!bg-transparent !border-none !shadow-none">
              Projects
            </TabsTrigger>
            <TabsTrigger value="experience" className="!bg-transparent !border-none !shadow-none">
              Experience
            </TabsTrigger>
            <TabsTrigger value="tools" className="!bg-transparent !border-none !shadow-none">
              Tools
            </TabsTrigger>
          </TabsList>
        </AnimateIn>

        <TabsContent value="projects">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {projects.map((project, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">{project.title}</h3>
                            <div className="flex flex-row gap-2">
                              {project.github ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_github_clicked`)}
                                >
                                  GitHub <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() => track(`${project.title}_clicked`)}
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                            </div>
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
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>

        <TabsContent value="experience">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {experience.map((job, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">
                              {job.role} {job.role.toLowerCase().includes("freelance") ? "" : "at"} {job.company}
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
                      </AnimateIn>
                    );
                  })}
                </ul>
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
        <TabsContent value="tools">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-center">
                {tools.map(({ logo, title }, index) => (
                  <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Image src={logo} alt={`${title} logo`} fill className="object-contain drop-shadow-md" loading="eager" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
      </Tabs>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>ahmet.studio</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "oss.now",
    description: "A place to share your open source projects and find new ones.",
    link: "https://oss.now",
    github: "https://github.com/ahmetskilinc/ossdotnow",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Payload CMS", "Postgres"],
  },
  {
    title: "UI Registry",
    description: "A simple UI registry for components and blocks using the shadcn api.",
    link: "https://l.ahmet.studio/ui",
    github: "https://l.ahmet.studio/gh",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    link: "https://payload-ecommerce-app.vercel.app/",
    github: "https://github.com/ahmetskilinc/payload-ecommerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
    link: "https://dub.sh/ahmet/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Work Hours Tracker - web",
    description: "A collaborative task management web application with real-time updates and team functionality.",
    link: "https://work-hours-tracker-chi.vercel.app/",
    github: "https://github.com/ahmetskilinc/work-hours-web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Sockets", "Supabase"],
  },
  {
    title: "Work Hours Tracker - mobile",
    description: "A collaborative task management mobile application with real-time updates and team functionality.",
    github: "https://github.com/ahmetskilinc/work-hours-app",
    technologies: ["Expo", "React Native", "TypeScript", "Web Sockets", "Supabase"],
  },
  {
    title: "Payload CMS Appointment Scheduling Plugin",
    description: "A plugin for Payload CMS that allows users to schedule appointments.",
    github: "https://github.com/ahmetskilinc/payload-appointments-plugin",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
  {
    title: "Payload CMS Media Grid View Plugin",
    description: "A plugin for Payload CMS that allows users to view media in a grid view.",
    github: "https://github.com/ahmetskilinc/payload-media-grid-plugin",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Zero Email Inc. (US, remote)",
    period: "Feb 2025 - Present",
    description:
      "Software engineer responsible for core features and performance optimisations for an innovative AI-powered email client, focusing on intelligent email processing and real-time collaboration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Google APIs"],
  },
  {
    role: "Freelance Developer",
    period: "Mar 2024 - May 2025",
    description:
      "Delivering custom web solutions for diverse clients, specialising in e-commerce platforms, content management systems, and business automation tools.",
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
  {
    role: "Junior Web Developer",
    company: "Absowebly",
    period: "Jul 2018 - Sep 2018",
    description: "Developing and maintaining client websites with a proprietary CMS.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Sass"],
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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    title: "React Router",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  //   title: "VueJS",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  //   title: "NuxtJS",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  //   title: "HTML",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  //   title: "CSS",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //   title: "Javascript",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "Typescript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
    title: "TRPC",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    title: "Google Cloud",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  //   title: "AWS",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    title: "Bun",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    title: "Cloudflare",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    title: "Vercel",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  //   title: "Sass",
  // },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "TailwindCSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "GIT",
  },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  //   title: "Figma",
  // },
  // {
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
  //   title: "Sketch",
  // },
];
