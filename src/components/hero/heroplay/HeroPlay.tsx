import {
    Box,
    Button,
    Card,
    Divider,
    Sheet,
    Stack,
    Table,
    Typography,
    type ColorPaletteProp,
} from "@mui/joy";
import useActiveHero from "../../../hooks/useActiveHero";
import type { Hero } from "../../../interfaces/hero";
import { FaDiceD20 } from "react-icons/fa6";
import { useCallback, useState } from "react";

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

const defenses = [
    { label: "Dodge", id: "dod", base:'agi' },
    { label: "Parry", id: "par" },
    { label: "Fortitude", id: "fod" },
    { label: "Will", id: "wid" }
];

export default function HeroPlay() {
    const { activeHero } = useActiveHero();
    const [rollResult, setRollResult] = useState("");
    const [criticalRollColor, setCriticalRollColor] = useState("neutral");

    const roll = useCallback(function ({
        modifier,
        label,
    }: {
        modifier: number;
        label: string;
    }) {
        const die = Math.floor(Math.random() * 20) + 1;
        const total = die + modifier;

        if (die === 20) {
            setCriticalRollColor("success");
        } else if (die === 1) {
            setCriticalRollColor("danger");
        } else {
            setCriticalRollColor("neutral");
        }

        setRollResult(`${label}: ${total}\n (die: ${die} + mod: ${modifier})`);
    }, []);
    return (
        <Box>
            <Typography
                level="h4"
                sx={{ fontFamily: "Comicy", fontStyle: "italic" }}
            >
                Hero In Action
            </Typography>
            <Divider />
            <Stack direction="row">
                <Sheet variant="soft" sx={{ width: 1240 }}>
                    <Stack direction="row">
                        {abilities.map((ab) => (
                            <Button
                                onClick={() =>
                                    roll({
                                        modifier: (activeHero[
                                            ab.id as keyof Hero
                                        ] ?? 0) as number,
                                        label: ab.label,
                                    })
                                }
                                disabled={
                                    (activeHero[("d" + ab.id) as keyof Hero] ??
                                        true) as boolean
                                }
                                variant="solid"
                                sx={{ m: 1 }}
                            >
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
                            </Button>
                        ))}
                    </Stack>
                </Sheet>
                <Sheet
                    variant="solid"
                    color={criticalRollColor as ColorPaletteProp}
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        level="h3"
                        sx={{ m: 1, whiteSpace: "pre-line" }}
                    >
                        <FaDiceD20 /> Result: {rollResult}
                    </Typography>
                </Sheet>
            </Stack>
            <Stack
                direction="row"
            >
                <Card size="lg" variant="soft" sx={{ m: 1, width:400 }}>
                    <Typography sx={{ fontFamily: "Comicy", fontStyle: "italic" }}>
                        Defenses
                    </Typography>
                    <Divider />
                    
                    <Table color="primary">
                        <thead>
                            <th>Defense</th>
                            <th>DC</th>
                            <th>Mod</th>
                        </thead>
                        <tbody>
                            {defenses.map(def => (
                                <tr>
                                    <td>
                                        {def.label}
                                    </td>
                                    <td>
                                        {((activeHero[def.id as keyof Hero] as number) ?? 0) + 10}
                                    </td>
                                    <td>
                                        <Button onClick={() => roll({
                                            modifier: ((activeHero[def.id as keyof Hero] as number) ?? 0),
                                            label:def.label
                                        })}>
                                            <Typography level="h4">
                                                {((activeHero[def.id as keyof Hero] as number) ?? 0)}
                                            </Typography>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
                <Card size="lg" variant="soft" sx={{ m: 1, width:400 }}>
                    <Typography level="h4" sx={{ fontFamily: "Comicy", fontStyle: "italic" }}>
                        Combat
                    </Typography>
                    <Divider />
                    <Typography  sx={{ fontFamily: "Comicy", fontStyle: "italic" }}>
                        Attacks
                    </Typography>
                    <Divider />
                    <Typography  sx={{ fontFamily: "Comicy", fontStyle: "italic" }}>
                        Hits
                    </Typography>
                    <Divider />
                    <Button onClick={() => roll({
                        modifier: activeHero.tou,
                        label:"Toughness"
                    })}>
                        <Typography level="h4">Toughness {activeHero.tou}</Typography>
                    </Button>
                </Card>
            </Stack>
        </Box>
    );
}
