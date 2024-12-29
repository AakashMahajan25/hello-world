import React from "react";
import { Flex, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import qualityIcon from "../../assets/icons/quality.png";
import inovationIcon from "../../assets/icons/inovation.png";
import satisfactionIcon from "../../assets/icons/satisfaction.png";
import integrityIcon from "../../assets/icons/integrity.png";

// Define the values in an array of objects, including the icon images
const valuesData = [
  {
    icon: qualityIcon,
    title: "Quality",
    description:
      "We are committed to offering only the highest quality products, rigorously tested to ensure they meet our exacting standards.",
  },
  {
    icon: inovationIcon,
    title: "Innovation",
    description:
      "Innovation drives us. We continually invest in research and development to bring you the latest in paint protection technology.",
  },
  {
    icon: satisfactionIcon,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We work closely with our clients to provide exceptional service and products tailored to their needs.",
  },
  {
    icon: integrityIcon,
    title: "Integrity",
    description:
      "We believe in transparency and honesty in all our dealings, ensuring you can trust CAMIO PPF to protect your investment.",
  },
];

const Values = () => {
  return (
    <Flex direction="column" align="center" px={8} my={{base:'50px', lg:'30px'}}>
      <Heading
        fontFamily=""
        pb={{ base: 8, lg: 0 }}
        py={{ base: 0, lg: 0 }}
        fontSize={{ base: "3xl", lg: "5xl" }}
        fontWeight="700"
        lineHeight="37px"
      >
        Our Values
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 4 }} w="100%" spacing={6}>
        {valuesData.map((value, index) => (
          <Box
            key={index}
            textAlign="center"
            px={{ base: 2, lg: 4 }}
            py={4}
            position="relative"
            borderBottom={{
              base: index < valuesData.length - 1 ? "3px solid" : "none",
              lg: "none",
            }}
            borderColor={{ base: "transparent", lg: "transparent" }}
            _before={
              index < valuesData.length - 1 && {
                content: '""',
                position: "absolute",
                height: { base: "3px", lg: "100%" },
                width: { base: "0", lg: "3px" },
                top: { base: "auto", lg: 0 },
                bottom: { base: 0, lg: "auto" },
                right: { base: "auto", lg: 0 },
                left: { base: 0, lg: "auto" },
                bgGradient: {
                  base: "transparent",
                  lg: "linear(to-b, rgba(76, 111, 255, 0) 0%, #4C6FFF 50%, rgba(76, 111, 255, 0) 100%)",
                },
              }
            }
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={value.icon}
                alt={`${value.title} icon`}
                width={100}
                height={100}
                mb={3}
                mx="auto"
              />
              <Heading
                fontFamily=""
                fontSize="25px"
                fontWeight="600"
                lineHeight="31.78px"
                my={4}
              >
                {value.title}
              </Heading>
              <Text fontSize="18px" fontWeight="400" lineHeight="21.78px">
                {value.description}
              </Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Values;
