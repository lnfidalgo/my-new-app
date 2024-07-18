import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";
import LoginButton from "@/src/ui/auth/loginButton";
import HamburguerButtonAnimation from "@/src/ui/components/buttons/hamburguerMenu/HamburguerButton";

export default function NavigationBar() {
  return (
    <div>
      <nav className="flex text-white justify-evenly items-center h-14 ">
        <div className="gap-32 flex">
          <a href="">FEATURES</a>

          <span className="h-1 w-1 bg-[#435CF0] rounded-full relative top-2.5 "></span>

          <a href="">PRICING</a>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <Image
            width={"45"}
            height={"45"}
            src={logoIcon}
            alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
          />
          <h2 className="text-2xl font-bold">PETS</h2>
        </div>
        <div className="flex">
          <a href="">FAQ</a>
          <span className="h-1 w-1 bg-[#435CF0] rounded-full relative top-2.5 "></span>
          <LoginButton>
            <a href="">Log in</a>
          </LoginButton>
        </div>
      </nav>
    </div>
  );
}
