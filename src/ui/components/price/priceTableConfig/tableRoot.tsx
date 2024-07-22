import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRoot {
  children: ReactNode;
  className?: string
}

export default function TableRoot({ children, className }: TableRoot) {
  return (
    <div className={twMerge("text-white flex flex-col gap-14", className)}>{children}</div>
  );
}
