import './index.scss';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faEnvelope, faFile, faFolderOpen, faHome, faUser, faUserGear} from '@fortawesome/free-solid-svg-icons';
import {useState } from 'react';

const blockId = [
    {
        key: 1,
        id: "home",
        icon: faHome
    },
    {
        key: 2,
        id: "about",
        icon:faUser
    },
    {
        key: 3,
        id: "resume",
        icon:faFile
    },
    {
        key: 4,
        id: "skills",
        icon:faUserGear
    },
    {
        key: 5,
        id: "work",
        icon:faFolderOpen
    },
    {
        key: 6,
        id: "contact",
        icon:faEnvelope,
    },

]
const Sidebar = () => {
    const [visible, show] = useState(false);
    const [active, setActive] = useState("home");

    const handleSidebarCollapse = () => {
        show(!visible);
    }

    return (
        <div>
            <button className='navbar-btn' onClick={handleSidebarCollapse}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={visible ? "nav navbar" : "nav navbar navbar-hidden"} id='left-sidebar'>
                {
                    blockId.map(item => {
                        return (
                        <a  key={item.key}
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className={`navbar-link nav-link scrollto ${active === item.id ? "active" : ""}`}>
                            <FontAwesomeIcon icon={item.icon} className='sidebar-icon'/>
                            <span>{item.id.toUpperCase()}</span>
                        </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;