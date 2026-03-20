import { motion } from "framer-motion";
import oracleLogo from "@/assets/partners/oracle.webp";
import hubspotLogo from "@/assets/partners/hubspot.png";
import zohoLogo from "@/assets/partners/zoho.png";
import salesforceLogo from "@/assets/partners/salesforce.png";
import servicenowLogo from "@/assets/partners/servicenow.png";
import awsLogo from "@/assets/partners/aws.jpg";
import gcpLogo from "@/assets/partners/gcp.jpg";

const partners = [
  { name: "GCP", logo: gcpLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Zoho", logo: zohoLogo },
];

// Double the array for seamless infinite scroll
const marqueePartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Trusted Ecosystem</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-3 mb-4">
            Strategic <span className="text-gradient-gold">Partnerships</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Official partner status with the world's leading technology platforms.</p>
        </motion.div>

        {/* Marquee container */}
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee gap-6">
            {marqueePartners.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="glass border-glass rounded-xl p-6 flex items-center justify-center hover-lift aspect-[4/3] bg-white/10 shrink-0 w-[200px]"
              >
                <img src={p.logo} alt={`${p.name} Partner`} className="max-h-16 max-w-[85%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
