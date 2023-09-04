import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const education = [
  {
    id: 1,
    type: "Mediate School",
    name: "Le Quy Don",
    startYear: 2015,
    endYear: 2018,
    text:'During high school, I focused on mathematics, physics, and chemistry. I found solving challenging problems in my math classes to be particularly satisfying. To maintain high grades, I also dedicated myself to studying humanities subjects. As a result, I graduated as a high-achieving student with an overall average of 8/10 in all subjects.'
  },
  {
    id:2,
    type: "Language School",
    name: "Shibuya Lall Japanese school",
    startYear: 2018,
    endYear: 2020,
    text:'When I came to Japan to study, I spent a year and a half attending a Japanese language school. This helped me to enhance my language abilities and prepare for university entrance exams. Not only did I learn Japanese, but I also developed valuable soft skills like communication and argumentation.'
  },
  {
    id:3,
    type: "University school",
    name: "Takushoku university",
    startYear: 2020,
    endYear: 2024,
    text:'During my time at Takushoku University, I gained a solid foundation in the various stages of programming, including creating, compiling, executing, and debugging programs. I also delved into "Data Structures and Algorithms" to develop efficient programs, "Databases" to manage data, "Object Oriented Programming" to learn important concepts and techniques ranging from system analysis to development, and "Web Applications and Services" to acquire basic knowledge of web development. In my third year, during the second semester, I was assigned to a laboratory where I engaged in research activities and also learned valuable skills such as presentation, communication, report writing, and thesis paper composition.'
  },
]

function Resume() {
  return (
    <div className='education-container' id='resume'>
      <div className='edu-header'>
        <h2>Resume</h2>
      </div>
      <div className='edu-content'>
        <h3 className='timeline-info'><span>Education</span></h3>
        <ul className='timeline'>
          {education.map(school => {
            return (
              <li>
                <div className='timeline-badge'>
                  <FontAwesomeIcon icon={faGraduationCap}/>
                </div>
                <div className={`${school.id%2 === 0 ? 'right-content' : 'left-content'} timeline-panel`}>
                  <div className='timeline-header'>
                    <h3>{school.type}</h3>
                    <span>{school.name} - {school.startYear} - {school.endYear}</span>
                  </div>
                  <div className='timeline-body'>
                    <p>{school.text}</p>
                  </div>
                </div>
              </li>
            )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Resume;