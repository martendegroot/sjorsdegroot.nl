import type { Metadata } from "next";
import localFont from "next/font/local";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Grid } from "@/components/Grid";
import Navigation from "@/components/Navigation/Navigation";

const yiBaiti = localFont({
  src: "./fonts/MicrosoftYiBaiti.ttf",
  variable: "--font-yi-baiti",
  weight: "100 900",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "block",
});

export const metadata: Metadata = {
  title: "Sjors de Groot",
  description: "Transpersoonlijke coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${yiBaiti.variable} ${quicksand.variable} font-sans antialiased tracking-wider flex min-h-screen`}
      >
        <Grid className="grid-rows-[auto_1fr] px-2 py-4 sm:p-8 overflow-hidden pb-10">
          <Navigation />
          <main className="col-span-12 sm:col-span-10 sm:col-start-2 flex flex-col mt-12 sm:mt-0 gap-6 grow sm:justify-center sm:mb-[15vh] text-lg">
            {children}
          </main>
        </Grid>
      </body>
    </html>
  );
}
