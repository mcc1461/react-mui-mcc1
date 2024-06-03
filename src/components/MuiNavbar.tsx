import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";  


const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // alert("clicked");
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Stack
          spacing={1}
          direction={"row"}
          sx={{
            display: "flex",
            gap: ".5rem",
            justifyContent: "space-around",
          }}
        >
          <Button color="inherit" variant="outlined">
            Features
          </Button>
          <Button color="warning" variant="contained">
            Pricing
          </Button>
          <Button color="inherit" variant="outlined">
            About
          </Button>
          <Button
            id="resources-button"
            color="inherit"
            variant="outlined"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Stack>
        <Menu
          id="resouces-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
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
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
{
  /*

const MuiNavbar = () => {
  return (
    <AppBar position={"static"} sx={{bgcolor:"secondary", display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row"}}>

        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component={"div"}
            >PokemonApp</Typography>
        </Box>
        <Box sx={{display:"flex", gap:".5rem", justifyContent: "space-around", marginRight:".3rem" }}>
            <Button color="inherit" variant="outlined">Home</Button>
            <Button color="inherit" variant="outlined">Services</Button>
            <Button color="inherit" variant="outlined">Contact</Button>
        </Box>
    </AppBar>
  );
};

export default MuiNavbar;

*/
}
