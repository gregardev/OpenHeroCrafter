import { Box, Divider, Typography } from "@mui/joy";

export default function HeroDetails() {
    return (
        <Box>
            <Typography
                level="h4"
                sx={{ fontFamily: "Comicy", fontStyle: "italic" }}
            >
                Hero Details
            </Typography>
            <Divider />
            <Box></Box>
            <Divider />
            <Box></Box>
        </Box>
    );
}
