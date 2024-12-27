"use client";
import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Cp1 from "@/assets/jsxIcons/cp1";
import Cp2 from "@/assets/jsxIcons/cp2"; // Make sure to import all your icons as needed
import Cp3 from "@/assets/jsxIcons/cp3";
import Cp4 from "@/assets/jsxIcons/cp4";
import Cp5 from "@/assets/jsxIcons/cp5";
import Cp6 from "@/assets/jsxIcons/cp6";
import At1 from "@/assets/jsxIcons/at1";
import At2 from "@/assets/jsxIcons/at2";
import At3 from "@/assets/jsxIcons/at3";
import At4 from "@/assets/jsxIcons/at4";
import Dl1 from "@/assets/jsxIcons/dl1";
import Dl2 from "@/assets/jsxIcons/dl2";
import Cv1 from "@/assets/jsxIcons/cv1";
import Cv2 from "@/assets/jsxIcons/cv2";
import Cv3 from "@/assets/jsxIcons/cv3";
import Ea1 from "@/assets/jsxIcons/ea1";
import Ea2 from "@/assets/jsxIcons/ea2";
import Vm1 from "@/assets/jsxIcons/vm1";
import Vm2 from "@/assets/jsxIcons/vm2";
import Tq1 from "@/assets/jsxIcons/tq1";
import Tq2 from "@/assets/jsxIcons/tq2";
import Em1 from "@/assets/jsxIcons/em1";
import Em2 from "@/assets/jsxIcons/em2";

// The icons are imported in the same order as they are in Figma

const Advantage = () => {
  const advantages = [
    {
      title: "Comprehensive Protection",
      description:
        "CAMIO PPF provides robust protection for your vehicle's paintwork:",
      advantages: [
        {
          icon: <Cp1 />,
          title: "Superior Defense Against Road Debris:",
          description:
            "Protects against stone chips, gravel, and other road hazards.",
        },
        {
          icon: <Cp2 />,
          title: "UV Protection:",
          description:
            "Guards against fading and oxidation from harmful sun rays.",
        },
        {
          icon: <Cp3 />,
          title: "Scratch and Impact Resistance:",
          description: "Shields your vehicle from minor abrasions and impacts.",
        },
        {
          icon: <Cp4 />,
          title: "Corrosion Prevention:",
          description:
            "Protects against corrosive elements such as bird droppings and tree sap.",
        },
        {
          icon: <Cp5 />,
          title: "Weather Resistance:",
          description:
            "Guards against extreme weather conditions, including rain, snow, and ice.",
        },
        {
          icon: <Cp6 />,
          title: "No Residue Upon Removal:",
          description:
            "Leaves no sticky residue, ensuring a clean and damage-free removal.",
        },
      ],
    },
    {
      title: "Advanced Technology",
      description: "Innovative features set CAMIO PPF apart:",
      advantages: [
        {
          icon: <At1 />,
          title: "Self-Healing Technology:",
          description:
            "Minor scratches and swirl marks automatically heal when exposed to heat, keeping the film looking flawless.",
        },
        {
          icon: <At2 />,
          title: "Non-Yellowing Formula:",
          description:
            "Maintains clarity and transparency over time, preventing discoloration and yellowing.",
        },
        {
          icon: <At3 />,
          title: "Hydrophobic Properties:",
          description:
            "Water and contaminants bead off easily, reducing maintenance efforts and keeping your vehicle cleaner.",
        },
        {
          icon: <At4 />,
          title: "High Gloss and Matte Finishes:",
          description:
            "Available in both glossy and matte options to match your desired look.",
        },
      ],
    },
    {
      title: "Durability and Longevity",
      description: "CAMIO PPF is engineered for long-term performance:",
      advantages: [
        {
          icon: <Dl1 />,
          title: "Long-Lasting Protection:",
          description:
            "Designed to endure for years without peeling, cracking, or degradation.",
        },
        {
          icon: <Dl2 />,
          title: "5-Year Warranty:",
          description:
            "Backed by a comprehensive warranty, offering assurance of quality and reliability.",
        },
      ],
    },
    {
      title: "Customizable and Versatile",
      description: "Find the perfect fit for your vehicle:",
      advantages: [
        {
          icon: <Cv1 />,
          title: "Tailored Coverage:",
          description:
            "Customizable for any vehicle type, from cars to motorcycles, ensuring comprehensive protection for every surface.",
        },
        {
          icon: <Cv2 />,
          title: "Seamless Application:",
          description:
            "Designed to fit precisely and conform to vehicle contours for a smooth, invisible finish.",
        },
        {
          icon: <Cv3 />,
          title: "Variety of Finishes:",
          description:
            "Choose from various finishes, including high gloss, matte, and color options to suit your personal style and vehicle type.",
        },
      ],
    },
    {
      title: "Enhanced Aesthetics",
      description: "Elevate the appearance of your vehicle:",
      advantages: [
        {
          icon: <Ea1 />,
          title: "Showroom Shine:",
          description:
            "The high-gloss finish enhances the paintwork, giving your vehicle a polished, sleek look.",
        },
        {
          icon: <Ea2 />,
          title: "Elegant Matte Finish:",
          description:
            "Achieve a sophisticated, non-reflective appearance with the matte option, adding a touch of modern style.",
        },
      ],
    },
    {
      title: "Ease of Maintenance",
      description: "CAMIO PPF simplifies vehicle upkeep:",
      advantages: [
        {
          icon: <Em1 />,
          title: "Low Maintenance:",
          description:
            "Requires minimal effort to keep clean. Regular washing is sufficient to remove dirt and contaminants.",
        },
        {
          icon: <Em2 />,
          title: "Resistant to Stains:",
          description:
            "The hydrophobic layer helps repel stains and makes cleaning easier.",
        },
      ],
    },
    {
      title: "Value for Money",
      description: "Experience premium protection without breaking the bank:",
      advantages: [
        {
          icon: <Vm1 />,
          title: "Affordable Premium Protection:",
          description:
            "Offers high-end features and performance at a competitive price.",
        },
        {
          icon: <Vm2 />,
          title: "Cost-Effective Investment:",
          description:
            "Protects your vehicle's paintwork, potentially saving on costly repairs and repainting in the future.",
        },
      ],
    },
    {
      title: "Trusted Quality",
      description: "Experience the confidence of a reputable product:",
      advantages: [
        {
          icon: <Tq1 />,
          title: "Proven Performance",
          description:
            "CAMIO PPF is trusted by vehicle owners and professionals alike for its high-quality and dependable protection.",
        },
        {
          icon: <Tq2 />,
          title: "Industry Expertise:",
          description:
            "Developed by experts with extensive experience in paint protection technology. ",
        },
      ],
    },
  ];
  return (
    <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }} py={{ lg:'100px'}} >
      <Heading
              fontFamily=""
        as={"h3"}
        mx={"auto"}
        width={{ base: "100%", lg: "45%" }}
        textAlign={"center"}
        pb={{base:4}}
      >
        Discover the CAMIO Advantage: Premium Protection for Your Vehicle
      </Heading>
      <Box p={4} px={{ base: 4, lg: 36 }}>
        {advantages.map((adv, i) => (
          <Box key={i} py={8}>
            <Heading
              fontFamily="" as={"h4"} fontSize={"lg"}>
              {adv.title}
            </Heading>
            <Text fontSize={"sm"} color={"gray.600"} pb={4}>
              {adv.description}
            </Text>
            <Flex flexWrap={"wrap"} gap={4}>
              {adv.advantages.map((advItem, j) => (
                <Flex
                  key={j}
                  width={{ base: "98%", lg: "49%" }}
                  bg={"#F4F6FA"}
                  p={4}
                  gap={2}
                  alignItems={"center"}
                  borderRadius={"lg"}
                >
                  <Box mb={2}>
                    {advItem.icon} {/* Render the icon JSX here */}
                  </Box>
                  <Box>
                    <Heading
              fontFamily="" as={"h5"} fontSize={"sm"}>
                      {advItem.title}
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.600"}>
                      {advItem.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Advantage;
