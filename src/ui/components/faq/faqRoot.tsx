import { ReactNode } from "react"

interface FaqRootProps {
  children: ReactNode
}

export default function FaqRoot({ children }: FaqRootProps) {
  return (
    <div className="text-white mt-24 xl:mx-auto xl:pt-40 2xl:w-[1200px]" id="faq">{children}</div>
  )
}