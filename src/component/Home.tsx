import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img_header from '../assets/img_header.png';

const Home = () => {
  const navigate = useNavigate()
  const SignUp =()=>{
    navigate("/signUp")    
  }

  return (
    // <div style={{"minHeight": "90vh"}} >
    //   <br/>
    //   <a href="./LogIn" ><button> Log In</button></a>
    //   <br/>
    //   <a href="./SignUp" ><button> Sign Up</button></a>
    // </div>
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