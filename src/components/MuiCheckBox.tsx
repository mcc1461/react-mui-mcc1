import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({acceptTnC}, "acceptTnC");
    console.log({skills}, "skills");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    }
    // const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value;
    //     setSkills((prevSkills) => {
    //         if(prevSkills.includes(value)){
    //             return prevSkills.filter((skill) => skill !== value);
    //         } else {
    //             return [...prevSkills, value];
    //         }
    //     });
    // }


  return (
    <>
    <Box width="550px">
        <FormControlLabel
            label="I accept the terms and conditions"
            control={<Checkbox checked={acceptTnC} 
            onChange={handleChange}
            color="secondary" 
            size='small' 
            />}
            />
    </Box>
    <Box>
        <Checkbox 
            icon={<BookmarkBorderIcon />} 
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC}
            onChange={handleChange}
        />
    </Box>
    <Box>
        <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
                <FormControlLabel
                    label="HTML"
                    value="html" 
                    control={
                    <Checkbox 
                        checked={skills.includes('html')}
                        onChange={handleSkillChange}
                        />}
                />
                <FormControlLabel
                    label="CSS"
                    value="css"
                    control={<Checkbox 
                        checked={ skills.includes('css')}
                        onChange={handleSkillChange}/>}
                />
                <FormControlLabel
                    label="JavaScript"
                    value="js"
                    control={<Checkbox 
                        checked={ skills.includes('js')}
                        onChange={handleSkillChange}/>}
                />
            </FormGroup>
            <FormHelperText>
                Please select your skills
            </FormHelperText>
        </FormControl>
    </Box>
    </>
  )
}

export default MuiCheckBox