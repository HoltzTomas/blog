import { NeueMachinaRegular, NeueMachinaUltraBold } from "./components/Fonts";
import { AvatarLogo } from "./components/AvatarLogo";

export default function Home() {
  return (
    <div className="px-[16px] md:px-[53px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className={`mt-10 md:mt-15 text-center align-center text-[48px] md:text-[5rem] ${NeueMachinaUltraBold.className}`}>TOMAS HOLTZ</h1>
        <div>
          <p className={`mt-[41px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>21yo. <a href='https://www.itba.edu.ar/' rel="noopener noreferrer" target="_blank" >Computer Science & Engineering @ITBA</a></p>
          <p className={`mt-[10px] text-[18px] text-center align-center ${NeueMachinaRegular.className}`}>Prev: <a href='https://www.belo.app/' rel="noopener noreferrer" target="_blank" >Belo</a> and <a href='https://www.suku.world/' rel="noopener noreferrer" target="_blank" >Suku</a></p>
        </div>
        <AvatarLogo className="justify-center flex mt-[71px]" />
      </div>
    </div>
  );
}