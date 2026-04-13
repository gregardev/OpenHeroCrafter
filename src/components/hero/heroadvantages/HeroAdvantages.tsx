import { Box, Card, Divider, Table, Typography } from "@mui/joy";
import advantages from '../../../data/advantages.json';

export default function HeroAdvantages(){

    return(
        <Box>
            <Typography>Advantages</Typography>
            <Divider />
            <Card
                sx={{m:1}}
                variant="soft"
                size="lg"
            >
                <Table color="primary">
                    <thead>
                        <th>
                            Advantage
                        </th>
                        <th>
                            Effect
                        </th>
                    </thead>
                    <tbody>
                        {advantages.map((adv)=>(
                            <tr>
                                <td>
                                    {adv.name}
                                </td>
                                <td>
                                    {adv.effect}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Card>
        </Box>
    )
}