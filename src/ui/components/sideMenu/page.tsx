import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";

export default function SideMenu() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <Image
          width={"45"}
          height={"45"}
          src={logoIcon}
          alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
        />
        <h2 className="text-2xl font-bold">PETS</h2>
      </div>
    </div>
  );
}
