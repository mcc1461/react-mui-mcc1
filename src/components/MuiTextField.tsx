import {useState} from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'

const MuiTextField = () => {
    const [value, setValue] = useState(''); 

  return (
    <Stack spacing={4}>
        {/* Stack is a layout component that can be used to create a vertical or horizontal stack of components */}
        <Stack direction={"row"} spacing={2} >
            <TextField label="Standard" variant='standard'/>
            <TextField label="Outlined" variant='outlined'/>
            <TextField label="Filled" variant='filled' color='info'/>
        </Stack>
        <Stack direction={"row"} spacing={2} >
            <TextField label="Small secondary" size='small' color='secondary' required/>
        </Stack>
        {/* 
        //^ The helperText property is used to display a helper text below the input field in the TextField component. 
        //? "disabled" property is used to disable the input field in the TextField component. 
        //^ "error" property is used to display an error message below the input field in the TextField component. 
        //? "required" property is used to make the input field mandatory in the TextField component.
        //^ "type" property is used to specify the type of input field in the TextField component.
        //? "multiline" property is used to create a multiline input field in the TextField component.
        //^ "rows" property is used to specify the number of rows in the multiline input field in the TextField component.
        //? "color" property is used to specify the color of the input field in the TextField component.
        //^ "size" property is used to specify the size of the input field in the TextField component.
        //? "variant" property is used to specify the variant of the input field in the TextField component.
        //^ "label" property is used to specify the label of the input field in the TextField component.
        //? "helperText" property is used to specify the helper text of the input field in the TextField component. 
        */}
        
        <Stack direction={"row"} spacing={2} >
            
            <TextField label="Disabled" disabled/> 
            <TextField label="Read Only" InputProps={{ readOnly : true }} /> 
            <TextField label="Password" type='password' size='small' color='secondary' required
            helperText="Do not share your password with anyone"/>
        </Stack>
        <Stack direction={"row"} spacing={2} >
            
            <TextField label="Amount" InputProps={{startAdornment : 
            <InputAdornment position="start">$</InputAdornment>}}/>
            <TextField label="Weight" InputProps={{endAdornment :
            <InputAdornment position="end">kg</InputAdornment>}}/>
        </Stack>
        <Stack direction="column" spacing={2} >
            <TextField label="Filled" variant="filled" />
            <TextField label="Outlined" variant="outlined" />
            <TextField label="Form Input" required value={value} 
            error={!value}
            helperText={!value ? 'Required' : 'Do not share your password with anyone'} 
            onChange={(e)=> setValue(e.target.value)}/>
            <TextField label="Helper text" helperText="Some important text" />
            <TextField label="Multiline" multiline rows={5} />
            <TextField label="Number" type="number" />
            <TextField label="Search" type="search" />
            <TextField label="Date" type="date" />
            <TextField label="Time" type="time" />
            <TextField label="Datetime-local" type="datetime-local" />
            <TextField label="Month" type="month" />
            <TextField label="Week" type="week" />
            <TextField label="Color" type="color" />
            <TextField label="File" type="file" /> 
    </Stack>
    </Stack>
  )
}

export default MuiTextField