import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
    return (
        <>
            <Paper
                sx={{
                   p: 2,
                   elevation: 5,
                }}
            >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "15rem",
                    width: "15rem",
                    backgroundColor: "info.light",
                    color: "primary.dark",
                    fontSize: "h3.fontSize",
                    fontWeight: "fontWeightMedium",
                    "&:hover": {
                        backgroundColor: "primary.dark",
                        color: "primary.contrastText",
                    },
                }}
            >
                MuiLayout
            </Box>
            
            <Box
                sx={{
                        width: {
                                xs: '100%',   // Full width on extra small screens
                                sm: '50%',    // 50% width on small and up
                                md: '33%',    // 33% width on medium and up
                                lg: '25%',    // 25% width on large and up
                                xl: '20%',    // 20% width on extra large and up
                            },
                            padding: {
                                xs: '8px',
                                sm: '12px',
                                md: '16px',
                                lg: '24px',
                                xl: '32px',
                            },
                            fontSize: {
                                xs: '1rem',
                                sm: '2rem',
                                md: '3rem',
                                lg: '4rem',
                                xl: '5rem',
                            },
                            backgroundColor: {
                                xs: 'red',
                                sm: 'green',
                                md: 'blue',
                                lg: "#ccff99",
                                xl: 'purple',

                            },
                            margin: "1rem",
                        display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    color: "success.light",
                    fontWeight: "fontWeightMedium",
                    borderRadius: "25%",
                    "&:hover": {
                        backgroundColor: "primary.dark",
                        color: "info.light",
                    },
                    p: 2,
                        m: 3,

                }}
            >
                mcc
            </Box>
            <Stack sx={{
                border: "3px solid red", 
                display: "flex", 
                flexDirection: "row", 
                gap:"1rem"
        }}
        // direction={"row-reverse"} // Fix: Wrap the property inside curly braces
        // spacing={2} // Fix: Wrap the property inside curly braces
        divider={<Divider orientation="vertical" flexItem style={{borderRight: ".5rem solid red"}}/>}
                >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "15rem",
                        width: "15rem",
                        backgroundColor: "success.light",
                        color: "primary.dark",
                        fontSize: "h3.fontSize",
                        fontWeight: "fontWeightMedium",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                            color: "primary.contrastText",
                        },
                    }}
                >
                    One
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "15rem",
                        width: "15rem",
                        backgroundColor: "info.light",
                        color: "primary.dark",
                        fontSize: "h3.fontSize",
                        fontWeight: "fontWeightMedium",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                            color: "primary.contrastText",
                        },
                    }}
                >
                    Two
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "15rem",
                        width: "15rem",
                        backgroundColor: "secondary.light",
                        color: "primary.dark",
                        fontSize: "h3.fontSize",
                        fontWeight: "fontWeightMedium",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                            color: "primary.contrastText",
                        },
                    }}
                >
                    Three
                </Box>
            </Stack>
            {/*
            //^ In grid, the spacing property is used to set the gap between the grid items
            //? The container property is used to set the container of the grid items
            //^ The item property is used to set the grid items
            //? The xs property is used to set the number of columns on extra small devices
            //* Grid container is used to create a grid layout
            //* Grid consists of rows and columns up to 12
            //* Each item in the grid is placed in a grid container and grid item component 
            //* Each item in the grid can take up to 12 columns as its width or height
            //* The spacing property is used to set the gap between the grid items
            //* There are 5 breakpoints in the grid system: xs, sm, md, lg, and xl
            //* xs for mobile devices, sm for tablets, md for desktops, lg for large desktops, and xl for extra-large desktops
            //* An integer value can be assigned to the xs, sm, md, lg, and xl properties to set the number of columns for each breakpoint like xs={12}, sm={6}, md={4}, lg={3}, xl={2}


            */}
            <Grid container rowSpacing={2} columnSpacing={1} my={4}>
                <Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box bgcolor={"primary.light"} p={2} > Item1 </Box>
                </Grid>
                <Grid  item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Box bgcolor={"primary.light"} p={2}> Item2 </Box>
                </Grid>
                <Grid  item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Box bgcolor={"primary.light"} p={2}> Item3 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item4 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item5 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item6 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item7 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item8 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item9 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item10 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item11 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item12 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item13 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item14 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item15 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item16 </Box>
                </Grid>
                <Grid  item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Box bgcolor={"primary.light"} p={2}> Item17 </Box>
                </Grid>
                

            </Grid>
            </Paper>

        </>
    );
};
