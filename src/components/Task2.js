import '../App.css';
import {
    Box, Button, Center, Flex, Grid, GridItem, HStack, Heading, Image, Input, Select, Stack, VStack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip
} from '@chakra-ui/react';
import image from "../images/background.svg"
import image2 from "../images/test.png"
import SliderBar from './SliderBar';
import { useState, useEffect } from 'react';
import FullImageDisplay from './FullImage';

const Task2 = () => {
    const handleUploadImage = (file) => {
        console.log(file)
    }
    const [sliderValue, setSliderValue] = useState(1)
    const [showTooltip, setShowTooltip] = useState(false)
    const [displayImage, setDisplayImage] = useState([])

    useEffect(() => {
        const result = []
        for(let i = 0 ; i < sliderValue; i++){
            result.push(images[i])
        }
        setDisplayImage(result)
    },[sliderValue])


    const images = [image, image2, image, image2]
    return (
        <Center
            bgImage={image}
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100vw"
            height="100vh"
        >
            <VStack w='59%' h='100%' pt='10' spacing={7}>

                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <HStack w='95%' p='3' justifyContent='flex-end'>
                        <Slider
                            id='slider'
                            defaultValue={1}
                            min={0}
                            max={4}
                            colorScheme='teal'
                            onChange={(v) => setSliderValue(v)}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            w='35%'
                        >
                            <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm' color='#060825'>
                                2
                            </SliderMark>
                            <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm' color='#060825'>
                                4
                            </SliderMark>
                            <SliderTrack bg='#060825'>
                                <SliderFilledTrack bg='#060825' />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg='#060825'
                                color='white'
                                placement='top'
                                isOpen={showTooltip}
                                label={`${sliderValue}`}
                            >
                                <SliderThumb border='1px' borderColor='#060825' />
                            </Tooltip>
                        </Slider>
                        <Button bg='#060825' color='#FAFAFA' m='4rem' px='30px' py='12px' borderRadius='10px' boxShadow='lg' rounded='md' _hover={{ bg: '#FFFFFF', border: '1px solid #060825', color: '#060825' }}>Generate</Button>
                    </HStack>
                </HStack>

                <HStack w='100%' justifyContent='flex-start' alignItems='center'>
                    <Center w='45%'>
                        <VStack w='100%'>
                            <VStack w='100%'>
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
                            <Image
                                boxSize="55%"
                                // objectFit="cover"
                                src={image}
                                alt="Dan Abramov"
                                borderRadius='20px'
                            // mt='2'
                            />
                        </VStack>
                    </Center>
                    <HStack w='55%' px='6'>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} w='100%'>
                            {displayImage.map((item, index) => (

                                <GridItem w='100%' key='index'>
                                    {/* <Image
                                        boxSize="100%"
                                        // objectFit="cover"
                                        src={item}
                                        alt="Dan Abramov"
                                        borderRadius='20px'
                                    // mt='2'
                                    /> */}
                                    <FullImageDisplay image={item}/>
                                </GridItem>
                            
                            ))}
                        </Grid>
                    </HStack>
                </HStack>
            </VStack>
        </Center>
    );
}

export default Task2;