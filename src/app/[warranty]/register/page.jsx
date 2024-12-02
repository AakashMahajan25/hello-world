"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Heading,
  useToast,
  Text,
  Image as ChakraImage,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export default function WarrantyRegistration() {
  const [imagePreview, setImagePreview] = useState(null);
  const [rcImagePreview, setRcImagePreview] = useState(null); // State for RC image preview
  const [warrantyId, setWarrantyId] = useState("");
  const [warrantyDuration, setWarrantyDuration] = useState("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRcImageChange = (e) => {
    // Handling RC image upload
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRcImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory.includes("tpu")) {
      setWarrantyDuration("5 years");
    } else if (selectedCategory.includes("tph")) {
      setWarrantyDuration("3 years");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      // Add the image to formData if it exists
      if (imagePreview) {
        const imageFile = await fetch(imagePreview).then((r) => r.blob());
        formData.set("carImage", imageFile);
      }

      // Add RC photo to formData if it exists
      if (rcImagePreview) {
        const rcImageFile = await fetch(rcImagePreview).then((r) => r.blob());
        formData.set("rcImage", rcImageFile);
      }

      const response = await fetch("/api/warranty/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setWarrantyId(data.warrantyId);
        onOpen(); // Open modal with warranty ID
        e.target.reset(); // Optionally reset the form
        setImagePreview(null);
        setRcImagePreview(null); // Reset RC image preview
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description:
          error.message || "There was an error submitting your registration",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center" mb={6}>
          E-Warranty Registration
        </Heading>

        <Box
          as="form"
          onSubmit={handleSubmit}
          spacing={4}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
        >
          <VStack spacing={4}>
            {/* Customer Details */}
            <FormControl isRequired>
              <FormLabel>Customer Name</FormLabel>
              <Input name="customerName" placeholder="Enter customer name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email Address (Optional)</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter email address"
              />
            </FormControl>

            {/* Vehicle Details */}
            <FormControl isRequired>
              <FormLabel>Car Number</FormLabel>
              <Input name="carNumber" placeholder="Enter car number" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Chassis Number</FormLabel>
              <Input name="chassisNumber" placeholder="Enter chassis number" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Camio Roll Unique Code</FormLabel>
              <Input
                name="camioRollCode"
                placeholder="Enter Camio roll unique code"
              />
            </FormControl>

            {/* PPF Category */}
            <FormControl isRequired>
              <FormLabel>PPF Category</FormLabel>
              <Select
                name="ppfCategory"
                placeholder="Select PPF category"
                onChange={handleCategoryChange}
              >
                <option value="camio-tpu-clear-gloss">
                  CAMIO TPU Clear Gloss
                </option>
                <option value="camio-tpu-black-gloss">
                  CAMIO TPU Black Gloss
                </option>
                <option value="camio-tpu-clear-matte">
                  CAMIO TPU Clear Matte
                </option>
                <option value="camio-tpu-black-matte">
                  CAMIO TPU Black Matte
                </option>
                <option value="camio-tph-clear-gloss">
                  Camio TPH Clear Gloss
                </option>
                <option value="camio-tph-clear-matte">
                  Camio TPH Clear Matte
                </option>
                <option value="camio-tph-color-gloss">
                  Camio TPH Color Gloss
                </option>
                <option value="camio-tph-black-gloss">
                  Camio TPH Black Gloss
                </option>
              </Select>
            </FormControl>

            {/* Warranty Duration */}
            {warrantyDuration && (
              <FormControl>
                <FormLabel>Warranty Duration</FormLabel>
                <Text>{warrantyDuration}</Text>
              </FormControl>
            )}

            {/* Image Upload */}
            <FormControl isRequired>
              <FormLabel>Car Image with PPF Roll</FormLabel>
              <Input
                name="carImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                p={1}
              />
              <FormHelperText>
                Upload an image showing the car with PPF roll number
              </FormHelperText>
              {imagePreview && (
                <ChakraImage
                  src={imagePreview}
                  alt="Preview"
                  maxH="200px"
                  mt={2}
                  borderRadius="md"
                />
              )}
            </FormControl>

            {/* RC Photo Upload */}
            <FormControl isRequired>
              <FormLabel>RC (Registration Certificate) Photo</FormLabel>
              <Input
                name="rcImage"
                type="file"
                accept="image/*"
                onChange={handleRcImageChange}
                p={1}
              />
              <FormHelperText>
                Upload a photo of your car&apos;s Registration Certificate (RC)
              </FormHelperText>
              {rcImagePreview && (
                <ChakraImage
                  src={rcImagePreview}
                  alt="RC Photo Preview"
                  maxH="200px"
                  mt={2}
                  borderRadius="md"
                />
              )}
            </FormControl>

            {/* Detailer Details */}
            <FormControl isRequired>
              <FormLabel>Detailer Studio Name</FormLabel>
              <Input
                name="detailerStudioName"
                placeholder="Enter detailer studio name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Detailer Mobile Number</FormLabel>
              <Input
                name="detailerMobile"
                type="tel"
                placeholder="Enter detailer mobile number"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input name="location" placeholder="Enter location" />
            </FormControl>

            {/* Optional Message */}
            <FormControl>
              <FormLabel>Message (Optional)</FormLabel>
              <Textarea
                name="message"
                placeholder="Enter any additional message"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="yellow"
              bg="#FFBB4E"
              size="lg"
              width="full"
              mt={4}
            >
              Submit Registration
            </Button>
          </VStack>
        </Box>
      </VStack>

      {/* Warranty ID Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Successful!</ModalHeader>
          <ModalBody>
            <Text>Your warranty has been registered successfully.</Text>
            <Text mt={4} fontWeight="bold">
              Your Warranty ID is: {warrantyId}
            </Text>
            <Text mt={4} fontSize="sm" color="red.500">
              Please save this Warranty ID in a safe place. You will need it to
              check your warranty status.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
