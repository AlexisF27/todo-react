
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from '../headers/TableHeader'
import TableContent from '../content/TableContent';
import Title from '../title/Title';

import GroceriesUtil from '../../utils/GroceriesUtil';


const rows = GroceriesUtil.getFullShoppingList();

const title = "Shopping List"

function NotePad() {

  return (
    <>
      <Title title={title} />

      <Paper elevation={3} square={true}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHeader />
            <TableContent rows={rows} />
          </Table>
        </TableContainer>
      </Paper>

    </>
  );
}

export default NotePad