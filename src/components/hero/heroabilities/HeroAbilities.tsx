import { Box, Card, Checkbox, Divider, Input, Table, Typography } from "@mui/joy";
import useActiveHero from "../../../hooks/useActiveHero";

export default function HeroAbilities(){

    const {activeHero, changeActiveHeroAbility} = useActiveHero();

    return(
        <Box>
            <Typography>Abilities and Defenses</Typography>
            <Divider />
            <Box
                sx={{
                    display:'flex'
                }}
            >
                <Card
                    variant="soft"
                    size="lg"
                >
                    <Table aria-label="Abilities">
                        <thead>
                            <th>Ability</th>
                            <th>Total</th>
                            <th>Rank</th>
                            <th>Disable</th>
                        </thead>
                        <tbody>
                            <tr
                                key="Strength"
                            >
                                <td>Strength</td>
                                <td>{activeHero.str?activeHero.str:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rstr}
                                        onChange={(e)=>changeActiveHeroAbility('str',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Stamina"
                            >
                                <td>Stamina</td>
                                <td>{activeHero.sta?activeHero.sta:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rsta}
                                        onChange={(e)=>changeActiveHeroAbility('sta',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Agility"
                            >
                                <td>Agility</td>
                                <td>{activeHero.agi?activeHero.agi:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.ragi}
                                        onChange={(e)=>changeActiveHeroAbility('agi',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Dexterity"
                            >
                                <td>Dexterity</td>
                                <td>{activeHero.dex?activeHero.dex:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rdex}
                                        onChange={(e)=>changeActiveHeroAbility('dex',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Figting"
                            >
                                <td>Fighting</td>
                                <td>{activeHero.fgt?activeHero.fgt:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rfgt}
                                        onChange={(e)=>changeActiveHeroAbility('fgt',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Awereness"
                            >
                                <td>Awereness</td>
                                <td>{activeHero.awe?activeHero.awe:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rawe}
                                        onChange={(e)=>changeActiveHeroAbility('awe',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Intellect"
                            >
                                <td>Intellect</td>
                                <td>{activeHero.int?activeHero.int:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rint}
                                        onChange={(e)=>changeActiveHeroAbility('int',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr
                                key="Presence"
                            >
                                <td>Presence</td>
                                <td>{activeHero.pre?activeHero.pre:0}</td>
                                <td>
                                    <Input 
                                        type="number"
                                        value={activeHero.rpre}
                                        onChange={(e)=>changeActiveHeroAbility('pre',Number(e.target.value))}
                                    />
                                </td>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
}