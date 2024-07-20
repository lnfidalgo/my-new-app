import Image from "next/image";
import relaxImage from "@/src/assets/images/undraw_relaxation_re_ohkx.svg";

export default function HeroImg() {
  return (
    <div className="relative">
      <div>
        <div className="w-[300px] h-[300px] rounded-full blur-[110px] bg-gradient-to-bl from-[#303f8a]  via-[#15225f]  to-[#1035c9]  absolute inset-0 m-auto z-0"></div>
        <Image
          src={relaxImage}
          className="w-full max-h-[450px] z-10"
          alt="Oi"
        />
      </div>
    </div>
  );
}
