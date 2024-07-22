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

export default function CarouselDemo() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleSize=() => {
      setWindowSize(window.innerWidth)
    };
    handleSize()
  }, []);

  const slidesContent = [
    {
      usage: "TEAM",
      id: "one",
      price: "$19",
      subtitle: "Best for solo creators",
    },
    {
      usage: "RODRIGO",
      id: "two",
      price: "$79",
      subtitle: "Most popular plan",
    },
    {
      usage: "LUCAS",
      id: "three",
      price: "$39",
      subtitle: "Exclusively for teams",
    },
  ];

  return (
    <>
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
                        price={slide.price}
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
    </>
  );
}
