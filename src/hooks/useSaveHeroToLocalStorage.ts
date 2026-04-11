import { useEffect, useState } from "react"
import { type Hero } from "../interfaces/hero"

export default function useSaveHeroToLocalStorage({key, hero}:{key:string,hero:Hero}){
    const [heroData, setHeroData] = useState(function(){
        const storedHeroData = localStorage.getItem(key);
        return storedHeroData ? JSON.parse(storedHeroData) : hero
    });

    useEffect(function(){
        localStorage.setItem(key, JSON.stringify(heroData));
    },[key,heroData]);

    return [heroData, setHeroData];
}