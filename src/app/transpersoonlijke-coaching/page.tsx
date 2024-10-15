import { Grid } from "@/components/Grid";
import Navigation from "@/components/Navigation";

export default function TranspersoonlijkeCoaching() {
  return (
    <Grid className="grid-rows-[auto_1fr] p-8">
      <Navigation />
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
