import { DiAndroid, DiApple, DiGithubBadge } from "react-icons/di";
import HeroButton from "../hero/content/heroButton";

export default function Features() {
  return (
    <div className="grid grid-cols-2 justify-items-stretch border-2 rounded-2xl border-[#5f5ddf] max-w-[1200px] mx-auto">
      <div className="text-white bg-gradient-to-b from-[#211f8b] to-[#080D27] rounded-tl-2xl px-3 py-10 lg:px-8">
        <div className="border-2 rounded-full h-16 w-16 flex justify-center items-center lg:h-24 lg:w-24 ">
          <div className="h-14 w-14 bg-[#6097d6] rounded-full flex justify-center items-center border-4 lg:h-20 lg:w-20">
            <DiApple size={30} className="lg:size-11" />
          </div>
        </div>
        <p className="font-light text-sm text-amber-400 mb-2 pt-8 lg:text-lg lg:font-normal">
          Easy Integration
        </p>
        <h2 className="font-semibold text-3xl mb-2 lg:font-bold lg:text-5xl">
          Work smarter not harder
        </h2>
        <p className="font-light mb-5 lg:text-xl lg:font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          quia, vitae necessitatibus maxime architecto optio
        </p>
        <HeroButton className="lg:p-4 lg:text-base" />
      </div>
      <div className="text-white bg-gradient-to-b from-[#3230a3] to-[#080D27] rounded-tr-2xl px-3 py-10 lg:px-8">
        <div className="border-2 rounded-full p-1 h-16 w-16 flex justify-center items-center lg:h-24 lg:w-24">
          <div className="h-14 w-14 rounded-full bg-[#6097d6] flex justify-center items-center border-4 lg:h-20 lg:w-20">
            <DiGithubBadge size={30} className="lg:size-11" />
          </div>
        </div>
        <p className="font-light text-sm text-amber-400 mb-2 pt-8 lg:text-lg lg:font-normal">
          Easy Integration
        </p>
        <h2 className="font-semibold text-3xl mb-2 lg:font-bold lg:text-5xl">
          Work smarter not harder
        </h2>
        <p className="font-light mb-5 lg:text-xl lg:font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          quia, vitae necessitatibus maxime architecto optio
        </p>
        <HeroButton className="lg:p-4 lg:text-base" />
      </div>
      <div className="text-white relative flex col-span-2 h-40 items-center justify-around border-t-2 rounded-2xl border-[#5f5ddf] bg-gradient-to-t from-[#0f0e4d]  via-[#101946] to-[#080D27]">
        <div className="absolute w-full h-0.5 bg-white"></div>
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
    </div>
  );
}
