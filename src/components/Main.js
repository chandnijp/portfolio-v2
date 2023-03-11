import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { About } from './About'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { Work } from './Work'
import './styles.css'

export const Main = () => {
    const location = useLocation()

    return (
        <div className='mainPage'>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/chandni-patel-3866a279' target={'_blank'} rel="noreferrer" className='socialsLink'><FontAwesomeIcon icon={faLinkedinIn} size='xl' className='socialsIcon' /></a>
                <a href="https://github.com/chandnijp" target={'_blank'} rel="noreferrer" className='socialsLink'><FontAwesomeIcon icon={faGithub} size='xl' className='socialsIcon' /></a>
                <a href="mailto:chandnipatel10@hotmail.com?" className='socialsLink'><FontAwesomeIcon icon={faEnvelope} size='xl' className='socialsIcon' /></a>
            </div>
            <div className='mainContent'>
                {(location.hash === '' || location.hash === '#about') && (
                    <div className='mainIntro'>
                        <div className='intro'>
                            <p className='introWelcome'>Hi, my name is</p>
                            <p className='introHeader'>Chandni Patel</p>
                            <p className='introSubheader'><FontAwesomeIcon icon={faChevronLeft}/>I build websites<FontAwesomeIcon icon={faChevronRight}/></p>
                        </div>
                        <About />
                    </div>
                )}
                {location.hash === '#work' && <Work/>}
                {location.hash === '#projects' && <Projects />}
                {location.hash === '#contact' && <Contact />}
            </div>
        </div>
    )
}
