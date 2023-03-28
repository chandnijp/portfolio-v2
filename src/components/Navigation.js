import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BurgerMenu } from './BurgerMenu'

export const Navigation = ({ theme }) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }

    return (
        <nav className={`navigation ${burgerMenuOpen && 'navigationMobile'} ${theme}Navigation`}>
            <div className={`navItems ${theme}NavItems ${burgerMenuOpen && 'showNavItems'}`}>
                <Link to='#about' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>about</Link>
                <Link to='#work' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>work</Link>
                <Link to='#projects' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>projects</Link>
                <Link to='#connect' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>connect</Link>
            </div>
            <div className='burgerMenuContainer' onClick={toggleBurgerMenu}>
                <BurgerMenu burgerMenuOpen={burgerMenuOpen} theme={theme}/>
            </div>
        </nav>
    )
}
