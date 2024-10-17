import { Grid } from "@/components/Grid";
import Navigation from "@/components/Navigation/Navigation";

export default function OverMij() {
  return (
    <Grid className="grid-rows-[auto_1fr] p-8">
      <Navigation />
      <main className="col-start-2 col-span-8 flex flex-col gap-6 grow justify-center text-lg mb-[15vh]">
        <p>
          Vanaf mijn 26e werkte ik als zelfstandig meubelmaker. Ik ben ruim
          twintig jaar getrouwd geweest, daarna gescheiden, en vader van twee
          zonen en een dochter.
        </p>

        <p>
          Ondernemerschap, enkele intense en enorm leerzame liefdesrelaties, een
          driejarige opleiding transpersoonlijke coaching en veel tijd voor
          stilte en zelfreflectie hebben me doen ervaren dat er diep in mij een
          altijd aanwezig innerlijk weten beschikbaar is dat me rust geeft en de
          weg wijst.
        </p>
      </main>
    </Grid>
  );
}
