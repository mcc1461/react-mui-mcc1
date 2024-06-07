import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const MuiTable = () => {
  return 
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 3, Cell 1</TableCell>
          <TableCell>Row 3, Cell 2</TableCell>
          <TableCell>Row 3, Cell 3</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </TableContainer>;
};

export default MuiTable;
