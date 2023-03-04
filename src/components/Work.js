
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './work.css'

export const Work = () => {
    return (
        <div id='work'>
            <div className='workHeader'>Where I work</div>
            <hr />
            <div className='workDetails'>
                <p className='workTitle'><span className='jobRole'>Full Stack Developer</span><a href='https://www.oxehealth.com/' target='_blank' rel="noreferrer"><span className='companyName'> @ Oxehealth</span></a></p>
                <p className='workDuration'>June 2021 - Present</p>
                <div className='workDescription'>
                    <div className='workDescriptionItem'><FontAwesomeIcon icon={faPlay} className='descriptionIcon'/><p className='description'>Independently working on new product features to leverage the existing platform and offerings.</p></div>
                    <div className='workDescriptionItem'><FontAwesomeIcon icon={faPlay} className='descriptionIcon'/><p className='description'>Collaborating with a team of developers, maintaining code and continuously improving ways of working and coding practices.</p></div>
                    <div className='workDescriptionItem'><FontAwesomeIcon icon={faPlay} className='descriptionIcon'/><p className='description'>Manual testing of the web app to ensure responsiveness as well as efficient optimisation.</p></div>
                    <div className='workDescriptionItem'><FontAwesomeIcon icon={faPlay} className='descriptionIcon'/><p className='description'>Working closely with designers to ensure thoughtful and coherent user experiences across the platform.</p></div>
                    <div className='workDescriptionItem'><FontAwesomeIcon icon={faPlay} className='descriptionIcon'/><p className='description'>Helping to evolve the user interface rapidly in response to user feedback.</p></div>
                </div>
                <div className='workLanguages'>
                    <p className='workLanguage'>React</p>
                    <p className='workLanguage'>Redux</p>
                    <p className='workLanguage'>TypeScript</p>
                    <p className='workLanguage'>Node.js</p>
                    <p className='workLanguage'>MariaDB</p>
                    <p className='workLanguage'>Jest</p>
                    <p className='workLanguage'>Playwright</p>
                </div>
            </div>
        </div>
    )
}
