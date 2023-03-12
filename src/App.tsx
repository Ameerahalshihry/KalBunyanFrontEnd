import { useEffect, useState } from 'react'
import './App.css'
import LogIn from './component/LogIn'
import SignUp from './component/SignUp'
import Routes from './component/Routes';
import Nav from './component/Nav';
import Footer from './component/Footer';

function App() {

  return (
    <div className="App">
    <Nav />
    <Routes />
    <Footer />
  </div>
  )
}

export default App
