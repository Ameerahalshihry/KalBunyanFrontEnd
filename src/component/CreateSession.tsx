import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
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
        <Button onClick={onOpen}
        bg={'#103D3F'}
        color={'white'}
        _hover={{
          bg: '#ABBEA9',
        }}>Create Session</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent 
          bg={'#E8E2DF'}
          color={'#103D3F'}>
            <ModalHeader>Create Session</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input ref={initialRef} 
                placeholder='Session Topic'
                variant='flushed'  
                focusBorderColor='#103D3F' 
                onChange={(e)=> setTopic(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input placeholder='Session Description' 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setDescription(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <Input placeholder='Date' 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setDate(e.target.value)}/>
              </FormControl>
              <FormControl mt={4}>
                <Input placeholder='Time' 
                variant='flushed'  
                focusBorderColor='#103D3F'
                onChange={(e)=> setTime(e.target.value)}/>
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
              mr={3}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }