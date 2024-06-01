import { BorderHorizontal } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log({value});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
  return (
    <Box width="250px">
      <FormControl error >
        <FormLabel id="job-experience-group-level" style={{fontWeight: "bold", fontSize:"1.5rem"}}>
            Years of experience
        </FormLabel>
        <RadioGroup
            aria-labelledby="job-experience-group-level"
            name="job-experience"
            value={value}   
            onChange={handleChange}
            row 
            style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}
        >
            <FormControlLabel value="0-2" control={<Radio size="medium" color="secondary" />} label="0-2" />
            <FormControlLabel value="3-5" control={<Radio />} label="3-5 " />
            <FormControlLabel value="6-8" control={<Radio />} label="6-8" />
            <FormControlLabel value="9-11" control={<Radio />} label="9-11 " />
            <FormControlLabel value="12+" control={<Radio />} label="12+" />
        </RadioGroup>
        <FormHelperText>
            Please enter your years of experience
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
