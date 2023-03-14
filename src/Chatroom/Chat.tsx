import React, { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  Flex,
  Divider,
  VStack,
  ListItem,
  ListItemProps,
  List,
  useFocusEffect,
  Badge,
  Kbd,
  Center,
  AbsoluteCenter,
  Container,
  Avatar,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { element } from "prop-types";

type Message = {
  user: string;
  text: string;
  isSent: boolean;
};
type ChatRoomProps = {
    sessionId: string;
  }

const ChatMessage = ({ user, text, isSent, ...rest }: Message & ListItemProps) => (
  <ChakraProvider>

    <ListItem

      display="flex"
      justifyContent={isSent ? 'flex-start' : 'flex-end'}
      marginLeft={isSent ? '80%' : '5%'}
      marginRight={isSent ? '5%' : '80%'}

      mt="5%"
      mb={4}
      {...rest}
    >

      <Box
        bg={isSent ? 'gray.100' : 'blue.200'}
        color={isSent ? 'black' : 'white'}
        width="20vw"
        p={2}
        borderRadius="md"
      >
        {text}        <Text  fontWeight="bold"><Tag size='lg' colorScheme='green' borderRadius='full'>
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmatBzkPfadV3gbygHddFgNYbNzBbINaWqFamNP3zOCJyY-EZzJJZW3SjSpeYSGfSlsgI&usqp=CAU'
    size='xs'
    name=''
    ml={2}
    mr={-1}
  />
  <TagLabel>{user}</TagLabel>
</Tag></Text>

      </Box>
    </ListItem></ChakraProvider>
  );



  const ChatRoom = ({sessionId}:ChatRoomProps) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<any>();
  const [leader, setLeader] = useState<string>();
  const [users, setUsers] = useState<string[]>([]);
  const [allusers, setallusers] = useState<string[]>([]);

  const [topic, setTopic] = useState<string[]>([]);

  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

  if( chatBoxRef.current)   chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
  },[messages])

  useEffect(() => {

    let name = localStorage.getItem('username')
    name && setUsername(name)
    async function getSession(){
        const session = await fetch(`http://localhost:3000/session/${sessionId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        let res = await session.json();
        setLeader(res.Leader)
         let usr:any[] = []
         res.users.forEach((user:any)=>{
              usr.push(user.username)
         })
         setallusers(usr)
         setTopic(res.topic);
        localStorage.setItem('session', JSON.stringify(res))
        
    } 

    getSession()
    
    
    const socket = io('http://localhost:3000')
   
    setSocket(socket);
    socket.on('userJoined', (data:any) => {
        
        const newUser = data.username;  
        setUsers([
          ...users,
          newUser
        ]);
        console.log(users)

    })
    socket.on('userLeft', (data:any) => {
      console.log(users)
        console.log(data.username)
        const leftUser = data.username;
        setUsers(prevUsers => prevUsers.filter(user => user !== leftUser));

    })
    socket.on('users', (data)=>{
          
          let values = [];
          for(let k in data.users) {values.push(data.users[k])}
          console.log(data.users)
        setUsers(values);
        console.log(users)

    })
    
    socket.on('connect', () => {
        console.log(users);
        username && users.push(username)
        setUsername(username)
        socket.emit('join', {username: username, sessionId: sessionId})

      });
    socket.on('receiveMessage', (data:any) => {
      if (data.from != socket.id) {
        setMessages((messages) => [
          ...messages,
          { user: data.user, isSent: data.isSent, text: data.text },
        ]);
      }


      
      
    });

    return () => {
      socket.disconnect();
      localStorage.removeItem('session')
    };
  }, [username]);


  const handleMessageSubmit = () => {
    socket.emit('sendMessage', { user: username, isSent: true, text: message });

    if (username && message) {
      const newMessage: Message = {
        user: username,
        text: message,
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <ChakraProvider>  
    <Flex  height="100vh">
    
    <Container   w="25%" bg="#E8E2DF" p={4}  display={"flex"} alignItems="flex-start" justifyContent={"center"}>
      <Box >
      

      <Heading  mb={4}>Topic</Heading>
      {topic}
      <Heading mb={4}>Leader</Heading>
        {leader}

        <Heading mb={4}>Users</Heading>
        <Divider />
        <VStack mt={4} align="stretch" spacing={2}>
                     {allusers.map((element, index) => (

                      
             <Text key = {index} fontSize='xl' fontWeight='bold'>
              {users.includes(element)? <Tag size='lg' colorScheme='green' borderRadius='full'>
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmatBzkPfadV3gbygHddFgNYbNzBbINaWqFamNP3zOCJyY-EZzJJZW3SjSpeYSGfSlsgI&usqp=CAU'
    size='xs'
    name=''
    ml={2}
    mr={-1}
  />
  <TagLabel>{element}</TagLabel>
</Tag> : 
             
             <Tag size='lg' colorScheme='red' borderRadius='full'>
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmatBzkPfadV3gbygHddFgNYbNzBbINaWqFamNP3zOCJyY-EZzJJZW3SjSpeYSGfSlsgI&usqp=CAU'
    size='xs'
    name=''
    ml={2}
    mr={-1}
  />
  <TagLabel>{element}</TagLabel>
</Tag>}
             
            
             
           </Text> 
             ))}     
        </VStack>
      </Box></Container>

      <Box  flex="1"   p={4} >
        <Box ref= {chatBoxRef} overflowY={"scroll"}  height={"75vh"} borderWidth="1px" borderRadius="lg" >
        <List>

        {messages.map((message, index) => (
            
  <ChatMessage
    key={index}
    user= {message.user}
    text={message.text}
    isSent={message.isSent}
  >
    <Text fontWeight="bold">{message.user} </Text>
  </ChatMessage>
))}         </List>
 
             <Box ref={chatBoxRef}></Box>
          </Box>
          <Box mt={4}>
              
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              
              <Button fontSize={"3xl"} color="whiteAlpha.800" colorScheme={"orange"} bgColor={"#103D3F"} onClick={handleMessageSubmit} mt={2}>
                Send
              </Button>
          </Box>
        </Box>
      </Flex></ChakraProvider>
    );
  };
  
  export default ChatRoom;
  