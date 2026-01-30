import { cn } from "@/lib/utils";
import { Clock, Signal, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  category: "tech" | "business" | "creative" | "professional";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  audience: string;
  className?: string;
}

const categoryColors = {
  tech: "bg-category-tech/10 text-category-tech border-category-tech/20",
  business: "bg-category-business/10 text-category-business border-category-business/20",
  creative: "bg-category-creative/10 text-category-creative border-category-creative/20",
  professional: "bg-category-professional/10 text-category-professional border-category-professional/20",
};

const categoryLabels = {
  tech: "Technology",
  business: "Business",
  creative: "Creative",
  professional: "Professional",
};

export function CourseCard({ 
  title, 
  description, 
  category, 
  level, 
  duration, 
  audience,
  className 
}: CourseCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 card-hover",
        className
      )}
    >
      {/* Category Badge */}
      <span 
        className={cn(
          "mb-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium",
          categoryColors[category]
        )}
      >
        {categoryLabels[category]}
      </span>

      {/* Title & Description */}
      <h3 className="mb-2 text-lg font-semibold leading-tight">{title}</h3>
      <p className="mb-6 flex-1 text-sm text-muted-foreground">{description}</p>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Signal className="h-3.5 w-3.5" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          <span>{audience}</span>
        </div>
      </div>
    </div>
  );
}
