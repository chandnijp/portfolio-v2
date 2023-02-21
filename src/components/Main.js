import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons'

import { About } from './About'
import { Navigation } from './Navigation'
import { Work } from './Work'
import './main.css'
import { Projects } from './Projects'

export const Main = () => {
    const location = useLocation()
    const [colourMode, setColourMode] = useState('darkMode')

    const handleColourModeChange = (mode) => {
        mode === 'light' ? setColourMode('lightMode') : setColourMode('darkMode')
    }

    const Toggle = () => (
            <div className='colourModeToggle'>
                <div onClick={() => handleColourModeChange('dark')}>Off</div>
                <p><FontAwesomeIcon icon={colourMode === 'darkMode' ? faLightbulb : faLightbulbRegular} /></p>
                <div onClick={() => handleColourModeChange('light')}>On</div>
            </div>
        )

    return (
        <div className={`${colourMode} mainPage`}>
            <Toggle />
            <div className='mainContent'>
                <div className='intro'>
                    <p className='header'>Chandni Patel</p>
                    <p className='subheader'>{'< I build websites >'}</p>
                </div>
                {(location.hash === '/' || location.hash === '#about') && <About />}
                {location.hash === '#work' && <Work/>}
                {location.hash === '#projects' && <Projects />}
            </div>
            <Navigation />
        </div>
    )
}
