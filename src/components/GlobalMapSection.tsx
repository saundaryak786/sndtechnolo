import { motion } from "framer-motion";

const countries = [
  { name: "USA", x: 22, y: 35 }, { name: "Canada", x: 20, y: 25 },
  { name: "UK", x: 47, y: 25 }, { name: "Germany", x: 52, y: 27 },
  { name: "UAE", x: 60, y: 42 }, { name: "India", x: 68, y: 42 },
  { name: "Singapore", x: 75, y: 55 }, { name: "Australia", x: 82, y: 72 },
  { name: "Japan", x: 83, y: 35 }, { name: "Brazil", x: 32, y: 65 },
  { name: "South Africa", x: 55, y: 72 }, { name: "France", x: 49, y: 30 },
  { name: "Netherlands", x: 50, y: 24 }, { name: "Saudi Arabia", x: 58, y: 40 },
  { name: "Nigeria", x: 50, y: 52 }, { name: "Kenya", x: 58, y: 55 },
  { name: "Mexico", x: 18, y: 45 }, { name: "Colombia", x: 26, y: 52 },
  { name: "Indonesia", x: 78, y: 58 },
];

export default function GlobalMapSection() {
  return (
    <section id="global" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Global Footprint</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-3 mb-4">
            Impact Across <span className="text-gradient-gold">19+ Countries</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From Silicon Valley to Singapore, we help startups conquer markets worldwide.</p>
        </motion.div>

        <div className="relative glass border-glass rounded-2xl p-8 lg:p-12 overflow-hidden">
          {/* Simple dot map */}
          <div className="relative w-full" style={{ paddingBottom: "50%" }}>
            {/* World outline hint - subtle grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }} />

            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                className="absolute group"
                style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-gold animate-pulse-glow" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: "3s", animationDelay: `${i * 0.2}s` }} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-card text-[10px] font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-glass">
                    {c.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
