import React, { useState } from "react";
import { IconButton, Popover, ListItem, ListItemText } from "@mui/material";
import { CampaignIcon } from "@lib/icons"; // Assuming you have a CampaignIcon
import { Stack, Divider, Avatar, Typography, Grid, Badge } from "@lib";

// Sample notifications
const notificationsList = [
  {
    id: 1,
    title: "New Message",
    message: "You have received a new message from John Doe",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "New Friend Request",
    message: "You have a new friend request from Jane Smith",
    timestamp: "1 day ago",
  },
  // Add more notifications here if needed
];

const NotificationPopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="p-1">
      <IconButton color="inherit" onClick={handleClick}>
        <CampaignIcon className="mt-2" fontSize="large" />
        <Badge
          className="animate-pulse mb-8"
          badgeContent={notificationsList.length}
          color="warning"
          variant="outlined"
        ></Badge>
        {/* Assuming you have a NotificationsIcon */}
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          <div className="p-2">
            <Typography variant="h3">Notifications</Typography>
          </div>
          <Divider />
          <Stack spacing={2} className="p-3">
            {notificationsList.map((notification) => (
              <ListItem key={notification.id} disablePadding>
                <Grid container spacing={2}>
                  <Grid item>
                    <CampaignIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={10}>
                    <ListItemText
                      primary={notification.title}
                      secondary={notification.message}
                    />
                    <Typography variant="body2" color="secondary">
                      {notification.timestamp}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </Stack>
        </div>
      </Popover>
    </div>
  );
};

export default NotificationPopup;
