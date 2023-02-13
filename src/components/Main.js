import { useState } from 'react'
import './main.css'

export const Main = () => {
    const [colourMode, setColourMode] = useState('darkMode')

    const handleColourModeChange = (mode) => {
        mode === 'light' ? setColourMode('lightMode') : setColourMode('darkMode')
    }

    const Toggle = () => (
            <div className='colourModeToggle'>
                <div onClick={() => handleColourModeChange('dark')}>
                    Dark
                </div>
                <div onClick={() => handleColourModeChange('light')}>
                    Light
                </div>
            </div>
        )

    return (
        <div className={`${colourMode} mainPage`}>
            <Toggle />
            Hello World!!
        </div>
    )
}
