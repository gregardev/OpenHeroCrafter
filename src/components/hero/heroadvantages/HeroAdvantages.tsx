import { Box, Card, Divider, Table, Typography } from "@mui/joy";
import advantages from "../../../data/advantages.json";
import { useEffect, useState } from "react";
import HeroAdvantageModal from "./HeroAdvantageModal";

export default function HeroAdvantages() {

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
    },[modalAdvantage])

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
                        maxHeight:800,
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
                        </thead>
                        <tbody>
                            {advantages.map((adv) => (
                                <tr
                                    onClick={()=>changeModalAdvantage(adv.name,adv.description)}
                                    style={{cursor:'pointer'}}
                                >
                                    <td>{adv.name}</td>
                                    <td>{adv.type}</td>
                                    <td>{adv.source}</td>
                                    <td>{adv.ranked?'Yes':'No'}</td>
                                    <td>{adv.maxrank?adv.maxrank:'---'}</td>
                                    <td>{adv.effect}</td>
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
