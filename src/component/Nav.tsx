import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Nav = () => {

  const navigate = useNavigate()
  const HomePage =()=>{
    navigate("/");   
  }
  const SignUp =()=>{
    navigate("/signUp");  
  }
  const Profile =()=>{
    navigate("/profile");
  }
  const SingOut =()=>{
    navigate("/");
  }

  return (
    <nav>

      <div className='mainNav'>
        
        <div className='navBar'>
        <img src={logo} alt="" onClick={HomePage}/>
          <ul>
            <li><Link to='/'>الرئيسية</Link></li>
            <li><Link to='/sessions'>الجلسات</Link></li>
            <li><Link to='/contact'>التواصل</Link></li>
          </ul>
        </div>

        <>{(
        localStorage.getItem('name') == null ?
          <div className='btnNav'>
            <button onClick={SignUp}>تسجيل الدخول</button>
          </div>
          :
          <div className='btnNav'>
            <a onClick={Profile}>
              <p>مرحباً, {localStorage.getItem('name')}</p>
            </a>
            <button onClick={SingOut}>تسجيل الخروج</button>
          </div>
        )}</>

      </div>

    </nav>
  )
}

export default Nav