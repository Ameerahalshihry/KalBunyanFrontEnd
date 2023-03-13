import { useEffect, useState } from 'react'
import './App.css'
import LogIn from './component/LogIn'
import SignUp from './component/SignUp'
import Routes from './component/Routes';
import Nav from './component/Nav';
import Footer from './component/Footer';
import ChatGPTPage from './ChatGPTPage/ChatGPTpage';
import Chat from './Chatroom/Chat';

function App() {
//<Nav />
//<Routes />
//<Footer />
  return (
    <div className="App">
    <Chat />
  </div>
  )
}

export default App
