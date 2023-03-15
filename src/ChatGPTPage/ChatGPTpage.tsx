import {
    ChakraProvider,
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Button,
    Icon,
    IconProps,
    useMediaQuery,
  } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import BottomPage from './BottomPage';
  
  export default function ChatGPTPage() {
    const [isLargerThan1300] = useMediaQuery("(min-width: 1300px)");


    return (
      <ChakraProvider>

      <div style={{backgroundColor:"#E8E2DF"}}>
      <Container    maxW={'5xl'}>
        <Stack
        mt="0"
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>        
          <Image  mb="0" pb={"0"} src="/chatgptpic.png"></Image>

            <Heading
            color={'#103D3F'}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Get help {' '}
              <Text as={'span'} color={'#D38E72'}>
                Anonymously
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
              Get help from a chat bot designed to listen to you and give you advice - powered by GPT 3.5. 
              We never save your conversations, everything is private. 
            </Text>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'#103D3F'}
                _hover={{ bg: 'orange.500' }} onClick={() =>
                  document.getElementById('chatgpt-section')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }>
                Get started
              </Button>
            
            <Flex  justifyContent={"center"} w={'full'}>
              
            </Flex>
          </Stack><div  id="chatgpt-section">
          <BottomPage></BottomPage></div>
        </Container></div>
      </ChakraProvider>
    );
  }
  
 