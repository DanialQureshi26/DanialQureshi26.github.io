import { Linkedin, GraduationCap, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-sm font-medium tracking-tight">Muhammad Danial Ahmad Qureshi</div>
          <div className="text-xs text-muted-foreground mt-1">
            AI Instructor · Researcher · Freelance ML Engineer
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://scholar.google.com/citations?user=N8wsAQwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <GraduationCap className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-danial-ahmad-qureshi-482112364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:merazllcpk@gmail.com"
            aria-label="Email"
            className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Danial Qureshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
