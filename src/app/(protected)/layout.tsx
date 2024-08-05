import { ReactNode, Suspense } from "react";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return <div className="bg-white">{children}</div>;
}
