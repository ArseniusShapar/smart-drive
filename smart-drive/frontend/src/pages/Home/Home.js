import React from 'react';
import { useUser } from '../../UserContext';
import ImproveContainer from '../../components/ImproveContainer/ImproveContainer';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';
import './Home.css'


export default function Home() {
    return (
        <div className='home'>
            <GeneralHeader {...useUser()} />
            <ImproveContainer />
            <WeatherWidget />
            <Footer />
        </div>
    )
}
