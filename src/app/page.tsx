import Image from "next/image";
import profilePic from "public/profile.webp";

export default function Home() {
  return (
    <main className="col-start-2 col-span-10 flex flex-col gap-6 grow justify-center text-3xl mb-[15vh]">
      <p>Ontdekken wie je bent</p>
      <p>en wat je werkelijk wil</p>
      <Image
        src={profilePic}
        alt="Foto van Sjors"
        className="absolute bottom-0 h-[90vh] w-auto -z-10 left-[55vw]"
        quality={100}
      />
    </main>
  );
}
