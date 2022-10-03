import React from 'react'
import Navbar from './components/navbar/navbar'
import Homepage from './pages/Homepage/homepage'
import Signup from './pages/auth/signup/signup';
import Login from './pages/auth/login/login';
import PasswordReset from './pages/auth/passwordReset/passwordReset';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element= { <Homepage /> } />
      <Route path='/signup' element= { <Signup /> } />
      <Route path='/login' element= { <Login /> } />
      <Route path='/forgot-password' element={ <PasswordReset /> } />
    </Routes>
  )
}

export default App