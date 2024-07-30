import { Input } from "@/components/ui/input";
import { UserButton } from "@/src/ui/auth/userButton";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export function Navigation() {

  return (
    <div className="w-full h-screen pr-6">
      <div className="flex items-center gap-2 h-20">
        <div className="relative w-full">
          <CiSearch className="absolute left-0 top-0 m-2.5 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
        <IoMdNotifications className="cursor-pointer w-28" />
        <UserButton />
      </div>
      <div className="text-gray-600 mt-6">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="">
          Connect all your social channel to leverage the best performance from
          your collection pipelines
        </p>
        <div className=" gap-8 mt-8">
          
        </div>
      </div>
    </div>
  );
}
