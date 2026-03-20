import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import sndLogo from "@/assets/snd-logo.jpg";

const services = [
  {
    category: "Generative AI & Data Excellence",
    items: [
      { title: "LLM Development & AI Agents", desc: "Custom LLM orchestration and autonomous AI agent development" },
      { title: "AI Integrations", desc: "Seamlessly embedding AI into existing enterprise workflows" },
      { title: "Data Analytics & Predictions", desc: "Advanced predictive modeling and data-driven business intelligence" },
    ],
  },
  {
    category: "Cloud & Ecosystem",
    items: [
      { title: "Cloud Infrastructure", desc: "Manage, optimize, and scale via GCP, AWS, Oracle & more" },
      { title: "CRM & Automation", desc: "Salesforce, HubSpot, Zoho & ServiceNow implementations" },
    ],
  },
  {
    category: "Go-To-Market Engine",
    items: [
      { title: "Global GTM Strategy", desc: "Transition startups into multi-national operations" },
      { title: "Revenue Scaling", desc: "Increase transaction volume with data-driven GTM playbooks" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasMega: true },
  { label: "Partners", href: "#partners" },
  { label: "Global Impact", href: "#global" },
  { label: "Contact", href: "#contact" },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={sndLogo} alt="SND Technology" className="h-10 w-10 rounded-lg object-cover" />
          <span className="text-xl font-bold tracking-tight text-foreground">SND TECH<span className="text-gold">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div key={link.label} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            )
          )}
          <button onClick={scrollToContact} className="px-5 py-2.5 rounded-lg bg-gold text-primary-foreground text-sm font-semibold hover:bg-gold-glow transition-colors">
            Get My AI Strategy
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute left-0 right-0 top-20 glass-strong border-t border-border"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="container mx-auto py-8 px-8 grid grid-cols-3 gap-8">
              {services.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">{group.category}</h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => { setMegaOpen(false); scrollToContact(); }}
                        className="block w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <p className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground py-2">
                  {link.label}
                </a>
              ))}
              <button onClick={() => { setMobileOpen(false); scrollToContact(); }} className="w-full mt-4 px-5 py-3 rounded-lg bg-gold text-primary-foreground text-sm font-semibold">
                Get My AI Strategy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
