import './App.scss';
import {Routes, Route} from 'react-router-dom';
import React, { Suspense } from 'react';
const Layout = React.lazy(() => import('./components/layout'));


function App() {
    return (
        <Suspense>
            <Routes>
                <Route path='/portfolio' element={<Layout/>}>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
