import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  ChakraProvider,
  Center,
  Icon
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <ChakraProvider>
    <Container bg="#E8E2DF" maxW="full" centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#E6AE9788"
          color="103D3F"
          borderRadius="lg"
          m={{ sm: 10, md: 16, lg: 10 }}
          p={{ sm: 5, md: 10, lg: 16 }}>
          <Box>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading size='lg'>التواصل</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#103d3f">
                    الرجاء كتابة النموذج التالي للتواصل...
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Heading size='sm' color="#103d3f" >
                        <Icon as={MdPhone} color="#103d3f" size="20px" ml={2}/>
                          +966 50 555 0000
                      </Heading>
                      <Heading size='sm' color="#103d3f" >
                        <Icon as={MdEmail} color="#103d3f" size="20px" ml={2}/>
                        Kalboonyanmarsoos@gmail.com
                      </Heading>
                      <Heading size='sm' color="#103d3f" >
                        <Icon as={MdLocationOn} color="#103d3f" size="20px" ml={2}/>
                        المملكة العربية السعودية، الرياض
                      </Heading>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#103d3f">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>الإســــم</FormLabel>
                        <InputGroup borderColor="#103d3f">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="#103d3f" />}
                          />
                          <Input type="text" size="md" focusBorderColor="#103d3f"/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>الإيميــــل</FormLabel>
                        <InputGroup borderColor="#103d3f">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="#103d3f" />}
                          />
                          <Input type="text" size="md" focusBorderColor="#103d3f"/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>محتوى الرسالة</FormLabel>
                        <Textarea
                          borderColor="103d3f"
                          _hover={{
                            borderRadius: '103d3f',
                          }}
                          placeholder="اكتب رسالتك هنا ..."
                          focusBorderColor="#103d3f"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#103d3f"
                          color="white"
                          _hover={{}}>
                          إرسال 
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </ChakraProvider>
  );
}