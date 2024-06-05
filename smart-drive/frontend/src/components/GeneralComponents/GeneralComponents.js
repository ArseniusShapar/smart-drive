import React from 'react';
import Navibar from '../Navibar/Navibar';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';

export default function GeneralHeader({ user, handleRegistration, handleAuthorization, handleLogout }) {
  return (
    <>
    <Navibar user={user} handleLogout={handleLogout}/>
    <RegistrationForm handleRegistration={handleRegistration}/>
    <AuthorizationForm handleAuthorization={handleAuthorization}/>
    </>
  )
}
