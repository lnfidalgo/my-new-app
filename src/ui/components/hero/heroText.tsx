import Button from "../button";
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
    <div className="text-white mt-3">
      <p
        className={twMerge(
          "font-light text-xs text-amber-400 mb-2 md:text-xl ",
          className,
        )}
      >
        {shortText}
      </p>
      <h1 className={twMerge("font-bold text-3xl mb-2 md:text-6xl", className)}>
        {title}
      </h1>
      <p className={twMerge("font-light mb-5 w-64 md:text-xl", className)}>
        {subtitle}
      </p>
      <Button className="md:p-4 md:text-base" buttonName="TRY IT NOW" />
    </div>
  );
}
