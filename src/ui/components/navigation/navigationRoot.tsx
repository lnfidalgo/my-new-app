import { ReactNode } from "react";

interface NavigationRootProps {
  children: ReactNode;
}

export default function NavigationRoot({ children }: NavigationRootProps) {
  return (
    <nav className="flex px-5 md:px-20 top-0 left-0 right-0 text-white justify-between items-center h-14 bg-[#080D27] shadow-lg z-10 md:block">
      {children}
    </nav>
  );
}
