"use client";

import { useCycle, AnimatePresence } from "framer-motion";
import HamburguerButton from "./hamburguerButton";
import HamburguerContent from "./hamburguerContent";
import HamburguerRoot from "./hamburguerRoot";

export default function HamburguerComponent() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <HamburguerRoot>
      <HamburguerButton
        animate={mobileNav ? "open" : "close"}
        onClick={() => toggleMobileNav()}
      />
      <AnimatePresence>{mobileNav && <HamburguerContent />}</AnimatePresence>
    </HamburguerRoot>
  );
}
