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
    Image,
    Box,
    Center
} from '@chakra-ui/react'


const FullImageDisplay = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Image
                boxSize="100%"
                // objectFit="cover"
                src={props.image}
                alt="Dan Abramov"
                borderRadius='20px'
                onClick={onOpen}
            // mt='2'
            />

            <Modal isOpen={isOpen} onClose={onClose} size='full'>
                <ModalOverlay />
                <ModalContent bg='blackAlpha.450' opacity={.1}> 
                    <ModalCloseButton color='white' />
                    <ModalBody>
                        <Center w='100%'>
                            <Image
                                boxSize='45%'
                                objectFit="cover"
                                src={props.image}
                                alt="Dan Abramov"
                                borderRadius='20px'
                            // mt='2'
                            />
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FullImageDisplay;