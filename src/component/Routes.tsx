import React from 'react'
import { Routes as Routes_, Route } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Sessions from './Sessions'

const Routes = () => {
  return (
    <Routes_>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>

    </Routes_>
  )
}

export default Routes