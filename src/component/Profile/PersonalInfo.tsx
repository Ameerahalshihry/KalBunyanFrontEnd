import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

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
            <FaEnvelope size={20} />
            <Text fontSize="lg">
                {localStorage.getItem('email')}
            </Text>
          </Flex>
        </Box>
    </>
  )
}

export default PersonalInfo