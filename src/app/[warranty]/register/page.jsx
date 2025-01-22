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
  Badge,
  Flex,
  Collapse,
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
    console.log(selectedCategory);
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
              <Flex
                align="center"
                justify="space-between"
                gap={4}
                direction={{ base: "column", md: "row" }}
              >
                <Select
                  name="ppfCategory"
                  placeholder="Select PPF category"
                  onChange={handleCategoryChange}
                  flex="1" // Ensures it takes up available space
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
                <Flex align="center" gap={2}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Warranty:
                  </Text>
                  <Badge colorScheme="yellow" px={2} py={1} borderRadius="md">
                    {warrantyDuration || "Not Available"}
                  </Badge>
                </Flex>
              </Flex>
            </FormControl>

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
              Register E-Warranty
            </Button>
          </VStack>
        </Box>
      </VStack>

      {/* Warranty Policies */}
      <Box mt={16} mx={{ base: "2", sm: "8" }}>
        <Heading textAlign={"center"} fontSize={"26px"}>
          E Warranty Policies
        </Heading>
        <Text fontSize="14px" mt={4}>
          <strong>Warranty Coverage:</strong>
          <br />
          CAMIO PPF ensures the highest quality standards and offers the
          following protections through the authorized dealer or installer:
          <ol
            style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            className="pt-2"
          >
            <li>
              <strong>Durability:</strong> Film will not crack, peel, or bubble
              under proper maintenance.
            </li>
            <li>
              <strong>Adhesion:</strong> No blistering, bubbling, or
              delaminating under normal conditions.
            </li>
            <li>
              <strong>Appearance:</strong> Protection against discoloration or
              staining over time.
            </li>
          </ol>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Warranty Period:</strong>
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }} className="pt-2">
            <li>TPU Series: 5 years from the installation date.</li>
            <li>TPH Series: 3 years from the installation date.</li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Conditions for Validity:</strong>
          <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            className="pt-2">
            <li>
              Warranty is non-transferable and applicable only to the original
              purchaser.
            </li>
            <li>
              Coverage is valid only for installations on OEM-painted surfaces.
            </li>
            <li>
              Warranty is void if the vehicle surface is repainted or if the
              film is removed, tampered with, or abused.
            </li>
            <li>
              CAMIO PPF must be installed by a certified professional using
              recommended techniques and stored appropriately before
              application.
            </li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Liability for Warranty Claims:</strong>
          <ul  style={{ listStyleType: "circle", paddingLeft: "20px" }} className="pt-2">
            <li>
              CAMIO PPF, as a brand, is not directly liable for warranty claims.
            </li>
            <li>
              The authorized dealer or installer who applied the film is fully
              responsible for addressing and resolving warranty claims.
            </li>
            <li>
              Any material or product replacement due to defects will be handled
              by the dealer or installer. Labour costs or additional warranties
              offered by dealers are not covered under this policy.
            </li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>What Is Covered:</strong>
          <ul  style={{ listStyleType: "circle", paddingLeft: "20px" }} className="pt-2">
            <li>Staining or fading due to environmental exposure.</li>
            <li>
              Delamination, blistering, or bubbling due to material failure.
            </li>
            <li>Cracks or crazing caused by manufacturing defects.</li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>What Is Not Covered:</strong>
          <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            className="pt-2">
            <li>
              Damage caused by improper care, accidents, or misuse (e.g.,
              sandstorms, hail, falling objects).
            </li>
            <li>
              Scratches, dents, or wear resulting from collisions, vandalism, or
              negligence.
            </li>
            <li>Use of abrasive cleaners, chemicals, or caustic materials.</li>
            <li>
              Damage from extreme thermal conditions or non-automotive
              applications.
            </li>
            <li>
              Water spots or minor aesthetic imperfections like stains or rail
              dust.
            </li>
            <li>
              Installations on non-OEM surfaces or by unauthorized
              professionals.
            </li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Claim Process:</strong>
          <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            className="pt-2">
            <li>
              Claims must be initiated through the authorized CAMIO PPF
              installer or dealer.
            </li>
            <li>
              Submit proof of purchase, warranty certificate, and installation
              details.
            </li>
            <li>
              Upon verification, the authorized dealer will replace the
              defective material (labour costs not included).
            </li>
            <li>
              CAMIO PPF will not entertain claims directly and is not
              responsible for any additional warranties offered by dealers or
              installers.
            </li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Limitation of Liability:</strong>
          CAMIO PPF’s liability is limited to providing the product. The company
          is not responsible for:
          <ul  style={{ listStyleType: "circle", paddingLeft: "20px" }} className="pt-2">
            <li>Labour costs associated with removal or reinstallation.</li>
            <li>
              Consequential damages, loss of use, or any incidental losses.
            </li>
            <li>Claims arising from improper installation or maintenance.</li>
          </ul>
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Warranty Disclaimer:</strong>
          CAMIO PPF does not authorize modifications or extensions to this
          warranty. Any misuse, intentional or unintentional damage, or failure
          to follow recommended care instructions voids the warranty.
        </Text>

        <Text fontSize="14px" mt={4}>
          <strong>Care Instructions:</strong>
          To maintain the warranty, follow proper care guidelines:
          <ul  style={{ listStyleType: "circle", paddingLeft: "20px" }} className="pt-2">
            <li>Clean the film with non-abrasive, pH-neutral products.</li>
            <li>
              Avoid harsh chemicals, solvents, or excessive pressure during
              washing.
            </li>
            <li>Protect the film from sharp objects and intentional damage.</li>
          </ul>
        </Text>
      </Box>

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
