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
} from "@chakra-ui/react";

type Message = {
  user: string;
  text: string;
  isSent: boolean;
};
type ChatRoomProps = {
    sessionId: string;
  }

const ChatMessage = ({ user, text, isSent, ...rest }: Message & ListItemProps) => (
    <ListItem
      display="flex"
      justifyContent={isSent ? 'flex-start' : 'flex-end'}
      mb={4}
      {...rest}
    >
    <Text fontWeight="bold">{user}</Text>

      <Box
        bg={isSent ? 'gray.100' : 'blue.200'}
        color={isSent ? 'black' : 'white'}
        maxWidth="80%"
        p={2}
        borderRadius="md"
      >
        {text}
      </Box>
    </ListItem>
  );



  const ChatRoom = ({sessionId}:ChatRoomProps) => {
  const [username, setUsername] = useState("Riyan");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<any>();
  const [leader, setLeader] = useState<string>();
  const [users, setUsers] = useState<string[]>([]);




  const chatBoxRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const storedUsername = localStorage.getItem('username');
    if (storedUsername !== null && storedUsername !== undefined) {
      setUsername(storedUsername);
    }

    async function getSession(){
        const session = await fetch(`http://localhost:3000/session/${sessionId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        let res = await session.json();
        setLeader(res.Leader)

        localStorage.setItem('session', JSON.stringify(res))
        
    } 

    getSession()
    
    
    const socket = io('http://localhost:3000')
   
    setSocket(socket);
    socket.on('userJoined', (data:any) => {
        
        const newUser = data.username;
        setUsers(prevUsers => [...prevUsers, newUser]);
        console.log(users)

    })
    socket.on('userLeft', (data:any) => {
        console.log(data.user)
        const leftUser = data.username;
        setUsers(prevUsers => prevUsers.filter(user => user !== leftUser));

    })
    
    socket.on('connect', () => {
        console.log(socket.id);
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
  }, []);



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
    <Flex height="100vh">
      <Box w="25%" bg="gray.100" p={4}>
      <Heading mb={4}>Leader</Heading>
        {leader}

        <Heading mb={4}>Users</Heading>
        <Divider />
        <VStack mt={4} align="stretch" spacing={2}>
                     {users.map((element, index) => (
             <Text key={index}>{element}</Text> 
                    ))}     
        </VStack>
      </Box>

      <Box  flex="1" overflow="auto" p={4} ref={chatBoxRef}>
        <Box height={"70vh"} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <List>

        {messages.map((message, index) => (
            
  <ChatMessage
    key={index}
    user= {message.user}
    text={message.text}
    isSent={message.isSent}
  >
    <Text fontWeight="bold">{message.user}: </Text>
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
              
              <Button onClick={handleMessageSubmit} mt={2}>
                Send
              </Button>
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default ChatRoom;
  