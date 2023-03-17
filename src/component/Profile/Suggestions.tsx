import { Flex, Text, Icon, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsLightbulb } from 'react-icons/all';

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
      <Heading size='md'>هنا ستجد إقتراحات لجلسات تم طرحها من قبل المحتاجين لدعمك</Heading>
      {suggestions && suggestions.map((suggestion:any)=> {
        return(
          <Text fontSize="lg">
            <Icon as={BsLightbulb} w={4} h={4} /> {suggestion.topic} 
        </Text>
        )
      })}
      <CreateSession/>     
</Flex>
</>
  )
}

export default Suggestions