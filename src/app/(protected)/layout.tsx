import { ReactNode } from "react";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="h-screen w-screen grid grid-rows-3 grid-flow-col bg-white">
      {children}
    </div>
  );
}
