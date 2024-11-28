import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import mission from "../../assets/mission.png";
import Button2 from "../props/Button2";
import ourMission from "@/assets/products/newImages/ourmission.jpg";

const Mission = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column", lg: "row" }}
      px={{ base: "20px", md: "150px" }} // Responsive padding
      py={10}
      gap={{ base: "30px", md: "50px" }} // Responsive gap
    >
      <Box textAlign="left" maxW={{ base: "100%", md: "600px" }}>
        <Heading
          fontFamily=""
          as="h2"
          fontSize={{ base: "28px", md: "36px", lg: "5xl" }} // Responsive font size
          fontWeight="700"
          mb={{ base: "18px", md: "24px" }}
        >
          Our Mission
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }} // Responsive font size
          fontWeight="400"
          lineHeight="1.6"
          mb="36px"
        >
          To deliver superior paint protection solutions that enhance the beauty
          and longevity of every vehicle. We strive to combine cutting-edge
          technology with affordability, making premium protection accessible to
          all.
        </Text>
      </Box>

      <Box
        width={{ base: "100%", md: "500px" }}
        height="auto"
        borderRadius="2xl"
        overflow="hidden" // Ensures that the border-radius applies correctly to the image
      >
        <Image
          src={ourMission}
          alt="Mission"
          width="100%" // Make sure the image fills the container
          height="100%" // Make sure the image fills the container
          layout="responsive" // Makes the image responsive
        />
      </Box>
    </Flex>
  );
};

export default Mission;
