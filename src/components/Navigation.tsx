import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex col-span-12 justify-between">
      <div className="flex flex-col gap-1">
        <div className="text-5xl font-logo tracking-wide">Sjors de Groot</div>
        <div className="text-xl text-accent ml-0.5">
          transpersoonlijke coaching
        </div>
      </div>
      <div className="flex h-fit gap-6 text-lg leading-[48px] mt-[10px]">
        <Link
          href={"/"}
          className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700"
        >
          Home
        </Link>
        <Link
          href={"/transpersoonlijke-coaching"}
          className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700"
        >
          Transpersoonlijke coaching
        </Link>
        <Link
          href={"/over-mij"}
          className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700"
        >
          Over mij
        </Link>
        <Link
          href={"/tarief"}
          className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700"
        >
          Tarief
        </Link>
        <Link
          href={"/contact"}
          className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
