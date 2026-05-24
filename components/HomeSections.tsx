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
        <h1 className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
          Software Engineer with full stack fintech experience.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
          {profile.summary}
        </p>
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
                src={profile.portraitSrc}
                alt="Chai Qi Qian"
                width={420}
                height={520}
                priority
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  {profile.name}
                </p>
                <p className="mt-2 text-2xl font-black text-slate-950">
                  {profile.subtitle}
                </p>
              </div>
              <div className="space-y-3">
                {profile.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                  >
                    <FiCheckCircle
                      className="mt-1 h-4 w-4 shrink-0 text-teal-700"
                      aria-hidden="true"
                    />
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
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-2xl font-black text-slate-950">{item.value}</p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
            Engineering strengths
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {strengths.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold"
              >
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
            [
              "Current Focus",
              "Fintech application development across frontend, backend, Spring Batch jobs, mobile support, APIs, and delivery workflows.",
            ],
            [
              "Support Mindset",
              "First-level support for live issues, debugging, root-cause analysis, and solution proposals.",
            ],
            [
              "Delivery Automation",
              "Deployment workflow improvements that reduce repeated manual work and make releases more consistent.",
            ],
            [
              "Security Awareness",
              "Repository privacy, access-control awareness, and token-based access practices for sensitive fintech code.",
            ],
            [
              "Continuous Learning",
              "Keeping up with latest technology, modern engineering practices, documentation habits, and quality checks.",
            ],
            [
              "Academic Base",
              "Computer Science graduate with First Class Honours, Dean's List results, and a strong software engineering foundation.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
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
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                    {experience.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">
                    {experience.role}
                  </h3>
                  <p className="mt-2 font-semibold text-slate-700">
                    {experience.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {experience.location}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-base leading-7 text-slate-700">
                    {experience.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <FiCheckCircle
                          className="mt-1 h-4 w-4 shrink-0 text-teal-700"
                          aria-hidden="true"
                        />
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
          <article
            key={project.slug}
            className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <Image
                src={project.image}
                alt={`${project.title} icon`}
                width={80}
                height={80}
                className="h-16 w-16 object-contain"
              />
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                {project.result}
              </span>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              {project.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">
              {project.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <NextLink
              href={project.route}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
            >
              View case study
              <FiArrowUpRight
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
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
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-200">
            Technical stack
          </p>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            Practical tools for building, shipping, and supporting products.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index % skillIcons.length];

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
                    >
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
        description="Computer Science fundamentals, latest technology awareness, and competition experience support the analytical side of my engineering work."
      />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <article
              key={item.school}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                {item.period}
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">
                {item.qualification}
              </h3>
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
          <h3 className="text-xl font-black text-slate-950">
            Competition proof
          </h3>
          <div className="mt-5 space-y-4">
            {universityProjects.map((project) => (
              <div key={project.slug} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-950">
                  {project.title}
                </p>
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
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">
          Contact
        </p>
        <h2 className="mt-4 text-balance text-3xl font-black md:text-5xl">
          Open to software engineering opportunities.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
          I am interested in roles where I can contribute across frontend,
          backend, support, and delivery quality while continuing to grow as a
          full stack software engineer.
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
