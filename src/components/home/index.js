import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='home-container' id='home'>
      <div className='overlay'></div>
      <div className='cover-content'>
        <div className='avatar'></div>
        <h1 className='name'>
          <span >Nguyen Quang Thang</span>
        </h1>
        <p>Full-stack Web Developer</p>
        <ul className='social-links'>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/your.quangthang/'>
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/qthang07/'>
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nguyen-quang-thang-493926237/'>
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/quangthang07'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;