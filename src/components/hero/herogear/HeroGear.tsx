import { Box, Divider, Typography } from "@mui/joy";

export default function HeroGear() {
    return (
        <Box>
            <Typography
                level="h4"
                sx={{ fontFamily: "Comicy", fontStyle: "italic" }}
            >
                Equipment
            </Typography>
            <Divider />
        </Box>
    );
}
