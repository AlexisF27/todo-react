import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

import { red, green } from '@mui/material/colors';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function TableContent({ rows }) {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">
            <Checkbox  {...label} checked={row.checked} icon={<ShoppingBasketIcon sx={{ color: red[500] }} />} checkedIcon={<ShoppingBasketIcon sx={{ color: green[700] }} />} />
          </TableCell>
          <TableCell align="right">{row.quantity}</TableCell>
          <TableCell align="right" component="th" scope="row"> {row.article}</TableCell>
          <TableCell align="right" component="th" scope="row">
            <IconButton aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>

  )
}

TableContent.propTypes = {
  rows: PropTypes.array.isRequired
}

export default TableContent