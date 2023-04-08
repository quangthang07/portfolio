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
    text:'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    id:2,
    type: "Language School",
    name: "Shibuya Lall Japanese school",
    startYear: 2018,
    endYear: 2020,
    text:'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    id:3,
    type: "University school",
    name: "Takushoku university",
    startYear: 2020,
    endYear: 2024,
    text:'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
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