import React from 'react'

import { ChakraProvider,
  Card,
  CardHeader,
  CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List, Input, Icon} from '@chakra-ui/react'
import { BsCalendar4Week, IoTimeOutline } from 'react-icons/all'

import sessions from './sessions.json'

const SessionCardAcademic = () => {
  return (
    <ChakraProvider>
      { sessions.map((session:any, index)=>{
        return (
          <Card 
                direction={{ base: 'column', sm: 'row' }}
                width ={{base: '100%', sm: '730px', lg:'1000px' }}
                overflow='hidden'
                // variant='outline'
                boxShadow='xl'
                gap={20}
                bg='#f3f1e8'
                mb='20'
                >
                <Stack align='center'
                >
                  <CardHeader>
                    <List spacing={3} mt='3'>
                      <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> {session.date} </ListItem>
                      <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> {session.time} </ListItem>
                      <ListItem > الجلسة برعاية: {session.hostedBy} </ListItem>
                      <ListItem > المقاعد المتاحة: {session.availableSeats} </ListItem>
                      <ListItem > المشتركون: {session.subscribers} </ListItem>
                    </List>
                  </CardHeader>
                  <CardBody textAlign='center'>
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
            </Card>
      )})}

      <Card 
        direction={{ base: 'column', sm: 'row' }}
        width ={{base: '100%', sm: '730px', lg:'1000px' }}
        overflow='hidden'
        // variant='outline'
        boxShadow='xl'
        gap={20}
        bg='#f3f1e8'
        mb='20'
        >
        <Stack align='center'
        >
          <CardHeader>
            <List spacing={3} mt='3'>
              <ListItem ><Icon as={BsCalendar4Week} w={4} h={4} /> ---------------- </ListItem>
              <ListItem ><Icon as={IoTimeOutline} w={5} h={5} /> ---------- </ListItem>
              <ListItem > الجلسة برعاية: ---------- </ListItem>
              <ListItem > المقاعد المتاحة: - </ListItem>
              <ListItem > المشتركون: - </ListItem>
            </List>
          </CardHeader>
          <CardBody textAlign='center'>
            <Heading size='md'>هنا يمكنك طلب المساعدة، وإقتراح عنوان لجلسة تحدي جديدة ...</Heading>
            <Input></Input>
          </CardBody>
          <CardFooter>
            <Button 
            variant='solid' 
            bg='#103D3F'
            color='white'
            py='5'
            px='5'
            border-radius={'50%'}
            _hover={{ bg: '#103D3F' }}>
                +
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      </ChakraProvider>
    ) 
  }

export default SessionCardAcademic