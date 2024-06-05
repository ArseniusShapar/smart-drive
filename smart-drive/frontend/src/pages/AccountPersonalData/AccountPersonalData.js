import { React, useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import Navibar from '../../components/Navibar/Navibar';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import Footer from '../../components/Footer/Footer';
import './AccountPersonalData.css';


export default function AccountPersonalData() {
  const { user, ...other } = useUser();

  const [regDate, setRegDate] = useState('');

  const getRegDate = async () => {
    await fetch('http://127.0.0.1:5000/api/get-user-reg-date', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: user.email })
  })
    .then(response => response.json())
    .then(data => setRegDate(data.reg_date))
    .catch(error => console.error(error))
  }

  useEffect( () => {
    getRegDate()
  }, [])

  return (
    <>
      <Navibar user={user} {...other} />
      <UserNavigation page='personal-data'/>
      <div className="user-profile">
        <img src='../img/user.jpg' alt="User Avatar" className="user-avatar" />
        <h2 className="user-name">{user.username}</h2>
        <div className="user-info">
          <p className="user-email">Email: <b>{user.email}</b></p>
          <p className="user-reg-date">Дата реєстрації: <b>{regDate}</b></p>
        </div>
      </div>
      <Footer />
    </>
  );
};