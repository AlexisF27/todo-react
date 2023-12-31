import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types'
import { Box, FormControl, FormGroup } from '@mui/material';
import './addItemDialog.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useEffect } from 'react';

function AddItemDialog({ open, handleClose, handleSave }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialItemState = {
    checked: false,
    article: '',
    quantity: 1
  };
  const [item, setItem] = useState(initialItemState)

  const handleInput = (event) => {
    const { name, value } = event.target
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      }
    })
  }

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

      >
        <Box className="close-button">
          <IconButton
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Item
        </DialogTitle>

        <DialogContent dividers style={{ minWidth: '400px' }}  >
          <FormGroup>

            <FormControl margin='normal' required >
              <TextField id="article-name" label="Article" variant="outlined" name='article' value={item.article} onChange={handleInput} />
            </FormControl>

            <FormControl margin='normal' required>
              <TextField
                id="standard-number"
                label="Number"
                type="number"
                onChange={handleInput}
                name='quantity'
                InputLabelProps={{
                  shrink: true,
                }}
                value={item.quantity}
                variant="outlined"
                inputProps={{
                  min: 0,
                  max: 12,
                }
                }

              />
            </FormControl>

          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {
            handleSave(item)
          }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>


    </>
  )

}


AddItemDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}


export default AddItemDialog