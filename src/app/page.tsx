import { Grid } from "@/components/Grid/Grid";

export default function Home() {
  return (
    <Grid className="grid-rows-[auto_1fr] p-8">
      <nav className="flex col-span-12 justify-between">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-bold">Sjors de Groot</div>
          <div className="text-3xl text-accent">transpersoonlijke coaching</div>
        </div>
        <div className="flex h-fit gap-6 text-lg mt-[10px] tracking-normal">
          <div className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700">
            Home
          </div>
          <div className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700">
            Transpersoonlijke coaching
          </div>
          <div className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700">
            Over mij
          </div>
          <div className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700">
            Tarief
          </div>
          <div className="cursor-pointer border-b border-b-slate-300 hover:border-b-slate-700">
            Contact
          </div>
        </div>
      </nav>
      <main className="col-start-2 col-span-8 flex flex-col gap-6 grow justify-center text-lg mb-[15vh]">
        <p>Transpersoonlijk betekend letterlijk: voorbij je persoonlijkheid.</p>

        <p>
          Je persoonlijkheid is de verzameling van jouw persoonlijke
          eigenschappen en deze verzameling van eigenschappen bepaalt je manier
          van denken en reageren.
        </p>

        <p>
          Jouw kijk op jezelf, de wereld en het leven wordt sterk gekleurd door
          de gebeurtenissen en overtuigingen die je persoonlijkheid hebben
          gevormd.
        </p>

        <p>
          Bij mijn manier van coachen gaat het om voorbij je persoonlijkheid,
          met al haar overtuigingen, verbinding te maken met je innerlijke stem
          om van daaruit jóuw antwoorden te vinden op vragen over concrete
          situaties en de stappen die genomen kunnen worden voor verandering.
        </p>
      </main>
    </Grid>
  );
}
