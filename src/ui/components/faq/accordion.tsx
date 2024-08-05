import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  const accordionItems = [
    {
      id: 1,
      accordionTitle: "How easy is to setup Pets?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
      value: "item-1",
    },
    {
      id: 2,
      accordionTitle: "Can i integrate Pets with other platforms?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 3,
      accordionTitle: "How often do you add new content?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 4,
      accordionTitle: "What your refund policy?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 5,
      accordionTitle: "Do you have corporate plans?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 6,
      accordionTitle: "Can i upgrade my plan?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 7,
      accordionTitle: "How do i invite my team?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 8,
      accordionTitle: "Do you offer trainig for individuals and teams?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {accordionItems.map((accordion, index) => (
        <Accordion
          type="single"
          key={index}
          collapsible
          className="w-full md:h-40 sm:h-full justify-start items flex p-3 rounded-md bg-[#0f153d]"
        >
          <AccordionItem
            value="item-1"
            className="flex flex-col justify-center border-none w-full"
          >
            <AccordionTrigger className="gap-6 text-left font-bold xl:text-xl ">
              {accordion.accordionTitle}
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-base xl:text-lg">
              {accordion.accordionContent}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
