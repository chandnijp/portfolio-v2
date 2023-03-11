import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BurgerMenu } from './BurgerMenu'

export const Navigation = (theme) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }
    return (
    <nav className='navigation'>
        <Link to='#about' className={`navItem ${theme.theme}NavItem`}>About</Link>
        <Link to='#work' className={`navItem ${theme.theme}NavItem`}>Work</Link>
        <Link to='#projects' className={`navItem ${theme.theme}NavItem`}>Projects</Link>
        <Link to='#contact' className={`navItem ${theme.theme}NavItem`}>Contact</Link>
        <div className='burgerMenuContainer' onClick={toggleBurgerMenu}>
            <BurgerMenu />
        </div>
    </nav>
)
    }
