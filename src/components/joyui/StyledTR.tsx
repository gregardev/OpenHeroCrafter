import { styled } from "@mui/joy";

const StyledTR = styled('tr')<{ 
  overPowerLimit?: boolean;
}>(({ theme, overPowerLimit }) => ({
  backgroundColor: overPowerLimit 
    ? theme.vars.palette.danger.softBg 
    : 'transparent',
  transition: 'background-color 0.2s ease',
}));

export default StyledTR;