import { Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListSubheader,
  Divider,
  Avatar,
  IconButton,
  Typography,
  ListItemButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Typography variant="h6">*</Typography>{" "}
                {/* Typography variant="h6" is used to increase the font size */}
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 1" secondary="Secondary text" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary text" />
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              bgcolor: "success.light",
              borderRadius: "1rem",
              "&:hover": { backgroundColor: "secondary.light", color: "white" },
              "&.Mui-selected": { backgroundColor: "secondary.light", color: "white" },
            }}
          >
            {" "}
            {/* clickable ListItemButton */}
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h6">1</Typography>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 3"
              secondary="Secondary text"
              sx={{ "& .MuiListItemText-secondary": { color: "#ff4081" } }}
            />
            {/* change secondary text color */}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
