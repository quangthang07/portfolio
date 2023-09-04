import './index.scss';

const fontEndSkills = [
    {
        id: 1,
        name: 'HTML/CSS',
        percent: 90,
    },
    {
        id: 2,
        name: 'JavaScript',
        percent: 90,
    },
    {
        id: 3,
        name: 'Bootstrap',
        percent: 80,
    },
    {
        id: 4,
        name: 'ReactJS',
        percent: 80,
    },
];

const backEndSkills1 = [
    {
        id: 1,
        name: 'Java',
        percent: 90,
        color: 'red'
    },
    {
        id: 2,
        name: 'NodeJS',
        percent: 90,
        color: '#026e00'
    },
    {
        id: 3,
        name: 'Python',
        percent: 70,
        color: '#ffd343'
    },
    {
        id: 4,
        name: 'Java Spring boot',
        percent: 70,
        color:'#80ea6e'
    },
    {
        id: 5,
        name: "Express",
        percent: 75,
        color: '#fbe790'
    },
];
const backEndSkills2 = [
    {
        id: 1,
        name: "MongoDB",
        percent: 80,
        color: '#42494f'
    },
    {
        id: 2,
        name: "MySQL",
        percent: 90,
        color: '#3E6E93'
    },
    {
        id: 3,
        name: 'Docker',
        percent: 60,
        color: '#2496ed'
    },
    {
        id: 4,
        name: 'Linux command',
        percent: 75,
        color: 'green'
    },
    {
        id: 5,
        name: 'Git command',
        percent: 70,
        color: '#f14e32'
    },
];

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <div className='skills-header'>
                <h2>Skills</h2>
            </div>
            <div className='skills-body'>
                <div>
                    <h3>Front-end skills</h3>
                    <div className='pie-charts-list'>
                        {fontEndSkills.map(skill => {
                            return (
                                <div key={skill.id} className='pie-chart-wrapper'>
                                    <div className='pie' style={{'--p':skill.percent}}>
                                        <span>
                                            <strong>{skill.name}</strong><br/>
                                            {skill.percent}%
                                        </span>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3>Back-end skills</h3>
                    <div className='progress-bar-list'>
                        <div className="left-list">
                            {backEndSkills1.map(skill => {
                                return (
                                    <div key={skill.id} className='progress-wrapper'>
                                        <div className='progress-name'>
                                            <span className='left-name'><strong>{skill.name}</strong></span>
                                            <span className='right-value'>{skill.percent}</span>
                                        </div>
                                        <div className="progress">
                                            <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100" style={{width:`${skill.percent}%`, '--c':skill.color}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                        <div className="right-list">
                            {backEndSkills2.map(skill => {
                                return (
                                    <div key={skill.id} className='progress-wrapper'>
                                        <div className='progress-name'>
                                            <span className='left-name'><strong>{skill.name}</strong></span>
                                            <span className='right-value'>{skill.percent}</span>
                                        </div>
                                        <div className="progress">
                                            <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`${skill.percent}%`, '--c':skill.color}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;