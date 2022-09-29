import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { NavMenu } from './components/NavMenu'

import { GlobalStyles } from './ThemeConfigs/GlobalStyles'
import { Container } from './ThemeConfigs/styles'
import { lightTheme, darkTheme } from './ThemeConfigs/Theme'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light")
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }  >
        <GlobalStyles />
          <div className='app'>
            <NavMenu />
          </div>
        {/* <Container>
          Hello World!!!
          <button onClick={() => themeToggler()}>Theme</button>
        </Container> */}
      </ThemeProvider>
  )
}

export default App
