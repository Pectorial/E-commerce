import React from 'react'
import Navbar from './components/navbar/navbar'
import Homepage from './pages/Homepage/homepage'
import Signup from './pages/auth/signup/signup';
import Login from './pages/auth/login/login';
import PasswordReset from './pages/auth/passwordReset/passwordReset';

import { Route, Routes } from 'react-router-dom';
import StagedForm from './components/StagedForm/StagedForm';
import ResetInstructions from './pages/auth/passwordReset/resetInstructions/resetInstructions';
import NewPassword from './pages/auth/passwordReset/NewPassword/NewPassword';
import SuccessfullPassReset from './pages/auth/passwordReset/successfullPassReset';

const App = () => {
  return (
    <Routes>
      <Route path='/' element= { <Homepage /> } />
      <Route path='/signup' element= { <Signup /> } />
      <Route path='/login' element= { <Login /> } />
      <Route path='/forgot-password' element={ <PasswordReset /> } />
      <Route path='/staged-form' element={ <StagedForm /> } />
      <Route path='/password-reset-instruction' element={ <ResetInstructions /> } />
      <Route path='/set-new-password' element={ <NewPassword /> } />
      <Route path='/reset-successfull' element={ <SuccessfullPassReset /> } />
    </Routes>
  )
}

export default App