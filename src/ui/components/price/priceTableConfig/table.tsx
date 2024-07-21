import HeroButton from "../../hero/heroButton";
import TableRoot from "./tableRoot";
import PriceComponent from "./priceComponent";
import BenefitsComponent from "./benefitsComponent";
import DividerLine from "./dividerLine";

interface PriceTableProps {
  id: string;
}

export default function PriceTable({ id }: PriceTableProps) {
  let content;
  switch (id) {
    case "one":
      content = (
        <>
          <PriceComponent
            usage="CORE"
            id="one"
            price="$19"
            subtiltle="Best for solo creators"
          />
          <DividerLine />
          <BenefitsComponent id="one" />
          <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
        </>
      );
      break;
    case "two":
      content = (
        <>
          <PriceComponent
            usage="OVERDRIVE"
            id="two"
            price="$79"
            subtiltle="Most popular plan"
          />
          <DividerLine />
          <BenefitsComponent id="two" />
          <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
        </>
      );
      break;
    case "three":
      content = (
        <>
          <PriceComponent
            usage="TEAM"
            id="three"
            price="$39"
            subtiltle="Exclusively for teams"
          />
          <DividerLine />
          <BenefitsComponent id="three" />
          <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
        </>
      );
      break;
    default:
      content = "Default content";
  }
  return <TableRoot>{content}</TableRoot>;
}
