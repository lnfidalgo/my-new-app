import HeroButton from "./heroButton";
import { twMerge } from "tailwind-merge";

interface HeroTextProps {
  subtitle: string;
  title: string;
  shortText: string;
  className?: string;
}

export default function HeroText({
  subtitle,
  title,
  shortText,
  className,
}: HeroTextProps) {
  return (
    <div className="text-white md:w-[450px]">
      <p
        className={twMerge(
          "font-light text-xs text-amber-400 mb-2 lg:text-xl ",
          className,
        )}
      >
        {shortText}
      </p>
      <h1 className={twMerge("font-bold text-3xl mb-2 md:text-7xl", className)}>
        {title}
      </h1>
      <p className={twMerge("font-light mb-5 w-64 md:text-xl", className)}>
        {subtitle}
      </p>
      <HeroButton className="lg:p-4 lg:text-base" />
    </div>
  );
}
