"use client";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react"; // Import useState for state management
import AnimButton from "../../components/props/Button";
import Link from "next/link";


const FAQData = [
  {
    question: "What is Paint Protection Film (PPF)?",
    answer:
      "Paint Protection Film (PPF) is a transparent film applied to a vehicle's surface to protect it from scratches, stone chips, and environmental damage. CAMIO PPF also enhances the appearance by providing an ultra-high gloss finish.",
  },
  {
    question: "What are the key features of CAMIO PPF?",
    answer:
      "CAMIO PPF offers self-healing properties, hydrophobic capabilities (water repellent), ultra-high gloss, durability, and protection from yellowing. It also comes at a competitive price compared to other premium brands.",
  },
  {
    question: "What is the difference between TPU and TPH films?",
    answer:
      "CAMIO TPU films are more durable, stretchable, and offer better resistance, with a 5-year warranty. TPH films are less strong and flexible but still provide excellent protection and come with a 3-year warranty. Both have a thickness of 190 microns and share self-healing and hydrophobic features.",
  },
  {
    question: "Can CAMIO PPF be installed on any type of vehicle?",
    answer:
      "Yes, CAMIO PPF can be applied to cars, motorcycles, and other types of vehicles. It’s designed to protect all kinds of painted surfaces.",
  },
  {
    question: "Is CAMIO PPF easy to install?",
    answer:
      "While CAMIO PPF can be installed by professionals for optimal results, it is designed to be user-friendly for experienced installers. We recommend consulting with an expert for the best application and long-term protection.",
  },
  {
    question: "How does CAMIO PPF’s self-healing feature work?",
    answer:
      "CAMIO PPF is made with an advanced polymer that can self-heal minor scratches and swirls. When exposed to heat (from the sun or a heat gun), the film restores itself, maintaining a pristine appearance.",
  },
  {
    question: "How long does CAMIO PPF last?",
    answer:
      "CAMIO TPU PPF has a 5-year warranty, while CAMIO TPH PPF has a 3-year warranty. Both films are designed to provide long-term protection against environmental damage.",
  },
  {
    question: "What maintenance does CAMIO PPF require?",
    answer:
      "CAMIO PPF requires minimal maintenance. Simply wash your vehicle regularly to remove dirt and debris. Avoid using abrasive chemicals or high-pressure washing directly on the film.",
  },
  {
    question: "Does CAMIO PPF affect the vehicle’s paint?",
    answer:
      "No, CAMIO PPF is non-invasive and designed to protect your paint without altering or damaging it. In fact, it adds a layer of protection, keeping your paint looking new.",
  },
  {
    question: "Can CAMIO PPF be removed?",
    answer:
      "Yes, CAMIO PPF can be removed without causing damage to the vehicle’s paint. However, it is recommended that removal be done by a professional.",
  },
  {
    question: "What vehicles are ideal for CAMIO PPF application?",
    answer:
      "CAMIO PPF is ideal for all vehicle types, from luxury cars and motorcycles to commercial vehicles, protecting them from daily wear, UV exposure, and environmental damage.",
  },
  {
    question: "Is CAMIO PPF available internationally?",
    answer:
      "Yes, CAMIO PPF is available globally. We offer shipping to various countries. Contact us for details regarding availability in your region.",
  },
  {
    question: "How do I purchase CAMIO PPF?",
    answer:
      "You can purchase CAMIO PPF by contacting us directly through the website, or by visiting our authorized dealers. For more information, check out our 'Contact Us' page.",
  },
  {
    question: "How does CAMIO PPF compare to other brands?",
    answer:
      "CAMIO PPF offers premium features like self-healing, hydrophobic coating, and durability at a more affordable price than many competitors. Our film also provides superior clarity and high gloss, ensuring your vehicle looks its best.",
  },
  {
    question: "Does CAMIO PPF prevent yellowing?",
    answer:
      "Yes, CAMIO PPF is designed to resist yellowing over time, maintaining its clarity and protective properties for years.",
  },
  {
    question:
      "What should I do if I notice bubbles or imperfections after installation?",
    answer:
      "Small bubbles or imperfections can sometimes occur after installation. They typically disappear on their own within a few days as the film settles. If they persist or if you have concerns, contact your installer for assistance.",
  },
  {
    question: "How does CAMIO PPF perform in extreme weather conditions?",
    answer:
      "CAMIO PPF is designed to withstand extreme weather conditions, including high temperatures, heavy rain, and UV exposure. It offers robust protection against environmental damage.",
  },
  {
    question: "What factors influence the cost of CAMIO PPF?",
    answer:
      "The cost of CAMIO PPF can vary based on the size of the vehicle, the type of film chosen (TPU vs. TPH), and the complexity of the installation. For an accurate quote, please contact us or visit an authorized dealer.",
  },
  {
    question: "Is CAMIO PPF worth the investment?",
    answer:
      "CAMIO PPF is a valuable investment for protecting your vehicle's paint from damage, enhancing its appearance, and potentially increasing its resale value. Its durability and long-term benefits often outweigh the initial cost.",
  },
  {
    question: "Can I install CAMIO PPF myself?",
    answer:
      "While CAMIO PPF is designed to be user-friendly for experienced installers, we recommend professional installation for optimal results and to avoid potential issues.",
  },
  {
    question: "Do you provide installation services for CAMIO PPF?",
    answer:
      "We do not offer installation services directly. We recommend consulting with professional installers who are experienced with applying paint protection films to ensure the best results.",
  },
];

const FaqItem = ({ question, answer }) => (
  <AccordionItem
    border="none"
    mb={4}
    borderRadius="md"
    maxW="100%"
    mr={8}
    background="linear-gradient(96.56deg, rgba(194, 218, 218, 0.3) 27.8%, rgba(240, 237, 226, 0.3) 53.91%)"
  >
    {({ isExpanded }) => (
      <>
        <AccordionButton p={4} borderRadius="md" _hover={{ bg: "transparent" }}>
          <Flex flex="1" justify="space-between" align="center">
            <Text
              align="left"
              fontSize={{ base: "18", lg: "22" }}
              fontWeight={500}
            >
              {question}
            </Text>

            <Text fontSize="2xl" ml={2}>
              {isExpanded ? "×" : "+"}
            </Text>
          </Flex>
        </AccordionButton>
        <AccordionPanel
          pb={4}
          px={4}
          transition="max-height 0.3s ease-in-out, opacity 0.3s ease-in-out"
          maxHeight={isExpanded ? "200px" : "0px"}
          overflow="hidden"
        >
          <Text
            color="#6C6C6C"
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight={400}
          >
            {answer}
          </Text>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
);

const Faq = () => {
  // State to manage the number of questions to show
  const [visibleCount, setVisibleCount] = useState(4);

  // Handler for showing more questions
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="top"
      justify="space-between"
      w="100%"
      maxW="100vw"
      mx={4}
      py={32}
      px={{ base: 6, lg: 40, "2xl": 80 }}
    >
      <Box textAlign="start" mb={8} w={{ base: "100%", md: "35%" }}>
        <Heading
              fontFamily=""
          fontSize={{ base: "35px", lg: "45px" }}
          fontWeight={600}
          mb={6}
        >
          Frequently Asked Questions
        </Heading>
        <Link href={`/contact?subject=Enquiry`} >
        <AnimButton
          fontSize="18.98px"
          fontWeight={500}
          _hover={{ bg: "transparent" }}
        >
          Customer Support
        </AnimButton></Link>
      </Box>

      <Flex
        wrap="wrap"
        justify="flex-end"
        alignItems="flex-end"
        gap={4}
        w={{ base: "100%", md: "60%" }}
      >
        <Accordion allowToggle w="100%">
          {FAQData.slice(0, visibleCount).map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Accordion>

        {visibleCount < FAQData.length && (
          <Button
            variant="link"
            colorScheme="black"
            alignSelf="flex-end"
            rightIcon={<FiChevronDown />}
            mt={4}
            mr={6}
            onClick={showMore} // Call the showMore function when clicked
            _hover={{ bg: "transparent", color: "inherit" }}
          >
            More Questions
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Faq;
