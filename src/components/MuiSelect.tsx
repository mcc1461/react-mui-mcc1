import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState<string[]>([]);
    console.log(country, "country");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountry(typeof value === 'string' ? value.split(',') : value);
    }


    return (
      <Box width="250px">
          <TextField 
            label="Select country" 
            select 
            fullWidth
            value={country}
            onChange={handleChange}
            SelectProps={{ multiple: true }}
            size='small'
            color = 'secondary'
            helperText="Please select your country"
            error
          >
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="AU">Australia</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
          </TextField>
      </Box>
    )
}

export default MuiSelect