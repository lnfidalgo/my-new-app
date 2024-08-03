import Link from "next/link";
import LoginButton from "../../auth/loginButton";
import SigninButton from "../../auth/signinButton";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa6";

export default function HamburguerLinks() {
  const hamburguerSocials = [
    {
      logo: <FaXTwitter size={20} />,
    },
    {
      logo: <FaFacebook size={20} />,
    },
    {
      logo: <FaInstagram size={20} />,
    },
    {
      logo: <FaDiscord size={20} />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div>
        <ul className="space-y-10">
          <li>
            <Link href="#features" className="text-3xl font-bold">
              Features
            </Link>
          </li>
          <li>
            <a href="#price" className="text-3xl font-bold">
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="text-3xl font-bold">
              FAQ
            </a>
          </li>
          <li>
            <LoginButton>
              <button className="text-3xl font-bold">Log In</button>
            </LoginButton>
          </li>
          <li>
            <SigninButton>
              <button className="text-3xl font-bold">Sign In</button>
            </SigninButton>
          </li>
        </ul>
      </div>
      <div className="h-0.5 w-80 bg-white"></div>
      <div className="flex items-center justify-center w-full gap-3 md:gap-8 md:items-start">
        {hamburguerSocials.map((item, index) => (
          <div
            className="h-12 w-12 border border-[#5f5ddf] rounded-full flex items-center justify-center bg-[#080d27] cursor-pointer hover:bg-[#0f173d]"
            key={index}
          >
            {item.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
