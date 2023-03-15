import React from 'react'

import { ChakraProvider,
  Card,
  SimpleGrid,
  CardHeader,
  CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List, Input, Icon, Center, Flex, Spacer} from '@chakra-ui/react'
import { BsCalendar4Week, IoTimeOutline, VscAdd } from 'react-icons/all'
import plant_2 from '/Users/fatmah/Desktop/KalBunyanFrontEnd/src/assets/plant_2.png'
import sessions from './sessions.json'

const SessionCardOccupational = () => {
  return (
    <ChakraProvider>
      <SimpleGrid minChildWidth='250px' gap={40} p='100px'>
        { sessions.map((session:any, index)=>{
          return (
              <Card 
                  direction={{ base: 'column', sm: 'row' }} 
                  overflow='hidden'
                  // variant='outline'
                  boxShadow='xl'
                  bg='#E6AE9788'
                  mb='20'
                  borderRadius={25}
                  >
                  <Stack align='center'
                  >
                    <CardHeader width={'full'} padding={0} >
                      <Flex>
                        <List spacing={2} textAlign='right' p='8'>
                          <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> {session.date} </ListItem>
                          <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> {session.time} </ListItem>
                          <ListItem > الجلسة برعاية: {session.hostedBy} </ListItem>
                          <ListItem > المقاعد المتاحة: {session.availableSeats} </ListItem>
                          <ListItem > المشتركون: {session.subscribers} </ListItem>
                        </List>
                        <Spacer />
                        <Image src={plant_2} boxSize='40%'/>
                      </Flex>  
                    </CardHeader>

                    <Stack bg='white' borderRadius={25} align='center' height={'full'} width={'full'}>
                    <CardBody textAlign='center' >
                      <Heading size='md'>{session.title}</Heading>
                      <Text py='2'>{session.discription}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button
                      variant='solid' 
                      bg='#103D3F'
                      color='white'
                      py='5'
                      px='5'
                      _hover={{ bg: '#103D3F' }}>
                          طلب الإنضمام
                      </Button>
                    </CardFooter>

                  </Stack>
                    
                  </Stack>
              </Card>  
        )})   
        }
        
        <Card 
            direction={{ base: 'column', sm: 'row' }} 
            overflow='hidden'
            // variant='outline'
            boxShadow='xl'
            bg='#E6AE9788'
            mb='20'
            borderRadius={25}
            >
          <Stack align='center'
          >
            <CardHeader width={'full'} padding={0} >
              <Flex>
                <List spacing={2} textAlign='right' p='8'>
                  <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> ---------------- </ListItem>
                  <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> ---------- </ListItem>
                  <ListItem > الجلسة برعاية: ---------- </ListItem>
                  <ListItem > المقاعد المتاحة: - </ListItem>
                  <ListItem > المشتركون: - </ListItem>
                </List>
                <Spacer />
                <Image src={plant_2} boxSize='40%'/>
              </Flex>  
            </CardHeader>
            
            <Stack bg='white' borderRadius={25} align='center' height={'full'} width={'full'}>
              <CardBody textAlign='center' >
                <Heading size='md'>هنا يمكنك طلب المساعدة، وإقتراح عنوان لجلسة تحدي جديدة ...</Heading>
                <Input  mt={6} mb={0} variant='outline' boxShadow='md' focusBorderColor='#103D3F' placeholder='اكتب هنا' />
              </CardBody>
              <CardFooter>
                <Button
                      variant='solid' 
                      bg='#103D3F'
                      color='white'
                      py='5'
                      px='5'
                      _hover={{ bg: '#103D3F' }}>
                    طلب الإنضمام
                </Button>
              </CardFooter>
            </Stack> 
                     
          </Stack>
      </Card>
    </SimpleGrid>

    </ChakraProvider>
  ) 
}

export default SessionCardOccupational