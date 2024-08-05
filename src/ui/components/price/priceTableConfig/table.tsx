"use client";

import { useState } from "react";
import HeroButton from "../../button";
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
      featured: false,
    },
    {
      usage: "RODRIGO",
      id: 2,
      monthPrice: "$79",
      annualPrice: "$670",
      subtitle: "Most popular plan",
      featured: true,
    },
    {
      usage: "LUCAS",
      id: 3,
      monthPrice: "$39",
      annualPrice: "$390",
      subtitle: "Exclusively for teams",
      featured: false,
    },
  ];

  return (
    <div>
      <div className="text-white flex flex-col pt-40 justify-center items-center gap-10">
        <div>
          <h2 className="text-4xl font-bold text-center">
            Flexible pricing <br /> for teams of all sizes
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
      <div className="grid grid-cols-3 items-center max-w-[1200px] mx-auto mt-6">
        {slidesContent.map((slide, index) => (
          <TableRoot
            key={index}
            className={`md:flex md:mt-10 md:border-2 md:rounded-3xl md:border-[#5f5ddf] md:p-14 ${slide.featured ? 'h-[760px] justify-center' : 'h-[670.5px]'}`}
          >
            <div
              className={`flex flex-col justify-center items-center ${slide.featured ? "md:" : "md:"}`}
            >
              <p
                className={`text-xs p-1.5 rounded-full border tracking-widest  ${slide.featured ? "text-amber-400 border-amber-400" : "text-teal-400 border-teal-400"}`}
              >
                {slide.usage}
              </p>
              <h2
                className={`text-6xl font-bold pb-2 pt-6 ${slide.featured ? "text-amber-400" : "text-white"}`}
              >
                {billingCycle === "monthly"
                  ? slide.monthPrice
                  : slide.annualPrice}
              </h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
            <DividerLine />
            <BenefitsComponent id={slide.id} />
            <HeroButton
              buttonName="TRY IT NOW"
              className="mx-auto px-8 py-3 text-base gap-4"
            />
          </TableRoot>
        ))}
      </div>
    </div>
  );
}
