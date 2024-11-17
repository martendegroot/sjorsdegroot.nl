"use client";

import { Logo } from "./Logo";
import { Route } from "@/app/routes";
import { NavLink } from "./NavLink";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../Drawer";
import { cx } from "class-variance-authority";
import { useState } from "react";

interface MobileNavigationProps {
  menuItems: Route[];
}

export const MobileNavigation = ({ menuItems }: MobileNavigationProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleHamburgerClick = () => {
    setOpenDrawer((current) => !current);
  };

  return (
    <section className="lg:hidden flex justify-between">
      <Logo />
      <Drawer
        shouldScaleBackground
        direction="right"
        open={openDrawer}
        onOpenChange={setOpenDrawer}
      >
        <DrawerTrigger className="group">
          <figure
            className={cx([
              "absolute",
              "top-7",
              "right-7",
              "h-[22px]",
              "z-[60]",
              "w-7",
              "flex",
              "flex-col",
              "justify-between",
              "group-data-[state=open]:[&>*:nth-child(1)]:rotate-45",
              "group-data-[state=open]:[&>*:nth-child(2)]:scale-0",
              "group-data-[state=open]:[&>*:nth-child(3)]:-rotate-45",
            ])}
          >
            {["origin-top-left", "", "origin-bottom-left"].map((classes, n) => (
              <div
                key={n}
                className={cx(
                  "h-[3px] w-full bg-neutral-700 transition-transform duration-500 rounded-sm",
                  classes
                )}
              ></div>
            ))}
          </figure>
        </DrawerTrigger>
        <DrawerContent aria-describedby="Navigatiemenu">
          <DrawerTitle className="sr-only">Navigatiemenu</DrawerTitle>
          <button
            className="absolute top-5 right-7 background-red w-8 h-7"
            onClick={handleHamburgerClick}
          />
          <menu className="flex flex-col h-full mb-[20vh] justify-center gap-10">
            {menuItems.map((route) => (
              <li
                key={route.label}
                className="text-center"
                onClick={handleHamburgerClick}
              >
                <NavLink route={route} />
              </li>
            ))}
          </menu>
        </DrawerContent>
      </Drawer>
    </section>
  );
};
