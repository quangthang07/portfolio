import './index.scss';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        if (
            refForm.current.elements['name'].value
            && refForm.current.elements['email'].value
            && refForm.current.elements['subject'].value
            && refForm.current.elements['message'].value
        ) {
            emailjs.sendForm(
                'service_l6kjrwb',
                'template_2589uvd',
                refForm.current,
                '9EfwF1tLoeNbf2xES'
            ).then (
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, please try again!")
                    window.location.reload(false);
                }
            )
        }else {
            alert('Please enter mail content and send again!');
            window.location.reload(false);
        }
    }
    return (
        <div id='contact' className="contact-container">
            <div className="contact-header">
                <h2>Contact</h2>
            </div>
            <div className='contact-content'>
                <div className='contact-des'>
                <div className='map-wrap'>
                    <MapContainer center={[35.6389618,139.2925628]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[35.6389618,139.2925628]}>
                            <Popup>
                                Tokyo-to, Hachioji-shi, Hazama-machi 1455-5
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='contact-info'>
                    <span>
                        Nguyen Quang Thang <br/>
                        Tokyo<br/>
                        Hachioji-shi, Hazama-machi 1455-5<br/>
                        (+81) 70-2298-9801<br/>
                        <span className='hightlight'>nguyenquangthang1703@gmail.com</span>
                    </span>
                </div>
                </div>

                <form className="contact-form" ref={refForm} onSubmit={sendEmail}>
                    <div className='name-email'>
                        <div>
                            <h4>Email</h4>
                            <input type="email" name="email" placeHolder="Your email" require />
                        </div>
                        <div>
                            <h4>Name</h4>
                            <input type="text" name="name" placeHolder="Your name" require />
                        </div>
                    </div>
                    <div>
                        <h4>Subject</h4>
                        <input type="text" name="subject" placeHolder="Subject" require />
                    </div>
                    <div>
                        <h4>Message</h4>
                        <textarea placeHolder="Message" name="message" require></textarea>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;