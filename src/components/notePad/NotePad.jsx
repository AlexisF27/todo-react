
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from '../headers/TableHeader'
import TableContent from '../content/TableContent';
import Title from '../title/Title';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const title = "Hola"

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