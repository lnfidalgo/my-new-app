import { FaUser } from "react-icons/fa";
import { TbDoorExit } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import { LogoutButton } from "./logoutButton";

export function UserButton() {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-2 p-2 rounded-xl border-gray-200 hover:border-gray-300">
        <Avatar className="flex items-center gap-3 w-32">
          <AvatarImage />
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
          <div>{`Olá ${user?.name}`}</div>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <LogoutButton>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <TbDoorExit />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
