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
    // const [active, setActive] = useState("home");

    const handleSidebarCollapse = () => {
        show(!visible);
    }

    return (
        <>
        <button className='sidebar-hidden-btn' onClick={handleSidebarCollapse}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
        <div className={visible ? "navigation-sidebar" : "navigation-sidebar sidebar-hidden"}>
            <div></div>
            <div className='nav navbar' id='left-sidebar'>
                <ul className="nav">
                    {
                        blockId.map(item => {
                            return (
                                <li className='nav-item'>
                                    <a  key={item.key}
                                        href={`#${item.id}`}
                                        // onClick={() => setActive(item.id)}
                                        className={`nav-link sidebar-link`}>
                                        <FontAwesomeIcon icon={item.icon} className='sidebar-icon'/>
                                        <span>{item.id.toUpperCase()}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar;