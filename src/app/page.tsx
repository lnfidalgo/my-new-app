import LoginButton from "../ui/auth/loginButton";
import HeroPage from "./hero/page";
import NavigationBar from "./navigation/page";

export default function Home() {
  return (
    <main className="h-full bg-[#080D27]">
      <NavigationBar />
      <HeroPage />
    </main>
  );
}
