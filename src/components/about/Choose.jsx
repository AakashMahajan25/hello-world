import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const Choose = () => {
  return (
    <Flex 
      align="center" 
      justify="center" 
      height="auto" 
      px={{ base: "20px", md: "0" }} // Add padding on smaller screens
    >
      <Box 
        textAlign="center" 
        width={{ base: "90%", md: "600px" }} // Responsive width
        height="auto" 
        padding="20px" // Optional: adds some internal padding
        
      >
        <Heading
              fontFamily=""
          as="h2"
          fontSize={{ base: "28px", md: "36px", lg: "42px" }} // Responsive font size
          fontWeight="700"
          mb={{ base: "18px", md: "24px" }}
        >
          Why Choose CAMIO PPF?
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }} // Responsive font size
          fontWeight="400"
          lineHeight="1.6"
          mb="36px"
        >
          CAMIO PPF is more than just a product; it’s a promise of protection. Our
          films are crafted using the latest technology, ensuring your vehicle’s
          paintwork remains pristine for years. We offer a range of options to
          suit every need, from cost-effective solutions to premium offerings, all
          backed by a warranty. With CAMIO, you’re not just getting a product, but
          a partner in preserving your vehicle’s value and appearance.
        </Text>
      </Box>
    </Flex>
  );
};

export default Choose;
