import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import user from './user.json'
import { CreateSession } from '../CreateSession'
const Suggestions = () => {

  const [suggestions, setSuggestions] = useState<any>()
  useEffect(() => {

    fetch('http://localhost:3000/session/suggestions/all',{
    method: "GET",
    headers:{
    
        "Content-Type": "application/json"
        
    }
}).then(res=>res.json())
.then(data=>{
  console.log(data)
          setSuggestions(data)
    }
  )

    






  

},[])
  return (
    <>
    <Flex gap={1} color="#103D3F" _dark={{ color: "gray.200" }} 
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
      pb='6'
    > 
      {suggestions && suggestions.map((suggestion:any)=> {
        return(
          <Text fontSize="lg">
           - {suggestion.topic} 
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