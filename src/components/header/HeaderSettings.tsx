import { Box, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { PiGearSixBold } from "react-icons/pi";
import useActiveHero from "../../hooks/useActiveHero";
import { defaultHero } from "../../interfaces/hero";

export default function HeaderSettings(){
    
    const {setActiveHero} = useActiveHero();

    function resetActiveHero(){
        setActiveHero({...defaultHero});
    }

    return(
        <Box
            sx={{mr:3}}
        >
            <Dropdown>
            <MenuButton
                variant="plain"
            >
                <PiGearSixBold size={'3vh'} />
            </MenuButton>
            <Menu>
                <MenuItem onClick={resetActiveHero}>Reset Hero</MenuItem>
            </Menu>
        </Dropdown>
        </Box>
        
    );
}