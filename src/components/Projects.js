import digitalInfluxImg from '../../public/img/digitalInflux.png'
import forkifyImg from '../../public/img/forkify.png'
import liveLocalImg from '../../public/img/liveLocal.jpg'
import oxehealthImg from '../../public/img/oxehealth.png'
import { Project } from './Project'
import css from './projects.module.css'

export const Projects = ({ theme }) => (
        <div id='projects' className={css.projects}>
            <div className={css.projectsHeader}>Some of my projects</div>
            <hr className={css[`${theme}HR`]}/>
            <div className={css.projectItems}>
                <Project theme={theme} project={oxehealth} />
                <Project theme={theme} project={digitalInflux} />
                <Project theme={theme} project={forkify} rowReverse/>
                <Project theme={theme} project={liveLocal} />
            </div>
        </div>
    )

const oxehealth = {
    projectName: 'Oxehealth',
    projectSummary: 'Currently working on a patient monitoring and management web app used by clinicians for patient care. Collaborating with developers and designers to introduce new features, maintain code and ensure thoughtful and coherent user experiences across the platform. Focused on continously improving ways of working, coding practices and ensuring testing is end to end.',
    languages: ['React', 'CSS', 'Redux', 'Typescript', 'Node', 'MariaDB', 'Jest', 'Playwright'],
    img: oxehealthImg,
    githubLink: 'https://oxehealth.com',
    rowReverse: false
}

const digitalInflux = {
    projectName: 'Digital Influx',
    projectSummary: 'An education platform, providing UX design courses for kids, teenagers and young adults. Each course contains presentations, videos, lesson plans and student booklets and tracks the users progress throughout. Students can sign up and take the course of their choice directly on the platform.',
    languages: ['JavaScript', 'CSS', 'AWS', 'WordPress'],
    img: digitalInfluxImg,
    siteLink: 'https://www.digitalinflux.com/',
    rowReverse: true
}

const forkify = {
    projectName: 'Forkify',
    projectSummary: 'A web app using the Food2Fork api to search for recipes. Once searched for and selected through the left hand panel of possible suggestions, the recipe`s ingredients appear along with cooking instruction. You can also like the recipe and add the ingredients to a shopping list.',
    languages: ['JavaScript', 'MVC', 'Food2ForkAPI', 'Node', 'Babel', 'Webpack'],
    img: forkifyImg,
    siteLink: 'https://zen-perlman-64f5a5.netlify.app',
    githubLink: 'https://github.com/chandnijp/forkify',
    rowReverse: false
}

const liveLocal = {
    projectName: 'Live Local',
    projectSummary: 'Built while studying Colt Steele`s Web Developer Bootcamp. Having a great passion for travelling I wanted to make an app associated with experiencing local culture by living with locals.',
    languages: ['JavaScript', 'CSS', 'Node', 'MongoDB'],
    img: liveLocalImg,
    githubLink: 'https://github.com/chandnijp/LiveLocal',
    rowReverse: true
}
