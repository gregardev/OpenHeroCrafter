import { Input, Table } from "@mui/joy";
import useActiveHero from "../../../hooks/useActiveHero"
import type { Hero } from "../../../interfaces/hero";
import StyledTR from "../../joyui/StyledTR";

const defenses = [
    {key:'dod',label:'Dodge (AGI)',base:'agi',pairs:['tou']},
    {key:'par',label:'Parry (FGT)',base:'fgt',pairs:['tou']},
    {key:'tou',label:'Toughness (STA)',base:'sta',pairs:['par','dod']},
    {key:'fod',label:'Fortitude (STA)',base:'sta',pairs:['wid']},
    {key:'wid',label:'Will (AWE)',base:'awe',pairs:['fod']},
];

export default function HeroDefensesTable(){
    const {activeHero, changeActiveHeroAttrNUM} = useActiveHero();

    function checkPowerLimit(key:string, pairs:string[]){

        const keyDefVal = activeHero[key as keyof Hero] as number;
        return pairs.some((pair)=>{
            return keyDefVal + (activeHero[pair as keyof Hero] as number) > (activeHero.pl * 2)
        });
    }

    return (
        <Table aria-label="Defenses" sx={{width:'400px'}} color="primary">
            <thead>
                <th style={{width:'100px'}}>Defense</th>
                <th style={{width:'100px'}}>Total</th>
                <th style={{width:'100px'}}>Base</th>
                <th style={{width:'100px'}}>Rank</th>
            </thead>
            <tbody>
                {defenses.map((def)=>(
                    <StyledTR
                        key={def.key}
                        overPowerLimit={checkPowerLimit(def.key,def.pairs)}
                    >
                        <td>{def.label}</td>
                        <td>
                            {def.key==='tou'?
                            activeHero.dsta?0:activeHero.tou
                            :
                            activeHero[('d'+def.base)as keyof Hero]?'---':activeHero[def.key as keyof Hero] as number
                            }
                        </td>
                        <td>
                            {def.key==='tou'?
                            activeHero[('d'+def.base)as keyof Hero]?0:(activeHero[def.base as keyof Hero] ?? 0) as number
                            :
                            activeHero[('d'+def.base)as keyof Hero]?'---':(activeHero[def.base as keyof Hero] ?? 0) as number
                            }
                        </td>
                        <td>
                            {def.key==='tou'?
                                "---"
                                :
                                <Input 
                                    type="number" 
                                    disabled={activeHero[('d'+def.base) as keyof Hero] as boolean}
                                    value={Number(activeHero[('r'+def.key) as keyof Hero])}
                                    onChange={(e)=>changeActiveHeroAttrNUM('r'+def.key,Number(e.target.value))}
                                />
                            }
                            
                        </td>
                    </StyledTR>
                ))}
            </tbody>
        </Table>
    );
}