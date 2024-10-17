import { routes } from "@/app/routes";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <article className={className}>
    <Link href={routes.home.href} className="flex flex-col gap-1">
      <p className="text-4xl sm:text-5xl font-logo tracking-wide">
        Sjors de Groot
      </p>
      <p className="text-sm sm:text-xl text-accent tracking-widest sm:tracking-wider sm:ml-0.5">
        transpersoonlijke coaching
      </p>
    </Link>
  </article>
);
