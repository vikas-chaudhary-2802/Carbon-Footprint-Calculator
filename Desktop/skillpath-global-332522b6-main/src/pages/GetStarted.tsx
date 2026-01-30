import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations";

export default function GetStarted() {
  return (
    <Layout>
      <section className="section">
        <div className="container-tight">
          <div className="mx-auto max-w-xl">
            {/* Header */}
            <FadeIn className="text-center">
              <span className="mb-4 inline-block text-sm font-medium tracking-wide text-accent">
                Get Started
              </span>
              <h1 className="text-3xl md:text-4xl">Let's build your skills</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We're currently preparing for launch. Leave your details and 
                be the first to know when Tekhlym Global opens.
              </p>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <motion.div 
                className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8"
                whileHover={{ boxShadow: "0 20px 40px -12px hsl(var(--tekhlym-slate) / 0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name" 
                        className="h-11 transition-all duration-200 focus:scale-[1.01]"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name" 
                        className="h-11 transition-all duration-200 focus:scale-[1.01]"
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="h-11 transition-all duration-200 focus:scale-[1.01]"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-medium text-foreground">
                      I am a...
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Student", "Working Professional", "Career Switcher", "Other"].map((type, idx) => (
                        <motion.button
                          key={type}
                          type="button"
                          className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-accent hover:bg-accent/5"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-medium text-foreground">
                      What skills interest you? <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <Textarea 
                      placeholder="Tell us about the skills you'd like to learn..."
                      className="min-h-[100px] resize-none transition-all duration-200 focus:scale-[1.005]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button type="submit" size="lg" className="w-full group">
                      <Mail className="mr-2 h-4 w-4" />
                      Join the Waitlist
                      <motion.span
                        className="ml-1 inline-block opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.p 
                    className="text-center text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    By joining, you agree to receive updates about Tekhlym Global. 
                    No spam, unsubscribe anytime.
                  </motion.p>
                </form>
              </motion.div>
            </FadeIn>

            {/* Coming Soon Note */}
            <FadeIn delay={0.4}>
              <motion.div 
                className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center"
                whileHover={{ 
                  borderColor: "hsl(var(--accent) / 0.4)",
                  backgroundColor: "hsl(var(--accent) / 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Coming Soon</span> — 
                  We're building something thoughtful. The first cohort will launch soon. 
                  Early registrants get priority access.
                </p>
              </motion.div>
            </FadeIn>

            {/* Back Link */}
            <FadeIn delay={0.5}>
              <div className="mt-8 text-center">
                <Button asChild variant="ghost" size="sm" className="group">
                  <Link to="/">
                    <motion.span
                      className="mr-2 inline-block"
                      whileHover={{ x: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </motion.span>
                    Back to Home
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
