import React from 'react'
import Profile from './Profile/Profile'
import Chat from './Chat'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div style={{"minHeight": "90vh"}} >
      {/* <br/>
      <a href="./LogIn" ><button> Log In</button></a>
      <br/>
      <a href="./SignUp" ><button> Sign Up</button></a> */}
      {/* <Profile /> */}
      {/* <Sidebar /> */}
      <Profile />
    </div>
  )
}

export default Home