import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { About } from './About'
import { Work } from './Work'
import { Projects } from './Projects'
import './main.css'

export const Main = (colourMode) => {
    const location = useLocation()

    return (
        <div className={`${colourMode} mainPage`}>
            <div className='socials'>
                <FontAwesomeIcon icon={faLinkedinIn} size='xl' className='icon' />
                <FontAwesomeIcon icon={faGithub} size='xl' className='icon' />
                <FontAwesomeIcon icon={faEnvelope} size='xl' className='icon' />
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
            </div>
        </div>
    )
}
