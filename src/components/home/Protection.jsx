import { Box, Heading, Text, Grid, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import scratchIcon from "../../assets/icons/scratch.png";
import stoneIcon from "../../assets/icons/stone.png";
import snowflakeIcon from "../../assets/icons/snowflake.png";
import cardoorIcon from "../../assets/icons/car-door.png";
import carcollisionIcon from "../../assets/icons/car-collision.png";
import carpaintIcon from "../../assets/icons/car-painting.png";
import caraccidentIcon from "../../assets/icons/car-accident.png";
import bugIcon from "../../assets/icons/bug.png";
import waterdropIcon from "../../assets/icons/waterdrop.png";
import carshineIcon from "../../assets/icons/carshine.png";
import { FiChevronRight } from "react-icons/fi";
import Button2 from "../props/Button2";

const Protection = () => {
  // Array containing icon and text data
  const protectionData = [
    { icon: stoneIcon, label: "Stone Chips" },
    { icon: scratchIcon, label: "Various Life Scratches" },
    { icon: cardoorIcon, label: "Door Dings" },
    { icon: snowflakeIcon, label: "Snow-Removing Sand & Calcium Chloride" },
    { icon: carpaintIcon, label: "Painted Surface Discoloration" },
    { icon: caraccidentIcon, label: "Surface Damage by Various Impacts" },
    { icon: carcollisionIcon, label: "Paint Scuff" },
    { icon: carshineIcon, label: "Unique Design" },
    {
      icon: waterdropIcon,
      label: "All Sorts of Water/Oil Stains & Contaminations",
    },
    { icon: bugIcon, label: "Bug Acid & Bird Droppings" },
  ];

  return (
    <Box
      bg={"gray.900"}
      color={"white"}
      minHeight={{ base: "100vh", "2xl": "85vh" }}
      pt={10}
      px={{ base: 5, "2xl": 80 }}
      pb={8}
    >
      {/* Features Button */}
      <Box display="flex" justifyContent="center" py={0}>
        <Button
          bg={"transparent"}
          borderStyle={"solid"}
          borderRadius={"full"}
          fontWeight={500}
          fontSize={{ base: "12px", md: "14px" }}
          _hover={{ bg: "transparent" }}
          borderWidth={"1px"}
          borderColor={"#E2E2E2"}
          color={"white"}
          display="flex"
          alignItems="center"
        >
          <Text pb={0}>Features</Text> 
        </Button>
      </Box>

      {/* Heading with gradient */}
      <Heading
        fontFamily=""
        as="h2"
        textAlign="center"
        py={{ base: 8, lg: 12 }}
        bgGradient="linear(to-r, red.400, yellow.400)"
        bgClip="text"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
      >
        CLEAR AND COMPLETE{" "}
        <Text as="span" display="block">
          PROTECTION AGAINST
        </Text>
      </Heading>

      {/* Responsive Grid */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        px={{ base: "10px", lg: "50px" }}
        justifyItems="center"
      >
        {protectionData.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="transparent"
            borderRadius="full"
            p={4}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={60}
              height={60}
              style={{
                transition: "transform 0.3s ease",
              }}
            />
            <Text
              mt={4}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              textAlign="center"
            >
              {item.label}
            </Text>
          </Flex>
        ))}
      </Grid>
      {/* <Box display={'flex'} justifyContent={'center'} py={10}><Button2>Contact Us</Button2></Box> */}
    </Box>
  );
};

export default Protection;
