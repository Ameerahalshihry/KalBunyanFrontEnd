import { FormControl, Image, FormLabel, Input, Button, Box, Heading, Container, Stack, Spinner, ChakraProvider } from '@chakra-ui/react'
import Typewriter, { TypewriterClass } from 'typewriter-effect';

import React, { useState } from 'react'
import { wrap } from 'framer-motion';
import Features from './Features';

function BottomPage() {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [isTyping, setisTyping] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async ()=>{
    setIsLoading(true);
        setResponse('');
        console.log(prompt)
        const chatResponse = await fetch("http://localhost:3000/chat/prompt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt: prompt })
        });
        let res = await chatResponse.json();
        setResponse(res.response);
        console.log(response)
    } 
    
    const arabic = /[\u0600-\u06FF]/;
    if(response && arabic.test(response)){
    document.documentElement.dir = "rtl"}
    else{
      document.documentElement.dir = "ltr"
    }
    return (
      <ChakraProvider>

      <Box width="100% "   minHeight="100vh" display="flex" flexDirection="column"  alignItems="center">
        <Box textAlign="center" py={4}>
          <Heading>Life Coach Bot</Heading>
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Container maxW="80vw">
            <Box mb={20}>
              <Box maxWidth={"100%"} >
                <code style={{ whiteSpace: "pre-line", fontSize:"1.5em", wordWrap: "break-word" }}>
                  {response ? (
                    <Typewriter
                      options={{ delay: 25 }}
                      onInit={(typewriter) => {
                        typewriter.typeString(response).start();
                      }}
                    />
                  ): isLoading ?     <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='#103D3F'
                  height={"100px"}
                  width="100px"
                />:<Features/>}
                </code>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box minWidth={"100%"} pb={4}>
          <Container   >
            <Stack  direction="row" align="center">
              <Input  size = "lg"
               width="100%" 
                bgColor={"white"}
                placeholder="Type your message here"
                flex="1"
                type="text"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                />
                <Button
                  bg="#103D3F"
                  onClick={handleSubmit}
                  ml={4}
                  colorScheme="orange"
                >
                  Send
                </Button>
              </Stack>
            </Container>
          </Box>
        </Box>
      </ChakraProvider>
      
    );
    
}

export default BottomPage
