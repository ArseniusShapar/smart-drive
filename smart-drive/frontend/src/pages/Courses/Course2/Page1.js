import React from 'react';
import { useUser } from '../../../UserContext';
import GeneralHeader from '../../../components/GeneralComponents/GeneralComponents';
import Footer from '../../../components/Footer/Footer';

export default function Page1() {
    return (
      <div className='course-2'>
        <GeneralHeader {...useUser()} />
        <main>
            <p>Якась корисна інформація про дорожню розмітку.</p>
        </main>
        <Footer />
      </div>
    )
  }