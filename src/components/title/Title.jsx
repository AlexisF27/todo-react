import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';


import "./title.css"

function Title ({title}) {
  return (
    <>
      <Typography className="title" variant='h1'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'flex' },
          letterSpacing: '.3rem',
        }}
      >
        {title} 
      </Typography>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}


export default Title