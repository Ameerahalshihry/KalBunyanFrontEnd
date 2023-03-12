import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container  maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
          color={'gray.500'}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Get help {' '}
            <Text as={'span'} color={'#abbea9'}>
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
              bg={'#abbea9'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
           
          <Flex  justifyContent={"center"} w={'full'}>
            
          </Flex>
        </Stack>
      </Container>
    );
  }
  
 