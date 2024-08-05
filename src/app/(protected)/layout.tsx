import { ReactNode, Suspense } from "react";
import Loading from "../loading";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-white">{children}</div>
    </Suspense>
  );
}
