import Sidebar from '../sidebar/Sidebar'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img_header from '../assets/img_header.png';
import Profile from './Profile/Profile';

const Home = () => {
  const navigate = useNavigate()
  const SignUp =()=>{
    navigate("/signUp")    
  }

  return (
    <>
    {/*----------HEADER----------*/}
      <header className='headerBg'>
          <img className='imgHeaderContent' src={img_header} alt="" />
          <div className='headerContent'>
            <div>احصل على المساعدة، 
            <br/> مجموعات الدعم لمواجهة تحديات الحياة</div> 
            <button onClick={SignUp}> انضم معنا</button>
          </div>  
      </header>
    </>
  )
}

export default Home