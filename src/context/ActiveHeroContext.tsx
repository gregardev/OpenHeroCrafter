import { createContext, type ReactNode } from "react";
import useSaveHeroToLocalStorage from "../hooks/useSaveHeroToLocalStorage";
import { defaultHero } from "../interfaces/hero";

type Props = {
  children: ReactNode;
};

export const ActiveHeroContext = createContext(null)

export default function ActiveHeroContextProvider({children}:Props){
    const [activeHero, setActiveHero ] = useSaveHeroToLocalStorage({
        key:'OpenHeroCrafter-MNM3E-activehero',
        hero:{...defaultHero} 
    })

    return (
        <ActiveHeroContext.Provider value={{activeHero:activeHero, setActiveHero:setActiveHero}}>
            {children}
        </ActiveHeroContext.Provider>
    )
}