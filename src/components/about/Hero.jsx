import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button2 from "../props/Button2";

const Hero = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column", lg: "row" }}
      px={{ base: "20px", md: "150px" }} // Responsive padding
      py="50px"
      gap={{ base: "30px", md: "50px" }} // Responsive gap
    >
      <Box
        width={{ base: "100%", md: "500px" }} // Responsive width
        height="auto"
      >
        <Image
          src={logo}
          alt="CAMIO Logo"
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
          About CAMIO PPF
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "16px" }} // Responsive font size
          fontWeight="400"
          lineHeight="23.8px"
          mt={{ base: "12px", md: "18px" }} // Responsive margin top
        >
          At CAMIO, we believe that every vehicle deserves the best protection
          without compromising on aesthetics. Our passion for innovation and
          quality has driven us to develop a range of high-performance Paint
          Protection Films (PPF) that offer unparalleled durability, clarity,
          and protection. Trusted by car enthusiasts and professionals
          worldwide, CAMIO PPF is the ultimate shield for your vehicle’s finish.
        </Text>
        <Box mt={{ base: "12px", md: "18px" }}>
          <Link href="/contact" passHref>
            <Button2>Contact Us</Button2>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
