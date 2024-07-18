import Image from "next/image";
import relaxImage from "@/src/assets/images/undraw_relaxation_re_ohkx.svg";
import { MdOutlinePets } from "react-icons/md";

export default function HeroPage() {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <div className="text-white">
        <p className="font-light  mb-4">VIDEO EDITING</p>
        <h1 className="font-bold  mb-4">AMAZINGLY SIMPLE</h1>
        <p className="font-light ">
          We designed PETS AI Video Editor to be an easy to use, quick to learn
          and surprisingly powerful.
        </p>
        <button className="bg-[#192965] p-2 rounded-2xl flex items-center justify-center gap-2 font-semibold text-xs">
          <MdOutlinePets size={15} />
          TRY IT NOW
        </button>
      </div>
      <div className="">
        <div className="w-[200px] h-[150px] bg-gradient-radial from-[#192965] from-70% via-[#3a58c4] via-50% to-blue-500 to-50% rounded-full absolute blur-[90px] "></div>
        <div className="z-10 relative">
          <Image src={relaxImage} width={200} alt="Oi" />
        </div>
      </div>
    </div>
  );
}
