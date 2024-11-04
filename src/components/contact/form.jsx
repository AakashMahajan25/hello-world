"use client"; // This line marks the component as a Client Component

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Stack,
  Textarea,
  HStack,
  Icon,
  Text,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";



import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaUser,
  FaPenSquare,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { FaPen } from "react-icons/fa6";
import Image from "next/image";
import whatsApp from "../../assets/icons/whatsapp.svg";
import Button2 from "../props/Button2";
import { color } from "framer-motion";

const ContactForm = () => {
  const toast = useToast();


  useEffect(() => {
    // Using window object in useEffect ensures it runs only on the client side
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);

    // Set initial form values from search params
    setFormData((prevData) => ({
      ...prevData,
      email: params.get("email") || "",
      subject: params.get("subject") || "",
    }));
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email:  "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData((prevState) => ({
      ...prevState,
      subject,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading toast
    const toastId = toast({
      title: "Submitting Request",
      description: "Please wait while we submit your request",
      status: "loading",
      duration: null, // Keeps the toast open until manually closed
      isClosable: true,
    });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.update(toastId, {
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.update(toastId, {
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post("/api/contact-us", formData);
      console.log(response.data);

      // Update toast to success
      toast.update(toastId, {
        title: "Success",
        description: "Your request has been successfully submitted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);

      // Update toast to error
      toast.update(toastId, {
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100vw" // Set to 100vw to ensure full width
      px={{ base: "10px", lg: "150px" }} // Padding for larger screens
    >
      <Heading
        fontFamily=""
        my={{ base: "20px", lg: "50px" }}
        fontSize={{ base: "5xl", md: "47px" }}
        fontWeight={700}
        lineHeight="61.1px"
        textAlign="center"
      >
        Contact Us
      </Heading>

      <Flex
        // Remove maxW to allow full width
        mx="auto"
        p={{ base: 4, md: 6 }}
        direction={{ base: "column", lg: "row" }}
        spacing={6}
        width="100%" // Ensure full width
        justify="center"
        my={{ base: "30px", lg: "50px" }}
      >
        {/* Contact information */}
        <Box
          w={{ base: "100%", lg: "490px" }}
          h="auto"
          px={3}
          mb={{ base: 6, lg: 0 }}
        >
          <Heading
            fontFamily=""
            fontSize={{ base: "30px", md: "35px", lg: "43px" }} // Responsive font size
            fontWeight={700}
            lineHeight={{ base: "40px", md: "50px", lg: "62px" }}
            mb={2}
          >
            Have Questions?
            <br /> Get in Touch!
          </Heading>

          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }} // Responsive font size
            fontWeight="400"
            lineHeight="23.8px"
            color="#454D55"
            mb={6}
          >
            Rudra Enterprises
          </Text>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaMapMarkerAlt color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              Ground Floor, Right Portion, KHASRA NO. 29/23, Theke Wali Gali,
              Near Sai Baba Mandir, Alipur, Delhi 110036
            </Text>
          </HStack>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaRegEnvelope color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              temporary@gmail.com
            </Text>
          </HStack>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaPhoneAlt color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              +91 9212302362 | +91 9315892606
            </Text>
          </HStack>

          <Flex align="center" pr={10} justifyContent="center" width="100%">
            <HStack spacing={6}>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaInstagram color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaFacebook color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaYoutube color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <Image src={whatsApp} alt="WhatsApp" width={24} height={24} />
              </Box>
            </HStack>
          </Flex>
        </Box>

        {/* Form */}
        <Box w={{ base: "100%", md: "592px" }} h="auto" px={0}>
          <Flex justify="center">
            <form onSubmit={handleSubmit}>
              <Stack spacing={{ base: 6, md: 8, lg: 12 }}>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={6}
                >
                  <FormControl
                    isRequired
                    borderBottom="2px"
                    borderColor="#98A2B3"
                    pb={1}
                    width="100%"
                  >
                    <HStack spacing={2} width="100%">
                      <Icon as={FaUser} color="#98A2B3" boxSize={5} />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        border="none"
                        focusBorderColor="transparent"
                        width="100%" // Ensure Input takes 100% width
                        value={formData.name}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl
                    isRequired
                    borderBottom="2px"
                    borderColor="#98A2B3"
                    pb={1}
                    width="100%"
                  >
                    <HStack spacing={2} width="100%">
                      <Icon as={FaRegEnvelope} color="#98A2B3" boxSize={5} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        border="none"
                        focusBorderColor="transparent"
                        width="100%" // Ensure Input takes 100% width
                        value={formData.email}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl
                    borderBottom="2px"
                    borderColor="#98A2B3"
                    pb={1}
                    width="100%"
                  >
                    <HStack spacing={2} width="100%">
                      <Icon as={FaPhoneAlt} color="#98A2B3" boxSize={5} />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        border="none"
                        focusBorderColor="transparent"
                        width="100%" // Ensure Input takes 100% width
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>
                  <FormControl
                    borderBottom="2px"
                    borderColor="#98A2B3"
                    pb={1}
                    width="100%"
                  >
                    <HStack spacing={2} width="100%">
                      <Menu>
                        <MenuButton
                          as={Button}
                          bg="white"
                          color="#98A2B3"
                          gap={36}
                          rightIcon={<GoTriangleDown />}
                          _hover={{ bg: "white" }}
                          _active={{ bg: "white", color: "#98A2B3" }}
                          _focus={{
                            boxShadow: "none",
                            bg: "white",
                            color: "#98A2B3",
                          }}
                        >
                          {formData.subject || "Select Subject"}
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => handleSubjectChange("Enquiry")}
                          >
                            Enquiry
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleSubjectChange("Order Related")}
                          >
                            Order Related
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleSubjectChange("Complaint")}
                          >
                            Complaint
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </HStack>
                  </FormControl>
                </Grid>

                <FormControl
                  isRequired
                  borderBottom="2px"
                  borderColor="#98A2B3"
                  pb={1}
                >
                  <HStack spacing={2} alignItems="flex-start">
                    {" "}
                    <Icon as={FaPen} color="#98A2B3" boxSize={5} mt={3} />
                    <Textarea
                      name="message"
                      placeholder="Message"
                      border="none"
                      borderRadius="none"
                      focusBorderColor="transparent"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      maxHeight="100px" // Set your desired max height here
                      resize="none" // Prevent resizing if needed
                      sx={{
                        "::placeholder": {
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          textAlign: "left",
                          color: "#98A2B3",
                        },
                      }}
                      flex="1" // Allow the Textarea to take the remaining width
                    />
                  </HStack>
                </FormControl>

                <HStack spacing={2}>
                  <Checkbox
                    name="agreeToTerms"
                    isChecked={formData.agreeToTerms}
                    onChange={handleChange}
                    colorScheme="green"
                  />
                  <Text fontSize="sm" color="#98A2B3">
                    I agree to the terms and conditions
                  </Text>
                </HStack>

                <Button2>Get In Touch</Button2>
              </Stack>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
