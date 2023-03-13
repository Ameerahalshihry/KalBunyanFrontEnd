import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

type Message = {
  user: string;
  text: string;
  isSent: boolean;
};

const ChatRoom: React.FC = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        flex="1"
        overflow="auto"
        p={4}
        ref={chatBoxRef}
        style={{ scrollbarWidth: "none" }}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {
            bg: "gray.100",
            borderRadius: "0.25rem",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: "gray.500",
            borderRadius: "0.25rem",
          },
        }}
      >
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          {messages.map((message, index) => (
            <Box
              key={index}
              p={2}
              textAlign={message.isSent ? "right" : "left"}
              mb={2}
            >
              <Text fontWeight="bold">{message.user}: </Text>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
      </Box>

      <form onSubmit={handleMessageSubmit}>
        <FormControl id="username" isRequired mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>

        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Enter your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ChatRoom;
