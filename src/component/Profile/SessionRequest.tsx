import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import requests from './requests.json'

const SessionRequest = () => {
  return (
    <>
      <Flex gap={1} color="#103D3F" _dark={{ color: "gray.200" }}
        justify={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="#103D3F"
          _dark={{ color: "white" }}
          pt='6'
        >
          طلبات الجلسات
        </Text>
        {requests.map((request) => {
          return (
            <>
              <Flex 
                gap={3} 
                color="#103D3F" 
                _dark={{ color: "gray.200" }} 
                justify={'center'}
                direction={'row-reverse'}
                pt='8'
              > 
                <Text fontSize="lg">
                :موضوع الجلسة
                </Text>
                <Text fontSize="lg">
                    {request.topic}
                </Text>
              </Flex>
            <Flex gap={3} 
              color="#103D3F" 
              _dark={{ color: "gray.200" }} 
              justify={'center'}
              direction={'row-reverse'}
              > 
              <Text fontSize="lg">
                :موعد الجلسة
              </Text>
              <Text fontSize="lg" >
                  {request.date}
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
                :الداعم للجلسة
              </Text>
              <Text fontSize="lg" pb='5'>
                  {request.supporter}
              </Text>
          </Flex>
        <Flex gap={3} pb='4'
        borderBottom={'1px'}
        borderBottomColor={'#103D3F'}>
            <Button
              bg={'#103D3F'}
              color={'white'}
              _hover={{
                bg: '#ABBEA9',
              }}>قبول</Button>
            <Button
              bg={'#103D3F'}
              color={'white'}
              _hover={{
                bg: '#ABBEA9',
              }}>رفض</Button>
            </Flex>
            </>
          )
        })}

      </Flex>
    </>
  )
}

export default SessionRequest