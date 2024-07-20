interface PriceComponentProps {
  usage: string;
  price: string;
  subtiltle: string;
}

export default function PriceComponent({
  usage,
  price,
  subtiltle,
}: PriceComponentProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xs p-1.5 rounded-full border tracking-widest">{usage}</p>
      <h2 className="text-6xl pb-2 pt-6">{price}</h2>
      <p className="text-lg">{subtiltle}</p>
    </div>
  );
}
