import Image from "next/image";
import relaxImage from "@/src/assets/images/undraw_relaxation_re_ohkx.svg";

export default function HeroImg() {
  return (
    <div>
      <div className="relative">
        <div className="w-[500px] h-[500px] rounded-full blur-[130px] bg-gradient-to-bl from-[#303f8a]  via-[#15225f]  to-[#1035c9]  absolute inset-0 m-auto"></div>
        <Image src={relaxImage} className="w-full max-h-[450px]" alt="Oi" />
      </div>
    </div>
  )
}
