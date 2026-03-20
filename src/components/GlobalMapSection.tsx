import { motion } from "framer-motion";

type Point = { x: number; y: number };
type Country = Point & { name: string };
type Dot = Point & { opacity: number };

const countries: Country[] = [
  { name: "USA", x: 22, y: 35 },
  { name: "Canada", x: 20, y: 25 },
  { name: "UK", x: 47, y: 25 },
  { name: "Germany", x: 52, y: 27 },
  { name: "UAE", x: 60, y: 42 },
  { name: "India", x: 68, y: 42 },
  { name: "Singapore", x: 75, y: 55 },
  { name: "Australia", x: 82, y: 72 },
  { name: "Japan", x: 83, y: 35 },
  { name: "Brazil", x: 32, y: 65 },
  { name: "South Africa", x: 55, y: 72 },
  { name: "France", x: 49, y: 30 },
  { name: "Netherlands", x: 50, y: 24 },
  { name: "Saudi Arabia", x: 58, y: 40 },
  { name: "Nigeria", x: 50, y: 52 },
  { name: "Kenya", x: 58, y: 55 },
  { name: "Mexico", x: 18, y: 45 },
  { name: "Colombia", x: 26, y: 52 },
  { name: "Indonesia", x: 78, y: 58 },
];

const connections = [
  { from: { x: 68, y: 42 }, to: { x: 22, y: 35 } },
  { from: { x: 68, y: 42 }, to: { x: 47, y: 25 } },
  { from: { x: 68, y: 42 }, to: { x: 75, y: 55 } },
  { from: { x: 68, y: 42 }, to: { x: 60, y: 42 } },
  { from: { x: 22, y: 35 }, to: { x: 47, y: 25 } },
  { from: { x: 75, y: 55 }, to: { x: 83, y: 35 } },
  { from: { x: 75, y: 55 }, to: { x: 82, y: 72 } },
  { from: { x: 47, y: 25 }, to: { x: 52, y: 27 } },
  { from: { x: 22, y: 35 }, to: { x: 18, y: 45 } },
  { from: { x: 50, y: 52 }, to: { x: 55, y: 72 } },
];

const continentBlobs = [
  { cx: 190, cy: 170, rx: 120, ry: 85 },
  { cx: 300, cy: 325, rx: 75, ry: 110 },
  { cx: 520, cy: 140, rx: 70, ry: 45 },
  { cx: 540, cy: 285, rx: 95, ry: 125 },
  { cx: 735, cy: 175, rx: 175, ry: 105 },
  { cx: 820, cy: 365, rx: 90, ry: 55 },
];

const buildDots = (): Dot[] => {
  const dots: Dot[] = [];

  const addRegion = (
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number,
    density: number,
    baseOpacity: number,
    shape?: (x: number, y: number) => boolean,
  ) => {
    for (let x = xMin; x <= xMax; x += density) {
      for (let y = yMin; y <= yMax; y += density) {
        if (!shape || shape(x, y)) {
          const variance = ((Math.round(x * 10) + Math.round(y * 10)) % 5) * 0.03;
          dots.push({ x, y, opacity: Math.min(baseOpacity + variance, 0.55) });
        }
      }
    }
  };

  addRegion(8, 30, 15, 50, 2.4, 0.22, (x, y) => !(y < 20 && x > 25) && !(y > 45 && x < 15) && !(y > 40 && x > 27));
  addRegion(22, 38, 50, 85, 2.4, 0.2, (x, y) => !(y > 75 && x > 34) && !(y > 80 && x > 30) && !(y < 55 && x > 35) && !(y < 55 && x < 24));
  addRegion(44, 58, 15, 38, 2.4, 0.24, (x, y) => !(y < 20 && x > 55));
  addRegion(44, 62, 38, 78, 2.4, 0.22, (x, y) => !(y > 70 && (x < 48 || x > 58)) && !(y > 75 && (x < 50 || x > 56)) && !(y < 42 && x > 58));
  addRegion(58, 90, 15, 50, 2.4, 0.24, (x, y) => !(y < 20 && x > 85) && !(y > 45 && x < 62));
  addRegion(72, 88, 48, 62, 2.4, 0.2, (x, y) => (Math.round(x + y) % 4 !== 0));
  addRegion(76, 90, 65, 80, 2.4, 0.22, (x, y) => !(y > 78 && x > 86));

  return dots;
};

const worldDots = buildDots();

function WorldMapBackground() {
  return (
    <>
      {continentBlobs.map((blob, index) => (
        <ellipse
          key={`blob-${index}`}
          cx={blob.cx}
          cy={blob.cy}
          rx={blob.rx}
          ry={blob.ry}
          fill="hsl(var(--accent) / 0.08)"
          stroke="hsl(var(--accent) / 0.12)"
          strokeWidth="1"
        />
      ))}

      {worldDots.map((dot, index) => (
        <circle
          key={`dot-${index}`}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r="1.6"
          fill={`hsl(var(--accent) / ${dot.opacity})`}
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.08),transparent_65%)]" />

          <svg viewBox="0 0 1000 500" className="relative z-10 w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Global reach map">
            <defs>
              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <WorldMapBackground />

            {connections.map((conn, index) => (
              <motion.line
                key={`line-${index}`}
                x1={`${conn.from.x}%`}
                y1={`${conn.from.y}%`}
                x2={`${conn.to.x}%`}
                y2={`${conn.to.y}%`}
                stroke="hsl(var(--accent) / 0.3)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.08, duration: 1 }}
              />
            ))}

            {countries.map((country, index) => (
              <motion.g
                key={country.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 220 }}
                style={{ transformOrigin: `${country.x}% ${country.y}%` }}
              >
                <circle cx={`${country.x}%`} cy={`${country.y}%`} r="16" fill="hsl(var(--accent) / 0.12)" filter="url(#mapGlow)">
                  <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" begin={`${index * 0.18}s`} />
                  <animate attributeName="opacity" values="0.35;0.12;0.35" dur="3s" repeatCount="indefinite" begin={`${index * 0.18}s`} />
                </circle>
                <circle cx={`${country.x}%`} cy={`${country.y}%`} r="6" fill="hsl(var(--accent))" stroke="hsl(var(--background))" strokeWidth="2">
                  <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin={`${index * 0.12}s`} />
                </circle>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
