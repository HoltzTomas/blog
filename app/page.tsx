import Link from "next/link";
import { NeueMachinaRegular, NeueMachinaUltraBold } from "./components/Fonts";
import { AvatarLogo } from "./components/AvatarLogo";

export default function Home() {
  return (
    <div className="overflow-y-scroll px-[16px] md:px-[53px]">
      <div className="flex flex-col pb-[2rem]">
        <h1 className={`mt-10 md:mt-15 text-center align-center text-[48px] md:text-[5rem] ${NeueMachinaUltraBold.className}`}>TOMAS HOLTZ</h1>
        <div>
          <p className={`mt-[41px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>20yo. <a href='https://www.itba.edu.ar/' rel="noopener noreferrer" target="_blank" >Computer Science & Engineering @ITBA</a></p>
          <p className={`mt-[10px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>Prev: <a href='https://www.belo.app/' rel="noopener noreferrer" target="_blank" >Belo</a> and <a href='https://www.suku.world/' rel="noopener noreferrer" target="_blank" >Suku</a></p>
        </div>
        <AvatarLogo className="justify-center flex mt-[71px]" />
        <p className={`hidden md:flex text-[3.5rem] text-blue mt-auto ${NeueMachinaUltraBold.className}`}>[ BLOG ]</p>
        <div className="md:hidden bg-blue mx-[-16px] py-8 mt-[20px]" >
          <p className={`text-[3.5rem] text-white text-center ${NeueMachinaUltraBold.className}`}>[ BLOG ]</p>
        </div>
      </div>
      <p className={`text-[18px] ${NeueMachinaRegular.className}`}>
        Siempre se puede aprender de los errores. Pero si son errores ajenos mejor, acá te relato los míos desde que empecé a programar.
      </p>

      {/* Aprende a programar */}
      <Link href={'/blog/programar'}>
        <p className={`underline text-blue text-[24px] mt-10 ${NeueMachinaUltraBold.className}`}>Como aprender a programar este 2023</p>
        <p className={`md:w-[80%] lg:w-[50%] mb-10 mt-[10px] ${NeueMachinaUltraBold.className}`}>Paso a paso, como aprovechar el nuevo año para adiquirir la habilidad laboral mas demandada del mundo.</p>
      </Link>
    </div>
  );
}