import LoginButton from "@/src/ui/auth/loginButton";
import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";

export default function NavigationContent() {
  return (
    <div className="">
      <nav className="flex text-white justify-between items-center h-14 ">
        <a href="">FEATURES</a>

        <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>

        <a href="">PRICING</a>

        <div className="flex items-center justify-center gap-4">
          <Image
            width={"45"}
            height={"45"}
            src={logoIcon}
            alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
          />
          <h2 className="text-2xl font-bold">PETS</h2>
        </div>

        <a href="">FAQ</a>
        <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>
        <LoginButton>
          <a href="">Log in</a>
        </LoginButton>
      </nav>
    </div>
  );
}
