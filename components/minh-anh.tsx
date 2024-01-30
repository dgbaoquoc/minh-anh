import { cn } from "@/lib/utils";

export default function MinhAnhTypo({ className }: { className?: string }) {
  return (
    <span className={cn("text-pretty text-primary", className)}>Minh Anh</span>
  );
}
