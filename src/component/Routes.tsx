import React from 'react'
import { Routes as Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Sessions from './Sessions'
import Chat from '../Chatroom/Chat'
import ChatGPTPage from '../ChatGPTPage/ChatGPTpage'
const Routes_ = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/chat' element={<Chat sessionId='0f613b04-17a5-4fe4-b87d-3ca065be2cd7'/>}></Route>
        <Route path='/bot' element={<ChatGPTPage />}></Route>

    </Routes>
  )
}

export default Routes_