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
      <Stack 
      align={'center'}
      mb='16'>
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
        <Text fontWeight={600} style={{fontSize:"25px", fontFamily:"Tajawal"}} align={'center'}>{title}</Text>
        <Text color={'gray.600'} style={{fontSize:"20px", fontFamily:"Tajawal"}} align={'center'}>{text}</Text>
      </Stack>
    </ChakraProvider>
    
  );
};

export default function SimpleThreeColumns() {
    return (
        <Box p={4}>
          
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
              <Feature
                icon={<Icon as={FcMindMap} w={10} h={10} />}
                title={'الدعم'}
                text={
                  "يمكنك طرح مجموعة متنوعة من الأسئلة عليه ، طالما أنها ذات صلة بوظيفة الروبوت"
                }
              />
              <Feature

                icon={<Icon as={FcLock} w={10} h={10} />}
                title={'الخصوصية والسرية'}
                text={
                  "نحن نأخذ خصوصيتك على محمل الجد ونضمن الحفاظ على سرية جميع المحادثات والمعلومات الشخصية."
                }
              />
              <Feature
                icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
                title={'مثال'}
                text={
                  'أنا أعاني من عدم تحقيق التوازن بين عملي وحياتي الشخصية. كيف يمكنني خلق توازن أفضل؟'
                               }
              />
            </SimpleGrid>
         
    
        </Box>
      );
}