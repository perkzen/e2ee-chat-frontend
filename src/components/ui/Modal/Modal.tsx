import React, {FC} from 'react';
import {Box, Modal as MUIModal} from "@mui/material";

interface ModalProps {
    open: boolean
    onClose: () => void
}

const Modal: FC<ModalProps> = ({children, open, onClose}) => {
    return (
        <MUIModal open={open} onClose={onClose}>
            <Box>
                {children}
            </Box>
        </MUIModal>
    );
};

export default Modal;