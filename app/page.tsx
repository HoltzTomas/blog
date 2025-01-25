import Link from "next/link";
import { NeueMachinaRegular, NeueMachinaUltraBold } from "./components/Fonts";
import { AvatarLogo } from "./components/AvatarLogo";

export default function Home() {
  return (
    <div className="px-[16px] md:px-[53px]">
      <div className="flex flex-col pb-[2rem]">
        <h1 className={`mt-10 md:mt-15 text-center align-center text-[48px] md:text-[5rem] ${NeueMachinaUltraBold.className}`}>TOMAS HOLTZ</h1>
        <div>
          <p className={`mt-[41px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>21yo. <a href='https://www.itba.edu.ar/' rel="noopener noreferrer" target="_blank" >Computer Science & Engineering @ITBA</a></p>
          <p className={`mt-[10px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>Prev: <a href='https://www.belo.app/' rel="noopener noreferrer" target="_blank" >Belo</a> and <a href='https://www.suku.world/' rel="noopener noreferrer" target="_blank" >Suku</a></p>
        </div>
        <AvatarLogo className="justify-center flex mt-[71px]" />
        <p className={`hidden md:flex text-[3.5rem] text-blue mt-10 ${NeueMachinaUltraBold.className}`}>[ GENERANDO MOVIMIENTO ]</p>
        <div className="md:hidden bg-blue mx-[-16px] py-8 mt-[20px]" >
          <p className={`md:text-[3.5rem] text-white text-center ${NeueMachinaUltraBold.className}`}>[ GENERANDO MOVIMIENTO ]</p>
        </div>
      </div>
      <p className={`md:text-[18px] ${NeueMachinaRegular.className}`}>
        En mi vida hace años pasan cosas raras. Como ser parte del founder team de una startup enorme a los 18 años, o compartir equipo de basquet con Duki, o crear y vender un NFT con Maslaton por 5k usd, entre otras cosas.


      </p>
      <p className={`md:text-[18px] mt-5 ${NeueMachinaRegular.className}`}>Decidí empezar a documentar más, tanto mi vida como la de gente increíble que fui conociendo para compartir (y también descubrir un poco yo mismo) que hace que todas estas cosas pasen.</p>
      <p className={`md:text-[18px]  mt-5 ${NeueMachinaRegular.className}`}>Acompáñame en este camino ;)</p>

      <div className={`${NeueMachinaUltraBold.className} mt-10 pb-[10px] text-[16px] flex justify-between items-center`}>
        <p>Di una CHARLA SOBRE MI VIDA para +600 PERSONAS | Generando Movimiento #1</p>
      </div>

      <div className="flex mt-4 md:hidden justify-center">
          <iframe
            src="https://www.youtube.com/embed/RSeqn85Crfo"
            title="Generando Movimiento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex mt-4 hidden md:block">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RSeqn85Crfo"
            title="Generando Movimiento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}