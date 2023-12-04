import { Box, IconButton, TableContainer, Table, Paper, Button } from '@mui/material';
import TableHeader from '../headers/TableHeader'
import TableContent from '../content/TableContent';
import Title from '../title/Title';
import GroceriesUtil from '../../utils/GroceriesUtil';


import './notepad.css'
import AddButton from './notePadComponents/AddButton';


const rows = GroceriesUtil.getCasualShoppingList();



const title = "Shopping List"

function NotePad() {


  return (
    <>
      <Title title={title} />
      <AddButton/>
      <Box className='paper-spacing'>
        <Paper elevation={3} square={true} >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHeader />
              <TableContent rows={rows} />
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}

export default NotePad