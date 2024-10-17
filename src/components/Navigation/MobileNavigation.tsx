import { cx } from "class-variance-authority";
import { Logo } from "./Logo";
import { Route } from "@/app/routes";
import { NavLink } from "./NavLink";

interface MobileNavigationProps {
  menuItems: Route[];
}

export const MobileNavigation = ({ menuItems }: MobileNavigationProps) => (
  <section className="lg:hidden">
    <input
      className="absolute top-5 right-0 h-7 w-8 z-10 opacity-0 peer"
      type="checkbox"
      name=""
      id=""
    />
    <Logo className="transition-opacity duration-500 peer-checked:opacity-0 peer-checked:pointer-events-none" />
    <figure
      className={cx([
        "absolute",
        "top-5",
        "right-0",
        "h-[26px]",
        "w-8",
        "flex",
        "flex-col",
        "justify-between",
        "peer-checked:[&>*:nth-child(1)]:rotate-45",
        "peer-checked:[&>*:nth-child(2)]:scale-0",
        "peer-checked:[&>*:nth-child(3)]:-rotate-45",
      ])}
    >
      {["origin-top-left", "", "origin-bottom-left"].map((classes, n) => (
        <div
          key={n}
          className={cx(
            "h-1 w-full bg-neutral-700 transition-transform duration-500",
            classes
          )}
        ></div>
      ))}
    </figure>
    <article
      className={cx(
        "absolute",
        "top-24",
        "-left-8",
        "h-[calc(100vh-96px-16px)]",
        "w-0",
        "bg-background",
        "transition-width",
        "ease-in",
        "duration-500",
        "overflow-hidden",
        "flex",
        "peer-checked:w-[calc(100%+64px)]",
        "peer-checked:[&>*]:opacity-100"
      )}
    >
      <menu className="h-full w-full flex flex-col gap-8 items-center opacity-0 transition-opacity duration-500 delay-100 whitespace-nowrap">
        {menuItems.map((route) => (
          <li key={route.label}>
            <NavLink route={route} />
          </li>
        ))}
      </menu>
    </article>
  </section>
);
