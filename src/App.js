import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Main } from './components/Main'
import './App.css'
import { Navigation } from './components/Navigation'

export const App = () => {
    const [colourMode, setColourMode] = useState('darkMode')

    const handleColourModeChange = (mode) => {
        console.log('click')
        mode === 'lightMode' ? setColourMode(mode) : setColourMode(mode)
    }

    return <BrowserRouter><div className='appMain'><Navigation colourMode={colourMode} handleColourModeChange={handleColourModeChange} /><Main colourMode={colourMode}/></div></BrowserRouter>
}
