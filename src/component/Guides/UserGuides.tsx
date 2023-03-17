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

function UserGuides() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Link onClick={onOpen}>
        يجب الاطلاع والموافقة على الشروط والضوابط لدى المستخدمين
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
                يجب أن تظل المناقشات داخل غرفة الجلسة سرية ، خاصة وأن الأشخاص يفتحون أحيانًا على تفاصيل (شخصية جدًا).
                </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                يجب أن يحترم المستخدمون آراء 
                الآخرين
                  </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                يجب على المستخدمين عدم الإدلاء بأية بيانات كاذبة
                 </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                يجب على المستخدمين عدم مشاركة المعلومات الشخصية مثل رسائل البريد الإلكتروني أو أرقام الهواتف.
                  </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                يجب على المستخدمين عدم طلب الأموال من أي شخص في الجلسة.
                    </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                يجب على المستخدمين المشاركة في محادثة مشجعة  خالية من المضايقات والعنصرية  .
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
تم            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserGuides