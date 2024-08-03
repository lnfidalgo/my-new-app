"use client"

import { useState } from "react";
import HeroButton from "../../hero/heroButton";
import BenefitsComponent from "./benefitsComponent";
import DividerLine from "./dividerLine";
import PriceComponent from "./priceComponent";
import TableRoot from "./tableRoot";

export default function TableXlScreens() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const slidesContent = [
    {
      usage: "TEAM",
      id: 1,
      price: "$19",
      subtitle: "Best for solo creators",
    },
    {
      usage: "RODRIGO",
      id: 2,
      price: "$79",
      subtitle: "Most popular plan",
    },
    {
      usage: "LUCAS",
      id: 3,
      price: "$39",
      subtitle: "Exclusively for teams",
    },
  ];

  return (
    <div>
      <div className="text-white">
        <button
          className={`px-4 py-2 rounded-l ${billingCycle === "monthly" ? "bg-blue-400" : "bg-slate-400"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-l ${billingCycle === "annual" ? "bg-blue-400" : "bg-slate-400"}`}
          onClick={() => setBillingCycle("annual")}
        >
          Annual
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-[1200px] mx-auto mt-40">
        {slidesContent.map((slide) => (
          <TableRoot
            key={slide.id}
            className="gap-16 flex flex-col mt-10 border-2 rounded-2xl border-[#5f5ddf] p-14 relative"
          >
            <PriceComponent
              id={slide.id}
              price={slide.price}
              subtiltle={slide.subtitle}
              usage={slide.usage}
            />
            <DividerLine />
            <BenefitsComponent id={slide.id} />
            <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
          </TableRoot>
        ))}
      </div>
    </div>
  );
}
