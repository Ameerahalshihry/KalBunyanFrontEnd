import React from 'react'
import { Routes as Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Sessions from './Sessions'
import Chat from '../Chatroom/Chat'
import ChatGPTPage from '../ChatGPTPage/ChatGPTpage'
import Profile from './Profile/Profile'
import Contact from './Contact'
const Routes_ = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        {/* <Route path='/supporterGuides' element={<SupporterGuides />}></Route> */}
        <Route path='/chat/:id' element={<Chat/>}></Route>
        <Route path='/bot' element={<ChatGPTPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}

export default Routes_