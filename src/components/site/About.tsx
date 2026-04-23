import { Section } from "./Section";

export const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>I bridge <span className="serif italic text-accent">theory</span>, research, and real-world AI.</>}
    >
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed reveal">
          <p>
            I'm <span className="text-foreground font-medium">Muhammad Danial Ahmad Qureshi</span> —
            an AI Instructor with NAVTTC, an AI Researcher at VentureOnyx, and a
            freelance machine learning engineer. My work sits at the intersection of
            teaching, applied research, and shipping intelligent systems.
          </p>
          <p>
            I help students go from fundamentals to publishable work in
            <span className="text-foreground"> Machine Learning, Deep Learning, NLP, and Computer Vision</span>,
            and I partner with teams to design, train, and deploy ML models that
            solve real problems.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3 reveal">
          {[
            { k: "Teaching", v: "ML, DL, NLP, CV — from fundamentals to research-ready" },
            { k: "Research", v: "Applied & academic AI, mentoring student publications" },
            { k: "Industry", v: "VentureOnyx + freelance — production ML & APIs" },
          ].map((p) => (
            <div
              key={p.k}
              className="hover-lift rounded-xl border border-border bg-card p-5"
            >
              <div className="text-xs uppercase tracking-wider text-accent mb-1">
                {p.k}
              </div>
              <div className="text-sm text-foreground">{p.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
