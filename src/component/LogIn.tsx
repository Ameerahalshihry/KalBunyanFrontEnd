import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  ChakraProvider,
  Link
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
      if(!data.Error){
      localStorage.setItem("token",data.token);
      console.log(localStorage.getItem("token"))
      localStorage.setItem("username",data.username);
      localStorage.setItem("email",data.email);
      localStorage.setItem("role",data.role);

      navigate("/")

  
    }
    



      
  });

  }
  return (
      <ChakraProvider>
    <Flex
      minH={{base:'80vh', md:'80vh' }}
      align={'center'}
      justify={'center'}
      bg={'#E8E2DF'}
      >
        <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>
      <Stack mx={'auto'} maxW={'xl'} spacing={14}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={'#103D3F'}>تسجيل الدخول</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'#f1edeb'}
          boxShadow={'xl'}
          px={20}
          py={10}
          textAlign={'right'}
          color={'#103D3F'}>
          <Stack spacing={2} >
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
            <Stack spacing={8}>
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
                <Text>
                  ليس لديك حساب ؟ 
                <Link href='/signUp'> انشاء حساب</Link>

                </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Image src={leaves} width={'20%'} display={{base:"none", sm:"inline"}}></Image>
    </Flex></ChakraProvider>  
  );
}