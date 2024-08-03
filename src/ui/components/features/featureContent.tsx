import { DiApple } from "react-icons/di";
import HeroButton from "../hero/heroButton";
import { twMerge } from "tailwind-merge";

interface FeatureContentProps {
  shortText: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function FeatureContent({
  shortText,
  title,
  subtitle,
  className,
}: FeatureContentProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col w-full flex-wrap justify-between text-white bg-gradient-to-b from-[#211f8b] to-[#080D27] px-3 py-10 md:px-8 xl:pb-20",
        className,
      )}
    >
      <div className="border-2 rounded-full h-16 w-16 flex justify-center items-center  md:h-24 md:w-24 ">
        <div className="h-14 w-14 bg-[#4547c4] rounded-full flex justify-center items-center border-4 md:h-20 md:w-20">
          <DiApple size={30} className="lg:size-11" />
        </div>
      </div>
      <p className="font-light text-sm text-amber-400 mb-2 pt-8 md:text-lg md:font-normal">
        {shortText}
      </p>
      <h2 className="font-semibold text-3xl mb-2 md:font-bold md:text-5xl">
        {title}
      </h2>
      <p className="font-light mb-10 md:text-xl md:font-normal break-words">
        {subtitle}
      </p>
      <HeroButton className="md:p-4 md:text-base" />
    </div>
  );
}
