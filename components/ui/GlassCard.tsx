import { CSSProperties, ReactNode } from "react";

export default function GlassCard({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(26,92,69,0.40)",
        border: "0.5px solid rgba(200,230,208,0.18)",
        borderRadius: 24,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}