import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="h-full flex items-center justify-center bg-red-600">
      {children}
    </div>
  )
}