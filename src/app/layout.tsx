import type { Metadata } from "next";
import localFont from "next/font/local";
import { Quicksand } from "next/font/google";
import "./globals.css";

const yiBaiti = localFont({
  src: "./fonts/MicrosoftYiBaiti.ttf",
  variable: "--font-yi-baiti",
  weight: "100 900",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
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
        {children}
      </body>
    </html>
  );
}
