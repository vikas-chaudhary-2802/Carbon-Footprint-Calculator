import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp, Lightbulb, Target, Clock, Award, Zap } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { SectionHeader, FeatureCard } from "@/components/shared";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";

function HeroSection() {
  return (
    <section className="section bg-gradient-subtle overflow-hidden relative">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="mb-4 inline-block text-sm font-medium tracking-wide text-accent">
              For Working Professionals
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-balance">
              Grow your career without{" "}
              <span className="text-accent">leaving your job</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Upskilling designed for people with full-time responsibilities. 
              Stay relevant, advance faster, and build confidence in your expertise.
            </p>
          </FadeIn>
        </div>
      </div>
      
      {/* Subtle animated background */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <motion.div 
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingDown className="h-6 w-6" />
              </motion.div>
              <h2 className="mt-6 text-balance">The challenge professionals face today</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  The skills that got you here won't get you there. Technology evolves, 
                  industries shift, and what was cutting-edge five years ago is now baseline.
                </p>
                <p>
                  Yet most working professionals are stuck. Full calendars, family commitments, 
                  and the pressure to perform leave no room for learning. Traditional education 
                  doesn't fit — who has time for a two-year program?
                </p>
                <p>
                  The result? Career stagnation. Watching younger colleagues with newer skills 
                  move ahead. Feeling increasingly uncertain about your relevance.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <motion.div 
              className="rounded-2xl border border-border bg-card p-8"
              whileHover={{ boxShadow: "0 20px 40px -12px hsl(var(--tekhlym-slate) / 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold">Common frustrations:</h4>
              <ul className="mt-6 space-y-4">
                {[
                  "\"I don't have time to go back to school\"",
                  "\"Online courses feel disconnected from real work\"",
                  "\"I learn something but don't know how to apply it\"",
                  "\"I'm not sure which skills actually matter\"",
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <motion.div 
              className="rounded-2xl border border-accent/20 bg-gradient-teal p-8"
              whileHover={{ boxShadow: "0 20px 40px -12px hsl(var(--tekhlym-teal) / 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold">What changes with upskilling:</h4>
              <ul className="mt-6 space-y-4">
                {[
                  "Confidence in conversations about new technologies",
                  "Ability to lead projects in emerging areas",
                  "Credibility when proposing innovative solutions",
                  "Options — for promotions, new roles, or new paths",
                  "Resilience against industry disruption",
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs"
                      whileHover={{ scale: 1.2 }}
                    >
                      ✓
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
            <div>
              <motion.div 
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="h-6 w-6" />
              </motion.div>
              <h2 className="mt-6 text-balance">How upskilling solves career stagnation</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  The solution isn't more credentials. It's targeted skill acquisition — 
                  learning exactly what you need, when you need it, in ways you can immediately apply.
                </p>
                <p>
                  Modern upskilling respects your time. Focused modules instead of sprawling curricula. 
                  Real-world projects instead of abstract theory. Flexible schedules instead of rigid timelines.
                </p>
                <p>
                  The goal isn't to become a student again. It's to stay a professional who keeps growing.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const approaches = [
    {
      icon: Clock,
      title: "Designed for Busy Schedules",
      description: "Modules built for 3-5 hours per week. Learn at your pace, on your schedule, without sacrificing work or life.",
    },
    {
      icon: Target,
      title: "Immediately Applicable",
      description: "Every skill connects to real work. Apply what you learn on Monday to problems you're facing on Tuesday.",
    },
    {
      icon: Lightbulb,
      title: "Curated, Not Overwhelming",
      description: "We select what matters. No need to wade through endless options — we've done the filtering for you.",
    },
    {
      icon: Award,
      title: "Outcomes Over Certificates",
      description: "Focus on what you can do, not what paper you have. Build a portfolio of abilities, not just credentials.",
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            label="Our Approach"
            title="How Tekhlym supports continuous learning"
            description="We've designed everything around how professionals actually learn — in small chunks, with clear purpose, and immediate application."
          />
        </FadeIn>
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {approaches.map((item) => (
            <StaggerItem key={item.title}>
              <HoverScale>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    {
      icon: Zap,
      title: "Stay Relevant",
      description: "Keep pace with industry changes without falling behind. Build skills before they become urgent requirements.",
    },
    {
      icon: TrendingUp,
      title: "Accelerate Growth",
      description: "Position yourself for promotions, new opportunities, and leadership roles. Let your skills open doors.",
    },
    {
      icon: Award,
      title: "Build Confidence",
      description: "Speak with authority on new topics. Lead discussions instead of following them. Trust your expertise.",
    },
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            label="Outcomes"
            title="What professionals gain"
            description="Real results from focused learning."
          />
        </FadeIn>
        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {outcomes.map((item) => (
            <StaggerItem key={item.title}>
              <HoverScale>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-tight text-center relative z-10">
        <FadeIn>
          <h2 className="text-balance">Your career doesn't have to plateau</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with one skill. See how it feels to grow again.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="xl" className="group">
              <Link to="/get-started">
                Start Learning
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
  );
}

export default function Professionals() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ApproachSection />
      <OutcomesSection />
      <CTASection />
    </Layout>
  );
}
