import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-foreground text-background grid place-items-center text-sm font-semibold tracking-tight">
            D
          </span>
          <span className="text-sm font-medium tracking-tight hidden sm:inline">
            Danial Qureshi
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 grid place-items-center rounded-lg border border-border hover:border-accent/60 hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center px-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
};
