import { HiArchive, HiChartBar, HiChip, HiCloudDownload } from "react-icons/hi";

interface BenefitsComponentProps {
  id: string; 
}

export default function BenefitsComponent({ id }: BenefitsComponentProps) {
  let content;
  switch (id) {
    case 'one':
      content = (
        <div className="flex flex-col gap-7">
          <div className="flex justify-center items-center gap-4">
            <HiCloudDownload size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiArchive size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChartBar size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChip size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
        </div>
      );
      break;
    case 'two':
      content = (
        <div className="flex flex-col gap-7">
          <div className="flex justify-center items-center gap-4">
            <HiCloudDownload size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiArchive size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChartBar size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChip size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
        </div>
      );
      break
    case 'three':
      content = (
        <div className="flex flex-col gap-7">
          <div className="flex justify-center items-center gap-4">
            <HiCloudDownload size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiArchive size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChartBar size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiChip size={25} />
            <p className="text-sm font-light">100MB Cloud storage</p>
          </div>
        </div>
      );
    default:
      break;
  }
  return <>{content}</>;
}
