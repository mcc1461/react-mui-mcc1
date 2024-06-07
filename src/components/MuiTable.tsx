import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Box,
    Typography
} from "@mui/material";

// const MuiTable = () => {
//     return (
//         <Box sx={{ margin: "4rem" }}>
//             <Typography variant="h4" component="div" sx={{ marginBottom: "1rem", textAlign: "center", color: "blueviolet", fontWeight:"bold" }}>
//                 MCC-TABLE
//             </Typography>
//             <TableContainer component={Paper} sx={{ maxHeight: "17rem" }}>
//                 <Table aria-label="mcc table" stickyHeader>
//                     <TableHead aria-label="aaa">
//                         <TableRow sx={{ backgroundColor: "yellow" }}>
//                             <TableCell sx={{ color: "blue", backgroundColor: "yellow", fontSize: "1.3rem" }}>Id</TableCell>
//                             <TableCell sx={{ color: "blue", backgroundColor: "yellow", fontSize: "1.3rem" }}>First Name</TableCell>
//                             <TableCell sx={{ color: "blue", backgroundColor: "yellow", fontSize: "1.3rem" }}>Last Name</TableCell>
//                             <TableCell align="center" sx={{ color: "blue", backgroundColor: "yellow", fontSize: "1.3rem" }}>Email</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {tableData.map((row) => (
//                             <TableRow
//                                 key={row.id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell>{row.id}</TableCell>
//                                 <TableCell>{row.first_name}</TableCell>
//                                 <TableCell>{row.last_name}</TableCell>
//                                 <TableCell align="center">{row.email}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Box>
//     );
// };


const MuiTable = () => {
    return (
        <Box sx={{margin:"4rem"}}>
            <TableContainer component={Paper} sx={{maxHeight:"17rem"}}>
                <Table aria-label="mcc table" stickyHeader>
                    <TableHead aria-label="aaa">
                        <TableRow>
                            <TableCell sx={{color: "blueviolet", fontWeight:"bold", fontSize:"1.3rem", backgroundColor:"#0fffff"}} colSpan={4} align="center">
                                MCC-TABLE
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{color: "blue", backgroundColor:"yellow", fontWeight:"bold"}}>Id</TableCell>
                            <TableCell sx={{color: "blue", backgroundColor:"yellow", fontWeight:"bold"}}>First Name</TableCell>
                            <TableCell sx={{color: "blue", backgroundColor:"yellow", fontWeight:"bold"}}>Last Name</TableCell>
                            <TableCell align="center" sx={{color: "blue", backgroundColor:"yellow", fontWeight:"bold"}}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};


const tableData = [{
    "id": 1,
    "first_name": "Jacky",
    "last_name": "Gladding",
    "email": "jgladding0@constantcontact.com",
    "gender": "Male",
    "ip_address": "94.184.65.66"
}, {
    "id": 2,
    "first_name": "Catriona",
    "last_name": "Chaperlin",
    "email": "cchaperlin1@t-online.de",
    "gender": "Female",
    "ip_address": "115.126.31.154"
}, {
    "id": 3,
    "first_name": "Alene",
    "last_name": "Strauss",
    "email": "astrauss2@msu.edu",
    "gender": "Female",
    "ip_address": "112.147.154.63"
}, {
    "id": 4,
    "first_name": "Marmaduke",
    "last_name": "Wilton",
    "email": "mwilton3@cocolog-nifty.com",
    "gender": "Agender",
    "ip_address": "23.8.103.137"
}, {
    "id": 5,
    "first_name": "Mathilde",
    "last_name": "Richford",
    "email": "mrichford4@arizona.edu",
    "gender": "Female",
    "ip_address": "62.121.157.28"
}, {
    "id": 6,
    "first_name": "Cornall",
    "last_name": "Mellers",
    "email": "cmellers5@cpanel.net",
    "gender": "Male",
    "ip_address": "131.244.83.129"
}, {
    "id": 7,
    "first_name": "Mitchael",
    "last_name": "Weir",
    "email": "mweir6@patch.com",
    "gender": "Male",
    "ip_address": "250.98.59.42"
}, {
    "id": 8,
    "first_name": "Anabel",
    "last_name": "Bampford",
    "email": "abampford7@freewebs.com",
    "gender": "Female",
    "ip_address": "224.139.117.41"
}, {
    "id": 9,
    "first_name": "Chaddy",
    "last_name": "Laker",
    "email": "claker8@sfgate.com",
    "gender": "Male",
    "ip_address": "180.135.161.23"
}, {
    "id": 10,
    "first_name": "Duffie",
    "last_name": "Eringey",
    "email": "deringey9@mediafire.com",
    "gender": "Non-binary",
    "ip_address": "195.0.36.40"
}];

export default MuiTable;
