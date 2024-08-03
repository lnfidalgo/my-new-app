import LoginButton from "@/src/ui/auth/loginButton";
import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";
import Link from "next/link";
import SigninButton from "../../auth/signinButton";

export default function NavigationContent() {
  return (
    <div>
      <nav className="h-14">
        <ul className="flex text-white justify-between items-center">
          <li className="after:w-0 after:h-0.5 after:bg-[#5f5ddf] after:relative after:block after:transition-all hover:after:px-1 hover:after:w-full">
            <Link href={"#features"}>Features</Link>
          </li>

          <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>
          <li className="after:w-0 after:h-0.5 after:bg-[#5f5ddf] after:relative after:block after:transition-all hover:after:px-1 hover:after:w-full">
            <Link href={"#price"}>Pricing</Link>
          </li>
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
          <li className="after:w-0 after:h-0.5 after:bg-[#5f5ddf] after:relative after:block after:transition-all hover:after:px-1 hover:after:w-full">
            <Link href={"#faq"}>Faq</Link>
          </li>
          <span className="h-1 w-1 bg-[#435CF0] rounded-full"></span>
          <li className="flex gap-4">
            <LoginButton>
              <button className="px-4 py-2 rounded-xl bg-[#435CF0] hover:bg-[#304df1]">
                Log in
              </button>
            </LoginButton>
            <SigninButton>
              <button className="px-4 py-2 rounded-xl bg-[#435CF0] hover:bg-[#304df1]">
                Sign in
              </button>
            </SigninButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
