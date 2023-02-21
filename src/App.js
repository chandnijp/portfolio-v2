import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Main } from './components/Main'
import './App.css'

export const App = () => {
    return <BrowserRouter><div className='appMain'><Main /></div></BrowserRouter>
}
