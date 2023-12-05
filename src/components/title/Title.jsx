import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./title.css"

function Title({ title }) {

  return (
    <>
      <Typography color='primary' variant='h1'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'flex' },
          letterSpacing: '.3rem',
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 100 }} />
        {title}
      </Typography>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}


export default Title