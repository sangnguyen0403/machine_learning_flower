import { Button, Center, Flex, HStack, Heading, Image, Select, Tag, VStack } from "@chakra-ui/react";
import '../App.css';
import image from "../images/background.svg"
import test from "../images/test.png"
const Task1 = () => {
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
            <VStack w='59%' h='100%' pt='10' spacing={4}>
                <Center w='100%'>
                    <HStack w='100%' justifyContent='space-between' alignItems='center'>
                        <VStack w='50%'>
                            <input
                                type="file"
                                id="files"
                                className="upload_btn"
                                onChange={event => {
                                    handleUploadImage(
                                        event.target.files[0]
                                    );
                                }}
                            />
                            <label
                                htmlFor="files"
                                className="upload_label"
                            >
                                Select Image
                            </label>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
                                Flower Image Initial
                            </Tag>
                        </VStack>
                        <VStack>

                        </VStack>
                        <VStack w='50%'>
                            <input
                                type="file"
                                id="files"
                                className="upload_btn"
                                onChange={event => {
                                    handleUploadImage(
                                        event.target.files[0]
                                    );
                                }}
                            />
                            <label
                                htmlFor="files"
                                className="upload_label"
                            >
                                Select Image
                            </label>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
                                Flower Image To Change
                            </Tag>
                        </VStack>
                    </HStack>
                </Center>
                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <Center w='45%'>
                        <Image
                            boxSize="50%"
                            // objectFit="cover"
                            src={test}
                            alt="Dan Abramov"
                            borderRadius='20px'
                        // mt='2'
                        />
                    </Center>
                    <Center w='45%'>
                        <Image
                            boxSize="50%"
                            // objectFit="cover"
                            src={image}
                            alt="Dan Abramov"
                            borderRadius='20px'
                        // mt='2'
                        />
                    </Center>
                </HStack>
                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <Center w='100%'>
                        <VStack w='100%' justify='center' alignItems='center'>
                            <Button px='36px' py='12px' borderRadius='10px' bg='#060825' color='#FAFAFA' fontWeight='500' fontSize='16px' boxShadow='lg' rounded='md' _hover={{ bg: '#FFFFFF', border: '1px solid #060825', color: '#060825' }}>Generate</Button>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
                                Output Image
                            </Tag>
                            <Image
                                boxSize="30%"
                                // objectFit="cover"
                                src={image}
                                alt="Dan Abramov"
                                borderRadius='20px'
                            // mt='2'
                            />
                        </VStack>
                    </Center>
                </HStack>

            </VStack>
        </Center >
    );
}

export default Task1;