import { Sheet, Typography } from "@mui/joy";
import {  useEffect, useState } from "react";
import useActiveHero from "../../../hooks/useActiveHero";

export default function CharacterPoints(){

    const {activeHero} = useActiveHero();

    const [spentTotalPoints, setSpentTotalPoints] = useState(0);
    const [spentAbilityPoints, setSpentAbilityPoints] = useState(0);
    const [spentDefensePoints, setSpentDefensePoints] = useState(0);
    const [spentAdvantagePoints, setSpentAdvantagePoints] = useState(0);

    function calculateTotalAvailableCharacterPoints(){
        return (Number(activeHero.pl ?? 0) * 15) + (Number(activeHero.xp)?? 0);
    }

    function calculateSpentPointsTotal(){
        return spentAbilityPoints + spentDefensePoints + spentAdvantagePoints;
    }

    function calculateSpentAbilityPoints(){
        let sum = 0; 
        // add 2 points for each ability
        sum = sum + (2*( Number(activeHero.rstr) + Number(activeHero.rsta) + Number(activeHero.ragi) +        
        Number(activeHero.rdex) + Number(activeHero.rfgt) + Number(activeHero.rint) + Number(activeHero.rawe) + 
        Number(activeHero.rpre)));
        // minus 10 for each disabled ability
        sum = sum - (10*( Number(activeHero.dstr) + Number(activeHero.dsta) + Number(activeHero.dagi) +        
        Number(activeHero.ddex) + Number(activeHero.dfgt) + Number(activeHero.dint) + Number(activeHero.dawe) + 
        Number(activeHero.dpre)));

        return sum;
        
    }

    function calculateSpentDefensePoints(){
        return ( Number(activeHero.rdod) +  Number(activeHero.rpar) + Number(activeHero.rfod) + Number(activeHero.rwid));
    }   

    function calculateSpentAdvantagePoints(){
        let sum = 0;
        activeHero.advantages.forEach(adv =>(sum = sum + adv.rank));
        return sum;
    }

    const [totalAvailableCharacterPoints, setTotalAvailableCharacterPoints] = useState(calculateTotalAvailableCharacterPoints);

    useEffect(function(){
        setTotalAvailableCharacterPoints(calculateTotalAvailableCharacterPoints);
        setSpentAbilityPoints(calculateSpentAbilityPoints);
        setSpentDefensePoints(calculateSpentDefensePoints);
        setSpentAdvantagePoints(calculateSpentAdvantagePoints)
    },[activeHero]);

    useEffect(function(){
        setSpentTotalPoints(calculateSpentPointsTotal);
    },[spentAbilityPoints, spentDefensePoints, spentAdvantagePoints]);

    return(
        <Sheet
            variant="outlined"
        >
            <Typography>
                Character Point Totals:{spentTotalPoints} = Abilities {spentAbilityPoints} + Defenses {spentDefensePoints} + Advantages {spentAdvantagePoints}. Total Avialble Character Points:{totalAvailableCharacterPoints}
            </Typography>
        </Sheet>
    )
}