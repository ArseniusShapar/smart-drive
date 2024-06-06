import { React, useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import Navibar from '../../components/Navibar/Navibar';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import Footer from '../../components/Footer/Footer';
import './AccountStatistic.css';


export default function AccountStaticstic() {
  const { user, ...other } = useUser();

  const [statistic, setStatisctic] = useState([]);

  const getStatistic = async () => {
    await fetch('http://127.0.0.1:5000/api/get-user-statistic', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: user.email })
  })
    .then(response => response.json())
    .then(data => setStatisctic(data.statistic))
    .catch(error => console.error(error));
  }

  useEffect( () => {
    getStatistic()
  }, [])

    return (
      <div className='account-statistic'>
        <Navibar user={user} {...other} />
        <UserNavigation page='statistic'/>
        <main>
          <table>
            <thead>
              <tr>
                <th width='5%'>№</th>
                <th width='20%'>Дата</th>
                <th width='24%'>Правильні відповіді</th>
                <th width='15%'>Помилки</th>
                <th width='20%'>Витрачений час</th>
                <th>Результат</th>
              </tr>
            </thead>
            <tbody>
              {statistic.map((testResult, index) => 
                <tr>
                  <td>{index + 1}</td>
                  <td>{testResult.date}</td>
                  <td>{testResult.corrects}</td>
                  <td>{testResult.mistakes}</td>
                  <td>{testResult.time}</td>
                  <td>{testResult.passed ? 'Складено' : 'Не складено'}</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
        <Footer />
      </div>
    )
  }
