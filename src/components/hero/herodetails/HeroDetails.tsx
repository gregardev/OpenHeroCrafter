import { Box, Divider, Option, Select, Typography } from "@mui/joy";
import FloatingLabelInput from "../../joyui/FloatingLabelInput";
import type { Hero } from "../../../interfaces/hero";
import { handleHeroAttrChangeSTR } from "../../../handlers/handleHeroAttrChange";

export default function HeroDetails({activeHero,setActiveHero}:{activeHero:Hero, setActiveHero: React.Dispatch<React.SetStateAction<Hero>>}){


    return (
        <Box>
            <Typography>Hero Details</Typography>
            <Divider />
            <Box>
                
            </Box>
            <Divider />
            <Box>
                
            </Box>

        </Box>
    )
}