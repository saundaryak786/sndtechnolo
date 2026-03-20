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

// Connection lines between select cities to show network
const connections = [
  { from: { x: 68, y: 42 }, to: { x: 22, y: 35 } },   // India → USA
  { from: { x: 68, y: 42 }, to: { x: 47, y: 25 } },   // India → UK
  { from: { x: 68, y: 42 }, to: { x: 75, y: 55 } },   // India → Singapore
  { from: { x: 68, y: 42 }, to: { x: 60, y: 42 } },   // India → UAE
  { from: { x: 22, y: 35 }, to: { x: 47, y: 25 } },   // USA → UK
  { from: { x: 75, y: 55 }, to: { x: 83, y: 35 } },   // Singapore → Japan
  { from: { x: 75, y: 55 }, to: { x: 82, y: 72 } },   // Singapore → Australia
  { from: { x: 47, y: 25 }, to: { x: 52, y: 27 } },   // UK → Germany
  { from: { x: 22, y: 35 }, to: { x: 18, y: 45 } },   // USA → Mexico
  { from: { x: 50, y: 52 }, to: { x: 55, y: 72 } },   // Nigeria → South Africa
];

// Dot-matrix world map (simplified continental outlines)
function WorldDotGrid() {
  // Generate dots that roughly form world continents
  const dots: { x: number; y: number; opacity: number }[] = [];

  // Helper to add continent region dots
  const addRegion = (xMin: number, xMax: number, yMin: number, yMax: number, density: number, shape?: (x: number, y: number) => boolean) => {
    for (let x = xMin; x <= xMax; x += density) {
      for (let y = yMin; y <= yMax; y += density) {
        if (!shape || shape(x, y)) {
          dots.push({ x, y, opacity: 0.15 + Math.random() * 0.1 });
        }
      }
    }
  };

  // North America
  addRegion(8, 30, 15, 50, 2.5, (x, y) => {
    if (y < 20 && x > 25) return false;
    if (y > 45 && x < 15) return false;
    if (y > 40 && x > 27) return false;
    return true;
  });

  // South America
  addRegion(22, 38, 50, 85, 2.5, (x, y) => {
    if (y > 75 && x > 34) return false;
    if (y > 80 && x > 30) return false;
    if (y < 55 && x > 35) return false;
    if (y < 55 && x < 24) return false;
    return true;
  });

  // Europe
  addRegion(44, 58, 15, 38, 2.5, (x, y) => {
    if (y < 20 && x > 55) return false;
    return true;
  });

  // Africa
  addRegion(44, 62, 38, 78, 2.5, (x, y) => {
    if (y > 70 && (x < 48 || x > 58)) return false;
    if (y > 75 && (x < 50 || x > 56)) return false;
    if (y < 42 && x > 58) return false;
    return true;
  });

  // Asia
  addRegion(58, 90, 15, 50, 2.5, (x, y) => {
    if (y < 20 && x > 85) return false;
    if (y > 45 && x < 62) return false;
    return true;
  });

  // Southeast Asia / Indonesia
  addRegion(72, 88, 48, 62, 2.5, (x, y) => {
    return Math.random() > 0.3;
  });

  // Australia
  addRegion(76, 90, 65, 80, 2.5, (x, y) => {
    if (y > 78 && x > 86) return false;
    return true;
  });

  return (
    <>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={`${d.x}%`}
          cy={`${d.y}%`}
          r="1.2"
          fill={`hsl(40 60% 55% / ${d.opacity})`}
        />
      ))}
    </>
  );
}

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass border-glass rounded-2xl p-4 lg:p-8 overflow-hidden"
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Dot-matrix world map */}
            <WorldDotGrid />

            {/* Connection lines */}
            {connections.map((conn, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${conn.from.x}%`}
                y1={`${conn.from.y}%`}
                x2={`${conn.to.x}%`}
                y2={`${conn.to.y}%`}
                stroke="hsl(40 60% 55% / 0.15)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
              />
            ))}

            {/* Country markers */}
            {countries.map((c, i) => (
              <motion.g
                key={c.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                style={{ transformOrigin: `${c.x}% ${c.y}%` }}
              >
                {/* Outer pulse ring */}
                <circle cx={`${c.x}%`} cy={`${c.y}%`} r="12" fill="none" stroke="hsl(40 60% 55% / 0.3)" strokeWidth="1">
                  <animate attributeName="r" values="6;16;6" dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </circle>

                {/* Glow */}
                <circle cx={`${c.x}%`} cy={`${c.y}%`} r="8" fill="hsl(40 60% 55% / 0.12)" />

                {/* Core dot */}
                <circle cx={`${c.x}%`} cy={`${c.y}%`} r="4" fill="hsl(40 60% 55%)" className="drop-shadow-lg">
                  <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
                </circle>

                {/* Label - always visible */}
                <text
                  x={`${c.x}%`}
                  y={`${c.y - 3}%`}
                  textAnchor="middle"
                  fill="hsl(36 30% 88%)"
                  fontSize="8"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  style={{ paintOrder: "stroke", stroke: "hsl(30 6% 6% / 0.8)", strokeWidth: 3 }}
                >
                  {c.name}
                </text>
              </motion.g>
            ))}
          </svg>

          {/* Country labels shown on hover - HTML overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              {countries.map((c, i) => (
                <div
                  key={`label-${c.name}`}
                  className="absolute pointer-events-auto group"
                  style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)", width: 30, height: 30 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-card/95 backdrop-blur-sm text-[10px] font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap border border-gold/30 shadow-[0_0_15px_rgba(196,167,103,0.2)] z-20">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
