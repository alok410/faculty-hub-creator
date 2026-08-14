import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";

const QUICK = [
  { label: "About Us", to: "/about" },
  { label: "Admissions", to: "/admissions/degree" },
  { label: "Placement", to: "/placement" },
  { label: "Gallery", to: "/gallery" },
  { label: "Enquiry Form", to: "/enquiry" },
  { label: "Anti Ragging", to: "/anti-ragging" },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-brand-navy text-primary-foreground">
      <div className="bg-brand-red py-2 text-center text-sm font-medium">
        24*7 Women Helpline: +91 7827170170
      </div>
      <Stagger className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-3">
        <StaggerItem>
          <img src="/site/gtulogo.jpg" alt="GTU logo" className="mb-3 h-14 w-14 rounded-full object-cover" />
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            We are the first ever Degree Engineering Institution in North Gujarat region managed by
            Gujarat Technological University (GTU).
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/share/1HhoEwofu7/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-primary-foreground/10 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/gtu_itr_official" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-primary-foreground/10 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/gtu-institute-of-technology-and-research-gtu-itr-927170258" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full bg-primary-foreground/10 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </StaggerItem>

        <StaggerItem>
          <h3 className="mb-3 font-heading text-lg font-bold uppercase">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-gold">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <h3 className="mb-3 font-heading text-lg font-bold uppercase">Contact Us</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:admission_gperi@gtu.edu.in" className="hover:text-brand-gold">admission_gperi@gtu.edu.in</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Ta. &amp; Dist. Mehsana - 384460, Gujarat, India.</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="tel:+919909039233" className="hover:text-brand-gold">+91-9909039233</a>
            </li>
          </ul>
        </StaggerItem>
      </Stagger>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/70">
        Copyright © {new Date().getFullYear()} Gujarat Technological University - Institute of Technology &amp; Research
      </div>
    </footer>
  );
}
