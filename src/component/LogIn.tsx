import React from 'react'
import {
    ChakraProvider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  
const LogIn = () => {
  return (
    <ChakraProvider>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormLabel>Password</FormLabel>
        <Input type='password' />
      </FormControl>
    </ChakraProvider> 
  )
}

export default LogIn