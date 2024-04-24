'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { CustomButton } from '@lib/components/custom';

const DraggablePaper = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
    </Draggable>
);

const CustomDraggableDialog = ({
    title,
    contentJSX,
    draggable,
    onClose,
    open,
    buttonVariant,
    buttonText,
    onButtonClick,
    closeOnOutsideClick,
    onCancelClick,
    onSubscribeClick,
    cancelButtonText,
    subscribeButtonText
}) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) onClose();
    };

    const handleButtonClick = () => {
        setIsOpen(true);
        if (onButtonClick) onButtonClick();
    };

    const handleOutsideClick = () => {
        if (closeOnOutsideClick) {
            handleClose();
        }
    };

    const handleSubscribeClick = () => {
        if (onSubscribeClick) {
            const shouldClose = onSubscribeClick();
            console.log("shouldClose", shouldClose)
            // if (shouldClose) {
            //     handleClose();
            // }
        }
    };

    return (
        <React.Fragment>
            <Button variant={buttonVariant} onClick={handleButtonClick}>
                {buttonText}
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                PaperComponent={draggable ? DraggablePaper : Paper}
                aria-labelledby="draggable-dialog-title"
                onClick={handleOutsideClick}
            >
                <DialogTitle style={draggable ? { cursor: 'move' } : undefined} id="draggable-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    {typeof contentJSX === 'function' ? contentJSX() : <DialogContentText>{contentJSX}</DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <CustomButton
                        title={cancelButtonText || 'Cancel'}
                        onClick={handleClose} />
                    <CustomButton
                        title={subscribeButtonText || 'Done'}
                        onClick={handleSubscribeClick} />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default CustomDraggableDialog;
