import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import './project.css'

export const Project = (project) => {
    const reverseStyle = project.project.rowReverse ? 'Reverse' : ''
    return (
        <div id='project'>
            <div className={`projectCard${reverseStyle}`}>
                <div className={`projectDescription${reverseStyle}`}>
                    <p className='projectTitle'>{project.project.projectName}</p>
                    <div className={`projectSummary projectSummary${reverseStyle}`}>{project.project.projectSummary}</div>
                    <div className='projectLanguages'>
                        {project.project.languages.map((language) => (<p key={`${project.project.projectName}-${language}`} className={`projectLanguage${reverseStyle}`}>{language}</p>))}
                    </div>
                    <div>
                        <p className='projectSite'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/></p>
                        <p className='projectCode'><FontAwesomeIcon icon={faCode} size='lg' /></p>
                    </div>
                </div>
                <div className='projectImageContainer'>
                    <div className='projectImage'>
                        <img src={project.project.img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
