import { ReactNode } from "react";

interface TableRoot {
  children: ReactNode;
}

export default function TableRoot({ children }: TableRoot) {
  return <div className="text-white flex flex-col gap-14">{children}</div>;
}
