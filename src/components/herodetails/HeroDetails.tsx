import { Box, Typography } from "@mui/joy";
import FloatingLabelInput from "../joyui/FloatingLabelInput";
import type { Hero } from "../../interfaces/hero";

export default function HeroDetails({activeHero,setActiveHero}:{activeHero:Hero, setActiveHero: React.Dispatch<React.SetStateAction<Hero>>}){


    function handleHetoDetailChange(field:string, newVal:string){
        setActiveHero({ ...activeHero, [field]:newVal})
    }

    return (
        <Box>
            <Typography>Hero Details</Typography>
            <FloatingLabelInput 
                label="Hero"
                placeholder="Justiceman"
                value={activeHero.hero}
                onChange={(e)=>handleHetoDetailChange('hero',e.target.value)}
                
            />
            <FloatingLabelInput 
                label="Player"
                placeholder=""
                value={activeHero.player}
                onChange={(e)=>handleHetoDetailChange('player',e.target.value)}
                
            />
            <FloatingLabelInput 
                label="Identity"
                placeholder="John Mann"
                value={activeHero.identity}
                onChange={(e)=>handleHetoDetailChange('identity',e.target.value)}
                
            />
        </Box>
    )
}