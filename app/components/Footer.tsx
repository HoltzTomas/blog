import { Ddin, NeueMachinaUltraBold } from './Fonts'
import { InstagramLogo, TwitterLogo, GitHubLogo } from './MediaIcons'

export function Footer() {

    return (
        <footer className="w-[100%] px-[25px] md:px-[72px] h-[15vh] bg-black justify-between flex items-center ">
             <p className={`text-center text-white text-[20px] font-bold ${NeueMachinaUltraBold.className}`}>TOMAS<br />HOLTZ</p>
             <p className={`hidden md:flex text-white ${Ddin.className}`}>DEVELOPED BY TOMAS HOLTZ © DESIGNED BY @MARI.MUSSELLA</p>
            <div className="flex flex-row">
                <GitHubLogo color='white' />
                <TwitterLogo color='white' />
                <InstagramLogo color='white' />
            </div>
        </footer>
    )
}

