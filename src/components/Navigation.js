import { HashLink as Link } from 'react-router-hash-link'
import './navigation.css'

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link to='#about' className='navItem'>About</Link>
            <Link to='#work' className='navItem'>Work</Link>
            <Link to='#projects' className='navItem'>Projects</Link>
            <Link to='#contact' className='navItem'>Contact</Link>
        </nav>
    )
}
