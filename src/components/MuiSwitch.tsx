import {Box, FormControlLabel, Switch} from '@mui/material'
import { useState } from 'react'



const MuiSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);
    console.log({darkMode}, "darkMode");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked);
    }

    return (
        <Box>
            <FormControlLabel label="Dark mode"
                control={ <Switch 
                    checked={darkMode}
                    onChange={handleChange}
                    size="small"
                    color="secondary"
                    /> 
                }
                />
        </Box>
    )
}

export default MuiSwitch
