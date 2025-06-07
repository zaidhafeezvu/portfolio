"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Links() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 flex flex-col h-svh justify-between">
      <div>
        <AnimateIn variant="fadeUp">
          <section className="mb-12">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
                <span>Hey, I&apos;m Ahmet</span>
                <ThemeToggle />
              </h1>
            </AnimateIn>

            {/* <AnimateIn variant="fadeUp" delay={0.6}>
              <div className="flex items-center justify-center gap-5">
                <SocialMedia />
              </div>
            </AnimateIn> */}
          </section>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <div key={link.id} className="group">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      <AnimateIn variant="fadeUp" delay={0.8} className="">
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>ahmet.studio</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const links = [
  {
    id: 0,
    name: "Portfolio",
    url: "https://dub.sh/ahmet",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://dub.sh/ahmetgh",
  },
  {
    id: 3,
    name: "X",
    url: "https://dub.sh/ahmetx",
  },
  {
    id: 1,
    name: "LinkedIn",
    url: "https://dub.sh/ahmetli",
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://dub.sh/ahmetig",
  },
];
