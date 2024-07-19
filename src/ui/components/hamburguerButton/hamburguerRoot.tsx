import { ReactNode } from "react";

interface HamburguerRootProps {
  children: ReactNode;
}

export default function HamburguerRoot({ children }: HamburguerRootProps) {
  return (
    <div className="relative z-20">
      <nav className="sticky top-0 inset-x-0 h-16">{children}</nav>
    </div>
  );
}
