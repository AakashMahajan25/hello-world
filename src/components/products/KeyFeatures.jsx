import {
  Box,
  Heading,
  Flex,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import icon from "@/assets/icons/Icon.png";
import At1 from "@/assets/jsxIcons/at1";
import At3 from "@/assets/jsxIcons/at3";
import At2 from "@/assets/jsxIcons/at2";
import Cp2 from "@/assets/jsxIcons/cp2";
import Cp1 from "@/assets/jsxIcons/cp1";
import Cp3 from "@/assets/jsxIcons/cp3";
import Dl2 from "@/assets/jsxIcons/dl2";
import Cv2 from "@/assets/jsxIcons/cv2";

const KeyFeatures = () => {
  const features = [
    {
      icon: <At1 />,
      title: "Self-Healing Technology",
      description:
        "Automatically repairs light scratches, keeping your vehicle looking flawless.",
    },
    {
      icon: <At3 />,
      title: "Ultra-Hydrophobic",
      description:
        "Water beads off effortlessly, making cleaning easier and reducing water spots.",
    },
    {
      icon: <At2 />,
      title: "Non-Yellowing Formula",
      description:
        "Maintains long-lasting crystal clarity, keeping the film invisible over time.",
    },
    {
      icon: <Cp2 />,
      title: "UV Protection",
      description:
        "Safeguards your paint from harmful UV rays, preventing fading and degradation.",
    },
    {
      icon: <Cp1 />,
      title: "Superior Durability",
      description:
        "Resistant to cracking, peeling, and bubbling, providing long-term protection against environmental hazards.",
    },
    {
      icon: <Cp3 />,
      title: "Chemical Resistant",
      description:
        "Protects against acidic contaminants, such as bird droppings, tree sap, and road salt.",
    },
    {
      icon: <Dl2 />,
      title: "5-Year Warranty",
      description: "Long-lasting protection you can count on.",
    },
    {
      icon: <Cv2 />,
      title: "Enhanced Flexibility",
      description:
        "Stretches easily to conform to complex surfaces, making installation smoother and faster.",
    },
  ];

  return (
    <Box
      px={{ base: 0, sm: 4, lg: 32 }}
      py={10}
      maxW={{ "2xl": "1500px" }}
      mx={{ "2xl": "auto" }}
    >
      <Heading
        fontFamily=""
        textAlign="center"
        p={10}
        fontSize={{ base: "3xl", md: "4xl" }}
        color="gray.800"
      >
        Key Features of Our Paint Protection Film
      </Heading>
      <Flex wrap="wrap" justify="center" gap={6}>
        {features.map((feature, i) => (
          <VStack
            key={i}
            border="1px solid"
            borderColor="gray.300"
            rounded="xl"
            width={{ base: "95%", sm: "46%", md: "30%", lg: "23%" }}
            p={{base:3, lg:6}}
            mb={{base:0, lg:6}}
            spacing={4}
            bg="white"
            align={"start"}
          >
            <Box
              width="50px"
              height="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box boxSize="100%">{feature.icon}</Box>
            </Box>
            <Heading
              fontFamily=""
              as="h4"
              size="md"
              fontWeight={600}
              color="gray.800"
            >
              {feature.title}
            </Heading>
            <Text
              textAlign="left"
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
            >
              {feature.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default KeyFeatures;
