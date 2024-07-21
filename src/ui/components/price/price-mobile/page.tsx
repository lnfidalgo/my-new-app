import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PriceTable from "../priceTableConfig/table";
import PriceComponent from "../priceTableConfig/priceComponent";
import DividerLine from "../priceTableConfig/dividerLine";
import BenefitsComponent from "../priceTableConfig/benefitsComponent";
import HeroButton from "../../hero/heroButton";
import TableRoot from "../priceTableConfig/tableRoot";

export default function CarouselDemo() {
  const slides = [
    <PriceTable key={1} id="one" />,
    <PriceTable key={2} id="two" />,
    <PriceTable key={3} id="three" />,
  ];

  const slidesContent = [
    {
      usage: "TEAM",
      id: "one",
      price: "$19",
    },
    {
      usage: "RODRIGO",
      id: "two",
      price: "$79",
    },
    {
      usage: "LUCAS",
      id: "three",
      price: "$39",
    },
  ];

  return (
    <Carousel className="w-full mt-12">
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
                      subtiltle="Exclusively for teams"
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
  );
}
