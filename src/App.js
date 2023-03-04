import React, { useState, createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons'

import { Main } from './components/Main'
import { Navigation } from './components/Navigation'
import './App.css'

export const ThemeContext = createContext(null)

export const App = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    const Toggle = () => (
        <div className='colourModeToggle'>
            <FontAwesomeIcon className={`${theme}BulbIcon`} icon={theme === 'dark' ? faLightbulb : faLightbulbRegular} onClick={() => toggleTheme()} />
        </div>
    )

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='appMain' id={theme}>
                    <Navigation />
                    <Main/>
                    <Toggle />
                </div>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}
