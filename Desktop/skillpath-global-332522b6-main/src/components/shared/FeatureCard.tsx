import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border bg-card p-10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg",
        className
      )}
    >
      {Icon && (
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-8 w-8" />
        </div>
      )}
      <h4 className="mb-5 text-2xl md:text-3xl font-bold leading-tight">{title}</h4>
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
