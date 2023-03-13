import { useEffect, useState } from 'react'
import './App.css'
import LogIn from './component/LogIn'
import SignUp from './component/SignUp'
import Nav from './component/Nav';
import Footer from './component/Footer';
import ChatGPTPage from './ChatGPTPage/ChatGPTpage';
import Chat from './Chatroom/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {

  return (
    <div>
      <Nav />
    <Routes />
    <Footer />
    
    </div>
  )
}

export default App
