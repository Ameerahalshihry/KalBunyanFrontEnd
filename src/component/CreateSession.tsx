import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Text , Image, ChakraProvider, Box, Textarea} from "@chakra-ui/react"
import React, { useState } from "react"
import DateTimePicker from 'react-datetime-picker';

export function CreateSession() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [x, setX] = useState(new Date());

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    const [topic, setTopic] = useState('');
    const [date, setDate] = useState<any>();
    const [description, setDescription] = useState('');
    const [token, setToken] = useState<any>(localStorage.getItem("token"));

    const handleCreateSession = async()=>{
      console.log(date)
      
        await fetch('http://localhost:3000/session/create',{
            method: "POST",
            headers:{ 
              "authorization": token,
                "Content-Type": "application/json"
            },
            body:JSON.stringify({

                topic: topic,
                date:date,
                description:description,


            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        });
        }
    return (
      <>
      <ChakraProvider>
      <Text
        m='6' textAlign={'center'} fontSize={'lg'} fontWeight={'bold'}>
      يمكنك ان تحدث فرقاً في حياة الآخرين وتشارك تجارب حياتك وتجلب الأمل للآخرين بضغطة واحدة لإنشاء جلسة
      </Text>
        <Button onClick={onOpen}
        bg={'#103D3F'}
        color={'white'}
        _hover={{
          bg: '#ABBEA9',
        }}
        fontSize={'xl'}
        m='2'
        px='10'
        py='4'
        >إنشاء جلسة</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          {/* <ModalCloseButton /> */}
          <ModalContent 
          textAlign={'center'}
          bg={'#E8E2DF'}
          color={'#103D3F'}>
            <ModalHeader>إنشاء جلسة</ModalHeader>
            <ModalBody pb={6}>
              <Image src='https://heypeers.com/assets/become-supporter-banner-a675576855998cd32b135684c5d9f3c47b2ca0e891e8f75b769951b1a7244836.png'/>
              <FormControl>

                <Input ref={initialRef} 
                textAlign={'right'}
                placeholder='موضوع الجلسة'
                variant='flushed'  
                focusBorderColor='#103D3F' 
                onChange={(e)=> setTopic(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Textarea placeholder='وصف الجلسة' 
                textAlign={'right'}
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setDescription(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color='gray.500'>موعد الجلسة</FormLabel>
                <Box style={{direction:"ltr"}}>
                <DateTimePicker onChange={setDate} value={date}/>
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button 
              bg={'#103D3F'}
              color={'white'}
              _hover={{
                bg: '#ABBEA9',
              }}
              onClick={handleCreateSession}
              >
                إنشاء
              </Button>
              <Button mr={3} onClick={onClose}>إلغاء</Button>

            </ModalFooter>
          </ModalContent>
        </Modal></ChakraProvider>
      </>
    )
  }