import Link from "next/link";
import LoginButton from "../../auth/loginButton";

export default function HamburguerLinks() {
  return (
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
          <button className="text-3xl font-bold">
            Log In
          </button>
        </LoginButton>
      </li>
    </ul>
  );
}
