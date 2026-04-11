import type { Hero } from "../interfaces/hero";

export function handleHeroAttrChangeSTR(hero:Hero,setHero:React.Dispatch<React.SetStateAction<Hero>>,field:string, newVal:string){
    setHero({ ...hero, [field]:newVal})
}