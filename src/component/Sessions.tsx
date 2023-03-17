import React from 'react'

import { ChakraProvider, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon} from '@chakra-ui/react'

import SessionCardAcademic from './sessionCard/SessionCardAcademic'
import SessionCardOccupational from './sessionCard/SessionCardOccupational'
import SessionCardSocial from './sessionCard/SessionCardSocial'
import SessionCardHealthy from './sessionCard/SessionCardHealthy'

const Sessions = () => {
  return (
    <ChakraProvider>
      <Box className='sessionsContainer'>
          <div className="headerSessions">
              <h1>ابحث عن التحدي</h1>
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