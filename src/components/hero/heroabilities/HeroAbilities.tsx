import { Box, Card, Divider, Table, Typography } from "@mui/joy";
import HeroAbilitiesTable from "./HeroAbilitiesTable";
import HeroDefensesTable from "./HeroDefensesTable";

export default function HeroAbilities(){


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
                    sx={{m:1}}
                    variant="soft"
                    size="lg"
                >
                    <Typography>Abilities</Typography>
                    <HeroAbilitiesTable />
                    <Typography>Defenses</Typography>
                    <HeroDefensesTable />
                </Card>
                <Card
                    sx={{m:1}}
                    variant="soft"
                    size="lg"
                >
                    <Typography>Ability Benchmarks Table</Typography>
                    <Table aria-label="Ability Benchmark Table" sx={{width:'300px'}} color="primary" size="sm">
                        <thead>
                            <th style={{width:'50px'}}>Rank</th>
                            <th style={{width:'250px'}}>Descrption</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    -5
                                </td>
                                <td>
                                    Completely inept or disabled
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    -4
                                </td>
                                <td>
                                    Weak; infant
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    -3
                                </td>
                                <td>
                                    Younger child
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    -2
                                </td>
                                <td>
                                    Child, elderly, impaired
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    -1
                                </td>
                                <td>
                                    Below average; teenager
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    0
                                </td>
                                <td>
                                    Average adult
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Above average
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Well above average
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Gifted
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    Highly Gifted
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    Best in a nation
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    One of the best in the world
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7
                                </td>
                                <td>
                                    Best ever; peak of human achievement
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    8
                                </td>
                                <td>
                                    Low superhuman
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    10
                                </td>
                                <td>
                                    Moderate superhuman
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    13
                                </td>
                                <td>
                                    High superhuman
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    15
                                </td>
                                <td>
                                    Very high superhuman
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    20
                                </td>
                                <td>
                                    Cosmic
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
}