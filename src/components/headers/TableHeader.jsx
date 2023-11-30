import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
function TableHeader() {

  return (
      <TableHead>
        <TableRow>
          <TableCell align="right">Check</TableCell>
          <TableCell align="right"> Quantity </TableCell>
          <TableCell align="right"> Article </TableCell>
        </TableRow>
      </TableHead>
  )

}

export default TableHeader