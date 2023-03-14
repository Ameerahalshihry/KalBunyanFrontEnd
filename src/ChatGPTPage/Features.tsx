import { ReactElement } from 'react';
import { ChakraProvider, Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcVoicePresentation, FcMindMap, FcLock } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <ChakraProvider>
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    </ChakraProvider>
    
  );
};

export default function SimpleThreeColumns() {
    return (
        <Box p={4}>
          
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcMindMap} w={10} h={10} />}
                title={'Support'}
                text={
                  "You can ask it a wide variety of questions, as long as they're relevant to the bot's job"
                }
              />
              <Feature
                icon={<Icon as={FcLock} w={10} h={10} />}
                title={'Confidentiality'}
                text={
                  'We take your privacy seriously and ensure that all conversations and personal information are kept confidential.'
                }
              />
              <Feature
                icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
                title={'Example'}
                text={
                  "'I'm struggling to balance my work and personal life. How can I create a better balance?'" 
                               }
              />
            </SimpleGrid>
         
    
        </Box>
      );
}