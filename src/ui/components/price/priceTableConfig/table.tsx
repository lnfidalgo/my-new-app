import HeroButton from "../../hero/content/heroButton";
import TableRoot from "./tableRoot";
import PriceComponent from "./priceComponent";
import BenefitsComponent from "./benefitsComponent";
import DividerLine from "./dividerLine";

interface PriceTableProps {
  className?: string;
}

export default function PriceTable({ className }: PriceTableProps) {
  return (
    <TableRoot>
      <PriceComponent usage="CORE" price="" subtiltle="" />
      <DividerLine />
      <BenefitsComponent />
      <HeroButton className="mx-auto px-8 py-3 text-base gap-4" />
    </TableRoot>
  );
}
