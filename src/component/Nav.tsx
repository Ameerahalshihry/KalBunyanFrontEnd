import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import LogIn from './LogIn';

const Nav = () => {

  const navigate = useNavigate()
  const HomePage =()=>{
    navigate("/");   
  }
  const LogIn =()=>{
    navigate("/login");  
  }
  const Profile =()=>{
    navigate("/profile");
  }
  const SingOut =()=>{
    localStorage.clear()
    navigate("/");
  }

  return (
    <nav>

      <div className='mainNav'>
        
        <div className='navBar'>
        <img src={logo} alt="" onClick={HomePage}/>
          <ul>
            <li><NavLink to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >الرئيسية</NavLink></li>
            <li><NavLink to='/sessions'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >الجلسات</NavLink></li>
            <li><NavLink to='/contact'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >التواصل</NavLink></li>
          </ul>
        </div>

        <>{(
        localStorage.getItem('token') == null ?
          <div className='btnNav'>
            <button onClick={LogIn}>تسجيل الدخول</button>
          </div>
          :
          <div className='btnNav'>
            <a onClick={Profile}>
              <p>مرحباً, {localStorage.getItem('username')}</p>
            </a>
            <button onClick={SingOut}>تسجيل الخروج</button>
          </div>
        )}</>

      </div>

    </nav>
  )
}

export default Nav