import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = () => {
        setIsDrawerOpen(true);
    };

    return (
        <>
            <IconButton onClick={handleClick} size="large" edge="start" color="inherit" aria-label="logo"> 
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={"left" || "right" || "top" || "bottom"}
                open={isDrawerOpen}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end", color:"red", margin: "1rem 1rem 0 0"} }>
                    <CloseIcon onClick={() => setIsDrawerOpen(false)} />
                </Box>
                <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
                    <Typography variant="h6" onClick={handleClick}>
                        Drawer
                    </Typography>
                </Box>
            </Drawer>
        </>
        // <>
        //     <IconButton onClick={handleClick} size="large" edge="start" color="inherit" aria-label="logo"> 
        //         <MenuIcon />
        //     </IconButton>
        //     <Drawer
        //         anchor={"left" || "right" || "top" || "bottom"}
        //         open={isDrawerOpen}
        //     >
        //         <Box sx={{ display: "flex", justifyContent: "flex-end", color:"red", margin: "1rem 1rem 0 0"} }>
        //             <CloseIcon onClick={() => setIsDrawerOpen(false)} />
        //         </Box>
        //         <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
        //             <Typography variant="h6" onClick={handleClick}>
        //                 Drawer
        //             </Typography>
        //         </Box>
        //     </Drawer>
        // </>
    );
};

export default MuiDrawer;
