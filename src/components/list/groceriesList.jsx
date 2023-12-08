import { Box, TableContainer, Table, Paper } from '@mui/material';
import TableHeader from '../headers/TableHeader'
import TableContent from '../content/TableContent';
import PropTypes from 'prop-types'

function GroceriesList({ groceries, setGroceries }) {

  return (
    <Box className='paper-spacing'>
      <Paper elevation={3} square={true} >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHeader />
            <TableContent rows={groceries} setRows={setGroceries} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

GroceriesList.propTypes = {
  groceries: PropTypes.array.isRequired,
  setGroceries: PropTypes.func.isRequired,
}

export default GroceriesList