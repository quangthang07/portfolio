import './index.scss';
import j2cm from "../../assets/images/j2cm.png";
import bookec from "../../assets/images/bookec.png";
import nasaproject from "../../assets/images/nasa-project.png";
import calculator from "../../assets/images/calculator.png";
import stationSimulation from "../../assets/images/station-simulation.png";
import realEstate from "../../assets/images/real-estate.png";

const projects = [
    {
        id: 1,
        name: 'Jump to Construction and Mutation',
        info: "A new debugging tool in Firefox devtools allow user view js code that modified html element",
        image:j2cm,
        url: 'https://github.com/quangthang07/new-debugging-tool-firefox'
    },
    {
        id: 2,
        name: 'Book E-commerce Back-end',
        info: "The back-end of book-ec built with java spring boot and mongodb",
        image:bookec,
        url: 'https://github.com/quangthang07/bookec-backend-springboot'
    },
    {
        id: 3,
        name: 'Spaceship Mission Management Website',
        info: "A web-site has Back-end built with NodeJS, Express, MongoDB and Front-end built with ReactJS",
        image:nasaproject,
        url:'https://github.com/quangthang07/NasaProject'
    },
    {
        id: 4,
        name: 'Station Simulation',
        info: "A simulation of Train Station built with Three.js",
        image:stationSimulation,
        url: 'https://github.com/quangthang07/StationSimulation'
    },
    {
        id: 5,
        name: 'Calculator',
        info: "A Calculator app built with javafx",
        image:calculator,
        url:'https://github.com/quangthang07/Calculator-with-javafx'
    },
    {
        id: 6,
        name: 'Real Estate Homepage',
        info: "A home page built with HTML and CSS",
        image:realEstate,
        url:'https://github.com/quangthang07/RealEstate-Homepage'
    },
]

const Work = () => {
    return (
        <div id='work' className="work-container">
            <div className="work-header">
                <h2>Work</h2>
            </div>
            <div className="work-content">
                {
                    projects.map(project => {
                        return (
                            <div key={project.id} className="project-wrapper" style={{'--d': `${project.id*2}`}}>
                                <a href={project.url} target='_blank' className="project" style={{'backgroundImage': `url(${project.image})`}}>
                                    <div className="project-des">
                                        <h3>{project.name}</h3>
                                        <span>{project.info}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work;