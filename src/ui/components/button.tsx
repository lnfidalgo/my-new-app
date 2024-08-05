import LoginButton from "@/src/ui/auth/loginButton";
import { MdOutlinePets } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface HeroButtonProps {
  buttonName: string
  className?: string;
}

export default function Button({ className, buttonName }: HeroButtonProps) {
  return (
    <LoginButton>
      <button
        className={twMerge(
          "bg-gradient-to-t from-[#0e2c7e] via-[#2949a0] to-[#3f62c4] shadow-lg shadow-[#233463] p-2 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs text-white transition ease-in duration-300 hover:-translate-y-1 hover:scale-110",
          className,
        )}
      >
        <MdOutlinePets className="size-5 lg:size-7" />
        {buttonName}
      </button>
    </LoginButton>
  );
}
