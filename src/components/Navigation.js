import { HashLink as Link } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons'
import './navigation.css'

export const Navigation = (colourMode, handleColourModeChange) => {
    const Toggle = () => (
        <div className='colourModeToggle'>
            {/* <div onClick={() => handleColourModeChange('darkMode')}>Off</div> */}
            <FontAwesomeIcon className='bulbIcon' icon={colourMode === 'darkMode' ? faLightbulb : faLightbulbRegular} />
            {/* <div onClick={() => handleColourModeChange('lightMode')}>On</div> */}
        </div>
    )

    return (
        <nav className='navigation'>
            <Link to='#about' className='navItem'>About</Link>
            <Link to='#work' className='navItem'>Work</Link>
            <Link to='#projects' className='navItem'>Projects</Link>
            <Link to='#contact' className='navItem'>Contact</Link>
            <Toggle />
        </nav>
    )
}
