import React, { useState } from 'react'
import {
    ChakraProvider,
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './Navitem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <ChakraProvider>

        <Flex
        bgColor={"gray.200"}
            pos="fixed"
            top="50%"
            left="5"
            transform="translateY(-50%)"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "70px" : "200px"}
            flexDir="column"
            justifyContent="center"
            >
                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"
                >
                    <IconButton
                        background="none"
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")

                        else
                            changeNavSize("small")
                    } } aria-label={''}                />
                <NavItem navSize={navSize} icon={FiHome} title="Profile" description="Your profile" />
                <NavItem navSize={navSize} icon={FiCalendar} title="Sessions"  />
                <NavItem navSize={navSize} icon={FiUser} title="Chat" />
                
            </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center">
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                            <Heading as="h3" size="sm">Sylwia Weller</Heading>
                            <Text color="gray">Admin</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
        
    )
}
