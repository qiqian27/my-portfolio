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
