import { createContext, type ReactNode } from "react";
import useSaveHeroToLocalStorage from "../hooks/useSaveHeroToLocalStorage";
import { defaultHero } from "../interfaces/hero";
import type { ActiveHeroContextValue } from "../interfaces/activeHeroContextValue";

type Props = {
  children: ReactNode;
};

export const ActiveHeroContext = createContext<ActiveHeroContextValue | null>(null);

export default function ActiveHeroContextProvider({children}:Props){
    const [activeHero, setActiveHero ] = useSaveHeroToLocalStorage({
        key:'OpenHeroCrafter-MNM3E-activehero',
        hero:{...defaultHero} 
    })

    function changeActiveHeroAttrSTR(field:string, newVal:string){
        setActiveHero({...activeHero, [field]:newVal});
    }

    function changeActiveHeroAttrNUM(field:string, newVal:number){
        setActiveHero({...activeHero, [field]:newVal});
    }

    return (
        <ActiveHeroContext.Provider 
            value={{
                activeHero:activeHero, 
                changeActiveHeroAttrSTR: changeActiveHeroAttrSTR,
                changeActiveHeroAttrNUM: changeActiveHeroAttrNUM
            }}
        >
            {children}
        </ActiveHeroContext.Provider>
    )
}