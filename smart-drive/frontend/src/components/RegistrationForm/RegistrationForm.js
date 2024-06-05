import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import "./RegistrationForm.css";

export default function RegistrationForm({ handleRegistration }) {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });

    const [regState, setRegState] = useState({ submitted: false, end: false, userExist: false })

    const sendUserData = async () => {
      await fetch('http://127.0.0.1:5000/api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (response.status === 200) {
          handleRegistration({ username: userData.username, email: userData.email })
          setRegState(state => ({...state, userExist: false, end: true}))
        } else {
          setRegState(state => ({...state, userExist: true}))
        }
      })
      .catch(error => console.log(error))
    }
  
    const handleInputChange = (e) => {
      e.preventDefault();
  
      const { name, value } = e.target;
      setUserData((values) => ({
        ...values,
        [name]: value
      }));
    };

    const validUsername = (username) => {
      const usernamePattern = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i;
      return usernamePattern.test(username);
    }

    const validEmail = (email) => {
      const emailPattern = /^\S+@\S+\.\S+$/i;
      return emailPattern.test(email);
    }

    const validPassword = (password) => {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,32}$/i;
      return passwordPattern.test(password);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const valid = validUsername(userData.username) && validEmail(userData.email) && validPassword(userData.password)
      setRegState(state => ({...state, submitted: true}));
      
      if (valid) {
        sendUserData();
      }
    };

    const handleClose = (e) => {
      e.preventDefault()
      document.querySelector('.form-container-register').style.display = 'none';
      setUserData({ username: '', email: '', password: '' })
    }
  
    return (
      <div className="form-container-register">
        <IoMdClose type='button' className='btn-close-reg-form' onClick={handleClose} size={18}/>
        <form className="register-form" onSubmit={handleSubmit}>
          {regState.submitted && regState.end && (
            <div className="success-message">
              <h3>Welcome {userData.username}</h3>
              <div> Your registration was successful! </div>
            </div>
          )}
          {!regState.end && (
            <input
              className="form-field"
              type="text"
              placeholder="Ім'я"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
          )}
  
          {!regState.end && regState.submitted && !userData.username && (
            <span id="user-name-error">Введіть ім'я</span>
          )}
          {!regState.end && regState.submitted && userData.username && !validUsername(userData.username) && (
            <span id="user-name-error">Неправильне ім'я. Тільки латиниця, від 4 до 20 символів</span>
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
          {!regState.end && regState.submitted && userData.email && !validEmail(userData.email) && (
            <span id="email-error">Неправильний email</span>
          )}
          {regState.submitted && userData.email && validEmail(userData.email) && regState.userExist && (
            <span id="email-error">Користувач з таким email вже існує</span>
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
          {!regState.end && regState.submitted && userData.password && !validPassword(userData.password) && (
            <span id="password-error">Пароль має містити від 8 до 32 символів, букви нижнього та верхнього регістру, цифри, унікальні символи</span>
          )}

          {!regState.end && (
            <button className="form-field" type="submit">
              Зареєструватися
            </button>
          )}
        </form>
      </div>
    );
  }