import { HeaderLinks } from './HeadersLinks'
import { InstagramLogo, TwitterLogo, GitHubLogo } from './MediaIcons'

export function Header() {

    return (
        <header className="px-[72px] h-[15vh] justify-between flex pt-[53px] items-center ">
            <HeaderLinks />
            <div className="flex flex-row">
                <GitHubLogo />
                <TwitterLogo />
                <InstagramLogo />
            </div>
        </header>
    )
}

