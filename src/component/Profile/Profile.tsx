import React, { useState } from "react";
import { Box, Divider, Flex, HStack, Image, StackDivider, Text, Container, ChakraProvider, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaEnvelope, FaMapPin, FaSuitcase } from "react-icons/fa";
import PastSessions from "./PastSessions";
import UpComingSessions from "./UpComingSessions";
import PersonalInfo from "./PersonalInfo";
import Suggestions from "./Suggestions";
import SessionRequest from "./SessionRequest";

const Profile = () => {
  const [role, setRole]= useState<any>(localStorage.getItem("role"));
  
  return (
    <ChakraProvider>
    <Flex
      bg="#E8E2DF"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex        
        shadow="xl"
        rounded="lg"
        bg="#f1edeb"
        _dark={{ bg: "gray.800" }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
        pb='5'
      >
        <Box
          bg="#f1edeb"
          _dark={{ bg: "#3e3e3e" }}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width={{sm:"100%", md:"100%", lg:"700px"}}
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="#E6AE97"
            _dark={{ borderColor: "gray.200" }}
          />
        </Box>
      {/* ----------------section1------------------------ */}
      <PersonalInfo />
        {/* try change condition to 'Admin' */}
        {role == 'ADMIN' ? (
          <SessionRequest />
        ):

        <Container>
          <Tabs size='md' isFitted variant='enclosed' color='#103D3F' >
            <TabList mb='30px' >
              {/* <Tab _selected={{ bg:'#E6AE97', color:'#103D3F' }}>الجلسات السابقة</Tab> */}
              <Tab _selected={{ bg:'#E6AE97', color:'#103D3F' }}>الجلسات الملتحق بها </Tab>
              {
                role == 'SUPPORTER' 
                ?
                <Tab _selected={{ bg:'#E6AE97', color:'#103D3F' }}> إضافة جلسات </Tab>
                : null
              }  
            </TabList>
            <TabPanels>
              {/* <TabPanel>
                <PastSessions />
              </TabPanel> */}
              <TabPanel>
                <UpComingSessions />
              </TabPanel>
              {
                role == 'SUPPORTER' 
                ?
                <TabPanel>
                  <Suggestions />
                </TabPanel>
                : null
              }  
            </TabPanels>
          </Tabs>
        </Container>
        }
      </Flex>
    </Flex>
    </ChakraProvider> 
  );
};

export default Profile;