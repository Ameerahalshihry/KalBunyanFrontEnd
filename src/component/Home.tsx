import Sidebar from '../sidebar/Sidebar'
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import img_header from '../assets/img_header.png';
import plan from '../assets/plan.png'
import plant from '../assets/plant.png'
import whyUs from '../assets/whyUs.png'
import Profile from './Profile/Profile';

const Home = () => {
  const navigate = useNavigate()
  const Sessions =()=>{
    navigate("/sessions")    
  }
  const ChatGPT =()=>{
    navigate("/bot");   
  }

  return (
    <>
    {/*----------HEADER----------*/}
      <header className='headerContainer'>
        <div className='headerBg'>

          <div className='headerContentContainer'>
            <img src={img_header} alt="" />
            <div className='headerContent'>
              <div>احصل على المساعدة، 
              <br/> مجموعات الدعم لمواجهة تحديات الحياة</div> 
              <button onClick={Sessions}>إحجز جلستك</button>
              <button onClick={ChatGPT} >تحدث مع ChatGPT</button>
            </div>
          </div>
                 
        </div>    
      </header>

    {/*----------plan section----------*/}
    <section className='palnSection'>
      <h1>رحلة الدعــــــــــــــــــم</h1>
      <img src={plan} alt="" />  
    </section>

    {/*----------vision section----------*/}
    <section className='visionSection'>
      <div>
        <h1>رؤيتــــــــــــــــــنا</h1>
        <p>نعتقد بأن طلب المساعدة يجب أن يكون حقاً بسيطًا ومريحًا وآمنًا، من خلال موقعنا الإلكتروني ستجدون هذا  الإعتقاد حقيقي. هو عبارة عن موقع جلسات صوتية ومحادثات يسمح للأشخاص بالانضمام إلى مناقشات الدعم مع الآخرين في رحلات وتحديات الحياة المماثلة. يتم توفير المحادثات والاجتماعات أو إدارتها من قبل أشخاص مؤهلين سبق وأن حدثت لهم تجربة مماثلة. يمكن لكل مستخدم تصفح الجلسات المتاحة أو الانضمام إليها أو جدولتها في أي مكان ومن أي جهاز.</p>
      </div>
      <img src={plant} alt="" />  
    </section>

    {/*----------whyUs section----------*/}
    <section className='whyUsSection'>
      <h1>ما يميزنـــــــــــــــــا</h1>
      <img src={whyUs} alt="" />  
    </section>

    {/*----------newsletter section----------*/}
    <div className='newsletterBg'>
        <div className='newsletterContent'>
          <h3>اشترك في نشرتنا الإخبارية</h3> 
          <input type="text" placeholder='example@email.co'/>
          <button>إشتــــــراك</button>
        </div>          
    </div>


    </>
  )
}

export default Home