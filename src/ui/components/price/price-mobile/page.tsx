"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PriceComponent from "../priceTableConfig/priceComponent";
import DividerLine from "../priceTableConfig/dividerLine";
import BenefitsComponent from "../priceTableConfig/benefitsComponent";
import HeroButton from "../../hero/heroButton";
import TableRoot from "../priceTableConfig/tableRoot";
import { useEffect, useState } from "react";
import TableXlScreens from "../priceTableConfig/table";

export default function Price() {
  const [windowSize, setWindowSize]=useState(0);
  const [billingCycle, setBillingCycle] = useState("monthly");

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    handleSize();
  }, []);

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
    <div id="price">
      {windowSize <= 1280 && (
        <div className="text-white flex flex-col pt-20 justify-center items-center gap-10">
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
      )}

      <Carousel className="w-full mt-12 xl:hidden">
        <CarouselContent>
          {slidesContent.map((slide, index) => (
            <CarouselItem key={index} className="basis-80 ">
              <div>
                <Card className="bg-[#080D27] over border-[#5f5ddf]">
                  <CardContent className="flex items-center justify-center h-[750px]">
                    <TableRoot>
                      <PriceComponent
                        usage={slide.usage}
                        id={slide.id}
                        price={
                          billingCycle === "monthly"
                            ? slide.monthPrice
                            : slide.annualPrice
                        }
                        subtiltle={slide.subtitle}
                      />
                      <DividerLine />
                      <BenefitsComponent id={slide.id} />
                      <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
                    </TableRoot>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {windowSize >= 1280 && <TableXlScreens />}
    </div>
  );
}
