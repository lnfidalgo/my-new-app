import { DiAndroid, DiApple, DiGithubBadge } from "react-icons/di";

export default function FeatureFooter() {
  return (
    <div className="text-white flex col-span-2 h-40 items-center justify-around border-t-2 rounded-2xl border-[#5f5ddf] bg-gradient-to-t from-[#0f0e4d] to-[#080D27]">
      <div className="flex flex-col items-center justify-center">
        <DiAndroid size={40} className="lg:size-14" />
        <p className="lg:text-xl">Sei lá</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <DiApple size={40} className="lg:size-14" />
        <p className="lg:text-xl">Alguma coisa</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <DiGithubBadge size={40} className="lg:size-14" />
        <p className="lg:text-xl">Tanjiro</p>
      </div>
    </div>
  );
}