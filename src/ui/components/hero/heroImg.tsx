import Image from "next/image";
import relaxImage from "@/src/assets/images/undraw_relaxation_re_ohkx.svg";

export default function HeroImg() {
  return (
    <div>
      <div>
        <Image src={relaxImage} className="w-full max-h-[450px]" alt="Oi" />
      </div>
    </div>
  );
}
