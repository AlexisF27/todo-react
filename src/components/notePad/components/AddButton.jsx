import { Box,  Button } from '@mui/material';
import PropTypes from 'prop-types'
import '../notepad.css'

import AddIcon from '@mui/icons-material/Add';

function AddButton({onClick}) {
  return (
    <>
      <Box className="add-button">
        <Button onClick={onClick} color='primary' variant='contained' endIcon={<AddIcon />}>
          Add
        </Button>
      </Box>
    </>
  )

}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
}


export default AddButton