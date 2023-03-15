import React from 'react'

import { useNavigate } from 'react-router-dom';

import { ChakraProvider, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon} from '@chakra-ui/react'
import { BsArrow90DegDown, BsArrow90DegRight} from 'react-icons/all'

import SessionCardAcademic from './sessionCard/SessionCardAcademic'
import SessionCardOccupational from './sessionCard/SessionCardOccupational'
import SessionCardSocial from './sessionCard/SessionCardSocial'
import SessionCardHealthy from './sessionCard/SessionCardHealthy'

const Sessions = () => {

  const navigate = useNavigate()
  const ChatGPT =()=>{
    navigate("/bot");   
  }
  const scrollFun =()=>{
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    }); 
  }
  return (
    <ChakraProvider>
      <Box className='sessionsContainer'>
          <div className="headerSessions">
            <div className='headerSessionsTitles'>
              <h1><a onClick={ChatGPT} style={{cursor:'pointer'}}><Icon as={BsArrow90DegRight} w={7} h={7}/>تحدث مع ChatGPT</a></h1>
              <h1>|</h1>
              <h1><a onClick={scrollFun} style={{cursor:'pointer'}}>ابحث عن التحدي<Icon as={BsArrow90DegDown} w={7} h={7}/></a></h1>
            </div>
            <div className='lineSessions'></div>
          </div>

      <SimpleGrid  >
          <Tabs variant='enclosed' color='#103D3F' align='center' borderBottom="1px solid #E6AE9788">
            <TabList mb='30px' >
              <Tab px='5%'  _selected={{ bg:'#E6AE9788', color:'#103D3F' }}>دراسي</Tab>
              <Tab px='5%' _selected={{ bg:'#E6AE9788', color:'#103D3F' }}>مهني</Tab>
              <Tab px='5%' _selected={{ bg:'#E6AE9788', color:'#103D3F' }}>إجتماعي</Tab>
              <Tab px='5%' _selected={{ bg:'#E6AE9788', color:'#103D3F' }}>صحي</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SessionCardAcademic />
              </TabPanel>
              <TabPanel>
                <SessionCardOccupational />
              </TabPanel>
              <TabPanel>
                <SessionCardSocial />
              </TabPanel>
              <TabPanel>
                <SessionCardHealthy />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SimpleGrid>

      </Box>
    </ChakraProvider>
  )
}

export default Sessions