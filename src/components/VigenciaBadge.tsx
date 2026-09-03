import { cn } from "../lib/utils";

type Status = "Vigente" | "Reformada" | "Derogada" | "Suspendida";

interface VigenciaBadgeProps {
  status: Status;
  className?: string;
  theme?: "marketing" | "workspace";
}

export function VigenciaBadge({ status, className }: VigenciaBadgeProps) {
  const statusConfig = {
    Vigente: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    Reformada: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    Derogada: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-200",
    },
    Suspendida: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      border: "border-amber-200",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "px-2 py-0.5 text-[9px] font-bold rounded-full border uppercase tracking-wider",
        config.bg,
        config.border,
        config.text,
        className
      )}
    >
      {status}
    </span>
  );
}
