import './index.scss';
import proImg from "../../assets/images/cover-image.jpeg";

const projects = [
    {
        id: 1,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 2,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 3,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 4,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 4,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 4,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 4,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
    },
    {
        id: 4,
        name: 'Project name',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url:proImg,
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
                                <a href="#!" className="project">
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