import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import { CustomButton } from "@lib/components/custom";

const BootstrapDialog = styled(Dialog, {
  shouldForwardProp: (prop) =>
    prop !== "width" && prop !== "minWidth" && prop !== "maxWidth",
})(({ theme, width, minWidth, maxWidth }) => ({
  "& .MuiDialog-paper": {
    width: `${width}%`,
    minWidth: minWidth ? `${minWidth}px` : "none",
    maxWidth: maxWidth ? `${maxWidth}px` : "none",
    boxShadow: `0px 0px 20px 0px ${theme.palette.secondary.main}`,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = ({
  buttonTitle = "Open dialog",
  title = "Modal title",
  openDialog = false,
  handleDialog,
  contentJSx,
  subscribeButtonText,
  width = 50, // Default width is 50%
  minWidth,
  maxWidth,
}) => {
  const handleClose = () => {
    handleDialog(false);
  };

  const handleOpen = () => {
    handleDialog(true);
  };

  return (
    <React.Fragment>
      <CustomButton
        title={buttonTitle}
        variant="outlined"
        onClick={handleOpen}
      />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{contentJSx && contentJSx()}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default CustomizedDialogs;
