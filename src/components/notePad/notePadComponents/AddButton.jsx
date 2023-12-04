import { Box,  Button } from '@mui/material';
import '../notepad.css'

import AddIcon from '@mui/icons-material/Add';

function AddButton() {
  return (
    <>
      <Box className="add-button">
        <Button color='primary' variant='contained' endIcon={<AddIcon />}>
          Add
        </Button>
      </Box>
    </>
  )

}

export default AddButton