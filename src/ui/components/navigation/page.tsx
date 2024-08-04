"use client";

import { useEffect, useState } from "react";
import NavLogo from "./navLogo";
import NavigationContent from "./navigationContent";
import NavigationRoot from "./navigationRoot";
import HamburguerComponent from "@/src/ui/components/hamburguerButton/hamburguerComponent";

export default function NavigationBar() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    handleSize();
  }, []);

  return (
    <NavigationRoot>
      {windowSize >= 428 && <NavigationContent />}
      <NavLogo />
      <HamburguerComponent />
    </NavigationRoot>
  );
}
