import { Section } from "./Section";
import { ArrowUpRight, GraduationCap, BookOpen, PenTool } from "lucide-react";

const pillars = [
  { icon: PenTool, title: "Research Paper Writing", desc: "Structuring, drafting, and refining manuscripts for academic publication." },
  { icon: BookOpen, title: "Academic Writing", desc: "Methodology, literature review, results articulation — research-grade quality." },
  { icon: GraduationCap, title: "Implementation Guidance", desc: "Translating ideas into reproducible code, experiments, and result analysis." },
];

export const Research = () => {
  return (
    <Section
      id="research"
      eyebrow="Research & Academics"
      title={<>Mentoring students from <span className="serif italic text-accent">idea</span> to publication.</>}
      description="I work closely with students and early-career researchers across the full research lifecycle — from selecting a problem to publishing peer-reviewed work."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="hover-lift rounded-2xl border border-border bg-card p-6 reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <p.icon className="w-5 h-5 text-accent mb-4" />
            <h3 className="text-lg font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="reveal rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-medium tracking-tight">
            Explore my published research
          </h3>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Citations, papers, and ongoing research directions on Google Scholar.
          </p>
        </div>
        <a
          href="https://scholar.google.com/citations?user=N8wsAQwAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity self-start"
        >
          View Google Scholar Profile
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  );
};
