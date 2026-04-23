import { Section } from "./Section";

const services = [
  {
    n: "01",
    title: "AI Training & Teaching",
    desc: "Cohort programs, workshops, and 1:1 sessions on ML, DL, NLP & CV — practical, project-driven curriculum.",
  },
  {
    n: "02",
    title: "Research Mentorship",
    desc: "End-to-end guidance for students and teams — problem framing, experimentation, paper writing, and publication.",
  },
  {
    n: "03",
    title: "AI Model Development",
    desc: "Custom ML and deep learning models built around your data, evaluated rigorously and ready for production.",
  },
  {
    n: "04",
    title: "API Development & Deployment",
    desc: "Productionizing models with FastAPI, REST endpoints, and scalable inference infrastructure.",
  },
  {
    n: "05",
    title: "Freelance AI Solutions",
    desc: "Custom intelligent systems, automation pipelines, and AI integrations tailored to your product.",
  },
];

export const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>How we can <span className="serif italic text-accent">work together</span>.</>}
    >
      <div className="border-t border-border">
        {services.map((s, i) => (
          <a
            key={s.n}
            href="#contact"
            className="reveal group block border-b border-border py-8 md:py-10 transition-colors hover:bg-card/50"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="container px-0 grid grid-cols-12 gap-6 items-center">
              <div className="col-span-2 md:col-span-1 text-sm text-muted-foreground tabular-nums">
                {s.n}
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed">
                {s.desc}
              </div>
              <div className="hidden md:block col-span-1 text-right text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1">
                →
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
