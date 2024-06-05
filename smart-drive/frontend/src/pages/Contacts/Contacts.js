import React from 'react';
import { useUser } from '../../UserContext';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import './Contacts.css';


export default function Contacts() {
  return (
    <div className='contacts'>
      <GeneralHeader {...useUser()} />
      <main>
        <h3>Контакти</h3>
        <p>
          Шапаренко Арсеній Андрійович<br />
          Номер телефону: +390967786127<br />
          Email: arsenshapar@gmail.com
        </p>
        </main>
      <Footer />
    </div>
  )
}
