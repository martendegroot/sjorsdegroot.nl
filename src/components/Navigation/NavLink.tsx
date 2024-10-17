"use client";
import { Route } from "@/app/routes";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  route: Route;
  underlined?: boolean;
}

export const NavLink = ({ route, underlined }: NavLinkProps) => {
  const pathname = usePathname();
  const { label, href } = route;

  return (
    <article>
      <Link
        href={href}
        className={cx(
          "pb-2 border-b border-b-slate-300 hover:border-b-slate-700 transition-colors duration-500",
          {
            "border-b-transparent": !(underlined || href === pathname),
            "border-b-slate-700": href === pathname,
          }
        )}
      >
        {label}
      </Link>
    </article>
  );
};
