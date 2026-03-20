import sndLogo from "@/assets/snd-logo.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={sndLogo} alt="SND Technology" className="h-8 w-8 rounded-lg object-cover" />
            <span className="text-sm font-bold text-foreground">SND TECH<span className="text-gold">.</span></span>
            <span className="text-xs text-muted-foreground">Place of Solution</span>
          </div>
          <div className="flex items-center gap-6">
            {["Home", "Services", "Partners", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SND Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
