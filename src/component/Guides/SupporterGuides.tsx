import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Link,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from 'react-icons/md'

function SupporterGuides() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Link onClick={onOpen}>
           يجب الاطلاع والموافقة على الشروط والضوابط لدي الداعمين
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} 
      style={{direction: 'rtl'}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>الشروط والضوابط</ModalHeader>
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                كن صادقا
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                استمع لآراء الآخرين
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                كن صبوراً
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                الاستجابة بهدوء ، حتى في الأزمات
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                اسال اسئلة. افتح عقولهم لوجهات نظر مختلفة
              </ListItem>  <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                لا تتحدث عما "كان يجب عليهم فعله"              </ListItem>  
                <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                الصمت لا بأس به .... امنحهم الوقت للتفكير
                </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                أبلغ فريق خدمة العملاء لدينا عن اي سلوك مستخدم غير لائق
                </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Button 
             bg={'#103D3F'}
             color={'white'}
             _hover={{
               bg: '#103D3F',
             }}
            mr={3} onClick={onClose}>
            تم
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SupporterGuides