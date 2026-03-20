import { motion } from "framer-motion";
import { Brain, Plug, BarChart3, Cloud, Globe2, TrendingUp, Bot, Database, Rocket, Code2, Lightbulb, Users, UserCog, HeartHandshake } from "lucide-react";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const serviceGroups = [
  {
    title: "Generative AI & Data Excellence",
    description: "Cutting-edge AI engineering for enterprise transformation",
    services: [
      { icon: Brain, title: "LLM Development & AI Agents", desc: "Custom LLM orchestration, fine-tuning, and autonomous AI agent development tailored to your business domain." },
      { icon: Plug, title: "AI Integrations", desc: "Seamlessly embed AI capabilities into existing enterprise workflows, CRMs, ERPs, and data pipelines." },
      { icon: BarChart3, title: "Data Analytics & Predictions", desc: "Advanced predictive modeling, real-time analytics dashboards, and data-driven business intelligence." },
      { icon: Bot, title: "Conversational AI", desc: "Enterprise chatbots and virtual assistants powered by state-of-the-art language models." },
    ],
  },
  {
    title: "Product & Startup Engineering",
    description: "End-to-end product development from zero to market",
    services: [
      { icon: Rocket, title: "MVP Development", desc: "Rapid prototyping and minimum viable product development to validate your idea and get to market fast." },
      { icon: Code2, title: "Build From Scratch", desc: "Full-cycle product engineering — from architecture design to deployment — built custom for your vision." },
      { icon: Lightbulb, title: "Startup Consulting in IT & Growth", desc: "Strategic technology advisory and growth hacking to help startups scale efficiently and sustainably." },
      { icon: UserCog, title: "CXO & Leadership Advisory", desc: "Fractional CXO services providing executive-level technology and growth leadership for your startup." },
      { icon: HeartHandshake, title: "Customer Engagement", desc: "Design and implement customer engagement strategies that drive retention, loyalty, and lifetime value." },
    ],
  },
  {
    title: "Cloud & Ecosystem Partnerships",
    description: "Leverage our strategic partnerships for optimal infrastructure",
    services: [
      { icon: Cloud, title: "Cloud Infrastructure", desc: "Architect, migrate, and optimize cloud environments across GCP, AWS, Oracle, and hybrid setups." },
      { icon: Database, title: "CRM & Business Platforms", desc: "End-to-end implementation of Salesforce, HubSpot, Zoho, and ServiceNow for operational excellence." },
    ],
  },
  {
    title: "The Go Global GTM Engine",
    description: "Strategic expansion for startups ready to dominate globally",
    services: [
      { icon: Globe2, title: "Global GTM Strategy", desc: "Data-driven go-to-market strategies that transition startups into multi-national operations across 19+ countries." },
      { icon: TrendingUp, title: "Revenue & Transaction Scaling", desc: "Optimize funnels, increase transaction volume, and build scalable revenue engines for global markets." },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold">What We Build</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-3 mb-4">
            Full-Stack <span className="text-gradient-gold">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From AI engineering to global market domination — we deliver the complete growth stack.</p>
        </motion.div>

        <div className="space-y-16">
          {serviceGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.services.map((svc, si) => (
                  <button
                    key={si}
                    onClick={scrollToContact}
                    className="group text-left glass border-glass rounded-xl p-6 hover-lift cursor-pointer"
                  >
                    <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <svc.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{svc.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
