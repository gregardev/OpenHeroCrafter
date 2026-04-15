import type { Hero } from "./hero";

export interface ActiveHeroContextValue {
    activeHero: Hero;
    setActiveHero: React.Dispatch<React.SetStateAction<Hero>>;
    changeActiveHeroAttrSTR: (field:string, newVal:string) => void;
    changeActiveHeroAttrNUM: (field:string, newVal:number) => void;
    changeActiveHeroAbilityDisable: (ability:string, newVal:boolean) => void
}