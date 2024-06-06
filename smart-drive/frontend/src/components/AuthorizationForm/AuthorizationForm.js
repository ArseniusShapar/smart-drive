import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { sha256_hash } from '../../tools';
import "./AuthorizationForm.css";


export default function AuthorizationForm({ handleAuthorization }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [regState, setRegState] = useState({
    submitted: false,
    end: false,
    userExist: true,
    correctPassword: true
  })

  const sendUserData = async () => {
    await fetch('http://127.0.0.1:5000/api/submit-authorization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userData.email, password_hash: sha256_hash(userData.password) })
    })
    .then(response => {
      const status = response.status;
      return response.json().then(data => ({ status, data }));
    })
    .then(({ status, data }) => {
      if (status === 200) {
        handleAuthorization({ email: userData.email, username: data.username });
        setRegState(state => ({ ...state, end: true }));
      } else if (status === 404) {
        setRegState(state => ({ ...state, userExist: false }));
      } else if (status === 400) {
        setRegState(state => ({ ...state, userExist: true, correctPassword: false }));
      }
    })
    .catch(error => console.log(error));
  };
  
  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserData((values) => ({
      ...values,
      [name]: value
    }));
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setRegState(state => ({...state, submitted: true}));
      if (userData.email && userData.password) {
        sendUserData();
      }
    };

    const handleClose = (e) => {
      e.preventDefault()
      document.querySelector('.form-container-login').style.display = 'none';
      setUserData({ email: '', password: '' });
      setRegState({submitted: false, end: false, userExist: true, correctPassword: true});
    }
  
    return (
      <div className="form-container-login">
        <IoMdClose type='button' className='btn-close-login-form' onClick={handleClose} size={18}/>
        <form className="login-form" onSubmit={handleSubmit}>
          {regState.submitted && regState.end && (
            <div className="success-message">
              <h3>Welcome</h3>
              <div> Your authorization was successful! </div>
            </div>
          )}
  
          {!regState.end && (
            <input
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          )}
  
          {!regState.end && regState.submitted && !userData.email && (
            <span id="email-error">Введіть email</span>
          )}
          {!regState.end && regState.submitted && userData.email && !regState.userExist && (
            <span id="email-error">Користувача з таким email не існує</span>
          )}
  
          {!regState.end && (
            <input
              className="form-field"
              type="password"
              placeholder="Пароль"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          )}
  
          {!regState.end && regState.submitted && !userData.password && (
            <span id="password-error">Введіть пароль</span>
          )}
          {!regState.end && regState.submitted && userData.password && !regState.correctPassword && (
            <span id="password-error">Неправильний пароль</span>
          )}

          {!regState.end && (
            <button className="form-field" type="submit">
              Увійти
            </button>
          )}
        </form>
      </div>
    );
  }