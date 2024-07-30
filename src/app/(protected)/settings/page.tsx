"use client";

import { logout } from "@/src/actions/logout";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import { UserButton } from "@/src/ui/auth/userButton";

import Image from "next/image";
import logoIcon from "@/src/assets/images/undraw_beach_day_cser.svg";
import { TbDoorExit } from "react-icons/tb";
import { LogoutButton } from "@/src/ui/auth/logoutButton";
import { RiHome2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GrIntegration, GrTemplate } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  const menuItems = [
    {
      id: 1,
      menuText: "Home",
      menuIcon: <RiHome2Line />,
    },
    {
      id: 2,
      menuText: "Analytics",
      menuIcon: <SiSimpleanalytics />,
    },
    {
      id: 3,
      menuText: "Data",
      menuIcon: <FaDatabase />,
    },
    {
      id: 4,
      menuText: "Integration",
      menuIcon: <GrIntegration />,
    },
    {
      id: 5,
      menuText: "Template",
      menuIcon: <GrTemplate />,
    },
    {
      id: 6,
      menuText: "Document",
      menuIcon: <IoDocumentText />,
    },
    {
      id: 7,
      menuText: "Setting",
      menuIcon: <IoMdSettings />,
    },
  ];
  return (
    <div className="h-screen w-screen grid grid-rows-10 grid-flow-col grid-cols-8">
      <div className="row-span-10 relative col-span-1">
        <div className="flex items-center justify-center gap-4">
          <Image
            width={"45"}
            height={"45"}
            src={logoIcon}
            alt="Logomarca da empresa, mulher sentada com cachorro ao lado."
          />
          <h2 className="text-2xl font-bold">PETS</h2>
        </div>
        <div className="flex flex-col items-center gap-9 mt-10">
          <div className="flex flex-col gap-y-16">
            {menuItems.map((menu, index) => (
              <div key={index} className="flex items-center gap-2">
                {menu.menuIcon}
                {menu.menuText}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 right-5">
          <LogoutButton>
            <TbDoorExit size={25} />
            Logout
          </LogoutButton>
        </div>
      </div>
      <div className="col-span-7">02</div>
      <div className="row-span-9 col-span-7">03</div>
    </div>
  );
}
