import React from 'react';
import { useUser } from '../../UserContext';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import './Courses.css';


export default function Courses() {
  return (
    <div className='courses'>
      <GeneralHeader {...useUser()} />
      <main>
      <h2>Курси з ПДР онлайн</h2>
        <ul>
          <li>
            <div className='course' onClick={() => window.location.href = '/courses/course-1-page-1'}>
              <h3>Знаки регулювальника</h3>
              <img src='../img/courses/course-logo.png' />
              <div className='course-info'>
                <div className='author'>
                  <p className='prop'>автор:</p>
                  <p className='value'>Андрійєнко Анатолій Володимирович</p>
                </div>
                <div className='theme'>
                  <p className='prop'>тематика:</p>
                  <p className='value'>Правила дорожнього руху</p>
                </div>
                <div className='author'>
                  <p className='prop'>мова:</p>
                  <p className='value'>Українська</p>
                </div>
                <div className='author'>
                  <p className='prop'>місто:</p>
                  <p className='value'>Усі міста</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='course' onClick={() => window.location.href = '/courses/course-2-page-1'}>
              <h3>Дорожня розмітка</h3>
              <img src='../img/courses/course-logo2.png' />
              <div className='course-info'>
                <div className='author'>
                  <p className='prop'>автор:</p>
                  <p className='value'>Шевчук Віктор Володимирович</p>
                </div>
                <div className='theme'>
                  <p className='prop'>тематика:</p>
                  <p className='value'>Правила дорожнього руху</p>
                </div>
                <div className='author'>
                  <p className='prop'>мова:</p>
                  <p className='value'>Українська</p>
                </div>
                <div className='author'>
                  <p className='prop'>місто:</p>
                  <p className='value'>Усі міста</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
