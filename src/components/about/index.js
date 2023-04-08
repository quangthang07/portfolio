import './index.scss';
import aboutImage from '../../assets/images/about-image.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faGamepad, faGift, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const downloadCvURL = `${window.location.origin}/entry-sheet.pdf`;
const About = () => {
    const downloadCv = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
                            <span>22</span>
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
                        <button onClick={() => {downloadCv(downloadCvURL)}}>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;