import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { universityProjects } from "../data/portfolio";
import { Footer, SectionHeading, SiteNav, Tag } from "./SiteChrome";

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
        <meta
          name="description"
          content={`${project.title} by Chai Qi Qian: ${project.summary}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNav />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
          <NextLink
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-blue-700"
          >
            <FiArrowLeft aria-hidden="true" />
            Back to projects
          </NextLink>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                {project.eyebrow}
              </p>
              <h1 className="text-balance text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 text-xl leading-8 text-slate-600">
                {project.summary}
              </p>
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
              <Image
                src={project.image}
                alt={`${project.title} icon`}
                width={180}
                height={180}
                className="mx-auto h-28 w-28 object-contain"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoBlock title="Problem" body={project.problem} />
                <InfoBlock title="Contribution" body={project.contribution} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Project Details"
              title="Key Features & Screenshots"
              description="A concise look at the user-facing flows and prototype screens from this university project."
            />
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.screenshots.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={320}
                    height={640}
                    className="mx-auto h-auto max-h-[34rem] w-auto rounded-2xl object-contain"
                  />
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
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}
