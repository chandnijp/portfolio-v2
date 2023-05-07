import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BurgerMenu } from './BurgerMenu'
import css from './navigation.module.css'

export const Navigation = ({ theme }) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }

    return (
        <nav className={`${css.navigation} ${burgerMenuOpen && css.navigationMobile} ${css[`${theme}Navigation`]}`}>
            <div className={`${css.navItems} ${css[`${theme}NavItems`]} ${burgerMenuOpen && css.showNavItems}`}>
                <Link to='#about' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>about</Link>
                {/* <Link to='#work' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>work</Link> */}
                <Link to='#projects' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>projects</Link>
                <Link to='#connect' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>connect</Link>
            </div>
            <div className={css.burgerMenuContainer} onClick={toggleBurgerMenu}>
                <BurgerMenu burgerMenuOpen={burgerMenuOpen} theme={theme}/>
            </div>
        </nav>
    )
}
