import './index.scss';
import aboutImage from '../../assets/images/about-image.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faGamepad, faGift, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import entrySheet from '../../assets/pdf_files/entry-sheet.pdf';

const About = () => {
    return (
        <div className="about-container" id="about">
            <h2>About</h2>
            <div className="about-content">
                <div className="about-img">
                    <img src={aboutImage} alt="about"/>
                </div>
                <div className="about-text">
                    <h3>Nguyen Quang Thang</h3>
                    <p>
                    As a senior student in the Department of Computer Science and Engineering at Takushoku University, I have a strong passion for web development. I spend my free time delving into various technologies used in this field, like ReactJS, Express, NodeJS, and Java Spring boot through online courses on platforms like YouTube and Udemy. I enjoy applying these skills to create my own websites. My strengths are logical thinking and problem-solving, which I also practice by tackling technical challenges on websites like LeetCode.
                    </p>
                    <ul className="personal-info">
                        <li>
                            <FontAwesomeIcon icon={faGift} className='info-icon'/>
                            <span className='strong'>Birthday:</span>
                            <span>2000/07/13</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendarDays} className='info-icon'/>
                            <span className='strong'>Age:</span>
                            <span>23</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLocationDot} className='info-icon'/>
                            <span className='strong'>Location:</span>
                            <span>Tokyo, Hachioji, Hazama</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGamepad} className='info-icon'/>
                            <span className='strong'>Interests:</span>
                            <span>Programming, Music</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className='info-icon'/>
                            <span className='strong'>Mail:</span>
                            <span>nguyenquangthang1703@gmail.com</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className='info-icon'/>
                            <span className='strong'>Phone:</span>
                            <span>(+81) 70-2298-9801</span>
                        </li>
                    </ul>
                    <div className='download-cv-btn'>
                        <a href={entrySheet} download="entrysheet.pdf">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;