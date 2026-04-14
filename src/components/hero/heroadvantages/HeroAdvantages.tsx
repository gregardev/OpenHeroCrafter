import { Box, Card, Divider, Table, Typography } from "@mui/joy";
import advantages from "../../../data/advantages.json";

export default function HeroAdvantages() {
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
                <Table color="primary">
                    <thead>
                        <th>Advantage</th>
                        <th>Type</th>
                        <th>Effect</th>
                        <th>Source</th>
                    </thead>
                    <tbody>
                        {advantages.map((adv) => (
                            <tr>
                                <td>{adv.name}</td>
                                <td>{adv.type}</td>
                                <td>{adv.effect}</td>
                                <td>{adv.source}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Box>
    );
}
