import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import type { Dispatch, SetStateAction } from "react";

export default function HeroAdvantageModal({open, setOpen, advantageTitle, advantageDescription}:
    {open:boolean, setOpen:Dispatch<SetStateAction<boolean>>,advantageTitle:string,advantageDescription:string}){

    return(

        <Modal
            aria-labelledby="advantage-title"
            aria-describedby="advantage-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: 1000, borderRadius: 'md', p: 3, boxShadow: 'lg'}}
            >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
                component="h2"
                id="advantage-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: 'lg', mb: 1 }}
            >
                {advantageTitle}
            </Typography>
            <Typography id="advantage-desc" textColor="text.tertiary" sx={{whiteSpace:'pre-wrap', maxHeight:700, overflow:'auto'}}>
                {advantageDescription}
            </Typography>
            </Sheet>
        </Modal>

    );
}