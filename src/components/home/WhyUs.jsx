"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Whyusimg1 from '../../assets/whyusimg1.png'

import blackgloss from '@/assets/products/blackgloss.jpg';
import whitegloss from '@/assets/products/whitegloss.jpg';
import clearmatte from '@/assets/products/clearmatte.jpg';
import blackmatte from '@/assets/products/blackmatte.jpg';
import mghectar from '@/assets/products/mghectar.jpg';
import img7 from '@/assets/products/IMG-20241023-WA0036.jpg'
import img8 from '@/assets/products/IMG-20240908-WA0000.jpg'
import img9 from '@/assets/products/IMG-20240809-WA0004.jpg'

import supProtection from "@/assets/products/newImages/SupProtection.jpg"
import selfHealing from "@/assets/products/newImages/selfHealing.jpg"
import nonYellow from "@/assets/products/newImages/nonYellow.webp"
import longLasting from "@/assets/products/newImages/longLasting.jpg"
import yearWarr from "@/assets/products/newImages/5YearWarr.jpg"
import customizable from "@/assets/products/newImages/customizable.jpg"
import hydrophobic from "@/assets/products/newImages/hydrophobic.jpg"
import glossFinish from "@/assets/products/newImages/glossFinish.jpeg"
import noResidue from "@/assets/products/newImages/noResidue.jpg"

// import AnimButton from "../components/props/Button";

import Link from "next/link";
// import Button2 from "./props/Button2";
import Button3 from "../props/Button3";
import Image from "next/image";

const WhyUs = () => {
  // State to track the currently active accordion and image
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Sample data for the accordions and images
  const accordionData = [
    {
      id: 1,
      title: "Superior Protection",
      content:
        "CAMIO PPF offers unmatched protection against road debris, scratches, and environmental elements, ensuring your vehicle stays in top condition.",
      imageUrl: supProtection,
    },
    {
      id: 2,
      title: "Self-Healing Technology",
      content:
        "Minor scratches heal automatically, keeping your car’s surface flawless.",
      imageUrl: selfHealing,
    },
    {
      id: 3,
      title: "Non-Yellowing Formula",
      content:
        " CAMIO PPF is designed with anti-yellowing technology, ensuring the film remains crystal clear and doesn’t discolor over time.",
      imageUrl: nonYellow,
    },
    {
      id: 4,
      title: "Long-Lasting Durability",
      content:
        " Engineered for durability, CAMIO PPF maintains its integrity for years, providing reliable protection without cracking or peeling.",
      imageUrl: longLasting,
    },
    {
      id: 5,
      title: "5-Year Warranty",
      content:
        "CAMIO PPF comes with a 5-year warranty, giving you peace of mind that your vehicle is protected by a product that stands the test of time.",
      imageUrl: yearWarr,
    },
    {
      id: 6,
      title: "Customizable Coverage",
      content:
        "Available in various finishes and customizable for any vehicle, CAMIO PPF ensures a perfect fit and full protection wherever you need it.",
      imageUrl: customizable,
    },
    {
      id: 7,
      title: "Ultra Hydrophobic",
      content:
        "CAMIO PPF features ultra-hydrophobic properties, allowing water to bead off easily and making the film resistant to stains and contaminants.",
      imageUrl: hydrophobic,
    },
    {
      id: 8,
      title: "Enhanced Gloss Finish",
      content:
        "The high-gloss finish of CAMIO PPF enhances your vehicle’s appearance, providing a sleek and polished look while protecting the paint underneath.",
      imageUrl: glossFinish,
    },
    {
      id: 9,
      title: "No Residue",
      content:
        "CAMIO PPF can be removed cleanly without leaving any adhesive residue, ensuring your vehicle’s paintwork remains unblemished even after the film is removed.",
      imageUrl: noResidue,
    },
  ];

  return (
    <Box px={{ base: 2, lg: 36, md: 20, '2xl': 80 }} pt={{base:8, md:0, lg:'80px'}}>
      {/* Button Section */}
      <Button
        bg={"transparent"}
        cursor={'default'}
        margin={{ base: "auto", lg: 0 }}
        borderStyle={"solid"}
        borderRadius={"full"}
        fontWeight={'semibold'}
        fontSize={{ base: "12px", md: "15px" }} // Responsive font size
        _hover={{ bg: "transparent" }}
        borderWidth={"1px"}
        borderColor={"#E2E2E2"}
        display={"flex"}
        alignItems={"center"}
      >
        <Text pb={0}>Why choose us</Text> 
      </Button>

      {/* Heading and Description Section */}
      <Flex
        mt={6}
        flexDirection={{ base: "column", lg: "row" }}

      >
        <Heading
              fontFamily=""
          as={"h2"}
          fontWeight={600}
          width={{ base: "100%", lg: "55%" }}
          fontSize={{ base: "32px", lg: "48px" }}
          textAlign={{ base: "center", lg: "left" }}
          px={{base:0, lg:2}}
        >
          Why is CAMIO PPF the Ultimate Choice for Vehicle Protection?
        </Heading>

        <Box width={{ base: "100%", lg: "45%" }} px={{ base: 0, lg: 6 }} borderColor={'#7F7F7F'}
          borderStyle={'solid'}
          borderLeftWidth={{ base: 0, lg: 1 }}
          borderTopWidth={{ base: 0, lg: 0 }}>
          <Text
            // className="lg:border-l border-[#7F7F7F] border-t lg:border-t-0"
            borderColor={'#7F7F7F'}
            borderStyle={'solid'}
            borderLeftWidth={{ base: 0, lg: 0 }}
            borderTopWidth={{ base: 1, lg: 0 }}
            pl={{ base: 0, lg: 10 }}
            fontWeight={400}
            fontSize={{ base: "16px", md: "18px" }} // Responsive font size
            color={"#515151"}
            textAlign={{ base: 'center', lg: "left" }}
            pt={{ base: 4, lg: 0 }}
            mt={{ base: 4, lg: 0 }}
          >
            When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF
            stands out as the ultimate solution. Our Paint Protection Film (PPF)
            is engineered to offer unparalleled protection and aesthetic
            enhancement, making it the preferred choice for discerning vehicle
            owners. Here’s why CAMIO PPF is the ultimate choice:
          </Text>
          <Box px={8} py={4} my={{base:6, lg:0}} className="flex justify-center lg:block" >
            <Link href={"/products"}>
              <Button3>Learn More</Button3>
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* Accordion and Image Section */}
      <Flex mt={{base:0, lg:16}} flexDirection={{ base: 'column', lg: 'row' }} >
        {/* Left Side: Accordion */}
        <Box width={{ base: '100%', lg: "55%" }} pr={{base:0, lg:6}}>
          <Accordion allowToggle>
            {accordionData.map((item, index) => (
              <AccordionItem key={item.id} flexShrink={0}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        onClick={() => setActiveAccordion(index)}
                        _expanded={{ bg: "gray.100" }}
                        _hover={{ bg: "gray.100" }}
                        _focus={{ boxShadow: "none" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py={2}
                          gap={16}
                          display="flex"
                          alignItems="center"
                          color={isExpanded ? "black" : "gray.600"}
                        >
                          <Text fontWeight={600} mr={2}>
                            {item.id}.
                          </Text>
                          <Text fontWeight={600}>{item.title}</Text>
                        </Box>
                        <AccordionIcon color={isExpanded ? "black" : "gray.500"} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0} mt={2} mx={0} py={3}>
                      {item.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

        </Box>

        {/* Right Side: Image */}
        <Box width={"45%"} px={8} display={{ base: 'none', lg: 'block' }}>
          <Image
            src={accordionData[activeAccordion].imageUrl}
            alt={`Accordion ${accordionData[activeAccordion].title} Image`}
            borderRadius="lg"
            boxShadow="md"
            width={200}
            height={500}
            className="w-auto h-[512px] rounded-xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyUs;
