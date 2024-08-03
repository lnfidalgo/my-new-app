interface PriceComponentProps {
  usage: string;
  price: string;
  subtiltle: string;
  className?: string;
  id: number;
}

export default function PriceComponent({
  usage,
  price,
  subtiltle,
  id,
}: PriceComponentProps) {
  let content;

  switch (id) {
    case 1:
      content = (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs p-1.5 rounded-full border tracking-widest text-teal-400 border-teal-400">
            {usage}
          </p>
          <h2 className="text-6xl font-bold pb-2 pt-6">{price}</h2>
          <p className="text-lg">{subtiltle}</p>
        </div>
      );
      break;
    case 2:
      content = (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs p-1.5 rounded-full border tracking-widest text-amber-400 border-amber-400">
            {usage}
          </p>
          <h2 className="text-6xl font-bold pb-2 pt-6 text-amber-400">
            {price}
          </h2>
          <p className="text-lg">{subtiltle}</p>
        </div>
      );
      break;
    case 3:
      content = (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs p-1.5 rounded-full border tracking-widest text-teal-400 border-teal-400">
            {usage}
          </p>
          <h2 className="text-6xl font-bold pb-2 pt-6">{price}</h2>
          <p className="text-lg">{subtiltle}</p>
        </div>
      );
    default:
      break;
  }
  return <>{content}</>;
}
