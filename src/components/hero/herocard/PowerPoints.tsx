import { Sheet, Typography } from "@mui/joy";
import {  useEffect, useState } from "react";
import useActiveHero from "../../../hooks/useActiveHero";

export default function PowerPoints(){

    const {activeHero} = useActiveHero();

    const [spentTotalPoints, setSpentTotalPoints] = useState(0);
    const [spentAbilityPoints, setSpentAbilityPoints] = useState(0);

    function calculateTotalAvailablePowerPoints(){
        return (Number(activeHero.pl ?? 0) * 15) + (Number(activeHero.xp)?? 0);
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

    const [totalAvailablePowerPoints, setTotalAvailablePowerPoints] = useState(calculateTotalAvailablePowerPoints);

    useEffect(function(){
        setTotalAvailablePowerPoints(calculateTotalAvailablePowerPoints);
        setSpentAbilityPoints(calculateSpentAbilityPoints)
    },[activeHero]);

    useEffect(function(){
        setSpentTotalPoints(spentAbilityPoints);
    },[spentAbilityPoints]);

    return(
        <Sheet
            variant="outlined"
        >
            <Typography>
                Power Point Totals:{spentTotalPoints} = Abilities {spentAbilityPoints}. Total Avialble Power Points:{totalAvailablePowerPoints}
            </Typography>
        </Sheet>
    )
}