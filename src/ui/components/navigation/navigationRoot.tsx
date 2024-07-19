import { ReactNode } from "react";

interface NavigationRootProps {
  children: ReactNode;
}

export default function NavigationRoot({ children }: NavigationRootProps) {
  return (
    <nav className="flex text-white justify-between items-center h-14 md:block">
      {children}
    </nav>
  );
}
