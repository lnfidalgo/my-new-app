import Image from "next/image";
import relaxImage from "@/src/assets/images/undraw_relaxation_re_ohkx.svg"

export default function HeroImg() {
  return (
    <div className="relative">
      <div>
        <div className="w-[200px] h-[150px] bg-gradient-radial from-[#192965] from-70% via-[#3a58c4] via-50% to-blue-500 to-50% rounded-full blur-[90px] absolute top-1/4 left-1/4"></div>
        <Image src={relaxImage} className="w-full h-48" alt="Oi" />
      </div>
    </div>
  );
}
