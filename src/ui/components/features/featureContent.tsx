import { DiApple } from "react-icons/di";
import HeroButton from "../hero/content/heroButton";

interface FeatureContentProps {
  shortText: string,
  title: string,
  subtitle: string
}

export default function FeatureContent({shortText, title, subtitle}: FeatureContentProps) {
  return (
    <div className="text-white bg-gradient-to-b from-[#211f8b] to-[#080D27] rounded-tl-2xl px-3 py-10 lg:px-8 xl:pb-20">
      <div className="border-2 rounded-full h-16 w-16 flex justify-center items-center lg:h-24 lg:w-24 ">
        <div className="h-14 w-14 bg-[#6097d6] rounded-full flex justify-center items-center border-4 lg:h-20 lg:w-20">
          <DiApple size={30} className="lg:size-11" />
        </div>
      </div>
      <p className="font-light text-sm text-amber-400 mb-2 pt-8 lg:text-lg lg:font-normal">
        {shortText}
      </p>
      <h2 className="font-semibold text-3xl mb-2 lg:font-bold lg:text-5xl">
        {title}
      </h2>
      <p className="font-light mb-10 lg:text-xl lg:font-normal">
        {subtitle}
      </p>
      <HeroButton className="lg:p-4 lg:text-base" />
    </div>
  );
}
