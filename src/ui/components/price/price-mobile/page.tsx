import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PriceTable from "../priceTableConfig/table";

export default function CarouselDemo() {
  const slides = [
    <PriceTable key={1} />,
    <PriceTable key={2} />,
    <PriceTable key={3} />,
  ];
  return (
    <Carousel className="w-full mt-12">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="basis-80 ">
            <div>
              <Card className="bg-[#080D27] over border-[#5f5ddf]">
                <CardContent className="flex items-center justify-center h-[750px]">
                  <span className="text-4xl font-semibold">{slide}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
