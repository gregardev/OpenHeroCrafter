import { Box, Divider, Typography } from "@mui/joy";

export default function HeroComplications() {
    return (
        <Box>
            <Typography
                level="h4"
                sx={{ fontFamily: "Comicy", fontStyle: "italic" }}
            >
                Complications and Backstory
            </Typography>
            <Divider />
        </Box>
    );
}
