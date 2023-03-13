import React from 'react'
import Profile from './Profile'
import Chat from './Chat'

const Home = () => {
  return (
    <div style={{"minHeight": "90vh"}} >
      <br/>
      <a href="./LogIn" ><button> Log In</button></a>
      <br/>
      <a href="./SignUp" ><button> Sign Up</button></a>
      <Profile />
      <Chat />
    </div>
  )
}

export default Home