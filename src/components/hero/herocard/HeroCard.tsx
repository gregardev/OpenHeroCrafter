import FloatingLabelInput from "../../joyui/FloatingLabelInput";
import { Box, Option, Select, Typography } from "@mui/joy";
import { handleHeroAttrChangeSTR } from "../../../handlers/handleHeroAttrChange";
import { ActiveHeroContext } from "../../../context/ActiveHeroContext";
import { useContext } from "react";


export default function HeroCard(){

    const {activeHero, setActiveHero} = useContext(ActiveHeroContext);

    return (
        <Box
            sx={{

            }}
        >
            <Typography>Hero</Typography>
            <Box>
                <FloatingLabelInput 
                    label="Hero"
                    placeholder="Justiceman"
                    value={activeHero.hero}
                    onChange={(e)=>handleHeroAttrChangeSTR(activeHero,setActiveHero,'hero',e.target.value)}
                    
                />
                <FloatingLabelInput 
                    label="Player"
                    placeholder=""
                    value={activeHero.player}
                    onChange={(e)=>handleHeroAttrChangeSTR(activeHero,setActiveHero,'player',e.target.value)}
                    
                />
                <FloatingLabelInput 
                    label="Identity"
                    placeholder="John Mann"
                    value={activeHero.identity}
                    onChange={(e)=>handleHeroAttrChangeSTR(activeHero,setActiveHero,'identity',e.target.value)}
                    
                />
                <Select
                    variant="soft"
                    value={activeHero.idtype}
                    onChange={(_event, newVal) => {
                        handleHeroAttrChangeSTR(activeHero,setActiveHero,'idtype',newVal);
                    }}
                >
                    <Option value="none">None</Option>
                    <Option value="secret">Secret</Option>
                    <Option value="public">Public</Option>
                </Select>
            </Box>
        </Box>
    )
}