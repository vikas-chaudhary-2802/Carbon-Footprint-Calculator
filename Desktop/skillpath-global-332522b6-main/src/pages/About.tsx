import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section bg-gradient-subtle overflow-hidden relative">
        <div className="container-tight text-center">
          <FadeIn>
            <span className="mb-4 inline-block text-sm font-medium tracking-wide text-accent">
              About Tekhlym Global
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-balance">
              Skill-first education for a{" "}
              <span className="text-accent">global workforce</span>
            </h1>
          </FadeIn>
        </div>
        
        {/* Subtle background animation */}
        <motion.div
          className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container-tight">
          <div className="space-y-16">
            {/* Vision */}
            <FadeIn>
              <div>
                <motion.span 
                  className="text-sm font-medium tracking-wide text-accent"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Vision
                </motion.span>
                <h2 className="mt-3 text-3xl">A world where skills define opportunity</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We envision a global workforce where what you can do matters more than where 
                  you studied or what credentials you hold. Where practical ability opens doors 
                  that traditional gatekeeping has kept closed. Where learning is continuous, 
                  accessible, and directly connected to real career outcomes.
                </p>
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.1}>
              <div>
                <motion.span 
                  className="text-sm font-medium tracking-wide text-accent"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Mission
                </motion.span>
                <h2 className="mt-3 text-3xl">Practical, accessible, career-aligned learning</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We build learning experiences that respect your time and focus on outcomes. 
                  Every course is designed to teach skills that employers actually need, in 
                  formats that fit real lives. We remove barriers — geographic, financial, 
                  and structural — that prevent motivated learners from growing.
                </p>
              </div>
            </FadeIn>

            {/* Core Belief */}
            <FadeIn delay={0.2}>
              <motion.div 
                className="rounded-2xl border border-accent/20 bg-gradient-teal p-8 md:p-12"
                whileHover={{ 
                  boxShadow: "0 20px 40px -12px hsl(var(--tekhlym-teal) / 0.15)",
                  borderColor: "hsl(var(--accent) / 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-sm font-medium tracking-wide text-accent"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Core Belief
                </motion.span>
                <h2 className="mt-3 text-3xl">Skills matter more than credentials</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The world is changing. The most successful organizations are hiring for 
                  abilities, not just degrees. The most resilient professionals are those 
                  who keep learning, keep building, keep growing.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We believe in this shift. We believe that a self-taught developer with a 
                  strong portfolio can compete with any computer science graduate. That a 
                  professional who learns data analytics can pivot their entire career. 
                  That skills, demonstrated and applied, are the true currency of the 
                  modern economy.
                </p>
                <motion.p 
                  className="mt-4 text-lg font-medium text-foreground"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  That's why we exist. That's what we build for.
                </motion.p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-muted/30">
        <div className="container-tight text-center">
          <FadeIn>
            <h2 className="text-balance">Join us in building something different</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're a student, professional, or lifelong learner — 
              there's a place for you here.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="xl" className="group">
                <Link to="/get-started">
                  Get Started
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/skills">Explore Skills</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
