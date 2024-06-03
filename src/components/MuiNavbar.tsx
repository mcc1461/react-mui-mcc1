import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const MuiNavbar = () => {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{flexGrow:1}}>
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
            Home
          </Button>
          <Button color="warning" variant="contained">
            Services
          </Button>
          <Button color="inherit" variant="outlined">
            Contact
          </Button>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Stack>
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
