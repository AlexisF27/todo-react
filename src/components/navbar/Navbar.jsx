
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';


import Container from '@mui/material/Container';

import Logo from './NavBarComponents/Logo';
import NavBarPages from './NavBarComponents/NavBarPages';
import NavBarMenu from './NavBarComponents/NavBarMenu';





function NavBar() {
  return (
    <>
      <AppBar >
        <Container>
          <Toolbar disableGutters>
            <Logo/>
            <NavBarPages/>
            <NavBarMenu/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )

}


export default NavBar



