import { Section } from "./Section";
import {
  Brain, Network, MessageSquare, Eye, FileText, Server, Workflow,
} from "lucide-react";

const expertise = [
  { icon: Brain, title: "Machine Learning", desc: "End-to-end ML pipelines, classical and modern algorithms, evaluation & tuning." },
  { icon: Network, title: "Deep Learning", desc: "CNNs, RNNs, Transformers — architecture design, training, and optimization." },
  { icon: MessageSquare, title: "Natural Language Processing", desc: "Text classification, embeddings, LLM applications, fine-tuning workflows." },
  { icon: Eye, title: "Computer Vision", desc: "Image classification, detection, segmentation, and vision research systems." },
  { icon: FileText, title: "AI Research & Publications", desc: "Problem framing, methodology design, paper writing & academic mentorship." },
  { icon: Server, title: "Model Deployment", desc: "FastAPI, REST APIs, containerized ML services, scalable inference endpoints." },
  { icon: Workflow, title: "AI Automation Systems", desc: "Intelligent workflows, agent pipelines, and integration with real products." },
];

export const Expertise = () => {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title={<>A <span className="serif italic text-accent">full-stack</span> AI skillset.</>}
      description="From research methodology to production deployment — I work across the entire lifecycle of an AI system."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertise.map((e, i) => (
          <div
            key={e.title}
            className="hover-lift group relative rounded-2xl border border-border bg-card p-6 reveal"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent grid place-items-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <e.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2">{e.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
