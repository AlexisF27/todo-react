
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';


import Container from '@mui/material/Container';

import Logo from './components/Logo';
import NavBarPages from './components/NavBarPages';
import NavBarMenu from './components/NavBarMenu';





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



