import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, RefreshCw, Target, Globe, Zap, Code, TrendingUp, Palette, Award, Shield, CheckCircle2, BadgeCheck, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { SectionHeader, FeatureCard, CourseCard } from "@/components/shared";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";
import { FloatingShapes, GradientBackground } from "@/components/decorative";

// Hero Section
function HeroSection() {
  return (
    <section className="section-hero overflow-hidden relative">
      {/* Enhanced gradient background */}
      <GradientBackground variant="hero" />
      
      {/* Floating decorative shapes */}
      <FloatingShapes />
      
      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated badge */}
          <FadeIn duration={0.5}>
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Guaranteed Placement Program</span>
            </motion.div>
          </FadeIn>
          
          <FadeIn duration={0.7}>
            <h1 className="text-balance">
              Skills that build careers.{" "}
              <span className="relative">
                <span className="text-accent">Globally.</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 -skew-x-6 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.7}>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              A skill-first learning platform for students and professionals who want 
              practical skills that matter in the real world.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} duration={0.7}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="xl" className="group text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                <Link to="/skills">
                  Explore Skills
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base backdrop-blur-sm bg-background/50">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </FadeIn>
          
          {/* Stats row */}
          <FadeIn delay={0.6} duration={0.7}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { value: "2,500+", label: "Students Placed" },
                { value: "₹7 LPA", label: "Min. Package" },
                { value: "95%", label: "Placement Rate" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
          <ArrowRight className="h-4 w-4 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Who It's For Section
function AudienceSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Build practical skills alongside your studies. Graduate with expertise employers actually need.",
    },
    {
      icon: Briefcase,
      title: "Working Professionals",
      description: "Upskill without leaving your job. Stay relevant in a changing world.",
    },
    {
      icon: RefreshCw,
      title: "Career Switchers",
      description: "Transition into new fields with structured, skill-based learning paths.",
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            label="Who It's For"
            title="Built for people who value real skills"
            description="Whether you're starting out, advancing, or pivoting — we focus on what matters."
          />
        </FadeIn>
        <StaggerContainer className="mt-16 grid auto-rows-fr gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {audiences.map((item) => (
            <StaggerItem key={item.title}>
              <HoverScale className="h-full">
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

// Placement Guarantee Section
function GuaranteeSection() {
  const guarantees = [
    {
      icon: GraduationCap,
      title: "For Students",
      salary: "₹7 LPA",
      subtitle: "Minimum Guaranteed Package",
      description: "Complete the program with full attendance and timely assignments — we guarantee placement with a minimum ₹7 LPA package or your money back.",
      criteria: [
        "95%+ class attendance",
        "All assignments submitted on time",
        "Pass all assessments",
        "Complete capstone project"
      ]
    },
    {
      icon: Briefcase,
      title: "For Professionals",
      salary: "Higher CTC",
      subtitle: "Guaranteed Salary Hike",
      description: "Meet our commitment criteria and we guarantee your next role will offer a higher CTC than your current package — or we refund your fees.",
      criteria: [
        "Complete all modules",
        "Active participation",
        "Portfolio of projects",
        "Interview preparation"
      ]
    },
  ];

  return (
    <section className="section bg-gradient-teal relative overflow-hidden">
      <div className="container-wide relative z-10">
        <FadeIn>
          <SectionHeader
            label="Our Promise"
            title="Guaranteed Placement or Money Back"
            description="We're so confident in our training that we back it with a guarantee. Meet the criteria, and we ensure your career growth."
          />
        </FadeIn>
        
        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2" staggerDelay={0.2}>
          {guarantees.map((item) => (
            <StaggerItem key={item.title}>
              <HoverScale className="h-full">
                <div className="group h-full rounded-2xl border-2 border-accent/20 bg-card p-10 transition-all duration-300 hover:border-accent hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-lg font-bold uppercase tracking-wider text-accent">{item.title}</span>
                      <div className="mt-2 flex items-baseline gap-3">
                        <span className="text-4xl md:text-5xl font-bold text-foreground">{item.salary}</span>
                        <span className="text-lg text-muted-foreground">{item.subtitle}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground/60">Eligibility Criteria</span>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {item.criteria.map((criterion) => (
                        <li key={criterion} className="flex items-center gap-3 text-lg">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-3 rounded-lg bg-accent/10 px-5 py-4">
                    <Shield className="h-6 w-6 text-accent" />
                    <span className="text-lg font-semibold text-foreground">100% Money-Back Guarantee</span>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground">
              <BadgeCheck className="mr-2 inline-block h-6 w-6 text-accent" />
              Join 2,500+ learners who've already secured their dream careers
            </p>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative background */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
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

// Why Tekhlym Section
function WhySection() {
  const reasons = [
    {
      icon: Target,
      title: "Skill-First Learning",
      description: "We prioritize practical abilities over certificates. What you can do matters more than what you've passed.",
    },
    {
      icon: Briefcase,
      title: "Career Relevance",
      description: "Every skill we teach connects to real job requirements and industry needs.",
    },
    {
      icon: Zap,
      title: "Practical Outcomes",
      description: "Learn by doing. Build projects. Solve problems. Apply immediately.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Quality education shouldn't depend on geography. Learn from anywhere.",
    },
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            label="Why Tekhlym Global"
            title="A different approach to learning"
            description="We believe skills matter more than credentials. Here's what makes us different."
          />
        </FadeIn>
        <StaggerContainer className="mt-16 grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <HoverScale className="h-full">
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

// Skill Domains Preview
function DomainsSection() {
  const sampleCourses = [
    {
      title: "Web Development Fundamentals",
      description: "Build modern, responsive websites from scratch using HTML, CSS, and JavaScript.",
      category: "tech" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Students",
    },
    {
      title: "Data Analytics Essentials",
      description: "Learn to analyze data and make data-driven decisions using Python and SQL.",
      category: "tech" as const,
      level: "Intermediate" as const,
      duration: "10 weeks",
      audience: "Professionals",
    },
    {
      title: "Strategic Business Communication",
      description: "Master professional communication for presentations, meetings, and negotiations.",
      category: "business" as const,
      level: "Intermediate" as const,
      duration: "6 weeks",
      audience: "All Levels",
    },
    {
      title: "Digital Design Foundations",
      description: "Create compelling visuals for digital platforms using modern design tools.",
      category: "creative" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Students",
    },
  ];

  const domains = [
    { icon: Code, label: "Technology", count: "12 skills" },
    { icon: TrendingUp, label: "Business", count: "8 skills" },
    { icon: Palette, label: "Creative", count: "6 skills" },
    { icon: Award, label: "Professional", count: "10 skills" },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            label="Skill Domains"
            title="Structured paths for real careers"
            description="Explore curated learning paths across high-demand skill domains."
          />
        </FadeIn>

        {/* Domain Pills */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {domains.map((domain, index) => (
              <motion.div 
                key={domain.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <domain.icon className="h-4 w-4 text-accent" />
                <span className="font-medium">{domain.label}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{domain.count}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Sample Courses */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {sampleCourses.map((course) => (
            <StaggerItem key={course.title}>
              <HoverScale>
                <CourseCard {...course} />
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/skills">
                View All Skills
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Enhanced CTA background */}
      <GradientBackground variant="cta" />
      
      <div className="container-tight text-center relative z-10">
        <FadeIn>
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Start Your Journey Today</span>
          </motion.div>
          <h2 className="text-balance">Ready to build skills that matter?</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 text-lg text-muted-foreground">
            Join a community of learners focused on practical growth.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="xl" className="group shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
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
            <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-background/50">
              <Link to="/skills">Browse Skills</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Main Index Page
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <AudienceSection />
      <GuaranteeSection />
      <WhySection />
      <DomainsSection />
      <CTASection />
    </Layout>
  );
}
