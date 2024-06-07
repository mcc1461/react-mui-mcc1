import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles'; // Import makeStyles from @mui/styles instead of @mui/material

const useStyles = makeStyles((theme) => ({
    customTooltip: {
        backgroundColor: 'red', // Tooltip background color
        color: 'white',         // Tooltip text color
        fontSize: '1rem',       // Tooltip font size
        borderRadius: '5px',    // Tooltip border radius
        padding: '10px',        // Tooltip padding
        border: '1px solid red',// Tooltip border
        boxShadow: '0 0 10px red', // Tooltip box shadow
        fontWeight: 'bold',     // Tooltip font weight
        fontFamily: 'Arial',    // Tooltip font family
        textTransform: 'uppercase', // Tooltip text transform
        letterSpacing: '1px',   // Tooltip letter spacing
    },
    arrow: {
        color: 'white',           // Arrow color
        '&::before': {
            backgroundColor: 'red', // Arrow background color
        },
    },
    customArrow: {
        fontSize: '2rem',       // Arrow size
    },
}));

function CustomTooltip() {
    const classes = useStyles();

    return (
        <Tooltip
        classes={{ tooltip: classes.customTooltip, arrow: classes.arrow }}
            title="Delete This Item"
            placement="top-start"
            enterDelay={500} // Delay in milliseconds
            leaveDelay={200} // Delay in milliseconds
            arrow // Show arrow on the tooltip
            PopperProps={{
                modifiers: [
                    {
                        name: 'arrow',
                        options: {
                            element: '[data-popper-arrow]',
                        },
                    },
                ],
            }}
            sx={{
                fontSize: '1rem',
                color: 'red',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '10px',
                border: '1px solid red',
                boxShadow: '0 0 10px red',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                margin: '3rem',
                textAlign: 'center',
                width: '50px',
                height: '50px',
                lineHeight: '50px',
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                transition: '0.5s',
                '&:hover': {
                    backgroundColor: 'red',
                    color: 'white',
                },
                '.MuiTooltip-arrow': {
                    fontSize: '2rem',
                    color: 'red',
                },
            }}
        >
            <DeleteIcon color="error" />
        </Tooltip>
    );
}

export default CustomTooltip;
