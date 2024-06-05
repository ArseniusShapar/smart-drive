import React from 'react';
import { useUser } from '../../UserContext';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import './Handbooks.css';


export default function Handbooks() {
  return (
    <>
      <GeneralHeader {...useUser()} />
      <main>
        <h2 className='title'>ПДР 2024 УКРАЇНИ</h2>
        <ul className='sections'>
          <li><a className='section' href='/handbooks/chapter-1'><b>Розділ 1:</b> Загальні положення</a></li>
          <li><a className='section'><b>Розділ 2:</b> Обов’язки і права водіїв механічних транспортних засобів</a></li>
          <li><a className='section'><b>Розділ 3:</b> Рух транспортних засобів із спеціальними сигналами</a></li>
          <li><a className='section'><b>Розділ 4:</b> Обов’язки і права пішоходів</a></li>
          <li><a className='section'><b>Розділ 5:</b> Обов’язки і права пасажирів</a></li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
