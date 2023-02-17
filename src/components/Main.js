import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons'

import './main.css'

export const Main = () => {
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
            Hello World!!
        </div>
    )
}
