import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Computer Vision",
    title: "Vision Inference Pipeline",
    desc: "Real-time image classification system with custom CNN backbones, deployed via FastAPI behind a scalable inference endpoint.",
  },
  {
    tag: "NLP / LLM",
    title: "Domain-Specific Text Intelligence",
    desc: "Fine-tuned language models for classification and information extraction in specialized verticals.",
  },
  {
    tag: "Research",
    title: "Applied AI Research at VentureOnyx",
    desc: "Ongoing research projects translating academic methods into production-ready intelligent products.",
  },
  {
    tag: "Automation",
    title: "AI Workflow Automation",
    desc: "Agent-based pipelines that automate document understanding, decisioning, and downstream system integration.",
  },
];

export const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Research-grade ideas, <span className="serif italic text-accent">production</span>-grade systems.</>}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="hover-lift group rounded-2xl border border-border bg-card p-7 md:p-8 reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-wider text-accent">{p.tag}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              {p.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};
