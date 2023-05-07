
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import css from './work.module.css'

export const Work = ({ theme }) => (
    <div id='work'>
        <div className={css.workHeader}>Where I work</div>
        <hr className={css[`${theme}HR`]}/>
        <div className={css.workDetails}>
            <p className={css.workTitle}><span className={css.jobRole}>Full Stack Developer</span><a href='https://www.oxehealth.com/' target='_blank' rel="noreferrer" className={css[`${theme}CompanyLink`]}><span className={css.companyName}> @ Oxehealth</span></a></p>
            <p className={css.workDuration}>June 2021 - Present</p>
            <div className={css.workDescription}>
                <div className={css.workDescriptionItem}><FontAwesomeIcon icon={faPlay} className={css.descriptionIcon}/><p className={css.description}>Independently working on new product features to leverage the existing platform and offerings.</p></div>
                <div className={css.workDescriptionItem}><FontAwesomeIcon icon={faPlay} className={css.descriptionIcon}/><p className={css.description}>Collaborating with a team of developers, maintaining code and continuously improving ways of working and coding practices.</p></div>
                <div className={css.workDescriptionItem}><FontAwesomeIcon icon={faPlay} className={css.descriptionIcon}/><p className={css.description}>Manual testing of the web app to ensure responsiveness as well as efficient optimisation.</p></div>
                <div className={css.workDescriptionItem}><FontAwesomeIcon icon={faPlay} className={css.descriptionIcon}/><p className={css.description}>Working closely with designers to ensure thoughtful and coherent user experiences across the platform.</p></div>
                <div className={css.workDescriptionItem}><FontAwesomeIcon icon={faPlay} className={css.descriptionIcon}/><p className={css.description}>Helping to evolve the user interface rapidly in response to user feedback.</p></div>
            </div>
            <div className={css.workLanguages}>
                <p className={css[`${theme}WorkLanguage`]}>React</p>
                <p className={css[`${theme}WorkLanguage`]}>Redux</p>
                <p className={css[`${theme}WorkLanguage`]}>TypeScript</p>
                <p className={css[`${theme}WorkLanguage`]}>Node.js</p>
                <p className={css[`${theme}WorkLanguage`]}>MariaDB</p>
                <p className={css[`${theme}WorkLanguage`]}>Jest</p>
                <p className={css[`${theme}WorkLanguage`]}>Playwright</p>
            </div>
        </div>
    </div>
)
