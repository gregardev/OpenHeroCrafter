import { Box, Card, Divider, Link, Sheet, Stack, Typography } from "@mui/joy";
import useActiveHero from "../../../hooks/useActiveHero";
import type { Hero } from "../../../interfaces/hero";

const abilities = [
    { label: "Strength", id: "str" },
    { label: "Stamina", id: "sta" },
    { label: "Agility", id: "agi" },
    { label: "Dexterity", id: "dex" },
    { label: "Fighting", id: "fgt" },
    { label: "Intellect", id: "int" },
    { label: "Awereness", id: "awe" },
    { label: "Presense", id: "pre" },
];

function roll() {}

export default function HeroPlay() {
    const { activeHero } = useActiveHero();
    return (
        <Box>
            <Typography>In Play</Typography>
            <Divider />
            <Card size="lg" variant="soft">
                <Stack direction="row">
                    {abilities.map((ab) => (
                        <Card variant="solid" color="primary" sx={{ m: 1 }}>
                            <Link overlay onClick={roll}>
                                <Stack
                                    direction="column"
                                    sx={{
                                        width: 100,
                                        justifyContext: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography>{ab.label}</Typography>
                                    <Typography level="h1">
                                        {
                                            (activeHero[ab.id as keyof Hero] ??
                                                0) as string
                                        }
                                    </Typography>
                                </Stack>
                            </Link>
                        </Card>
                    ))}
                </Stack>
            </Card>
        </Box>
    );
}
