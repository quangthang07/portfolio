import './index.scss';

const skillList = [
    {
        id: 1,
        name: 'HTML',
        percent: 90,
    },
    {
        id: 2,
        name: 'CSS',
        percent: 90,
    },
    {
        id: 3,
        name: 'JavaScript',
        percent: 90,
    },
    {
        id: 4,
        name: 'Python',
        percent: 70,
    },
    {
        id: 5,
        name: 'Java',
        percent: 70,
    },
    {
        id: 6,
        name: 'React',
        percent: 80,
    },
    {
        id: 7,
        name: 'NodeJS',
        percent: 95,
    },
    {
        id: 8,
        name: 'NextJS',
        percent: 95,
    },
]

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <div className='skills-header'>
                <h2>Skills</h2>
            </div>
            <div className='skills-body'>
                <div className='pie-charts-list'>
                    {skillList.map(skill => {
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
                <div className='progress-bar-list'>
                    <div className="left-list">
                        <div className='progress-wrapper'>
                            <div className='progress-name'>
                                    <span className='left-name'><strong>HTML/CSS</strong></span>
                                    <span className='right-value'>95%</span>
                            </div>
                            <div className="progress">
                                <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`95%`,'--p':90}}>
                                </div>
                            </div>
                        </div>
                        <div className='progress-wrapper'>
                            <div className='progress-name'>
                                    <span className='left-name'><strong>HTML/CSS</strong></span>
                                    <span className='right-value'>95%</span>
                            </div>
                            <div className="progress">
                                <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`95%`}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-list">
                        <div className='progress-wrapper'>
                            <div className='progress-name'>
                                    <span className='left-name'><strong>HTML/CSS</strong></span>
                                    <span className='right-value'>95%</span>
                            </div>
                            <div className="progress">
                                <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`95%`}}>
                                </div>
                            </div>
                        </div>
                        <div className='progress-wrapper'>
                            <div className='progress-name'>
                                    <span className='left-name'><strong>HTML/CSS</strong></span>
                                    <span className='right-value'>95%</span>
                            </div>
                            <div className="progress">
                                <div className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`95%`}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;