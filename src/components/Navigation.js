import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { BurgerMenu } from './BurgerMenu'
import css from './navigation.module.css'

export const Navigation = ({ theme }) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }

    return (
        <nav className={`${burgerMenuOpen ? css.navigationMobile : css.navigation} ${css[`${theme}Navigation`]}`}>
            <div className={`${css.navItems} ${css[`${theme}NavItems`]} ${burgerMenuOpen && css.showNavItems}`}>
                <Link to='#about' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>about</Link>
                <Link to='#projects' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>projects</Link>
                <Link to='#connect' onClick={() => setBurgerMenuOpen(false)} className={`${css.navItem} ${css[`${theme}NavItem`]} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>connect</Link>
                <div className={css.mobileSocials}>
                    <div className={`${css.navItem} ${burgerMenuOpen ? css.inlineNav : css.noNav}`}>
                        <a href='https://www.linkedin.com/in/chandni-patel-3866a279' target={'_blank'} rel="noreferrer" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/chandnijp" target={'_blank'} rel="noreferrer" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faGithub} /></a>
                        <Link to="#connect" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </div>
                </div>
            </div>
            <div className={css.burgerMenuContainer} onClick={toggleBurgerMenu}>
                <BurgerMenu burgerMenuOpen={burgerMenuOpen} theme={theme}/>
            </div>
        </nav>
    )
}
