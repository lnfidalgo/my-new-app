import { ReactNode } from "react";

interface FeatureRootProps {
  children: ReactNode;
}

export default function FeatureRoot({ children }: FeatureRootProps) {
  return (
    <div className="grid grid-cols-2 justify-items-stretch border-2 rounded-2xl border-[#5f5ddf] max-w-[1200px] mx-auto">
      {children}
    </div>
  );
}
