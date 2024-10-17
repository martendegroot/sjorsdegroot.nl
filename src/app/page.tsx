import { Grid } from "@/components/Grid";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <Grid className="grid-rows-[auto_1fr] px-2 py-4 sm:p-8 overflow-hidden">
      <Navigation />
      <main className="col-start-2 col-span-8 flex flex-col gap-6 grow justify-center text-3xl mb-[15vh]">
        <p>Ontdekken wie je bent</p>
        <p>en wat je werkelijk wil</p>
      </main>
    </Grid>
  );
}
