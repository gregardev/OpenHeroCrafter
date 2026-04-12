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

    function getTotalDefense(key:string){

        const def = defenses.find(def=>def.key === key)

        return Number((activeHero[('r'+key) as keyof Hero])?? 0)+Number((activeHero[('r'+def?.base) as keyof Hero])?? 0)
    }

    function checkPowerLimit(key:string, pairs:string[]){

        const keyDefVal = getTotalDefense(key)
        return pairs.some((pair)=>{
            return keyDefVal + getTotalDefense(pair) > (activeHero.pl * 2)
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
                            Boolean(activeHero[('d'+def.base)as keyof Hero])?0:getTotalDefense(def.key)
                            :
                            Boolean(activeHero[('d'+def.base)as keyof Hero])?'---':getTotalDefense(def.key)
                            }
                        </td>
                        <td>
                            {def.key==='tou'?
                            Boolean(activeHero[('d'+def.base)as keyof Hero])?0:(activeHero[def.base as keyof Hero] ?? 0)
                            :
                            Boolean(activeHero[('d'+def.base)as keyof Hero])?'---':(activeHero[def.base as keyof Hero] ?? 0)
                            }
                        </td>
                        <td>
                            {def.key==='tou'?
                                "---"
                                :
                                <Input 
                                    type="number" 
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