import { createContext, type ReactNode } from "react";
import useSaveHeroToLocalStorage from "../hooks/useSaveHeroToLocalStorage";
import { defaultHero } from "../interfaces/hero";
import type { ActiveHeroContextValue } from "../interfaces/activeHeroContextValue";
import type { Advantage } from "../interfaces/advantage";

type Props = {
  children: ReactNode;
};

export const ActiveHeroContext = createContext<ActiveHeroContextValue | null>(null);

export default function ActiveHeroContextProvider({children}:Props){
    const [activeHero, setActiveHero] = useSaveHeroToLocalStorage({
        key: 'OpenHeroCrafter-MNM3E-activehero',
        hero: { ...defaultHero }
    });
    
    function calculateChanges(trait: string, newVal: number) {
        let changes = { [trait]: newVal };
        
        switch (trait) {
            case 'rstr':
                changes = { ...changes, str: newVal };
                break;
            case 'rsta':
                // modify toughness and Fort Defense
                changes = { ...changes,sta:newVal, tou: newVal, fod:(newVal + activeHero.rfod) };
                break;
            
            case 'ragi':
                // modify Dodge Defense
                changes = {...changes, agi:newVal, dod:(newVal + activeHero.rdod)}
                break;
            
            case 'rdex':
                changes = { ...changes, dex: newVal };
                break;
            
            case 'rfgt':
                // modify Parry 
                changes = { ...changes, fgt: newVal, par: (newVal + activeHero.rpar) }
                break;
            
            case 'rint':
                changes = { ...changes, int: newVal };
                break;
            
            case 'rawe':
                // modify Awereness
                changes = { ...changes, awe:newVal, wid:(newVal + activeHero.rwid) };
                break;
            
            case 'rpre':
                changes = { ...changes, pre: newVal };
                break;
            
            // Defences 
            case 'rdod':
                changes = { ...changes, dod: (activeHero.agi + newVal) };
                break;
            
            case 'rpar':
                changes = { ...changes, par: (activeHero.fgt + newVal) };
                break;
            
            case 'rfod':
                changes = { ...changes, fod: (activeHero.sta + newVal) };
                break;
            
            case 'rwid':
                changes = { ...changes, wid: (activeHero.awe + newVal) };
                break;
        }
        
        return changes;
    }

    function changeActiveHeroAttrSTR(field:string, newVal:string){
        setActiveHero({...activeHero, [field]:newVal});
    }

    function changeActiveHeroAttrNUM(field: string, newVal: number) {
        const changes = calculateChanges(field, newVal); 
        setActiveHero({ ...activeHero, ...changes});
    }

    function changeActiveHeroAbilityDisable(ability:string, newVal:boolean){
        let changes = {};
        switch (ability) {
            case 'sta':
                changes = calculateChanges('rfod', 0);
                break;
            case 'agi':
                changes = calculateChanges('rdod', 0);
                break;
            case 'fgt':
                changes = calculateChanges('rpar', 0);
                break;
            case 'awe':
                changes = calculateChanges('rawe', 0);
        }
        const abchanges = calculateChanges('r'+ability, 0);
        changes = {...changes, ...abchanges}
        setActiveHero({ ...activeHero, ...changes, ['d' + ability]: newVal });
    }

    function changeActiveHeroAddAdvantage(adv:Advantage){
        let newHeroAdvantages = Object.assign([],activeHero.advantages);
        newHeroAdvantages.push(adv);
        setActiveHero({...activeHero, advantages:Object.assign([],newHeroAdvantages)});
    }

    function changeActiveHeroRemAdvantage(advID:string){
        const newHeroAdvantages = activeHero.advantages.filter((adv:Advantage) => adv.id !== advID)
        setActiveHero({...activeHero, advantages:Object.assign([],newHeroAdvantages)});
    }

    return (
        <ActiveHeroContext.Provider 
            value={{
                activeHero:activeHero, 
                setActiveHero:setActiveHero,
                changeActiveHeroAttrSTR: changeActiveHeroAttrSTR,
                changeActiveHeroAttrNUM: changeActiveHeroAttrNUM,
                changeActiveHeroAbilityDisable: changeActiveHeroAbilityDisable,
                changeActiveHeroAddAdvantage: changeActiveHeroAddAdvantage,
                changeActiveHeroRemAdvantage: changeActiveHeroRemAdvantage
            }}
        >
            {children}
        </ActiveHeroContext.Provider>
    )
}