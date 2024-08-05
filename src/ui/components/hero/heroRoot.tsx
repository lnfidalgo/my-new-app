import { ReactNode } from "react";

interface HeroRootProps {
  children: ReactNode;
}

export default function HeroRoot({ children }: HeroRootProps) {
  return (
    <div className="flex flex-col mt-7 gap-6 h-[600px] justify-around items-center mb-10 md:justify-center md:items-center md:flex-row md:h-[1000px] xl:h-[800px] xl:mb-10">
      {children}
    </div>
  );
}
