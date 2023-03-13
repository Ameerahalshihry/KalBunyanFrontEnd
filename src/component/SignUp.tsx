import React, { useEffect, useState } from 'react'
import {
  ChakraProvider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
  } from '@chakra-ui/react'
  
const SignUp = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSingUp = async () => {
    const response = await fetch('http://localhost:3003/users/',{
      method: "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          email: email,
          password:password,
          username: userName,
          role:role
      })
  }).then(res=>res.json())
  .then(data=>{
      console.log(data);
      localStorage.setItem("token",data.token);
      
      console.log(localStorage.getItem("token"))
  });
  }

  return (
    <ChakraProvider>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type='text' onChange={(e)=> setUserName(e.target.value)}/>
        <FormLabel>Email address</FormLabel>
        <Input type='email'  onChange={(e)=> setEmail(e.target.value)}/>
        <FormLabel>Password</FormLabel>
        <Input type='password' onChange={(e)=> setPassword(e.target.value)} />
        <FormLabel>Role</FormLabel>
        <Select placeholder='Select Role' onChange={(e)=> setRole(e.target.value)} >
            <option value="User">User</option>
            <option value="Supporter">Supporter</option>
        </Select>
        <Button colorScheme='blue' onClick={handleSingUp}>SignUp</Button>
      </FormControl>
    </ChakraProvider>
    
  )
}

export default SignUp