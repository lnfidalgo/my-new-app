import LoginButton from "../../auth/loginButton";

export default function HamburguerLinks() {
  return (
    <ul className="space-y-10">
      <li>
        <a href="/" className="text-3xl font-bold">
          Features
        </a>
      </li>
      <li>
        <a href="#" className="text-3xl font-bold">
          Pricing
        </a>
      </li>
      <li>
        <a href="#" className="text-3xl font-bold">
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
