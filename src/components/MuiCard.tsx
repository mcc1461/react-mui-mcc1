import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";

export const MuiCard = () => {
    return (
        <Box width={"300px"}>
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/?react"
                alt="React"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> 
                        React
                </Typography>  
                <Typography variant="body2" color="text.secondary">
                        React is a JavaScript library for building user interfaces.
                        React is maintained by Facebook and a community of individual developers and companies.
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small" variant="contained" >Share</Button> */}
                {/* <Button size="small" variant="outlined">Learn More</Button> */}
                <Button size="small" variant="text" >Share</Button> 
                 {/* default variant is text */}
                <Button size="small" >Learn More</Button>
            </CardActions>
        </Card>
        </Box>
    );
};
