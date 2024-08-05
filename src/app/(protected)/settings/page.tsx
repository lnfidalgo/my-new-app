import { Navigation } from "@/src/ui/components/dashboard/navigation/navigation";
import SideMenu from "@/src/ui/components/dashboard/sideMenu/sideMenu";

export default function SettingsPage() {
  return (
    <div className="flex gap-6">
      <SideMenu />
      <Navigation />
    </div>
  );
}
