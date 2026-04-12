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
        return Number(activeHero.rstr)*2 + Number(activeHero.rsta)*2 + Number(activeHero.ragi)*2 + Number(activeHero.rdex)*2 + Number(activeHero.rfgt)*2 + Number(activeHero.rint)*2 + Number(activeHero.rawe)*2 + Number(activeHero.rpre)*2;
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