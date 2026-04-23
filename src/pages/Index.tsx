import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Expertise } from "@/components/site/Expertise";
import { Research } from "@/components/site/Research";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Danial Ahmad Qureshi",
    jobTitle: "AI Instructor, AI Researcher, Freelance AI Engineer",
    email: "mailto:merazllcpk@gmail.com",
    worksFor: { "@type": "Organization", name: "VentureOnyx" },
    sameAs: [
      "https://scholar.google.com/citations?user=N8wsAQwAAAAJ&hl=en",
      "https://www.linkedin.com/in/muhammad-danial-ahmad-qureshi-482112364/",
    ],
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Research",
      "Model Deployment",
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Research />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
