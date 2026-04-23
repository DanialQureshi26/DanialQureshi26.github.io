import { Section } from "./Section";

const items = [
  {
    quote: "Danial’s mentorship transformed my approach to research — from confused student to a published author. His clarity in explaining complex ML concepts is rare.",
    name: "Research Mentee",
    role: "MS Student",
  },
  {
    quote: "He delivered a production-ready ML API faster than we expected, with the rigor of a researcher and the pragmatism of an engineer.",
    name: "Startup Founder",
    role: "Freelance Client",
  },
  {
    quote: "One of the best AI instructors I’ve learned from. Hands-on, deeply technical, and genuinely invested in his students’ growth.",
    name: "NAVTTC Student",
    role: "AI Cohort",
  },
];

export const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>Trusted by <span className="serif italic text-accent">students</span> & teams.</>}
    >
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="hover-lift rounded-2xl border border-border bg-card p-7 flex flex-col reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="text-accent text-3xl serif leading-none mb-4">“</div>
            <blockquote className="text-foreground/90 leading-relaxed flex-1">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};
