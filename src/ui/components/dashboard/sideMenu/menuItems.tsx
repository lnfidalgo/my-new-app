import { RiHome2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GrIntegration, GrTemplate } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export function MenuItems() {
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
    <div className="flex flex-col items-center gap-9 mt-10">
      <div className="flex flex-col gap-y-16">
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-500 cursor-pointer"
          >
            {menu.menuIcon}
            {menu.menuText}
          </div>
        ))}
      </div>
    </div>
  );
}
