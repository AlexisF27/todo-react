import PropTypes from 'prop-types'

function Title ({title='Hello there!'}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string
}


export default Title