import type { Hero } from "./hero";

export interface ActiveHeroContextValue {
    activeHero: Hero;
    changeActiveHeroAttrSTR: (field:string, newVal:string) => void;
    changeActiveHeroAttrNUM: (field:string, newVal:number) => void;
    changeActiveHeroAbility: (ability:string, newVal:number) => void;
}