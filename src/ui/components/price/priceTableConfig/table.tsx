"use client";

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
      monthPrice: "$19",
      annualPrice: "$190",
      subtitle: "Best for solo creators",
    },
    {
      usage: "RODRIGO",
      id: 2,
      monthPrice: "$79",
      annualPrice: "$670",
      subtitle: "Most popular plan",
    },
    {
      usage: "LUCAS",
      id: 3,
      monthPrice: "$39",
      annualPrice: "$390",
      subtitle: "Exclusively for teams",
    },
  ];

  return (
    <div>
      <div className="text-white flex flex-col pt-40 justify-center items-center gap-10">
        <div>
          <h2 className="text-4xl font-bold text-center">
            Flexible pricing <br/> for teams of all sizes
          </h2>
        </div>
        <div className="bg-[#0b1235] border border-[#5f5ddf] rounded-xl p-1.5">
          <button
            className={`px-10 py-4 rounded-lg ${billingCycle === "monthly" ? "bg-[#2b3a88]" : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            MONTHLY
          </button>
          <button
            className={`px-10 py-4 rounded-lg ${billingCycle === "annual" ? "bg-[#2b3a88]" : ""}`}
            onClick={() => setBillingCycle("annual")}
          >
            ANNUAL
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-[1200px] mx-auto mt-6">
        {slidesContent.map((slide, index) => (
          <TableRoot
            key={index}
            className="gap-16 flex flex-col mt-10 border-2 rounded-2xl border-[#5f5ddf] p-14 relative"
          >
            <PriceComponent
              id={slide.id}
              price={
                billingCycle === "monthly"
                  ? slide.monthPrice
                  : slide.annualPrice
              }
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
