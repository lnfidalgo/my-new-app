import { ReactNode } from "react";

interface FeatureRootProps {
  children: ReactNode;
}

export default function FeatureRoot({ children }: FeatureRootProps) {
  return (
    <div className="grid grid-cols-2 pt-16 justify-items-stretch  max-w-[1200px] mx-auto" id="features">
      {children}
    </div>
  );
}
