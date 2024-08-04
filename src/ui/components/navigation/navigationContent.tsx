import LoginButton from "@/src/ui/auth/loginButton";
import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";
import Link from "next/link";
import SigninButton from "../../auth/signinButton";
import { NavLi } from "./navLi";
import { NavButton } from "./navButton";

export default function NavigationContent() {
  return (
    <ul className="flex justify-between items-center h-full">
      <NavLi liName="Features" linkHref="#features" />
      <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>
      <NavLi liName="Pricing" linkHref="#price" />
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-4">
          <Image
            width={"45"}
            height={"45"}
            src={logoIcon}
            alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
          />
          <h2 className="text-2xl font-bold">PETS</h2>
        </div>
      </Link>
      <NavLi liName="FAQ" linkHref="#faq" />
      <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>
      <li className="flex gap-4">
        <LoginButton>
          <NavButton buttonName="Log In" />
        </LoginButton>
        <SigninButton>
          <NavButton buttonName="Sign In" />
        </SigninButton>
      </li>
    </ul>
  );
}
