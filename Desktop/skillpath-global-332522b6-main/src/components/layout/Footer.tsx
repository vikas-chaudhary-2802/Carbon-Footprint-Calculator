import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tekhlymLogo from "@/assets/tekhlym-logo.png";
import { FadeIn } from "@/components/animations";

const footerLinks = {
  platform: [
    { label: "Skills", href: "/skills" },
    { label: "For Professionals", href: "/professionals" },
    { label: "About", href: "/about" },
  ],
  resources: [
    { label: "Get Started", href: "/get-started" },
    { label: "Contact", href: "/get-started" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide section-sm">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <FadeIn className="md:col-span-2">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <img 
                src={tekhlymLogo} 
                alt="Tekhlym Global" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Tekhlym <span className="text-accent">Global</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
              Skill-first education for a global workforce. Practical, accessible, 
              and career-aligned learning for students and professionals.
            </p>
          </FadeIn>

          {/* Platform Links */}
          <FadeIn delay={0.1}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Resources */}
          <FadeIn delay={0.2}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Bottom */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tekhlym Global. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Skills that matter. Careers that grow.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
