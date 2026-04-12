import { Box, Sheet, Typography } from '@mui/joy';
import './Header.css';
import ModeSwitcher from './ModeSwitcher';


export default function Header(){

    return (
        <Sheet 
            variant='soft'
            sx={{
                display:'flex',
                minHeight:'4vh'
            }}
        >
            <Typography sx={{p:1, fontFamily:'Comicy'}}>Open Hero Crafter</Typography>
            <Box sx={{flexGrow:1}}></Box>
            <ModeSwitcher />
        </Sheet>
    )

}