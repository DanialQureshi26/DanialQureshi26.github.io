import { ArrowUpRight, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="container relative">
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Available for research & freelance work
          </span>
        </div>

        <h1
          className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] animate-fade-in"
          style={{ animationDelay: "100ms", opacity: 0 }}
        >
          <span className="text-gradient">AI Instructor,</span>{" "}
          <span className="serif italic text-accent">Researcher</span>{" "}
          <span className="text-gradient">& Applied Machine Learning Engineer.</span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in"
          style={{ animationDelay: "250ms", opacity: 0 }}
        >
          Teaching AI, mentoring research, and building real-world intelligent systems —
          bridging the gap between theory, publications, and production.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-3 animate-fade-in"
          style={{ animationDelay: "400ms", opacity: 0 }}
        >
          <a
            href="https://scholar.google.com/citations?user=N8wsAQwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all"
          >
            View Research Profile
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-danial-ahmad-qureshi-482112364/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border hover:border-accent/60 hover:text-accent text-sm font-medium transition-all"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl border-t border-border pt-8">
          {[
            { k: "3+", v: "Active roles" },
            { k: "ML / DL / NLP / CV", v: "Core domains" },
            { k: "Research", v: "Mentorship" },
            { k: "FastAPI", v: "Deployment stack" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-2xl md:text-3xl font-medium tracking-tight">{s.k}</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
