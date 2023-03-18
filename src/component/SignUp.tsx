import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Select,
  ChakraProvider,
} from '@chakra-ui/react';
import leaves from '../assets/img/1.png'



export default function SignUp() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSingUp = async () => {
    await fetch('https://kalboonyan.onrender.com/user/create',{
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
      localStorage.setItem("token", data.token);
      console.log(localStorage.getItem("token"))
      localStorage.setItem("username",data.username);
      localStorage.setItem("email",data.email);
      localStorage.setItem("role",data.role);

      navigate("/")
  });
  }
  return (

    <ChakraProvider>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'start'}
      bg={'#E8E2DF'}
      >
        <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>

        <Stack spacing={8} mx={'auto'} maxW={'xl'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'#103D3F'}>إنشاء حساب  </Heading>
          </Stack>

          <Box
            w={{base:'335px', sm:'400px'}}
            rounded={'lg'}
            bg={'#f1edeb'}
            boxShadow={'xl'}
            px={20}
            py={10}
            textAlign={'right'}
            color={'#103D3F'}>
            <Stack spacing={6} >
            <FormControl id="username">
                <FormLabel textAlign={'right'} >اسم المستخدم</FormLabel>
                <Input type='text'
                  variant='flushed'  
                  focusBorderColor='#103D3F'
                  onChange={(e)=> setUserName(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel textAlign={'right'}>البريد الإلكتروني</FormLabel>
                <Input type="email"
                  variant='flushed' 
                  focusBorderColor='#103D3F'
                  onChange={(e)=> setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel textAlign={'right'}>كلمة المرور</FormLabel>
                <Input type="password"
                  variant='flushed'  
                  focusBorderColor='#103D3F'
                  onChange={(e)=> setPassword(e.target.value)}/>
              </FormControl>
              
              <FormControl id="role">
                <FormLabel textAlign={'right'}>تريد الانضمام معنا كـ</FormLabel>
                <Select placeholder='اختر' 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setRole(e.target.value)} >
                    <option value="User">مستخدم</option>
                    <option value="Supporter">داعم</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Stack>
                  <Link href='/LogIn'>لديك حساب ؟ سجل دخول   </Link>
                </Stack>
                <Button
                  bg={'#103D3F'}
                  color={'white'}
                  _hover={{
                    bg: '#ABBEA9',
                  }}
                  onClick={handleSingUp}
                  >
                      إنشاء حساب
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>
      </Flex>
    </ChakraProvider>
  );
}