import { Flex, Box, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { CiMail } from 'react-icons/all'
import UserGuides from '../Guides/UserGuides'

const PersonalInfo = () => {
  return (
    <>
    <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="center"
          mt={10}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="#103D3F"
            _dark={{ color: "white" }}
          >
            {localStorage.getItem('username')}
          </Text>
         
          <Flex gap={3} color="#103D3F" _dark={{ color: "gray.200" }} 
          justify={'center'}
            >
            <CiMail size={20} />
            <Text fontSize="lg">
                {localStorage.getItem('email')}
            </Text>
          
          </Flex>
          <Divider />
            <UserGuides/>
        </Box>
    </>
  )
}

export default PersonalInfo