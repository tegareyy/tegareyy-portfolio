import Image from "next/image";
import Minato from "@/assets/minato.jpg";
import hero from "@/assets/hero.jpeg";
import { useState } from "react";

import RotatingText from "@/components/ui/RotatingText";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(hero);
  return (
    <div id="home" className="w-full h-screen gap-y-3 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-2 justify-center items-center px-6 lg:px-20 xl:px-32 xl:py-40">
      {/* KIRI - GAMBAR */}
      <div className="flex justify-center items-center">
        <Image
          src={imageSrc}
          alt="Minato"
          width={200}
          height={200}
          className="border-4 bg-gradient-to-b from-white via-fuchsia-600 to-white shadow-[0_70px_70px_rgba(0,0,0,0.5)] rounded-4xl w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[450px] xl:h-[450px] hover:w-[220px] hover:h-[220px] lg:hover:w-[320px] lg:hover:h-[320px] xl:hover:w-[470px] xl:hover:h-[470px] transition-all duration-300"
          onMouseEnter={() => setImageSrc(Minato)}
          onMouseLeave={() => setImageSrc(hero)}
        />
      </div>

      {/* KANAN - TEKS */}
      <div className="flex flex-col gap-y-3 text-center xl:w-fit tracking-widest xl:px-5 xl:gap-y-5">
        <p className="text-2xl lg:text-3xl xl:text-5xl xl:p-4 font-bold tracking-widest bg-gradient-to-br drop-shadow-xl from-fuchsia-600 to-white text-transparent bg-clip-text">
          Tegar Irfan Hamid
        </p>

        <RotatingText
          texts={["Front End Developer", "Full Stack Developer", "Software Engineer"]}
          className="p-2 bg-black text-white flex overflow-hidden justify-center items-center rounded-lg font-bold border
             text-sm md:text-lg lg:text-2xl xl:text-3xl lg:p-3 xl:py-4 xl:px-8"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />

        <p className="font-bold xl:text-2xl bg-gradient-to-br drop-shadow-xl from-white to-fuchsia-600 text-transparent bg-clip-text">
          Building and Creating Web Application
        </p>

        <div className="flex justify-center gap-x-4 xl:gap-x-8 xl:py-4">
          <button className="py-2 px-4 xl:px-8 xl:py-4 xl:text-xl font-bold bg-black rounded-xl hover:bg-[#3b3b3b] text-white hover:cursor-pointer hover:border-2 border">
            Projects
          </button>
          <button className="py-2 px-4 xl:px-8 xl:py-4 xl:text-xl font-bold bg-black rounded-xl hover:bg-[#3b3b3b] text-white hover:cursor-pointer hover:border-2 border">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
