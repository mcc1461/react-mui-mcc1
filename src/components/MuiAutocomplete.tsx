import {Stack, Autocomplete, TextField} from '@mui/material'
import { useState } from 'react'


type Skill = {
    id: number;
    label: string;
}

const skills = [ "HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "SQL", "Python"]

const skillOptions = skills.map((skill, index) => ({id: index+1, label: skill}));

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null >(null);
    console.log(value, "value");
    console.log(skill, "skill");

    const handleChange = (event: any, newValue: string | null) => {
        setValue(newValue);
    }
    const handleSkillChange = (event: any, newValue: Skill | null) => {
        setSkill(newValue);
    }


  return (
    <Stack spacing={2} width={"250px"}>
        {/* 
        //? In the Autocomplete component, the value prop is used to control the value of the input element. Free text is not allowed in the Autocomplete component. 
        //^ To allow free text, the "freeSolo" prop is used.
        */}
       <Autocomplete 
       options={skills} 
       renderInput={(params) => <TextField {...params}  label="skills" />} 
       value = {value}
       onChange={handleChange}
       freeSolo
       />
       <Autocomplete 
       options={skillOptions} 
       renderInput={(params) => <TextField {...params}  label="skills" />} 
       value = {skill}
       onChange={handleSkillChange}
       />
    </Stack>
  )
}
