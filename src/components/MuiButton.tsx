import { Stack, Button, IconButton, ButtonGroup
 } from "@mui/material";
//? npm install @mui/material is required for the above import
import { Save, Delete, AddShoppingCart } from "@mui/icons-material";
//? npm install @mui/icons-material is required for the above import

import SendIcon from '@mui/icons-material/Send';
//* The upper import is used to import a specific icon from the material icons library

//* Stack is a layout component that can be used to create a vertical or horizontal stack of components

//* Button: variant="contained" | "outlined" | "text"
//* contained: solid background color for primary action like save, submit, etc.
//* outlined: border color for secondary action like cancel, delete, etc.
//* text: no background or border for tertiary action like link, etc.
//* href: for link button

//* Colors: primary, secondary, error, info, success, warning under theme.palette in total 6 colors
//* Each color has main, light, dark, contrastText properties in total 4 properties
//* main: background color
//* light: hover, focus, active background color
//* dark: border color
//* contrastText: text color


const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text" href="https://www.google.com">
          Text
        </Button>
      
      </Stack>
      <Stack direction={"row"} spacing={5}>

      <Stack spacing={2} direction={"column"} width={"10%"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>
      <Stack spacing={2} direction={"column"} width={"10%"}>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="error" size="large">
          Large
        </Button>
      </Stack>
      
      </Stack>
      <Stack direction={"row"} spacing={5}>
        <Button variant="contained" color="primary" startIcon={<Save />}>
            Save
        </Button>
        <Button variant="contained" color="secondary" endIcon={<Delete />}>
            Delete
        </Button>
        <Button variant="contained" color="error" startIcon={<AddShoppingCart />}>
            Add to Cart
        </Button>
        <Button variant="contained" color="info" startIcon={<SendIcon />}>
            Send
        </Button>
        <IconButton aria-label="send" color="success" size="large">
            {/* SendIcon is wrapped in IconButton component to make it clickable */}
            <SendIcon />
            {/* Here SendIcon is used as a clickable icon button with color="success"
            But it is different from the other buttons as it is not a button but an icon button 
            So that it has not colored background but only the icon is colored with the color="success" */}
        </IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup 
          variant="contained" 
          color="secondary" 
          orientation="vertical" 
          size="small"
          aria-label="vertical contained secondary button group"
          >
            <Button onClick={()=> alert("Left clicked!")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
