import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BurgerMenu } from './BurgerMenu'

export const Navigation = (theme) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }

    return (
        <nav className={`navigation ${burgerMenuOpen && 'navigationMobile'}`}>
            <div className='navItems'>
                <Link to='#about' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme.theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>About</Link>
                <Link to='#work' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme.theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>Work</Link>
                <Link to='#projects' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme.theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>Projects</Link>
                <Link to='#contact' onClick={() => setBurgerMenuOpen(false)} className={`navItem ${theme.theme}NavItem ${burgerMenuOpen ? 'inlineNav' : 'noNav'}`}>Contact</Link>
            </div>
            <div className='burgerMenuContainer' onClick={toggleBurgerMenu}>
                <BurgerMenu burgerMenuOpen={burgerMenuOpen} />
            </div>
        </nav>
    )
}
