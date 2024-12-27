'use client'
import React, { useState } from "react";
import { SimpleGrid, GridItem, Box, Heading, Text, Modal, ModalOverlay, ModalContent, ModalBody, IconButton, useDisclosure } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import camio from "../../assets/camio.png";
import carimage from "../../assets/carimage.png";
import journey from "../../assets/journey.png";
import toppicks1 from "../../assets/topPicks1.png";
import toppicks2 from "../../assets/topPicks2.png";
import toppicks3 from "../../assets/topPicks3.png";
import toppicks4 from "../../assets/topPicks4.png";
import gallery1 from "@/assets/products/newImages/gallery1.jpg"
import gallery2 from "@/assets/products/newImages/gallery2.jpg"
import gallery3 from "@/assets/products/newImages/gallery3.jpg"
import gallery4 from "@/assets/products/newImages/gallery4.jpg"
import gallery5 from "@/assets/products/newImages/gallery5.jpg"
import gallery6 from "@/assets/products/newImages/gallery6.jpg"
import gallery7 from "@/assets/products/newImages/gallery7.jpg"


const Gallery = () => {
  // List of images for easy maintenance
  const imagesLeftColumn = [camio, carimage, toppicks2, toppicks3, gallery5,gallery6,gallery7];
  const imagesRightColumn = [journey, toppicks1, toppicks4, gallery1, gallery2,gallery3,gallery4];

  // State and hooks for modal functionality
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box w="full" px={{ base: 4, md: 16 }} py={8} pb={{lg:'100px'}}>
      {/* Heading */}
      <Heading
        fontFamily=""
        mb={{ base: 2, md: 4 }}
        textAlign="center"
        fontSize={{ base: "20px", md: "32px" }}
        fontWeight="700"
      >
        Gallery
      </Heading>
      <Text
        mb={{ base: 5, md: 10 }}
        textAlign="center"
        fontSize={{ base: "16px", md: "20px" }}
        fontWeight="400"
        color="#121212CC"
      >
        &quot;Unmatched Protection, Unbeatable Shine&quot;
      </Text>

      {/* Image Grid */}
      <SimpleGrid columns={2} spacing={4}>
        {/* Left column */}
        <GridItem>
          {imagesLeftColumn.map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              boxShadow="md"
              borderRadius="2xl"
              mb={4}
              cursor="pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>

        {/* Right column */}
        <GridItem>
          {imagesRightColumn.map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              boxShadow="md"
              borderRadius="2xl"
              mb={4}
              cursor="pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 5}`}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>
      </SimpleGrid>

      {/* Modal for larger image view */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody p={0} position="relative">
            {/* Close button */}
            <IconButton
              icon={<CloseIcon />}
              position="absolute"
              top={2}
              right={2}
              colorScheme="whiteAlpha"
              onClick={onClose}
              zIndex={2}
              aria-label="Close image modal"
            />
            {/* Display selected image */}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
                layout="responsive"
                width={800} // Larger size for modal
                height={600}
                objectFit="cover"
                priority
                style={{ borderRadius: "1rem" }}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;
