import { Poppins } from "next/font/google";
import { cn } from "@/src/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export function Header({ label }: HeaderProps) {
  return (
    <div className="w-full justify-center items-center gap-y-4 flex flex-col">
      <h1 className="">Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
