import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { NavMenu } from './components/NavMenu'

import { GlobalStyles } from './ThemeConfigs/GlobalStyles'
import { Container } from './ThemeConfigs/styles'
import { lightTheme, darkTheme } from './ThemeConfigs/Theme'

import './App.css'
import { NavMenuMobile } from './components/NavMenuMobile'
import { PictureAndContent } from './components/PictureAndContent'


function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light")
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }  >
        <GlobalStyles />
          <div className='app'>
            <NavMenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
            <NavMenu MenuIsVisible={() => setMenuIsVisible(true)}/>
            <Container>
              <input 
                type="checkbox"
                onClick={() => themeToggler()}
                id="toggle"
              />
              <label htmlFor='toggle' className='button'></label>
              <PictureAndContent />

            </Container>
          </div>

      </ThemeProvider>
  )
}

export default App
