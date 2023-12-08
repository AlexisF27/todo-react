import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

import { red, green } from '@mui/material/colors';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState, useEffect } from 'react';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function TableContent({ rows, setRows }) {

  // const [groceries, setGroceries] = useState(rows);
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    // Set the state with the prop value when the component mounts
    setGroceries(rows);
  }, [rows]);


  const eraseItem = (grocery) => {
    const oldList = groceries.filter(grcy => grcy.article !== grocery.article);
    updateGroceries(oldList);
  }

  const prevstate = (item) => {
    return (prevGroceries) => prevGroceries.map((grocery) => grocery.article === item.article ? { ...grocery, checked: !item.checked } : grocery);
  }

  const changeCheckedItem = (item) => {
    updateGroceries(prevstate(item));
  }

  const updateGroceries = (newGroceries) => {
    setGroceries(newGroceries);
    setRows(newGroceries);
  }

  return (
    <TableBody>
      {groceries?.map((grocery, index) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">
            <Checkbox  {...label} onChange={() => { changeCheckedItem(grocery) }} checked={grocery.checked} icon={<ShoppingBasketIcon sx={{ color: red[500] }} />} checkedIcon={<ShoppingBasketIcon sx={{ color: green[700] }} />} />
          </TableCell>
          <TableCell align="right">{grocery.quantity}</TableCell>
          <TableCell align="right" component="th" scope="row"> {grocery.article}</TableCell>
          <TableCell align="right" component="th" scope="row">
            <IconButton onClick={() => eraseItem(grocery)} aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>

  )




}

TableContent.propTypes = {
  rows: PropTypes.array.isRequired,
  setRows: PropTypes.func.isRequired
}

export default TableContent