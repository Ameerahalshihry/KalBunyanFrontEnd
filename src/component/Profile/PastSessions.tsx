import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import user from './user.json'

const PastSessions = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="#103D3F"
        _dark={{ color: "white" }}
        p='4'
    >
        الجلسات السابقة
    </Text>
  {user.sessions.map((session)=>{
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
            {session.date}
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
            {session.supporter}
          </Text>
        </Flex>
      </Box>
    )
  })}
  
</Flex>
  )
}

export default PastSessions