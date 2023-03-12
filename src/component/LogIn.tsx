import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  
const LogIn = () => {
  return (
    <FormControl>
    <FormLabel>Email address</FormLabel>
    <Input type='email' />
    <FormLabel>Password</FormLabel>
    <Input type='password' />
    </FormControl>
  )
}

export default LogIn