import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/rudralogo.png";
import Button2 from "../props/Button2";

const Power = () => {
  return (
    <Box my={{base:'0', lg:'80px'}}>
      <Flex
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row" }}
        px={{ base: "20px", md: "150px" }} // Responsive padding
        gap={{ base: "30px", md: "50px" }} // Responsive gap
      >
        <Box
          width={{ base: "100%", md: "500px" }} // Responsive width
          height="auto"
        >
          <Image
            src={logo}
            alt="RUDRA Logo"
            width={500}
            height={500}
            layout="responsive" // Makes the image responsive
          />
        </Box>

        <Box textAlign="left" maxW={{ base: "100%", md: "600px" }} gap="30px">
          <Heading
              fontFamily=""
            fontSize={{ base: "28px", md: "36px", lg: "43px" }} // Responsive font size
            fontWeight="700"
            lineHeight={{ base: "36px", md: "56px", lg: "61.1px" }} // Responsive line height
          >
            The Power Behind CAMIO: Rudra Enterprises
          </Heading>
          <Text
            fontSize={{ base: "14px", md: "16px" }} // Responsive font size
            fontWeight="400"
            lineHeight="23.8px"
            mt={{ base: "12px", md: "18px" }} // Responsive margin top
          >
            CAMIO PPF is proudly brought to you by Rudra Enterprises, a leading
            name in the automotive industry. With years of experience and a
            reputation for excellence, Rudra Enterprises is dedicated to
            providing high-quality automotive solutions that meet the needs of
            customers worldwide. As the driving force behind CAMIO, Rudra
            Enterprises combines innovation, expertise, and a commitment to
            quality to deliver paint protection films that set the standard for
            the industry.
          </Text>
        </Box>
      </Flex>

      
      <Flex
        justify="center" 
        align="center"
        gap={{base:10, lg:20}}
        px={{ base: "20px", md: "150px" }}
        py={{ base: "20px", md: "50px", lg:'100px' }} // Responsive padding
        flexDirection={{ base: "column", lg: "row" }} // Stack on small screens
      >
        <Box position="relative" textAlign="center" mb={{ base: 4, md: 0 }}>
          <Text
            fontSize={{ base: "60px", md: "120px" }} // Responsive font size
            fontWeight="700"
            lineHeight={{ base: "70px", md: "178.5px" }} // Responsive line height
            color="#E0E5D0"
            whiteSpace="nowrap" // Prevent wrapping
          >
            08
          </Text>
          <Text
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "16px", md: "21px" }} // Responsive font size
            fontWeight="700"
            lineHeight="25.41px"
            whiteSpace="nowrap" // Prevent wrapping
          >
            Years of Expertise
          </Text>
        </Box>

        <Box position="relative" textAlign="center" mb={{ base: 4, md: 0 }}>
          <Text
            fontSize={{ base: "60px", md: "120px" }} // Responsive font size
            fontWeight="700"
            lineHeight={{ base: "70px", md: "178.5px" }} // Responsive line height
            color="#E0E5D0"
          >
            40,000+
          </Text>
          <Text
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "16px", md: "21px" }} // Responsive font size
            fontWeight="700"
            lineHeight="25.41px"
            whiteSpace="nowrap" 
          >
            Vehicles Protected
          </Text>
        </Box>

        <Box position="relative" textAlign="center" mb={{ base: 4, md: 0 }}>
          <Text
            fontSize={{ base: "60px", md: "120px" }} // Responsive font size
            fontWeight="700"
            lineHeight={{ base: "70px", md: "178.5px" }} // Responsive line height
            color="#E0E5D0"
          >
            28
          </Text>
          <Text
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "16px", md: "21px" }} // Responsive font size
            fontWeight="700"
            lineHeight="25.41px"
          >
            States
          </Text>
        </Box>

        <Box position="relative" textAlign="center">
          <Text
            fontSize={{ base: "60px", md: "120px" }} // Responsive font size
            fontWeight="700"
            lineHeight={{ base: "70px", md: "178.5px" }} // Responsive line height
            color="#E0E5D0"
            whiteSpace="nowrap" // Prevent wrapping
          >
            08
          </Text>
          <Text
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "16px", md: "21px" }} // Responsive font size
            fontWeight="700"
            lineHeight="25.41px"
            whiteSpace="nowrap" // Prevent wrapping
          >
            Union Territories
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Power;
