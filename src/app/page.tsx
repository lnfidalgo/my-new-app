"use client"

import { useEffect, useRef, useState } from "react";
import Faq from "../ui/components/faq/page";
import Features from "../ui/components/features/page";
import { Footer } from "../ui/components/footer/footer";
import HeroPage from "../ui/components/hero/page";
import NavigationBar from "../ui/components/navigation/page";
import Price from "../ui/components/price/price-mobile/page";

export default function Home() {  
  return (
    <main className="bg-[#080D27] px-5 lg:px-32">
      <NavigationBar/>
      <HeroPage />
      <Features />
      <Price />
      <Faq />
      <Footer />
    </main>
  );
}
