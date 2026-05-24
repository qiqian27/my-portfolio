# Job-Focused Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the eportfolio frontend into a polished, recruiter-ready Software Engineer portfolio that highlights full stack fintech experience, privacy-safe current work, university projects, skills, education, and contact paths.

**Architecture:** Split portfolio content into typed data, shared presentation components, and thin page files. The homepage becomes a composed set of recruiter-focused sections, while the three project pages share a consistent case-study layout for university and hackathon work.

**Tech Stack:** Next.js pages router, React 18, TypeScript, Tailwind CSS, react-icons, existing local assets, existing public PDF resume.

---

## File Structure

- Modify: `tailwind.config.js`
  - Add `components` and `data` to Tailwind content scanning so new component classes compile.
- Modify: `styles/globals.css`
  - Replace legacy page-background and menu CSS with modern base styles, smooth scrolling, selection color, and small reusable global utilities.
- Create: `data/portfolio.ts`
  - Central source of truth for profile, navigation, highlights, experience, skills, education, links, and university project details.
- Create: `components/SiteChrome.tsx`
  - Shared sticky navigation, footer, section heading, CTA link, social links, and reusable tag/list primitives.
- Create: `components/HomeSections.tsx`
  - Homepage sections: hero, snapshot, about, experience, university projects, skills, education, contact.
- Create: `components/ProjectCaseStudyPage.tsx`
  - Shared layout for Odyssey, HILTI, and RHB detail pages.
- Modify: `pages/index.tsx`
  - Replace the current large single-file homepage with the new homepage composition.
- Modify: `pages/Odessey.tsx`
  - Use shared project case-study layout for Odyssey.
- Modify: `pages/Hilti.tsx`
  - Use shared project case-study layout for HILTI.
- Modify: `pages/Rhb.tsx`
  - Use shared project case-study layout for RHB.
- Modify: `public/ChaiQiQian.pdf`
  - Copy the newer resume from `C:\Users\user\OneDrive - Taylor's Education\Desktop\ChaiQiQian.pdf` because its hash differs from the current public file.

---

### Task 1: Styling Foundation And Tailwind Scan Paths

**Files:**
- Modify: `tailwind.config.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Capture current baseline**

Run:

```powershell
npm run lint
```

Expected: either PASS or an existing lint warning/failure that must be recorded before edits.

- [ ] **Step 2: Update Tailwind content paths**

Replace `tailwind.config.js` with:

```js
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Replace global CSS**

Replace `styles/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --portfolio-bg: #f8fafc;
  --portfolio-ink: #0f172a;
  --portfolio-muted: #475569;
  --portfolio-line: #e2e8f0;
  --portfolio-blue: #2563eb;
  --portfolio-teal: #0f766e;
  --portfolio-amber: #d97706;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  padding: 0;
  margin: 0;
  color: var(--portfolio-ink);
  background: var(--portfolio-bg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

::selection {
  color: white;
  background: var(--portfolio-blue);
}

.portfolio-shell {
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.10), transparent 34rem),
    radial-gradient(circle at 85% 18%, rgba(15, 118, 110, 0.09), transparent 28rem),
    linear-gradient(180deg, #ffffff 0%, #f8fafc 42%, #ffffff 100%);
}

.text-balance {
  text-wrap: balance;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Verify Tailwind config and CSS compile**

Run:

```powershell
npm run lint
```

Expected: no new lint errors from `tailwind.config.js` or CSS import behavior.

- [ ] **Step 5: Commit styling foundation**

Run:

```powershell
git add tailwind.config.js styles/globals.css
git commit -m "style: add portfolio design foundation"
```

Expected: commit succeeds.

---

### Task 2: Portfolio Content Model

**Files:**
- Create: `data/portfolio.ts`

- [ ] **Step 1: Create typed content data**

Create `data/portfolio.ts` with:

```ts
export const profile = {
  name: "Chai Qi Qian",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  location: "Kelantan, Malaysia",
  email: "qichaiqian27@outlook.com",
  phone: "+60129687207",
  resumeHref: "/ChaiQiQian.pdf",
  linkedInHref: "https://www.linkedin.com/in/chai-qi-qian-a5094520a/",
  instagramHref: "https://www.instagram.com/qiqian1227/",
  facebookHref: "https://www.facebook.com/qiqianchai/",
  summary:
    "I build reliable fintech products across frontend, backend, mobile, and cloud-supported delivery. My Data Science and AI background helps me debug carefully, reason through systems, and deliver maintainable software with strong quality habits.",
  heroPoints: [
    "Full stack fintech development with Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, and Gradle.",
    "First-level support for live issues, including debugging, root-cause analysis, and practical solution proposals for the team.",
    "AI-assisted engineering workflow for code review, debugging, documentation, and delivery confidence.",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const impactStats = [
  { value: "2024-now", label: "Fintech full stack developer" },
  { value: "3.81/4", label: "Computer Science CGPA" },
  { value: "1st Class", label: "Honours graduate" },
  { value: "3", label: "University hackathon builds" },
];

export const strengths = [
  "Reliable full stack delivery",
  "Live-issue debugging",
  "First-level support",
  "Project coordination",
  "CI/CD awareness",
  "AI-assisted quality checks",
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "iFast Capital Sdn. Bhd.",
    location: "Selangor, Malaysia",
    period: "Jun 2024 - Present",
    summary:
      "Building and maintaining fintech applications with privacy-safe full stack delivery across user interfaces, backend services, mobile support, and release workflows.",
    points: [
      "Develop and maintain fintech application features with Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, Gradle, and Lombok.",
      "Support CI/CD workflows and release quality by contributing to Jenkins and Gradle-based delivery processes.",
      "Provide first-level support for live issues, debug problems under pressure, identify root causes, and propose practical solutions to the team.",
      "Use AI-assisted engineering practices to strengthen code review, debugging, documentation, and quality checks while keeping developer judgment central.",
    ],
    stack: ["Spring Boot", "Angular", "React Native", "REST APIs", "MySQL", "Azure", "Jenkins", "Gradle", "Lombok"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Salient Information Sdn. Bhd.",
    location: "Selangor, Malaysia",
    period: "Aug 2023 - Dec 2023",
    summary:
      "Delivered brand microsites and interactive experiences with responsive interfaces, accessibility improvements, and cross-device polish.",
    points: [
      "Developed brand microsites with Next.js and Node.js, improving accessibility and user engagement.",
      "Designed system flows and implemented responsive UI/UX in collaboration with product and design needs.",
      "Optimized microsite functionality and performance across devices.",
    ],
    stack: ["Next.js", "Node.js", "Figma", "Firebase", "Meta Spark Studio"],
  },
];

export const universityProjects = [
  {
    slug: "odyssey",
    title: "Odyssey Hackfest 2022",
    eyebrow: "University & Hackathon Project",
    result: "Special Award",
    route: "/Odessey",
    repoHref: "https://github.com/xuan0505/HealMe",
    image: "/c1.png",
    summary:
      "A mental health mobile app concept with community interaction, resources, meditation timer, and mood tracking.",
    problem:
      "Students and young adults need a gentle, accessible way to reflect on mental wellbeing and connect with supportive resources.",
    contribution:
      "Built the Flutter mobile experience and connected key application flows with Firebase-backed features.",
    stack: ["Flutter", "Dart", "Firebase"],
    highlights: ["Community interaction", "Mood tracking", "Meditation timer", "Mental health resources"],
    screenshots: [
      "/o1.jpg", "/o2.jpg", "/o3.jpg", "/o4.jpg", "/o5.jpg", "/o6.jpg", "/o7.jpg", "/o8.jpg", "/o9.jpg",
      "/o10.jpg", "/o11.jpg", "/o12.jpg", "/o13.jpg", "/o14.jpg", "/o15.jpg", "/o16.jpg", "/o17.jpg",
    ],
  },
  {
    slug: "hilti",
    title: "HILTI IT Competition",
    eyebrow: "University & Hackathon Project",
    result: "First Runner-Up",
    route: "/Hilti",
    repoHref: "https://github.com/zerox555/Hilti_XXX",
    image: "/c2.png",
    summary:
      "An AR/VR mobile commerce and training concept for safer equipment learning and product exploration.",
    problem:
      "Equipment users need safer and more engaging ways to understand tools, training, and product usage before real-world operation.",
    contribution:
      "Helped build the mobile prototype and shape the AR/VR product experience using Flutter, Blender, and Unity.",
    stack: ["Flutter", "Dart", "Blender", "Unity"],
    highlights: ["VR training", "AR product viewing", "Product commerce", "IR 4.0 concept"],
    screenshots: ["/h1.png", "/h2.png", "/h3.png", "/h4.png", "/h5.png", "/h6.png", "/h7.png", "/h8.png", "/h9.png", "/h10.png"],
  },
  {
    slug: "rhb",
    title: "RHB ASEAN Hackathon",
    eyebrow: "University & Hackathon Project",
    result: "Participation",
    route: "/Rhb",
    repoHref: "https://github.com/zerox555/rhb_Youth-master",
    image: "/c3.png",
    summary:
      "A financial literacy MVP for young adults with mock investment, savings, gamification, and avatar customization.",
    problem:
      "Young adults often need a more approachable way to learn financial habits and explore investment concepts.",
    contribution:
      "Developed a Flutter MVP prototype focused on financial education and motivating repeat engagement.",
    stack: ["Flutter", "Dart"],
    highlights: ["Mock investment", "Savings goals", "Gamification", "Custom avatars"],
    screenshots: ["/r1.jpg", "/r2.jpg"],
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind CSS"] },
  { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "MySQL", "Lombok"] },
  { title: "Mobile", skills: ["React Native", "Flutter", "Dart"] },
  { title: "DevOps & Cloud", skills: ["Jenkins", "Gradle", "Azure", "GitHub", "GitLab"] },
  { title: "Data & AI", skills: ["Data Science", "Machine Learning", "NLP", "AI-assisted engineering"] },
  { title: "Product & Support", skills: ["Agile", "Project coordination", "Live-issue debugging", "First-level support", "Solution proposal"] },
];

export const education = [
  {
    school: "Taylor's University",
    qualification: "Bachelor of Computer Science",
    period: "Mar 2021 - Mar 2024",
    details: ["CGPA 3.81/4", "First Class Honours", "Dean's List every semester", "Data Science & Artificial Intelligence"],
  },
  {
    school: "Taylor's College",
    qualification: "Foundation in Computing",
    period: "Mar 2020 - Mar 2021",
    details: ["CGPA 3.97/4", "Graduated as Top Achiever", "Dean's List every semester"],
  },
];
```

- [ ] **Step 2: Type-check the new data file**

Run:

```powershell
npm run lint
```

Expected: no TypeScript or lint error from `data/portfolio.ts`.

- [ ] **Step 3: Commit content model**

Run:

```powershell
git add data/portfolio.ts
git commit -m "feat: add portfolio content model"
```

Expected: commit succeeds.

---

### Task 3: Shared Site Chrome Components

**Files:**
- Create: `components/SiteChrome.tsx`

- [ ] **Step 1: Create shared navigation, footer, and primitives**

Create `components/SiteChrome.tsx` with:

```tsx
import type { ReactNode } from "react";
import NextLink from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { navItems, profile } from "../data/portfolio";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <NextLink href="/" className="group">
          <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Chai Qi Qian</span>
          <span className="block text-base font-bold text-slate-950 transition-colors group-hover:text-blue-700">Software Engineer</span>
        </NextLink>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-blue-700">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
          >
            Contact
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Copyright 2026 Chai Qi Qian. Built with Next.js and Tailwind CSS.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export function SocialLinks() {
  const links = [
    { label: "LinkedIn", href: profile.linkedInHref, icon: <AiFillLinkedin /> },
    { label: "Instagram", href: profile.instagramHref, icon: <AiFillInstagram /> },
    { label: "Facebook", href: profile.facebookHref, icon: <AiFillFacebook /> },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

export function CtaLink({ href, children, variant = "primary", external = false, icon }: CtaLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-slate-950"
      : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700";

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={className}>
      {icon}
      {children}
      {external ? <FiArrowUpRight aria-hidden="true" /> : null}
    </a>
  );
}

export function EmailLink() {
  return (
    <CtaLink href={`mailto:${profile.email}`} icon={<FiMail aria-hidden="true" />}>
      Contact Me
    </CtaLink>
  );
}
```

- [ ] **Step 2: Verify component import paths**

Run:

```powershell
npm run lint
```

Expected: no lint errors from `components/SiteChrome.tsx`.

- [ ] **Step 3: Commit shared chrome**

Run:

```powershell
git add components/SiteChrome.tsx
git commit -m "feat: add shared portfolio chrome"
```

Expected: commit succeeds.

---

### Task 4: Recruiter-Ready Homepage

**Files:**
- Create: `components/HomeSections.tsx`
- Modify: `pages/index.tsx`

- [ ] **Step 1: Create homepage section components**

Create `components/HomeSections.tsx` with:

```tsx
import Image from "next/image";
import NextLink from "next/link";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiShield,
  FiTool,
} from "react-icons/fi";
import {
  education,
  experiences,
  impactStats,
  profile,
  skillGroups,
  strengths,
  universityProjects,
} from "../data/portfolio";
import { CtaLink, EmailLink, SectionHeading, SocialLinks, Tag } from "./SiteChrome";

const sectionClass = "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24";
const skillIcons = [FiCode, FiLayers, FiCpu, FiShield, FiTool];

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:px-8 lg:pb-24 lg:pt-20">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          Available for software engineering opportunities
        </p>
        <h1 className="text-balance text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
          Software Engineer with full stack fintech experience.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <EmailLink />
          <CtaLink href={profile.resumeHref} variant="secondary" external>
            View Resume
          </CtaLink>
        </div>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-[0.82fr_1.18fr] sm:items-center">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/profile.jpg"
                alt="Chai Qi Qian"
                width={420}
                height={520}
                priority
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{profile.name}</p>
                <p className="mt-2 text-2xl font-black text-slate-950">{profile.subtitle}</p>
              </div>
              <div className="space-y-3">
                {profile.heroPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="border-y border-slate-200/80 bg-white/75">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1fr_1.25fr] lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
          {impactStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-2xl font-black text-slate-950">{item.value}</p>
              <p className="mt-1 text-sm leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Engineering strengths</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {strengths.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className={sectionClass}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="A full stack developer who cares about reliability, clarity, and delivery quality."
          description="My current work is in fintech, where clean implementation, careful debugging, and steady support matter. I enjoy turning ambiguous issues into practical solutions the team can ship with confidence."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Current Focus", "Fintech application development across frontend, backend, mobile support, APIs, and delivery workflows."],
            ["Support Mindset", "First-level support for live issues, debugging, root-cause analysis, and solution proposals."],
            ["AI Workflow", "AI-assisted code review, debugging, documentation, and quality checks guided by engineering judgment."],
            ["Academic Base", "Computer Science graduate with Data Science and AI specialization, First Class Honours, and Dean's List results."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience built around fintech systems, product delivery, and team support."
          description="Current work is intentionally described at a high level to keep internal product details private."
        />
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">{experience.period}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{experience.role}</h3>
                  <p className="mt-2 font-semibold text-slate-700">{experience.company}</p>
                  <p className="mt-1 text-sm text-slate-500">{experience.location}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-base leading-7 text-slate-700">{experience.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className={sectionClass}>
      <SectionHeading
        eyebrow="Selected work"
        title="University & Hackathon Projects"
        description="These projects come from university and hackathon settings. They show product thinking, prototyping speed, and mobile development practice before my current fintech role."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {universityProjects.map((project) => (
          <article key={project.slug} className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <Image src={project.image} alt={`${project.title} icon`} width={80} height={80} className="h-16 w-16 object-contain" />
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">{project.result}</span>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">{project.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">{project.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <NextLink href={project.route} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
              View case study
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </NextLink>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-200">Technical stack</p>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Practical tools for building, shipping, and supporting products.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Icon className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className={sectionClass}>
      <SectionHeading
        eyebrow="Education & awards"
        title="Strong academic foundation with hands-on competition experience."
        description="Computer Science, Data Science, and AI training support the analytical side of my engineering work."
      />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <article key={item.school} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">{item.period}</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">{item.qualification}</h3>
              <p className="mt-1 font-semibold text-slate-700">{item.school}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <Tag key={detail}>{detail}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black text-slate-950">Competition proof</h3>
          <div className="mt-5 space-y-4">
            {universityProjects.map((project) => (
              <div key={project.slug} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-950">{project.title}</p>
                <p className="mt-1 text-sm text-slate-600">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">Contact</p>
        <h2 className="mt-4 text-balance text-3xl font-black md:text-5xl">Open to software engineering opportunities.</h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
          I am interested in roles where I can contribute across frontend, backend, support, and delivery quality while continuing to grow as a full stack software engineer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <EmailLink />
          <CtaLink href={profile.linkedInHref} variant="secondary" external>
            LinkedIn
          </CtaLink>
          <CtaLink href={profile.resumeHref} variant="secondary" external>
            Resume
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
```

Use these exact content rules:

- Hero heading contains `Software Engineer`.
- Supporting text contains `Full Stack Developer`.
- The project section heading is `University & Hackathon Projects`.
- No section title or navigation item contains `Life`.
- No `react-circular-progressbar` import is used.
- No percentage bars are rendered.

- [ ] **Step 2: Replace homepage page file**

Replace `pages/index.tsx` with:

```tsx
import Head from "next/head";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ImpactSection,
  ProjectsSection,
  SkillsSection,
} from "../components/HomeSections";
import { Footer, SiteNav } from "../components/SiteChrome";

export default function Home() {
  return (
    <div className="portfolio-shell min-h-screen">
      <Head>
        <title>Chai Qi Qian | Software Engineer & Full Stack Developer</title>
        <meta
          name="description"
          content="Chai Qi Qian is a Software Engineer and Full Stack Developer with fintech experience across Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, and Gradle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNav />
      <main>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Verify removed old content**

Run:

```powershell
rg -n "Some Meaningful Photos|CircularProgressbar|react-circular-progressbar|Life" pages\index.tsx components\HomeSections.tsx
```

Expected: no matches.

- [ ] **Step 4: Lint homepage**

Run:

```powershell
npm run lint
```

Expected: no lint errors.

- [ ] **Step 5: Commit homepage revamp**

Run:

```powershell
git add pages/index.tsx components/HomeSections.tsx
git commit -m "feat: rebuild homepage for job search"
```

Expected: commit succeeds.

---

### Task 5: Consistent University Project Pages

**Files:**
- Create: `components/ProjectCaseStudyPage.tsx`
- Modify: `pages/Odessey.tsx`
- Modify: `pages/Hilti.tsx`
- Modify: `pages/Rhb.tsx`

- [ ] **Step 1: Create shared project case-study component**

Create `components/ProjectCaseStudyPage.tsx` with:

```tsx
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Footer, SectionHeading, SiteNav, Tag } from "./SiteChrome";
import { universityProjects } from "../data/portfolio";

export type ProjectSlug = (typeof universityProjects)[number]["slug"];

export function ProjectCaseStudyPage({ slug }: { slug: ProjectSlug }) {
  const project = universityProjects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <div className="portfolio-shell min-h-screen">
      <Head>
        <title>{project.title} | Chai Qi Qian</title>
        <meta name="description" content={`${project.title} by Chai Qi Qian: ${project.summary}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNav />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
          <NextLink href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-blue-700">
            <FiArrowLeft aria-hidden="true" />
            Back to projects
          </NextLink>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">{project.eyebrow}</p>
              <h1 className="text-balance text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{project.title}</h1>
              <p className="mt-5 text-xl leading-8 text-slate-600">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Tag>{project.result}</Tag>
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-slate-950"
                >
                  View Repository
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <Image src={project.image} alt={`${project.title} icon`} width={180} height={180} className="mx-auto h-28 w-28 object-contain" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoBlock title="Problem" body={project.problem} />
                <InfoBlock title="Contribution" body={project.contribution} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Project Details" title="Key Features & Screenshots" description="A concise look at the user-facing flows and prototype screens from this university project." />
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {project.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.screenshots.map((src, index) => (
                <div key={src} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-sm">
                  <Image src={src} alt={`${project.title} screenshot ${index + 1}`} width={320} height={640} className="mx-auto h-auto max-h-[34rem] w-auto rounded-2xl object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}
```

- [ ] **Step 2: Replace Odyssey page**

Replace `pages/Odessey.tsx` with:

```tsx
import { ProjectCaseStudyPage } from "../components/ProjectCaseStudyPage";

export default function Odessey() {
  return <ProjectCaseStudyPage slug="odyssey" />;
}
```

- [ ] **Step 3: Replace HILTI page**

Replace `pages/Hilti.tsx` with:

```tsx
import { ProjectCaseStudyPage } from "../components/ProjectCaseStudyPage";

export default function Hilti() {
  return <ProjectCaseStudyPage slug="hilti" />;
}
```

- [ ] **Step 4: Replace RHB page**

Replace `pages/Rhb.tsx` with:

```tsx
import { ProjectCaseStudyPage } from "../components/ProjectCaseStudyPage";

export default function Rhb() {
  return <ProjectCaseStudyPage slug="rhb" />;
}
```

- [ ] **Step 5: Verify removed legacy carousel imports**

Run:

```powershell
rg -n "react-slick|slick-carousel|slidesToShow|backgroundimg2|animate-slide-in|Some Meaningful" pages components
```

Expected: no matches in the modified project pages or shared project component.

- [ ] **Step 6: Lint project pages**

Run:

```powershell
npm run lint
```

Expected: no lint errors.

- [ ] **Step 7: Commit project pages**

Run:

```powershell
git add components/ProjectCaseStudyPage.tsx pages/Odessey.tsx pages/Hilti.tsx pages/Rhb.tsx
git commit -m "feat: refresh university project pages"
```

Expected: commit succeeds.

---

### Task 6: Resume Asset Refresh

**Files:**
- Modify: `public/ChaiQiQian.pdf`

- [ ] **Step 1: Copy current resume into public assets**

Run:

```powershell
Copy-Item -LiteralPath "C:\Users\user\OneDrive - Taylor's Education\Desktop\ChaiQiQian.pdf" -Destination "C:\Users\user\Documents\my-portfolio\public\ChaiQiQian.pdf" -Force
```

Expected: command succeeds.

- [ ] **Step 2: Verify the public resume hash matches the provided resume**

Run:

```powershell
Get-FileHash public\ChaiQiQian.pdf -Algorithm SHA256
Get-FileHash "C:\Users\user\OneDrive - Taylor's Education\Desktop\ChaiQiQian.pdf" -Algorithm SHA256
```

Expected: both hashes are `4D66B0D541109A9D6B74F2D0663F21006142D3DA5C18E9044F6596A866D06E91`.

- [ ] **Step 3: Commit resume refresh**

Run:

```powershell
git add public/ChaiQiQian.pdf
git commit -m "chore: refresh public resume"
```

Expected: commit succeeds.

---

### Task 7: Final Verification And Visual QA

**Files:**
- Verify all modified files.

- [ ] **Step 1: Run lint**

Run:

```powershell
npm run lint
```

Expected: lint passes.

- [ ] **Step 2: Run production build**

Run:

```powershell
npm run build
```

Expected: production build passes.

- [ ] **Step 3: Start local dev server**

Run:

```powershell
npm run dev
```

Expected: app serves successfully on a local port, normally `http://localhost:3000`.

- [ ] **Step 4: Browser-check homepage desktop**

Open `http://localhost:3000` in the Codex browser and verify:

- First viewport clearly says `Software Engineer`.
- It also describes Chai Qi Qian as a `Full Stack Developer`.
- Navigation does not include `Life`.
- No personal life photo gallery appears.
- CTA buttons for contact and resume are visible.

- [ ] **Step 5: Browser-check homepage mobile**

Use a mobile viewport around `390x844` and verify:

- Hero text fits without overlap.
- Navigation/header is usable.
- Cards do not overflow horizontally.
- Contact CTA remains visible and readable.

- [ ] **Step 6: Browser-check project detail pages**

Open:

- `http://localhost:3000/Odessey`
- `http://localhost:3000/Hilti`
- `http://localhost:3000/Rhb`

Verify:

- Each page labels the work as a university or hackathon project.
- Screenshots render.
- Repository links work as outbound links.
- The page style matches the homepage.

- [ ] **Step 7: Search for removed or risky content**

Run:

```powershell
rg -n "Some Meaningful Photos|CircularProgressbar|react-circular-progressbar|Generated by create next app|Life" pages components data styles
```

Expected: no matches.

- [ ] **Step 8: Review git diff**

Run:

```powershell
git diff --stat
git diff -- pages/index.tsx components data styles tailwind.config.js pages/Odessey.tsx pages/Hilti.tsx pages/Rhb.tsx
```

Expected: diff contains only portfolio revamp changes.

- [ ] **Step 9: Final commit if verification edits were needed**

If verification required fixes after the previous commits, run:

```powershell
git add pages components data styles tailwind.config.js public/ChaiQiQian.pdf
git commit -m "fix: polish portfolio verification issues"
```

Expected: commit succeeds only if there are remaining changes after verification.

---

## Completion Criteria

- All tasks are complete.
- `npm run lint` passes.
- `npm run build` passes.
- Desktop and mobile browser checks pass.
- The new branch remains `codex/job-focused-portfolio-revamp`.
- The portfolio presents Chai Qi Qian as a Software Engineer and Full Stack Developer for new job applications.
- The current iFast role remains high-level and privacy-safe.
- University projects are clearly labeled as university and hackathon projects.
