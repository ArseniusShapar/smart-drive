import React from 'react';
import { useUser } from '../../../UserContext';
import GeneralHeader from '../../../components/GeneralComponents/GeneralComponents';
import Footer from '../../../components/Footer/Footer';
import './Page.css';

export default function Page2() {
  return (
    <div className='course-1'>
      <GeneralHeader {...useUser()} />
      <main>
        <h1 style={{marginBottom: '300px'}}>Кінець курсу</h1>
      </main>
      <Footer />
    </div>
  )
}
