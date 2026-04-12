import { Checkbox, Input, styled, Table } from "@mui/joy";
import useActiveHero from "../../../hooks/useActiveHero";
import type { Hero } from "../../../interfaces/hero";

const abilities = [
    {key:'str',label:'Strength'},
    {key:'sta',label:'Stamina'},
    {key:'agi',label:'Agility'},
    {key:'dex',label:'Dexterity'},
    {key:'fgt',label:'Fightning'},
    {key:'int',label:'Intellect'},
    {key:'awe',label:'Awereness'},
    {key:'pre',label:'Presence'},
]

const StyledTR = styled('tr')<{ 
  overPowerLimit?: boolean;
}>(({ theme, overPowerLimit }) => ({
  backgroundColor: overPowerLimit 
    ? theme.vars.palette.danger.softBg 
    : 'transparent',
  transition: 'background-color 0.2s ease',
}));

export default function HeroAbilitiesTable(){
    const {activeHero, changeActiveHeroAbility, changeActiveHeroAbilityDisable} = useActiveHero();

    return (
        <Table aria-label="Abilities" sx={{width:'400px'}} color="primary">
            <thead>
                <th style={{width:'100px'}}>Ability</th>
                <th style={{width:'100px'}}>Total</th>
                <th style={{width:'100px'}}>Rank</th>
                <th style={{width:'100px'}}>Disable</th>
            </thead>
            <tbody>
                {abilities.map((ab)=>(
                    <StyledTR
                        key={ab.label}
                        overPowerLimit={Number(activeHero[(ab.key) as keyof Hero])>(Number(activeHero.pl)*2)}
                    >
                        <td>{ab.label}</td>
                        <td>{Boolean(activeHero[('d'+ab.key)as keyof Hero])?'---':(activeHero[ab.key as keyof Hero] ?? 0)}</td>
                        <td>
                            <Input 
                                type="number"
                                disabled={Boolean(activeHero[('d'+ab.key)as keyof Hero])}
                                value={Number(activeHero[('r'+ab.key) as keyof Hero])}
                                onChange={(e)=>changeActiveHeroAbility(ab.key,Number(e.target.value))}
                            />
                        </td>
                        <td>
                            <Checkbox 
                                checked={Boolean(activeHero[('d'+ab.key)as keyof Hero])}
                                onChange={(e)=>changeActiveHeroAbilityDisable(ab.key,e.target.checked)}
                            />
                        </td>
                    </StyledTR>
                ))}
            </tbody>
        </Table>
    );
}