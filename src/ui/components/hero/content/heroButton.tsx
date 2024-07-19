import LoginButton from "@/src/ui/auth/loginButton";
import { MdOutlinePets } from "react-icons/md";

export default function HeroButton() {
  return (
    <LoginButton>
      <button className="bg-[#192965] p-2 rounded-2xl flex items-center justify-center gap-2 font-semibold text-xs text-blue-400">
        <MdOutlinePets size={18} color="white" />
        TRY IT NOW
      </button>
    </LoginButton>
  );
}
