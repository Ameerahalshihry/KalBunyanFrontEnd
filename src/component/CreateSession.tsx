import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Text , Image} from "@chakra-ui/react"
import React, { useState } from "react"

export function CreateSession() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateSession = async()=>{
        await fetch('http://localhost:3003/sessions/',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                topic: topic,
                date:date,
                description:description,
                time:time,
                token:localStorage.getItem("token")

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        });
        }
    return (
      <>
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
                <Input placeholder='وصف الجلسة' 
                textAlign={'right'}
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setDescription(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <Input placeholder='تاريخ الجلسه'
                textAlign={'right'} 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setDate(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <Input placeholder='وقت الجلسة'
                textAlign={'right'} 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setTime(e.target.value)}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={onClose}>إلغاء</Button>
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
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }