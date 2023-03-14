import React from 'react'
import { Routes as Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Sessions from './Sessions'
import { CreateSession } from './CreateSession'
import Chat from '../Chatroom/Chat'
const Routes_ = () => {
  return (
    <Routes>
        <Route path='/' element={<CreateSession />}></Route>
        <Route path='/sessions' element={<CreateSession />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/chat' element={<Chat sessionId='0f613b04-17a5-4fe4-b87d-3ca065be2cd7'/>}></Route>

    </Routes>
  )
}

export default Routes_