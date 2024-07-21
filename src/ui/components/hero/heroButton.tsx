import LoginButton from "@/src/ui/auth/loginButton";
import { MdOutlinePets } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface HeroButtonProps {
  className?: string;
}

export default function HeroButton({ className }: HeroButtonProps) {
  return (
    <LoginButton>
      <button
        className={twMerge(
          "bg-gradient-to-t from-[#0e2c7e] via-[#2949a0] to-[#3f62c4] shadow-lg shadow-[#233463] p-2 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs text-white",
          className,
        )}
      >
        <MdOutlinePets className="size-5 lg:size-7" />
        TRY IT NOW
      </button>
    </LoginButton>
  );
}
