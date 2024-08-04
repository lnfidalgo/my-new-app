import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa6";

export function Footer() {
  const footerItems = [
    {
      itemName: "Features",
    },
    {
      itemName: "Pricing",
    },
    {
      itemName: "FAQ",
    },
    {
      itemName: "Depoiments",
    },
  ];

  const footerSocials = [
    {
      logo: <FaXTwitter size={20} />,
    },
    {
      logo: <FaFacebook size={20} />,
    },
    {
      logo: <FaInstagram size={20} />,
    },
    {
      logo: <FaDiscord size={20} />,
    },
  ];

  return (
    <footer className="flex gap-6 items-center justify-center h-96 text-white mt-28 border-t-white border-t md:grid md:grid-cols-2 md:max-w-[1200px] md:mx-auto ">
      <div className="flex flex-col gap-10 h-full items-center justify-center">
        <ul className="flex flex-col w-full gap-3 items-start md:pl-10">
          {footerItems.map((item, index) => (
            <li
              key={index}
              className="text-xl font-semibold hover:text-slate-400 md:text-3xl"
            >
              <Link href={"/"}>{item.itemName}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-full md:pl-10 md:flex-row gap-5 xl:justify-between">
          <p>Copyright Ul8, LLC.</p>
          <div className="flex flex-col gap-1 md:flex-row md:gap-3">
            <Link
              href={"/"}
              className="text-sm cursor-pointer hover:text-slate-300 hover:underline"
            >
              Privacy policy
            </Link>
            <Link
              href={"/"}
              className="text-sm cursor-pointer hover:text-slate-300 hover:underline"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col border-l pl-5 items-center justify-center xl:items-start ">
        <div className=" flex flex-col gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Subscribe</h2>
          <p className="md:text-lg xl:pb-6">
            Sign up to our newsletter for feature updates and our undying love.
          </p>
          <div className="relative w-full lg:w-72">
            <Input
              type="email"
              placeholder="youremail@gmail.com"
              className="bg-[#0e153b] border-[#5f5ddf]"
            />
            <FaArrowRight className="absolute right-0 top-0 m-2.5 h-5 w-5 text-muted-foreground cursor-pointer" />
          </div>
        </div>
        <div className="flex mt-12 w-full gap-3 md:gap-8 md:items-start">
          {footerSocials.map((item, index) => (
            <div
              className="h-12 w-12 border border-[#5f5ddf] rounded-full flex items-center justify-center bg-[#080d27] cursor-pointer hover:bg-[#0f173d]"
              key={index}
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
