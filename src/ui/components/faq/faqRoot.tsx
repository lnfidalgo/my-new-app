import { ReactNode } from "react"

interface FaqRootProps {
  children: ReactNode
}

export default function FaqRoot({ children }: FaqRootProps) {
  return (
    <div className="text-white mt-24 mx-auto w-[1200px]">{children}</div>
  )
}