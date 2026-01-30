import { Layout } from "@/components/layout";
import { SectionHeader, CourseCard } from "@/components/shared";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";

// Course data by category
const courses = {
  technology: [
    {
      title: "Web Development Fundamentals",
      description: "Build modern, responsive websites from scratch using HTML, CSS, and JavaScript.",
      category: "tech" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Students",
    },
    {
      title: "Full-Stack Development",
      description: "Master front-end and back-end technologies to build complete web applications.",
      category: "tech" as const,
      level: "Intermediate" as const,
      duration: "16 weeks",
      audience: "Professionals",
    },
    {
      title: "Data Analytics with Python",
      description: "Learn to analyze, visualize, and interpret data using Python and modern libraries.",
      category: "tech" as const,
      level: "Intermediate" as const,
      duration: "10 weeks",
      audience: "All Levels",
    },
    {
      title: "Cloud Computing Essentials",
      description: "Understand cloud infrastructure, deployment, and services with AWS and Azure.",
      category: "tech" as const,
      level: "Intermediate" as const,
      duration: "8 weeks",
      audience: "Professionals",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn security principles, threat analysis, and protective measures for digital systems.",
      category: "tech" as const,
      level: "Beginner" as const,
      duration: "6 weeks",
      audience: "All Levels",
    },
    {
      title: "Machine Learning Foundations",
      description: "Build predictive models and understand core ML algorithms and applications.",
      category: "tech" as const,
      level: "Advanced" as const,
      duration: "12 weeks",
      audience: "Professionals",
    },
  ],
  business: [
    {
      title: "Strategic Business Communication",
      description: "Master professional communication for presentations, meetings, and negotiations.",
      category: "business" as const,
      level: "Intermediate" as const,
      duration: "6 weeks",
      audience: "All Levels",
    },
    {
      title: "Project Management Essentials",
      description: "Learn to plan, execute, and deliver projects using agile and traditional methodologies.",
      category: "business" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Professionals",
    },
    {
      title: "Financial Analysis & Modeling",
      description: "Build financial models and analyze business performance with confidence.",
      category: "business" as const,
      level: "Intermediate" as const,
      duration: "10 weeks",
      audience: "Professionals",
    },
    {
      title: "Digital Marketing Strategy",
      description: "Create and execute marketing campaigns across digital channels.",
      category: "business" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "All Levels",
    },
  ],
  creative: [
    {
      title: "Digital Design Foundations",
      description: "Create compelling visuals for digital platforms using modern design tools.",
      category: "creative" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Students",
    },
    {
      title: "UX/UI Design Principles",
      description: "Design user-centered digital experiences that are intuitive and engaging.",
      category: "creative" as const,
      level: "Intermediate" as const,
      duration: "10 weeks",
      audience: "All Levels",
    },
    {
      title: "Video Production & Editing",
      description: "Learn to create professional video content from concept to final cut.",
      category: "creative" as const,
      level: "Beginner" as const,
      duration: "8 weeks",
      audience: "Students",
    },
    {
      title: "Brand Identity Design",
      description: "Develop cohesive brand systems including logos, typography, and visual guidelines.",
      category: "creative" as const,
      level: "Intermediate" as const,
      duration: "6 weeks",
      audience: "Professionals",
    },
  ],
  professional: [
    {
      title: "Leadership & Team Management",
      description: "Develop skills to lead teams, manage conflicts, and drive organizational success.",
      category: "professional" as const,
      level: "Intermediate" as const,
      duration: "8 weeks",
      audience: "Professionals",
    },
    {
      title: "Critical Thinking & Problem Solving",
      description: "Strengthen analytical skills and learn structured approaches to complex problems.",
      category: "professional" as const,
      level: "Beginner" as const,
      duration: "6 weeks",
      audience: "All Levels",
    },
    {
      title: "Negotiation Skills",
      description: "Master the art of negotiation in business and professional contexts.",
      category: "professional" as const,
      level: "Intermediate" as const,
      duration: "4 weeks",
      audience: "Professionals",
    },
    {
      title: "Personal Productivity Systems",
      description: "Build sustainable habits and systems for high performance and well-being.",
      category: "professional" as const,
      level: "Beginner" as const,
      duration: "4 weeks",
      audience: "All Levels",
    },
  ],
};

type CourseData = {
  title: string;
  description: string;
  category: "tech" | "business" | "creative" | "professional";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  audience: string;
};

function CategorySection({ 
  title, 
  description, 
  courses: categoryCourses 
}: { 
  title: string; 
  description: string; 
  courses: CourseData[];
}) {
  return (
    <div>
      <FadeIn>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </FadeIn>
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
        {categoryCourses.map((course) => (
          <StaggerItem key={course.title}>
            <HoverScale>
              <CourseCard {...course} />
            </HoverScale>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export default function Skills() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-sm bg-gradient-subtle">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader
              title="Skill-based learning for real careers"
              description="Structured courses designed to build practical abilities that employers value. No fluff, no filler — just skills that matter."
            />
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-wide space-y-20">
          <CategorySection
            title="Technology"
            description="Build technical skills for the digital economy. From coding to cloud, data to security."
            courses={courses.technology}
          />
          <CategorySection
            title="Business"
            description="Develop business acumen and strategic thinking for modern organizations."
            courses={courses.business}
          />
          <CategorySection
            title="Creative"
            description="Master creative tools and thinking for digital design and content creation."
            courses={courses.creative}
          />
          <CategorySection
            title="Professional Development"
            description="Build soft skills and personal effectiveness for career growth."
            courses={courses.professional}
          />
        </div>
      </section>
    </Layout>
  );
}
