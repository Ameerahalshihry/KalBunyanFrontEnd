import React, { useEffect, useState } from 'react'

import { ChakraProvider,
  Card,
  SimpleGrid,
  CardHeader,
  CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List, Input, Icon, Center, Flex, Spacer} from '@chakra-ui/react'
import { BsCalendar4Week, IoTimeOutline, VscAdd } from 'react-icons/all'
import plant_2 from '../../assets/plant_2.png'
import sessions from './sessions.json'
import { useNavigate } from 'react-router-dom'

import swal from 'sweetalert2'

const SessionCardSocial = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<any[]>([]);
  const [token, setToken] = useState<any>(localStorage.getItem("token"));
  const [suggestion, setSuggestion] = useState<any>();

  async function createsuggestion(){

    swal.fire({
      icon: 'success',
      text: "تم إرسال إقتراحك بنجاح!",
      iconColor: '#221409',
      showCloseButton: true,
      focusConfirm: false,
      background: '#e7c6b9',
      confirmButtonColor: '#103d3f',
      confirmButtonText: 'OK',
    }).then(()=>{
      document.documentElement.scrollTop = 0; 
      location.reload();
    })

      if(suggestion){
    await fetch('http://localhost:3000/suggestions',{
      method: "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          topic: suggestion
      })
  })
  }}

  const JoinSession = async (session:any):Promise<any>=>{
        if(!localStorage.getItem('token')){navigate('/login')}
      if(session.users.length==10){return;}    
      await fetch('http://localhost:3000/session/join',{
      method: "PUT",
      headers:{
          "authorization": token,
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
              id: session.id
      })
  }).then(res=>res.json())
  .then(data=>{
    let test:any[]=[]
    data.sessions.forEach((session:any)=>{
      if(session.type=="social"){
        test.push(session)
      }
    })
    setSessions(test)
  });
  }

  useEffect(() => {
      fetch('http://localhost:3000/session',{
      method: "GET",
      headers:{    
          "Content-Type": "application/json"         
      }
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
    let test:any[]=[]
    data.sessions.forEach((session:any)=>{
      if(session.type=="social"){
        test.push(session)
      }
    })
    setSessions(test)   
  }) 
    console.log(sessions)
  },[])

  //----------------------------------------------------------------------------

  return (
    <ChakraProvider>
      <SimpleGrid minChildWidth='250px' gap={40} p='100px' columns={1}>
        {  sessions && sessions.map((session:any)=>{
          return (
              <Card 
                  direction={{ base: 'column', sm: 'row' }} 
                  overflow='hidden'
                  // variant='outline'
                  boxShadow='xl'
                  bg='#E6AE9788'
                  mb='20'
                  borderRadius={25}
                  maxWidth='450px'
                  >
                  <Stack align='center'
                  >
                    <CardHeader width={'full'} padding={0} >
                      <Flex>
                        <List spacing={2} textAlign='right' p='8'>
                          <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> {new Date(session.date).toDateString() } </ListItem>
                          <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> {new Date(session.date).toLocaleTimeString("en-US", {timeZone: "UTC"}) } </ListItem>
                          <ListItem > الجلسة برعاية: {session.Leader} </ListItem>
                          <ListItem > المقاعد المتاحة: {10-session.users.length} </ListItem>
                          <ListItem > المشتركون: {session.users.length} </ListItem>
                        </List>
                        <Spacer />
                        <Image src={plant_2} boxSize='40%'/>
                      </Flex>  
                    </CardHeader>

                    <Stack bg='white' borderRadius={25} align='center' height={'full'} width={'full'}>
                    <CardBody textAlign='center' >
                      <Heading size='md'>{session.topic}</Heading>
                      <Text py='2'>{session.description}</Text>
                    </CardBody>
                    <CardFooter>
                      {(session.users.map((ele: { username: string }) => ele.username).includes(localStorage.getItem('username')))                  
                      ?                     
                      <Button    
                      onClick={(e:any) => navigate('/chat/'+session.id)}
                      variant='solid' 
                      bg='#103D3F'
                      color='white'
                      py='5'
                      px='5'
                      _hover={{ bg: '#103D3F' }}>
                          تم الإنضمام
                      </Button>                     
                      :                      
                      <Button                  
                      onClick={(e:any) => JoinSession(session)}
                      variant='solid' 
                      bg='#103D3F'
                      color='white'
                      py='5'
                      px='5'
                      _hover={{ bg: '#103D3F' }}>
                          طلب الإنضمام
                      </Button>                    
                      }                   
                    </CardFooter>

                  </Stack>
                    
                  </Stack>
              </Card>  
        )})   
        }
        
        <Card 
            direction={{ base: 'column', sm: 'row' }} 
            overflow='hidden'
            // variant='outline'
            boxShadow='xl'
            bg='#E6AE9788'
            mb='20'
            borderRadius={25}
            maxWidth='450px'
            >
          <Stack align='center'
          >
            <CardHeader width={'full'} padding={0} >
              <Flex>
                <List spacing={2} textAlign='right' p='8'>
                  <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> ---------------- </ListItem>
                  <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> ---------- </ListItem>
                  <ListItem > الجلسة برعاية: ---------- </ListItem>
                  <ListItem > المقاعد المتاحة: - </ListItem>
                  <ListItem > المشتركون: - </ListItem>
                </List>
                <Spacer />
                <Image src={plant_2} boxSize='40%'/>
              </Flex>  
            </CardHeader>
            
            <Stack bg='white' borderRadius={25} align='center' height={'full'} width={'full'}>
              <CardBody textAlign='center' >
                <Heading size='md'>هنا يمكنك طلب المساعدة، وإقتراح عنوان لجلسة تحدي جديدة ...</Heading>
                <Input onChange={(e)=> setSuggestion(e.target.value)}  mt={6} mb={0} variant='outline' boxShadow='md' focusBorderColor='#103D3F' placeholder='اكتب هنا' />
              </CardBody>
              <CardFooter>
                <Button
                      onClick={(e:any) => createsuggestion()}
                      variant='solid' 
                      bg='#103D3F'
                      color='white'
                      py='5'
                      px='5'
                      _hover={{ bg: '#103D3F' }}>
                        ارسل اقتراحك
                </Button>
              </CardFooter>
            </Stack> 
                     
          </Stack>
      </Card>
    </SimpleGrid>

    </ChakraProvider>
  ) 
}

export default SessionCardSocial