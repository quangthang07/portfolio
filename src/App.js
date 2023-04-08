import './App.scss';
import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home'
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Work from './components/work'
import Contact from './components/contact';
import React from 'react';


function App() {
    return (
        <>
            <Routes>
                <Route path='/portfolio' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/work' element={<Work/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
