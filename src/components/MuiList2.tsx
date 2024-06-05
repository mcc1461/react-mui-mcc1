import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  Typography,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList2: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Typography variant="h6">*</Typography>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 1" secondary="Secondary text" />
        </ListItem>
        <Divider sx={{backgroundColor:"warning.main", height:".3rem"}}/>
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
        <Divider sx={{backgroundColor:"success.light", height:"3px"}}/>

        <ListItem>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h6">1</Typography>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 2.a"
              secondary="Secondary text"
              sx={{ "& .MuiListItemText-secondary": { color: "#ff4081" } }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{backgroundColor:"success.light", height:"3px"}}/>
        <ListItem>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h6">1</Typography>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 2.b"
              secondary="Secondary text"
              sx={{ "& .MuiListItemText-secondary": { color: "#ff4081" } }}
            />
          </ListItemButton>
        </ListItem>

        <Divider sx={{backgroundColor:"warning.main", height:".3rem"}}/>

        <ListItem disablePadding> {/* disablePadding : The colored buttom has the same intend with the previous ones now */}
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            sx={{
              bgcolor: "success.light",
              borderRadius: "1rem",
              "&:hover": { backgroundColor: "secondary.light", color: "white" },
              "&.Mui-selected": { backgroundColor: "secondary.light", color: "white" },
            }}
          >
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
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList2;
