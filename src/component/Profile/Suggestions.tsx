import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import user from './user.json'
import { CreateSession } from '../CreateSession'
const Suggestions = () => {
  return (
    <>
    <Flex gap={1} color="#103D3F" _dark={{ color: "gray.200" }} 
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
      pb='6'
    > 
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="#103D3F"
        _dark={{ color: "white" }}
        pt='6'
        >
     الجلسات المقترحة
      </Text>
      {user.suggestions.map(suggestion=> {
        return(
          <Text fontSize="lg">
            {suggestion} -
        </Text>
        )
      })}
      {/* try change condition to User or Admin */}
      {user.role == 'Supporter'? (

        <CreateSession/>
      ):
      null}
        
</Flex>
</>
  )
}

export default Suggestions