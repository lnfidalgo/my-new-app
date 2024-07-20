import { HiArchive, HiChartBar, HiChip, HiCloudDownload } from "react-icons/hi";

export default function BenefitsComponent() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-center items-center gap-4">
        <HiCloudDownload />
        <p className="text-sm font-light">100MB Cloud storage</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <HiArchive />
        <p className="text-sm font-light">100MB Cloud storage</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <HiChartBar />
        <p className="text-sm font-light">100MB Cloud storage</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <HiChip />
        <p className="text-sm font-light">100MB Cloud storage</p>
      </div>
    </div>
  );
}