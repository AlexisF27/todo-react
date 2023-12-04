import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types'

import Checkbox from '@mui/material/Checkbox';

import { red, green } from '@mui/material/colors';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function TableContent({ rows }) {

  console.log(rows)
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.article}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">
            <Checkbox  {...label} checked={row.checked} icon={<ShoppingBasketIcon sx={{ color: red[500] }} />} checkedIcon={<ShoppingBasketIcon sx={{ color: green[700] }} />} />
          </TableCell>
          <TableCell align="right">{row.quantity}</TableCell>
          <TableCell align="right" component="th" scope="row"> {row.article}</TableCell>
        </TableRow>
      ))}
    </TableBody>

  )
}

TableContent.propTypes = {
  rows: PropTypes.array.isRequired
}

export default TableContent