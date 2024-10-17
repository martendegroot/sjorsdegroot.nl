import { Grid } from "@/components/Grid";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <Grid className="grid-rows-[auto_1fr] p-8">
      <Navigation />
      <main className="col-start-2 col-span-8 h-fit gap-6 grid grid-cols-subgrid text-lg mt-[25vh]">
        <div className="col-span-3">Intake gesprek:</div>
        <div className="col-span-5">40,00 per uur</div>
        <div className="col-span-3">Coaching:</div>
        <div className="col-span-5">60,00 per uur</div>
        <div className="col-span-8">
          Mijn coaching wordt niet vergoed door zorgverzekeraars omdat ik niet
          aangesloten ben bij
        </div>
      </main>
    </Grid>
  );
}
