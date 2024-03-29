import './index.scss'
import React from 'react';
const Sidebar = React.lazy(() => import('../sidebar'));
const Home = React.lazy(() => import('../home'));
const About = React.lazy(() => import('../about'));
const Resume = React.lazy(() => import('../resume'));
const Skills = React.lazy(() => import('../skills'));
const Work = React.lazy(() => import('../work'));
const Contact = React.lazy(() => import('../contact'));
const Footer = React.lazy(() => import('../footer'));





const Layout = () => {

    return (
        <div>
            <Sidebar/>
            <div className='app-scrollspy' data-bs-spy="scroll" data-bs-target="#left-sidebar" data-bs-offset="0" tabindex="0">
                <Home/>
                <About/>
                <Resume/>
                <Skills/>
                <Work/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;