import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import user from './user.json'

const PastSessions = () => {
  
  const [token, setToken] = useState<any>(localStorage.getItem("token"));
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {


    const sessions = async () =>{
      
      await fetch('hhttps://kalboonyan.onrender.com/profile/sessions',{
     method: "GET",

      headers:{ 
        "authorization": token,
          "Content-Type": "application/json"
      }
  }).then(res=>res.json())
  .then(data=>{
    setSessions(data.sessions)


  });
}

sessions()



  },[])


  


  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
    >
   
  {sessions && sessions.map((session)=>{
    return(
      <Box>

        <Flex 
          gap={3} 
          color="#103D3F"
          _dark={{ color: "gray.200" }} 
          justify={'center'}
          direction={'row-reverse'}
        > 
          <Text fontSize="lg">
            :موضوع الجلسة
          </Text>
          <Text fontSize="lg">
              {session.topic}
          </Text>
        </Flex>

        <Flex 
          gap={3} 
          color="#103D3F" 
          _dark={{ color: "gray.200" }} 
          justify={'center'}
          direction={'row-reverse'}
          > 
          <Text fontSize="lg">
            :موعد الجلسة
          </Text>
          <Text fontSize="lg">
          {new Date(session.date).toDateString() }   {new Date(session.date).toTimeString().slice(0,5) } 
            
          
          </Text>
        </Flex>

        <Flex 
          gap={3} 
          color="#103D3F" 
          _dark={{ color: "gray.200" }} 
          justify={'center'}
          direction={'row-reverse'}
          > 
          <Text fontSize="lg">
            :داعم الجلسة
          </Text>
          <Text fontSize="lg" pb='5'>
            {session.Leader}
          </Text>
        </Flex>
      </Box>
    )
  })}
  
</Flex>
  )
}

export default PastSessions