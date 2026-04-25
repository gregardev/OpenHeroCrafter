import { Box, Card, Checkbox, Divider, Input, Table, Typography } from "@mui/joy";
import advantages from "../../../data/advantages.json";
import { useEffect, useState } from "react";
import HeroAdvantageModal from "./HeroAdvantageModal";
import useActiveHero from "../../../hooks/useActiveHero";

export default function HeroAdvantages() {

    const {activeHero, changeActiveHeroAddAdvantage, changeActiveHeroRemAdvantage} = useActiveHero();

    const [openModal, setOpenModal] = useState(false);
    const [modalAdvantage, setModalAdvantage] = useState({
        title:'',
        description:'',
    });

    function changeModalAdvantage(title:string,description:string){
        setModalAdvantage({
            title:title,
            description:description
        });
    }

    // when modal advnatage changes show up the modal
    useEffect(function(){
        if(modalAdvantage.title != '' && modalAdvantage.description != '' ){
            setOpenModal(true);        
        }
    },[modalAdvantage]);

    function handleAdvantageSelection(advID:string,checked:boolean){
        if (checked){
            changeActiveHeroAddAdvantage({id:advID,rank:1});
        } else {
            changeActiveHeroRemAdvantage(advID);
        }
    }

    return (
        <Box>
            <Typography
                level="h4"
                sx={{ fontFamily: "Comicy", fontStyle: "italic" }}
            >
                Advantages
            </Typography>
            <Divider />
            <Card sx={{ m: 1 }} variant="soft" size="lg">
                <Box
                    sx={{
                        maxHeight:550,
                        overflow:'auto',
                    }}
                >
                    <Table 
                        color="primary"
                        aria-label="Advantages" 
                        size="sm"
                        stickyHeader
                        stripe={'even'}
                        hoverRow
                    >
                        <thead>
                            <th style={{width:160}}>Advantage</th>
                            <th style={{width:80}}>Type</th>
                            <th style={{width:80}}>Source</th>
                            <th style={{width:80}}>Ranked</th>
                            <th style={{width:80}}>Max Rank</th>
                            <th>Effect</th>
                            <th style={{width:80}}>Active</th>
                            <th style={{width:100}}>Rank</th>
                        </thead>
                        <tbody>
                            {advantages.map((adv) => (
                                <tr
                                    style={{cursor:'pointer'}}
                                >
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.name}</td>
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.type}</td>
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.source}</td>
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.ranked?'Yes':'No'}</td>
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.maxrank?adv.maxrank:'---'}</td>
                                    <td onClick={()=>changeModalAdvantage(adv.name,adv.description)}>{adv.effect}</td>
                                    <td>
                                        <Checkbox
                                            checked={activeHero.advantages.some(heroadv => heroadv.id === adv.id)}
                                            onChange={(e)=>handleAdvantageSelection(adv.id,e.target.checked)}
                                        />
                                    </td>
                                    <td>
                                        {adv.ranked
                                        ?
                                        <Input 
                                            type="number"
                                            disabled={!activeHero.advantages.some(heroadv => heroadv.id === adv.id)}
                                        />
                                        :
                                        <>
                                        </>
                                        }
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Box>
            </Card>
            <HeroAdvantageModal 
                open={openModal}
                setOpen={setOpenModal}
                advantageTitle={modalAdvantage.title}
                advantageDescription={modalAdvantage.description}            
            />
        </Box>
    );
}
