"use client";

import { logout } from "@/src/actions/logout";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import { Navigation } from "@/src/ui/components/dashboard/navigation/navigation";
import SideMenu from "@/src/ui/components/dashboard/sideMenu/sideMenu";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="flex gap-6">
      <SideMenu />
      <Navigation />
    </div>
  );
}
