"use client";

import { logout } from "@/src/actions/logout";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}

export function LogoutButton({ children }: LogoutButtonProps) {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer flex items-center gap-2">
      {children}
    </span>
  );
}
