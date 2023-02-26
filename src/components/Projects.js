import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import forkify from '../../public/img/forkify.png'
import './projects.css'

export const Projects = () => {
    return (
        <div id='projects'>
            <div className='projectsHeader'>Some of my projects...</div>
            <div className='projectCard'>
                <div className='projectCardLeft'>
                    <p className='projectTitle'>Forkify</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/>
                    <FontAwesomeIcon icon={faCode} size='lg' />
                    <div className='projectSummary'>A web app using the Food2Fork api to search for recipes. Once a recipe has been searched for, the user is provided with the </div>
                    <div className='projectLanguages'>
                        <p className='language'>JavaScript</p>
                        <p className='language'>MVC</p>
                        <p className='language'>Food2Fork API</p>
                        <p className='language'>Node</p>
                        <p className='language'>Babel</p>
                        <p className='language'>Webpack</p>
                    </div>
                </div>
                <div className='projectCardRight'>
                    <img src={forkify}/>
                </div>
            </div>
        </div>
    )
}
