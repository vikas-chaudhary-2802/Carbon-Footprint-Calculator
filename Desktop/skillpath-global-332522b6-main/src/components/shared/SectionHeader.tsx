import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  align = "center",
  className 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="mb-6 inline-block text-lg font-bold uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
