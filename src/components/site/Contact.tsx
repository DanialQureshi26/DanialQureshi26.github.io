import { useState } from "react";
import { z } from "zod";
import { Mail, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

const EMAIL = "merazllcpk@gmail.com";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Collaboration inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none"
        aria-hidden
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Contact</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-gradient">
              Let’s collaborate on AI <span className="serif italic text-accent">projects</span> or research.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Whether you need research mentorship, a custom ML model, or a production-ready
              AI system — I'd love to hear what you're working on.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 inline-flex items-center gap-3 group"
            >
              <span className="w-10 h-10 grid place-items-center rounded-full border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span className="text-lg font-medium group-hover:text-accent transition-colors">
                {EMAIL}
              </span>
            </a>
          </div>

          <form onSubmit={onSubmit} className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1500}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
                placeholder="Tell me about your project, research, or learning goals…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
