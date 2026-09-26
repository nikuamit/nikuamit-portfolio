import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { MetricsBento } from "@/components/metrics-bento";
import { LeadershipSignals } from "@/components/leadership-signals";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { CaseStudies } from "@/components/case-studies";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MetricsBento />
        <LeadershipSignals />
        <ExperienceTimeline />
        <CaseStudies />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
