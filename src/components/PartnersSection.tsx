import { motion } from "framer-motion";
import oracleLogo from "@/assets/partners/oracle.webp";
import hubspotLogo from "@/assets/partners/hubspot.png";
import zohoLogo from "@/assets/partners/zoho.png";
import salesforceLogo from "@/assets/partners/salesforce.png";
import servicenowLogo from "@/assets/partners/servicenow.png";
import awsLogo from "@/assets/partners/aws.jpg";

const partners = [
  { name: "AWS", logo: awsLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Zoho", logo: zohoLogo },
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass border-glass rounded-xl p-6 flex items-center justify-center hover-lift aspect-[4/3]"
            >
              <img src={p.logo} alt={`${p.name} Partner`} className="max-h-12 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
