import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";
import { MenuItems } from "./menuItems";
import { LogoutButton } from "../../../auth/logoutButton";
import { TbDoorExit } from "react-icons/tb";

export default function SideMenu() {
  return (
    <div className="h-screen w-80 items-center justify-center relative border pt-3 pl-2">
      <div className="flex items-center justify-center gap-4">
        <Image
          width={"45"}
          height={"45"}
          src={logoIcon}
          alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
        />
        <h2 className="text-2xl font-bold">PETS</h2>
      </div>
      <MenuItems />
      <div className="hidden sm:block sm:absolute sm:bottom-5 sm:left-16 text-gray-500">
        <LogoutButton>
          <TbDoorExit size={25} />
          Logout
        </LogoutButton>
      </div>
    </div>
  );
}
