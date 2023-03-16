import React from 'react'
import { Routes as Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Sessions from './Sessions'
import Chat from '../Chatroom/Chat'
import ChatGPTPage from '../ChatGPTPage/ChatGPTpage'
import Profile from './Profile/Profile'
const Routes_ = () => {
  return (
    <Routes>
        <Route path='/' element={<Profile />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/chat/:id' element={<Chat/>}></Route>
        <Route path='/bot' element={<ChatGPTPage />}></Route>

    </Routes>
  )
}

export default Routes_