import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { UserProvider } from './UserContext';
import Home from './pages/Home/Home';
import Handbooks from './pages/Handbooks/Handbooks';
import Courses from './pages/Courses/Courses';
import Tests from './pages/Tests/Tests';
import AccountStatistic from './pages/AccountStatistic/AccountStatistic';
import AccountPersonalData from './pages/AccountPersonalData/AccountPersonalData';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Terms from './pages/Handbooks/Chapter1/Terms';
import С1Page1 from './pages/Courses/Course1/Page1';
import С1Page2 from './pages/Courses/Course1/Page2';
import С2Page1 from './pages/Courses/Course2/Page1';
import './App.css';


export default function App() {

    const [testsResults, setTestsResults] = useState(() => {
        const storedResult = sessionStorage.getItem('testsResults');
        return storedResult ? JSON.parse(storedResult) : [];
    });

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/account/personal-data' element={<AccountPersonalData />}/>
                    <Route path='/account/statistic' element={<AccountStatistic testsResults={testsResults}/>}/>
                    <Route path='/handbooks' element={<Handbooks/>}/>
                    <Route path='/handbooks/chapter-1' element={<Terms/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/tests' element={<Tests/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/courses/course-1-page-1' element={<С1Page1/>}/>
                    <Route path='/courses/course-1-page-2' element={<С1Page2/>}/>
                    <Route path='/courses/course-2-page-1' element={<С2Page1/>}/>
                </Routes>
            </Router>
        </UserProvider>
    )
}