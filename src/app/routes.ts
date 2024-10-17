export interface Route {
  label: string;
  href: string;
}

export const routes: Record<string, Route> = {
  home: {
    label: "Home",
    href: "/",
  },
  transpersoonlijkeCoaching: {
    label: "Transpersoonlijke coaching",
    href: "/transpersoonlijke-coaching",
  },
  overMij: { label: "Over mij", href: "/over-mij" },
  tarief: { label: "Tarief", href: "/tarief" },
  contact: { label: "Contact", href: "/contact" },
};
