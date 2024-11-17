import { routes } from "@/app/routes";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

const { home, transpersoonlijkeCoaching, overMij, tarief, contact } = routes;
const menuItems = [home, transpersoonlijkeCoaching, overMij, tarief, contact];

export default function Navigation() {
  return (
    <nav className="col-span-12">
      <DesktopNavigation menuItems={menuItems} />
      <MobileNavigation menuItems={menuItems} />
    </nav>
  );
}
