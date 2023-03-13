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
} from '@chakra-ui/react';
import leaves from '../assets/img/1.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function LogIn() {

 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleLogIn = async () => {
    await fetch('http://localhost:3000/user/login',{
      method: "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          email: email,
          password:password,
      })
  }).then(res=>res.json())
  .then(data=>{
      console.log(data);
      localStorage.setItem("token",data.token);
      console.log(localStorage.getItem("token"))
      localStorage.setItem("username",data.username);


      
  });
  navigate("/")

  }
  return (

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'start'}
      bg={'#E8E2DF'}
      >
        <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={'#103D3F'}>تسجيل الدخول</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'#f1edeb'}
          boxShadow={'xl'}
          p={20}
          textAlign={'right'}
          color={'#103D3F'}>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel textAlign={'right'}>البريد الإلكتروني</FormLabel>
              <Input type="email"
                variant='flushed'
                focusBorderColor='#103D3F'
                onChange={(e)=> setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel textAlign={'right'}>كلمة المرور</FormLabel>
              <Input type="password" 
              variant='flushed'  
              focusBorderColor='#103D3F'
              onChange={(e)=> setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack>
                <Link>هل نسيت كلمة المرور؟</Link>
              </Stack>
              <Button
                bg={'#103D3F'}
                color={'white'}
                _hover={{
                  bg: '#ABBEA9',
                }}
                onClick={handleLogIn}>
                  تسجيل دخول
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>
    </Flex>
  );
}