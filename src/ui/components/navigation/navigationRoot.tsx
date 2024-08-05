import { ReactNode } from "react";

interface NavigationRootProps {
  children: ReactNode;
}

export default function NavigationRoot({ children }: NavigationRootProps) {
  return (
    <nav className="flex fixed justify-between px-5 md:px-20 top-0 left-0 right-0 text-white bg-[#080D27] shadow-lg z-10 md:block md:h-16">
      {children}
    </nav>
  );
}
