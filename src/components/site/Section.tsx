import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, description, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container">
        <div className="max-w-3xl mb-16 reveal">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-gradient">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
