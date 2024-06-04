import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';


const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigation speed dial'
        sx={{position:"absolute", bottom:"1rem", right:"1rem"}}
        // icon={<SpeedDialIcon  sx={{fontSize:"3rem", display:"flex", alignItems:"center", justifyContent:"center"}} icon={"🐠" || <StarIcon />} openIcon={<EditIcon/>} />}
        // icon={<SpeedDialIcon  icon={<StarIcon />} openIcon={<EditIcon/>} />}
        icon={<SpeedDialIcon />}
        >
        <SpeedDialAction
            key="Copy"
            icon={<CopyIcon />}
            tooltipTitle="Copy"
            tooltipOpen
/>
        <SpeedDialAction
            key="Print"
            icon={<PrintIcon />}
            tooltipTitle="Print"
            tooltipOpen                           

        />
        <SpeedDialAction
            key="Share"
            icon={<ShareIcon />}
            tooltipTitle="Share"  
            tooltipOpen                           
        />
    </SpeedDial>
  )
}

export default MuiSpeedDial;