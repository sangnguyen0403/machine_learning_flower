import './App.css';
import { Box, Button, Center, Flex, HStack, Heading, Image, Input, Select, VStack, useMultiStyleConfig } from '@chakra-ui/react';
import image from "./images/background.svg"



function App() {
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
      <VStack w='59%' h='100%' pt='10' spacing={7}>
        <VStack w='100%' >
          <Heading as='h1' size='2xl' letterSpacing='wider' noOfLines={1}>Flowers</Heading>
          <Heading as='h4' size='md' color='#777777'>Find the bouquet you want!</Heading>
        </VStack>
        <Center w='100%'>
          <HStack w='100%' justifyContent='space-around' alignItems='center'>
            <VStack>
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
            </VStack>
            <HStack w='50%'>
              <Select bg='#FFFFFF' color='#060825' boxShadow='lg' py='6' rounded='md' placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Button bg='#060825' color='#FAFAFA' px='36px' py='12px' borderRadius='10px' boxShadow='lg' rounded='md'>Select</Button>
            </HStack>
          </HStack>
        </Center>
        <HStack w='100%' justifyContent='space-around' alignItems='center'>
          
          <Center w='45%'>
            <Image
              // boxSize="50%"
              // objectFit="cover"
              src={image}
              alt="Dan Abramov"
              borderRadius='20px'
            // mt='2'
            />
          </Center>
          <Center w='45%'>
            <Image
              // boxSize="50%
              // objectFit="cover"
              src={image}
              alt="Dan Abramov"
              borderRadius='20px'
            // mt='2'
            />
          </Center>
        </HStack>
      </VStack>
    </Center>
  );
}

export default App;
