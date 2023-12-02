import StorefrontIcon from '@mui/icons-material/Storefront';
import Typography from '@mui/material/Typography';

function Logo() {

  return (
    <>
      <StorefrontIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>

    </>
  )

}

export default Logo