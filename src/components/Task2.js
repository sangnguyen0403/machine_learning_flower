import '../App.css';
import { Link } from 'react-router-dom';
import {
    Spinner, Box, Button, Center, Flex, Grid, GridItem, HStack, Heading, Image, Input, Select, Stack, VStack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import image from "../images/background.svg"
import image2 from "../images/test.png"
import SliderBar from './SliderBar';
import { useState, useEffect } from 'react';
import FullImageDisplay from './FullImage';
import { API_ENDPOINT } from "../App"

const Task2 = () => {
	const toast = useToast()
    const [sliderValue, setSliderValue] = useState(1)
    const [showTooltip, setShowTooltip] = useState(false)
    const [displayImage, setDisplayImage] = useState([])
	const [originalImage, setOriginalImage] = useState(null)
	const [originalImageFile, setOriginalImageFile] = useState(null)
	const [loading, setLoading] = useState(false)

    // const images = [image, image, image, image]
    useEffect(() => {
        const result = []
        for(let i = 0 ; i < 4; i++){
            result.push(image)
        }
        setDisplayImage(result)
    },[sliderValue])


	const handleOriginalImage = (file) =>{
		if (file) {
			let reader = new FileReader();

			reader.onload = (e) => {
				setOriginalImage(e.target.result)
			};

			reader.readAsDataURL(file);
			setOriginalImageFile(file)
		}
	}

	const generateImage = async () => {
		if (originalImage == null) {
			toast({
				title: 'Error',
				description: "Please choose an original image and a reference image.",
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
			return
		}

		setLoading(true)
		try {
			const formData = new FormData();
			formData.append("file", originalImageFile)
			const res = await axios.post(API_ENDPOINT + "/generate_image", formData)
			if (res.data.success) {
				const images = []
				for (let i = 0; i < 4; i++) {
					images.push(API_ENDPOINT + `/get_image?task_id=2&image_id=${i}&time=` + (new Date()).getTime())
				}
				setDisplayImage(images)
			}
			setLoading(false)
		} catch (e) {
			setLoading(false)
			toast({
				title: 'Error',
				description: e.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		}
	}

    return (
        <Center
            bgImage={image}
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100vw"
            height="100vh"
        >
			<Link to="/"><Button position="absolute" top="10px" left="10px">Back</Button></Link>
            <VStack w='60%' h='100%' pt='10' spacing={7}>

                <VStack w='100%' justifyContent='center' alignItems='end'>
                    <VStack w='55%' p='3' justifyContent='center'>
                        {/* <Slider */}
                        {/*     id='slider' */}
                        {/*     defaultValue={1} */}
                        {/*     min={0} */}
                        {/*     max={4} */}
                        {/*     colorScheme='teal' */}
                        {/*     onChange={(v) => setSliderValue(v)} */}
                        {/*     onMouseEnter={() => setShowTooltip(true)} */}
                        {/*     onMouseLeave={() => setShowTooltip(false)} */}
                        {/*     w='35%' */}
                        {/* > */}
                        {/*     <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm' color='#060825'> */}
                        {/*         2 */}
                        {/*     </SliderMark> */}
                        {/*     <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm' color='#060825'> */}
                        {/*         4 */}
                        {/*     </SliderMark> */}
                        {/*     <SliderTrack bg='#060825'> */}
                        {/*         <SliderFilledTrack bg='#060825' /> */}
                        {/*     </SliderTrack> */}
                        {/*     <Tooltip */}
                        {/*         hasArrow */}
                        {/*         bg='#060825' */}
                        {/*         color='white' */}
                        {/*         placement='top' */}
                        {/*         isOpen={showTooltip} */}
                        {/*         label={`${sliderValue}`} */}
                        {/*     > */}
                        {/*         <SliderThumb border='1px' borderColor='#060825' /> */}
                        {/*     </Tooltip> */}
                        {/* </Slider> */}
						<div></div>
                        <Button bg='#060825' color='#FAFAFA' m='4rem' px='30px' py='12px' ml='4rem' borderRadius='10px' boxShadow='lg' rounded='md' _hover={{ bg: '#FFFFFF', border: '1px solid #060825', color: '#060825' }} onClick={generateImage}>Generate</Button>
                    </VStack>
                </VStack>

                <HStack w='100%' justifyContent='flex-start' alignItems='center'>
                    <Center w='45%'>
                        <VStack w='100%'>
                            <VStack w='100%'>
                                <input
                                    type="file"
                                    id="files"
                                    className="upload_btn"
                                    onChange={event => {
                                        handleOriginalImage(
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
								src={originalImage ? originalImage : image}
                                alt="Dan Abramov"
                                borderRadius='20px'
                            // mt='2'
                            />
                        </VStack>
                    </Center>
                    <HStack w='55%' px='6'>
						{loading ? <Spinner
						  thickness='4px'
						  speed='0.65s'
						  emptyColor='gray.200'
						  color='blue.500'
						  size='xl'
						/> :
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} w='100%'>
                            {displayImage.map((item, index) => (

                                <GridItem w='100%' key='index' cursor="pointer">
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
                        </Grid>}
                    </HStack>
                </HStack>
            </VStack>
        </Center>
    );
}

export default Task2;
