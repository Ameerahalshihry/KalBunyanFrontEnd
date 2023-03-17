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
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 5 }}>        
          <Image  mb="0" pb={"0"} src="chatgptpic.png"></Image>

            <Heading
            color={'#103D3F'}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
              lineHeight={'110%'}
              style={{fontFamily:"Tajawal"}}>
              احصل على الدعم والمساعدة  {' '}
              <Text as={'span'} color={'#D38E72'}>
                بخصوصية تامة
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'} style={{fontFamily:"Tajawal"}}>
            احصل على المساعدة من روبوت محادثة مصمم للاستماع إليك وتقديم النصيحة - مدعوم من GPT 3.5. نحن لا نحفظ محادثاتك أبدًا ، كل شيء خاص.
            </Text>
              <Button
                px={6}
                bg={'#103D3F'}
                color={'white'}
                  _hover={{
                    bg: '#ABBEA9',
                  }}
                 onClick={() =>
                  document.getElementById('chatgpt-section')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }>
                اضفط هنا
              </Button>
            
            <Flex  justifyContent={"center"} w={'full'}>
              
            </Flex>
          </Stack><div  id="chatgpt-section">
          <BottomPage></BottomPage></div>
        </Container></div>
      </ChakraProvider>
    );
  }
  
 