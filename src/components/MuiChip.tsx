
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";



const MuiChip = () => {
    const [chip, setChip] = useState(["Chip1", "Chip2", "Chip3"])
    const handleDelete = (chipToDelete: string, index: number) => {
        setChip((newChip) => newChip.filter((chip, i) => chip !== chipToDelete));
    }
    
    return (
    <>
    <Stack direction={"row"} spacing={2} margin={4}>
      <Chip label="Chip" color="primary" size="medium" avatar={<Avatar />}/>
      <Chip label="Chip outlined" color="secondary" size="medium" variant="outlined" avatar={<Avatar>M</Avatar>}/>
      <Chip label="Chip" color="success" size="medium" variant="outlined" avatar={<FaceIcon/>}/>
    </Stack>
    <Stack direction={"row"} spacing={2} margin={4}>
      <Chip label="Chip" color="primary" size="medium" avatar={<Avatar />}/>
      <Chip label="Chip outlined" color="secondary" size="medium" variant="outlined" avatar={<Avatar>M</Avatar>}/>
      <Chip 
        label="Click"
        color="success" 
        size="small" 
        variant="filled"
        onClick={()=>alert("Chip Clicked")}
        />
      <Chip 
        label=" Delete" 
        color="error" 
        size="medium" 
        onClick = {()=>alert("Chip Deleted")}
        onDelete={()=>alert("Delete handler called")} 
        //? This one is used to create an "X" icon inside the chip 
        />
    </Stack>
    <Stack direction={"row"} spacing={2} margin={4}>
      {chip.map((chip, index) => (
        <Chip
          key={index}
            label={chip}
            color="primary"
            size="medium"
            variant="outlined"
            avatar={<Avatar>mcc</Avatar>} 
            onDelete={()=>handleDelete(chip, index)}
            />
        ))}
    </Stack>
    
    </>
  );
};

export default MuiChip;
