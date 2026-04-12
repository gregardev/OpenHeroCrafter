import { Sheet, Typography } from "@mui/joy";
import {  useEffect, useState } from "react";
import useActiveHero from "../../../hooks/useActiveHero";

export default function PowerPoints(){

    const {activeHero} = useActiveHero();

    function calculateTotalAvailablePowerPoints(){
        return (Number(activeHero.pl ?? 0) * 15) + (Number(activeHero.xp)?? 0)
    }

    const [totalAvailablePowerPoints, setTotalAvailablePowerPoints] = useState(calculateTotalAvailablePowerPoints)

    useEffect(function(){
        setTotalAvailablePowerPoints(calculateTotalAvailablePowerPoints)
    },[activeHero])

    return(
        <Sheet
            variant="outlined"
        >
            <Typography>
                Total Avialble Power Points:{totalAvailablePowerPoints}
            </Typography>
        </Sheet>
    )
}