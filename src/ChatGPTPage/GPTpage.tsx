import { FormControl, Image, FormLabel, Input, Button, Box, Heading, Container, Stack } from '@chakra-ui/react'
import Typewriter, { TypewriterClass } from 'typewriter-effect';


import React, { useState } from 'react'
import ChatGPTHeader from './Title'
import { wrap } from 'framer-motion';
function ChatGPT() {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [isTyping, setisTyping] = useState(false)



    const handleSubmit = async () => {
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


    return (
        <div>
            <ChatGPTHeader />

            <Container maxW="md" mx="auto" mt={10}><Stack>
                <Heading>Life Coach Bot</Heading>

                <Input type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />

                <Button bg="#a6ae97" onClick={handleSubmit} mt={4} colorScheme="orange">
                    Send
                </Button>

                <Box maxWidth={"40vw"} pb={"260px"} display={"flex"} >
                    <code style={{ whiteSpace: "pre-line", wordWrap: "break-word" }}>
                        {response && <Typewriter options={{ delay: 25 }} onInit={(typewriter) => {  //if response isnt empty start typing animation
                            typewriter.typeString(response)
                                .start();
                        }} />}
                    </code>
                </Box>
            </Stack></Container>



        </div>
    )
}

export default ChatGPT
