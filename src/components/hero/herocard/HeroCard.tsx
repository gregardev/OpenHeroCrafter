import FloatingLabelInput from "../../joyui/FloatingLabelInput";
import { Box, Card, Option, Select, Typography } from "@mui/joy";
import PowerPoints from "./PowerPoints";
import useActiveHero from "../../../hooks/useActiveHero";


export default function HeroCard(){

    const {activeHero, changeActiveHeroAttrSTR, changeActiveHeroAttrNUM} = useActiveHero();

    return (
        <Card
            variant="soft"
            size="lg"
            sx={{
                m:2
            }}
        >
            <Box
                 sx={{
                    display:"flex",
                    flexDirection:"column"
                }}
            >
                <Box
                    sx={{
                        flexGrow:1
                    }}
                >
                    <Typography level="title-lg">Hero Character</Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection:'row'
                        }}
                    >
                        <Box 
                            sx={{
                                m:1
                            }}
                        >
                            <FloatingLabelInput 
                                label="Hero"
                                placeholder="Justiceman"
                                value={activeHero.hero}
                                onChange={(e)=>changeActiveHeroAttrSTR('hero',e.target.value)}
                            />
                        </Box>
                        <Box
                            sx={{
                                m:1
                            }}
                        >
                            <FloatingLabelInput 
                                label="Player"
                                placeholder=""
                                value={activeHero.player}
                                onChange={(e)=>changeActiveHeroAttrSTR('player',e.target.value)}
                                
                            />
                        </Box>
                        
                        <Box
                            sx={{
                                m:1
                            }}
                        >
                            <FloatingLabelInput 
                                label="Identity"
                                placeholder="John Mann"
                                value={activeHero.identity}
                                onChange={(e)=>changeActiveHeroAttrSTR('identity',e.target.value)}
                                
                            />
                        </Box>
     
                        <Box
                            sx={{
                                m:1
                            }}
                        >
                            <Select
                                variant="outlined"
                                value={activeHero.idtype}
                                onChange={(_event, newVal) => {
                                    changeActiveHeroAttrSTR('idtype',String(newVal));
                                }}
                                sx={{
                                    minHeight:'56px'
                                }}
                            >
                                <Option value="none">None</Option>
                                <Option value="secret">Secret</Option>
                                <Option value="public">Public</Option>
                            </Select>
                        </Box>

                        <Box
                            sx={{
                                m:1,
                                maxWidth:60
                            }}
                        >
                            <FloatingLabelInput
                                label="PL"
                                value={activeHero.pl}
                                onChange={(e)=>changeActiveHeroAttrNUM('pl',Number(e.target.value))}
                            />
                        </Box>
                    
                        <Box
                            sx={{
                                m:1,
                                maxWidth:60
                            }}
                        >
                            <FloatingLabelInput
                                label="XP"
                                value={activeHero.xp}
                                onChange={(e)=>changeActiveHeroAttrNUM('xp',Number(e.target.value))}
                            />
                        </Box>
                    </Box>
                </Box>
                <PowerPoints />
            </Box>
        </Card>
    )
}