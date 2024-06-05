import React from 'react';
import { useUser } from '../../UserContext';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import './About.css';


export default function About() {
  return (
    <>
    <GeneralHeader {...useUser()} />
    <main>
      <h3>Про сервіс</h3>
      <p>
          Проект Smart Drive для вивчення правил дорожнього руху та підготовки майбутніх водіїв.
          Розроблений студентом групи КМ-12 Шапаренко Арсенієм, для предмету «Frontend розробка».
      </p>
    </main>
    <Footer />
    </>
  )
}
