import HeroText from "./heroText";
import HeroImg from "./heroImg";
import HeroRoot from "./heroRoot";

export default function HeroPage() {
  return (
    <HeroRoot>
      <HeroText
        title="AMAZINGLY SIMPLE"
        subtitle="We designed PETS AI Video Editor to be an easy to use, quick to learn
        and surprisingly powerful."
        shortText="VIDEO EDITING"
      />
      <HeroImg />
    </HeroRoot>
  );
}
