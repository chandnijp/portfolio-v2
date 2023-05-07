import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { About } from './About'
import { Contact } from './Contact'
import { Projects } from './Projects'
// import { Work } from './Work'
import css from './main.module.css'

export const Main = ({ theme }) => {
    const location = useLocation()

    return (
        <div className={css.mainPage}>
            <div className={css.socials}>
                <a href='https://www.linkedin.com/in/chandni-patel-3866a279' target={'_blank'} rel="noreferrer" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/chandnijp" target={'_blank'} rel="noreferrer" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faGithub} /></a>
                <Link to="#connect" className={`${css.socialsIcon} ${css[`${theme}SocialsLink`]}`}><FontAwesomeIcon icon={faEnvelope} /></Link>
            </div>
            <div className={css.mainContent}>
                {(location.hash === '' || location.hash === '#about') && (
                    <div className={css.mainIntro}>
                        <div className={css.intro}>
                            <p className={css.introWelcome}>Hi, my name is</p>
                            <p className={css.introHeader}>Chandni Patel</p>
                            <p className={css.introSubheader}><FontAwesomeIcon icon={faChevronLeft}/>I build websites<FontAwesomeIcon icon={faChevronRight}/></p>
                        </div>
                        <About />
                    </div>
                )}
                {/* {location.hash === '#work' && <Work theme={theme}/>} */}
                {location.hash === '#projects' && <Projects theme={theme}/>}
                {location.hash === '#connect' && <Contact theme={theme}/>}
            </div>
        </div>
    )
}
