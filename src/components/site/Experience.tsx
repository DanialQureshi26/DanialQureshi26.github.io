import { Section } from "./Section";

const items = [
  {
    role: "AI Instructor",
    org: "NAVTTC",
    period: "Present",
    desc: "Designing and delivering hands-on curriculum across Machine Learning, Deep Learning, NLP, and Computer Vision. Mentoring the next generation of AI practitioners.",
  },
  {
    role: "AI Researcher",
    org: "VentureOnyx",
    period: "Present",
    desc: "Leading applied AI research initiatives — from problem framing to model development, evaluation, and deployment of production-grade systems.",
  },
  {
    role: "Freelance AI Research & Software Engineer",
    org: "Independent",
    period: "Ongoing",
    desc: "Partnering with founders, labs, and teams worldwide on ML model development, research mentorship, and API deployment using FastAPI and modern MLOps tooling.",
  },
];

export const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Roles spanning <span className="serif italic text-accent">academia</span>, research labs & industry.</>}
    >
      <ol className="relative border-l border-border ml-3 space-y-10">
        {items.map((it, i) => (
          <li key={it.role} className="pl-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="absolute -left-[7px] mt-2 w-3.5 h-3.5 rounded-full bg-background border-2 border-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                {it.role} <span className="text-muted-foreground">— {it.org}</span>
              </h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {it.period}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{it.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
