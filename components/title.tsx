import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export default function Title({ title, className }: Props) {
  return (
    <span className={cn("text-pretty text-primary", className)}>{title}</span>
  );
}
