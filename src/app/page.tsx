import Image from "next/image";
import profilePic from "public/profile.webp";

export default function Home() {
  return (
    <>
      <p className="mt-5 text-2xl lg:text-3xl max-w-[40vw] sm:max-w-none">
        Ontdekken wie je bent
      </p>
      <p className="text-2xl lg:text-3xl max-w-[40vw] sm:max-w-none">
        en wat je werkelijk wil
      </p>
      <div className="absolute bottom-0 right-0 w-full h-full isolate overflow-hidden -z-10">
        <Image
          priority
          src={profilePic}
          alt="Foto van Sjors"
          sizes="(min-width: 1280px) 100vh, 110vh"
          className="absolute bottom-0 h-[110vh] xl:h-full object-cover lg:object-contain object-[calc(20em_-_40vh)_20vh] sm:object-[40vw_20vh] xl:object-[right_10vh] 2xl:object-[calc(50%_+_400px)_5vh]"
          quality={100}
        />
      </div>
    </>
  );
}
