import HeroPage from "../ui/components/hero/page";
import NavigationBar from "../ui/components/navigation/page";

export default function Home() {
  return (
    <main className="bg-[#080D27] px-3">
      <NavigationBar />
      <HeroPage />
    </main>
  );
}
