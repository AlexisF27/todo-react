import './App.css'
import NavBar from './components/navbar/Navbar'
import NotePad from './components/notePad/NotePad'
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './utils/Themes/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <NotePad />
    </ThemeProvider>
  )
}

export default App
