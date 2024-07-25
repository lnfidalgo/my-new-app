import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#080D27] to-[#212c63]">
      {children}
    </div>
  );
}