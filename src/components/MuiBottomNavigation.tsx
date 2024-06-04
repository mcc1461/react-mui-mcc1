import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
return (
    <BottomNavigation 
        sx={{width:"100%", height:"5%", position:"absolute", bottom:"0", justifyContent: 'center'}}
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels  //* optional, to show labels below icons *//
        >

        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} sx={{flexDirection:"column-reverse",  
        '.MuiBottomNavigationAction-label': { fontSize: '1.3rem' },
        '.MuiSvgIcon-root': { fontSize: '1.9rem' },
        '&.Mui-selected': {
            '.MuiBottomNavigationAction-label': { fontSize: '1.3rem', color:"secondary.main" },
            '.MuiSvgIcon-root': { fontSize: '1.9rem', color:"secondary.main" },  // Ensure on selected 
          }
        }}/>
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} onClick={()=>alert("profile clicked")}/>
    </BottomNavigation>
)
}

export default MuiBottomNavigation

//* Alternative way to write the same code with different styling by using styled() *//
// import {BottomNavigation, BottomNavigationAction} from '@mui/material';
// import {useState} from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonIcon from '@mui/icons-material/Person';
// import { styled } from '@mui/system';

// const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
//   flexDirection: 'column-reverse',
//   '.MuiBottomNavigationAction-label': {
//     fontSize: '0.75rem', // Adjust label font size if needed
//   }
// }));

// const MuiBottomNavigation = () => {
//     const [value, setValue] = useState(0);
// return (
//     <BottomNavigation 
//         sx={{width:"100%", position:"absolute", bottom:"0", justifyContent: 'center'}}
//         value={value}
//         onChange={(event, newValue) => {
//             setValue(newValue);
//         }}
//         showLabels  //* optional, to show labels below icons *//
//         >

//         <StyledBottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
//         <StyledBottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
//         <StyledBottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />
//     </BottomNavigation>
// )
// }

// export default MuiBottomNavigation