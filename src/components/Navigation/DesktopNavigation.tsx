import { Route } from "@/app/routes";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

interface DesktopNavigationProps {
  menuItems: Route[];
}

export const DesktopNavigation = ({ menuItems }: DesktopNavigationProps) => (
  <section className="hidden lg:flex justify-between">
    <Logo />
    <menu className="flex gap-6 list:none h-fit text-lg leading-[48px] mt-2.5">
      {menuItems.map((route) => (
        <li key={route.label}>
          <NavLink route={route} underlined />
        </li>
      ))}
    </menu>
  </section>
);
