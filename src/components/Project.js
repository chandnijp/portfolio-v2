import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'

export const Project = ({ project, theme }) => {
    const reverseStyle = project.rowReverse ? 'Reverse' : ''

    return (
        <div className={`projectCard${reverseStyle} card`}>
            <div className={`projectDescription${reverseStyle}`}>
                <p className='projectTitle'>{project.projectName}</p>
                <div className={`projectSummary projectSummary${reverseStyle} ${theme}ProjectSummary`}>{project.projectSummary}</div>
                <div className='projectLanguages'>
                    {project.languages.map((language) => (<p key={`${project.projectName}-${language}`} className={`projectLanguage${reverseStyle}`}>{language}</p>))}
                </div>
                <div>
                    {project.githubLink && <p className='projectCode'><a href={project.githubLink} target='_blank' rel="noreferrer" className={`${theme}ProjectCodeLink`}><FontAwesomeIcon icon={faCode} size='lg' /></a></p>}
                    {project.siteLink && <p className='projectSite'><a href={project.siteLink} target='_blank' rel="noreferrer" className={`${theme}ProjectSiteLink`}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/></a></p>}
                </div>
            </div>
            <div className='projectImageContainer'>
                <div className={`projectImageWrapper ${theme}ProjectImageWrapper`}>
                    <img src={project.img} className={`${theme}ProjectImage`}/>
                </div>
            </div>
        </div>
    )
}
