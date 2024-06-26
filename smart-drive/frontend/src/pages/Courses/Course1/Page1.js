import React from 'react';
import { useUser } from '../../../UserContext';
import Button from 'react-bootstrap/Button';
import GeneralHeader from '../../../components/GeneralComponents/GeneralComponents';
import Footer from '../../../components/Footer/Footer';
import './Page.css';


export default function Page1() {
  return (
    <div className='course-1'>
      <GeneralHeader {...useUser()} />
      <main>
        <h2>Вступ</h2>
        <div className='title'>
          <b>Основні терміни які будуть використані під час вивчення даного курсу:</b>
        </div>
        <div className='paragraph'>
          <p>транспортний засіб - пристрій, призначений для перевезення людей і (або) вантажу, а також встановленого на ньому спеціального обладнання чи механізмів;</p>
          <p>перехрестя - місце перехрещення, прилягання або розгалуження доріг на одному рівні, межею якого є уявні лінії між початком заокруглень країв проїзної частини кожної з доріг. Не вважається перехрестям місце прилягання до дороги виїзду з прилеглої території;</p>
          <p>регулювальник - поліцейський, що виконує регулювання дорожнього руху у форменому одязі підвищеної видимості з елементами із світлоповертального матеріалу за допомогою жезлу, свистка.</p>
        </div>
        <div className='title'>
          <b>Загальна інформація</b>
        </div>
        <div className='paragraph'>
          <p>Регулювальники звичайно регулюють рух на центральних перехрестях населених пунктів в години "пік", де часто утворюються затори, а також в місцях, де необхідно оптимізувати дорожній рух в зв’язку з несправністю світлофорів або в інших випадках повязаних із забезпеченням безпеки руху.</p>
          <p>До регулювальника прирівнюються працівники військової інспекції безпеки дорожнього руху, дорожньо-експлуатаційної служби, черговий на залізничному переїзді, поромній переправі, які мають відповідне посвідчення та нарукавну пов'язку, жезл, диск з червоним сигналом чи світлоповертачем, червоний ліхтар або прапорець, та виконують регулювання у форменому одязі;</p>
          <img src='../img/courses/regulator.png' width='900px'/>
          <p>Сигнали регулювальника мають перевагу перед сигналами світлофорів та вимогами дорожніх знаків і є обов’язковими для виконання. Слід запам'ятати, що на перехресті де рух регулюється регулювальником, знаки пріорітету -  Знак 2.1 , Знак 2.2 , Знак 2.3 , Знак 2.4 та сигнали світлофорів до уваги не беруться!</p>
          <p>Водії та пішоходи повинні виконувати додаткові вимоги регулювальника, навіть якщо вони суперечать сигналам світлофорів, вимогам дорожніх знаків і розмітки. Прикладом такої ситуації може бути випадок, коли регулювальник зупиняє водія в місці, де зупинка заборонена, прицьому водій зобов'язаний виконувати вимоги, що стосуються зупинки транспортних засобів.</p>
          <p>Сигналами регулювальника є положення його корпуса, а також жести руками, в тому числі з жезлом або диском з червоним світлоповертачем.</p>
        </div>
        <div className='title'>
          <b>Сигнали регулювальника:</b>
        </div>
        <div className='paragraph'>
          <p>Рука піднята вгору.</p>
          <p>Руки витягнуті в сторони, опущені або права рука зігнута перед грудьми.</p>
          <p>Права рука витягнута вперед</p>
          <p>Також регулювальник може подавати сигнал свистком для привертання уваги учасників дорожнього руху, а також інші сигнали які зрозумілі водіям і пішоходам.</p>
        </div>
        <a href='/courses/course-1-page-2'><Button variant="success" className='next-page-btn'>Продовжити</Button></a>
      </main>
      <Footer />
    </div>
  )
}
