import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Spinner, Button, Center, Flex, HStack, Heading, Image, Select, Tag, VStack } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import '../App.css';
import image from "../images/background.svg"
import test from "../images/test.png"
import FullImageDisplay from './FullImage';
import { API_ENDPOINT } from "../App"


const Task1 = () => {
	const toast = useToast()

	const [originalImage, setOriginalImage] = useState(null)
	const [originalImageFile, setOriginalImageFile] = useState(null)
	const [referenceImage, setReferenceImage] = useState(null)
	const [referenceImageFile, setReferenceImageFile] = useState(null)
	const [outputImage, setOutputImage] = useState(null)
	const [loading, setLoading] = useState(false)

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

	const handleReferenceImage = (file) =>{
		if (file) {
			let reader = new FileReader();

			reader.onload = (e) => {
				setReferenceImage(e.target.result)
			};

			reader.readAsDataURL(file);
			setReferenceImageFile(file)
		}
	}

	const generateImage = async () => {
		if (originalImage == null || referenceImage == null) {
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
			formData.append("files", originalImageFile)
			formData.append("files", referenceImageFile)
			const res = await axios.post(API_ENDPOINT + "/edit_image", formData)
			if (res.data.success) {
				setOutputImage(API_ENDPOINT + "/get_image?task_id=1&image_id=0&time=" + (new Date()).getTime())
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
            <VStack w='56%' h='100%' pt='10' spacing={4}>
                <Center w='100%'>
                    <HStack w='100%' justifyContent='space-between' alignItems='center'>
                        <VStack w='50%'>
                            <input
                                type="file"
                                id="files"
                                className="upload_btn"
                                onChange={event => {
									handleOriginalImage(event.target.files[0])
                                }}
                            />
                            <label
                                htmlFor="files"
                                className="upload_label"
                            >
                                Select Image
                            </label>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
								Original Image
                            </Tag>
                        </VStack>
                        <VStack>

                        </VStack>
                        <VStack w='50%'>
                            <input
                                type="file"
                                id="ref_files"
                                className="upload_btn"
                                onChange={event => {
                                    handleReferenceImage(
                                        event.target.files[0]
                                    );
                                }}
                            />
                            <label
                                htmlFor="ref_files"
                                className="upload_label"
                            >
                                Select Image
                            </label>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
								Reference Flower
                            </Tag>
                        </VStack>
                    </HStack>
                </Center>
                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <Center w='45%'>
                        <Image
                            boxSize="50%"
                            // objectFit="cover"
							src={originalImage ? originalImage : image}
                            alt="Original Image"
                            borderRadius='20px'
                        // mt='2'
                        />
                    </Center>
                    <Center w='45%'>
                        <Image
                            boxSize="50%"
                            // objectFit="cover"
							src={referenceImage ? referenceImage : image}
                            alt="Reference Image"
                            borderRadius='20px'
                        // mt='2'
                        />
                    </Center>
                </HStack>
                <HStack w='100%' justifyContent='space-around' alignItems='center'>
                    <Center w='100%'>
                        <VStack w='100%' justify='center' alignItems='center'>
                            <Button px='36px' py='12px' borderRadius='10px' bg='#060825' color='#FAFAFA' fontWeight='500' fontSize='16px' boxShadow='lg' rounded='md' _hover={{ bg: '#FFFFFF', border: '1px solid #060825', color: '#060825' }}
								onClick={generateImage}
							>Generate</Button>
                            <Tag size='sm' key={'sm'} variant='solid' bg='#060825' color='#FAFAFA'>
                                Output Image
                            </Tag>
							{loading ? <Spinner
							  thickness='4px'
							  speed='0.65s'
							  emptyColor='gray.200'
							  color='blue.500'
							  size='xl'
							/> :
								<Box w="30%" cursor="pointer">
									<FullImageDisplay image={outputImage ? outputImage : image}/>
								</Box>}
								{/* <Image */}
                                {/* boxSize="30%" */}
                                {/* // objectFit="cover" */}
								{/* src={outputImage ? outputImage : image} */}
                                {/* alt="Output Image" */}
                                {/* borderRadius='20px' */}
                            {/* // mt='2' */}
                            {/* />} */}
                        </VStack>
                    </Center>
                </HStack>
            </VStack>
        </Center >
    );
}

export default Task1;
