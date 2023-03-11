import digitalInfluxImg from '../../public/img/digitalInflux.png'
import forkifyImg from '../../public/img/forkify.png'
import liveLocalImg from '../../public/img/liveLocal.jpg'
import { Project } from './Project'

export const Projects = () => (
        <div id='projects'>
            <div className='projectsHeader'>Some of my projects</div>
            <hr />
            <div className='projectItems'>
                <Project project={digitalInflux} />
                <Project project={forkify} rowReverse/>
                <Project project={liveLocal} />
            </div>
        </div>
    )

const digitalInflux = {
    projectName: 'Digital Influx',
    projectSummary: 'An education platform, providing UX design courses for kids, teenagers and young adults. Each course contains presentations, videos, lesson plans and student booklets and tracks the users progress throughout. Students can sign up and take the course of their choice directly on the platform.',
    languages: ['JavaScript', 'CSS', 'AWS', 'WordPress'],
    img: digitalInfluxImg,
    siteLink: 'https://www.digitalinflux.com/',
    rowReverse: false
}

const forkify = {
    projectName: 'Forkify',
    projectSummary: 'A web app using the Food2Fork api to search for recipes. Once searched for and selected through the left hand panel of possible suggestions, the recipe`s ingredients appear along with cooking instruction. You can also like the recipe and add the ingredients to a shopping list.',
    languages: ['JavaScript', 'MVC', 'Food2ForkAPI', 'Node', 'Babel', 'Webpack'],
    img: forkifyImg,
    siteLink: 'https://zen-perlman-64f5a5.netlify.app',
    githubLink: 'https://github.com/chandnijp/forkify',
    rowReverse: true
}

const liveLocal = {
    projectName: 'Live Local',
    projectSummary: 'Built while studying Colt Steele`s Web Developer Bootcamp. Having a great passion for travelling I wanted to make an app associated with experiencing local culture by living with locals.',
    languages: ['JavaScript', 'CSS', 'Node', 'MongoDB'],
    img: liveLocalImg,
    siteLink: 'https://fierce-badlands-99416.herokuapp.com/',
    githubLink: 'https://github.com/chandnijp/LiveLocal',
    rowReverse: false
}
