import { motion } from "framer-motion";
import { ArrowRight, Globe, Cpu, Rocket } from "lucide-react";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const stats = [
  { value: "100+", label: "Startups Scaled" },
  { value: "19+", label: "Countries" },
  { value: "50+", label: "AI Models Deployed" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--cream)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/3 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glass glass mb-8">
              <Globe className="h-4 w-4 text-gold" />
              <span className="text-xs font-medium text-muted-foreground">Scaling Startups Across 19+ Countries</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Where{" "}
            <span className="text-gradient-gold">Gen AI</span>
            <br />
            Meets Global
            <br />
            <span className="text-gradient-accent">Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We engineer custom AI solutions and execute global go-to-market strategies that have scaled 100+ startups into multi-national powerhouses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button onClick={scrollToContact} className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-gold text-primary-foreground font-semibold hover:bg-gold-glow transition-all glow-gold">
              <Rocket className="h-5 w-5" />
              Start Your Global Scale-up
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="flex items-center gap-2 px-8 py-4 rounded-lg border-glass glass text-foreground font-semibold hover:bg-secondary transition-colors">
              <Cpu className="h-5 w-5 text-gold" />
              Explore AI Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass border-glass rounded-xl p-6 hover-lift">
                <p className="text-3xl lg:text-4xl font-black text-gradient-gold">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
