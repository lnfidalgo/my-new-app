import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg"

export default function NavLogo() {
  return (
    <div className="flex items-center justify-center gap-2 md:hidden">
      <Image
        width={"35"}
        height={"35"}
        src={logoIcon}
        alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
      />
      <h2 className="text-2xl font-bold">PETS</h2>
    </div>
  );
}