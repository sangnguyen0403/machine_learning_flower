import { Center, HStack, Heading, VStack, Image, Select, Button, Flex, Divider } from '@chakra-ui/react';
import '../App.css';
import image from "../images/background.svg"
import { Link } from 'react-router-dom';
const Home = () => {
    const handleUploadImage = (file) => {
        console.log(file)
    }
    return (
        <Center
            bgImage={image}
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100vw"
            height="100vh"
        >
            <VStack w='59%' h='100%' pt='10' spacing={10}>
                <VStack w='100%' gap={6}>
                    <Heading as='h1' size='3xl' letterSpacing='wider' noOfLines={1}>FLOWERS</Heading>
                    <Heading as='h4' size='md' color='#777777'>Find the bouquet you want!</Heading>
                </VStack>
                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <Link to='/task1'><Button px='50px' py='36px' borderRadius='10px' bg='#060825' color='#FAFAFA' fontWeight='500' fontSize='30px' boxShadow='lg' rounded='md' _hover={{bg: '#FFFFFF', border: '1px solid #060825', color: '#060825'}}>Task 1</Button></Link>
                    <Link to='/task2'><Button px='50px' py='36px' borderRadius='10px' bg='#060825' color='#FAFAFA' fontWeight='500' fontSize='30px' boxShadow='lg' rounded='md' _hover={{bg: '#FFFFFF', border: '1px solid #060825', color: '#060825'}}>Task 2</Button></Link>
                </HStack>

            </VStack>
        </Center>
    )
}


export default Home;