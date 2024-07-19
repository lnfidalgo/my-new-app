import { MdOutlinePets } from "react-icons/md";
import HeroButton from "./heroButton";

interface HeroTextProps {
  subtitle: string,
  title: string,
  shortText: string
}

export default function HeroText({subtitle, title, shortText}: HeroTextProps) {
  return (
    <div className="text-white md:w-96">
      <p className="font-light text-xs text-amber-400 mb-2">{shortText}</p>
      <h1 className="font-bold text-3xl mb-2 md:text-6xl">{title}</h1>
      <p className="font-light mb-5 w-64">
        {subtitle}
      </p>
      <HeroButton />
    </div>
  );
}
