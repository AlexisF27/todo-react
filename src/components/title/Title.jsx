import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import "./title.css"

function Title ({title}) {
  return (
    <>
      <Typography className="title" color={{ color: red[500] }} variant='h1'>{title}</Typography>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}


export default Title