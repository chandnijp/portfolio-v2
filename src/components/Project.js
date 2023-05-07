import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import css from './project.module.css'

export const Project = ({ project, theme }) => {
    const reverseStyle = project.rowReverse ? 'Reverse' : ''

    return (
        <>
            <div className={`${css[`projectCard${reverseStyle}`]} ${css.card}`}>
                <div className={css[`projectDescription${reverseStyle}`]}>
                    <p className={css[`projectTitle${reverseStyle}`]}>{project.projectName}</p>
                    <div className={`${css.projectSummary} ${css[`projectSummary${reverseStyle}`]} ${css[`${theme}ProjectSummary`]}`}>{project.projectSummary}</div>
                    <div className={`${css.projectLanguages} ${css.projectLanguagesTablet}`}>
                        {project.languages.map((language) => (<p key={`${project.projectName}-${language}`} className={css[`projectLanguage${reverseStyle}`]}>{language}</p>))}
                    </div>
                    <div className={css.projectLinksTablet}>
                        {project.githubLink && <p className={css.projectCode}><a href={project.githubLink} target='_blank' rel="noreferrer" className={css[`${theme}ProjectCodeLink`]}><FontAwesomeIcon icon={faCode} size='lg' /></a></p>}
                        {project.siteLink && <p className={css.projectSite}><a href={project.siteLink} target='_blank' rel="noreferrer" className={css[`${theme}ProjectSiteLink`]}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/></a></p>}
                    </div>
                </div>
                <div className={`${css.projectImageContainer} ${css[`projectImageContainer${reverseStyle}`]}`}>
                    <div className={`${css.projectImageWrapper} ${css[`${theme}ProjectImageWrapper`]}`}>
                        <img src={project.img} className={css[`${theme}ProjectImage`]}/>
                    </div>
                </div>
            </div>
            <div className={css[`projectLanguagesLinksMobile${reverseStyle}`]}>
                <div className={css[`projectLanguages${reverseStyle}`]}>
                    {project.languages.map((language) => (<p key={`${project.projectName}-${language}`} className={css[`projectLanguage${reverseStyle}`]}>{language}</p>))}
                </div>
                <div>
                    {project.githubLink && <p className={css.projectCode}><a href={project.githubLink} target='_blank' rel="noreferrer" className={css[`${theme}ProjectCodeLink`]}><FontAwesomeIcon icon={faCode} size='lg' /></a></p>}
                    {project.siteLink && <p className={css.projectSite}><a href={project.siteLink} target='_blank' rel="noreferrer" className={css[`${theme}ProjectSiteLink`]}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/></a></p>}
                </div>
            </div>
        </>
    )
}
