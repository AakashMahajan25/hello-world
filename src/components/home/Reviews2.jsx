'use client'
import React from 'react';
import { Box, Flex, Text, Avatar, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { FiChevronRight } from "react-icons/fi";

const Reviews2 = () => {
  
  const reviews = [
    {
      text: "Camio PPF transformed our vehicle protection. The high gloss finish delivers a stunning shine, and the self-healing technology keeps it pristine—an invaluable investment.",
      author: "Charlotte Hanlin",
      designation: "Co-Founder, Heroes Digital",
      rating: 4.8,
    },
    {
      text: "Camio PPF is a game-changer! The glossy finish looks incredible, and the self-healing feature ensures it stays flawless. Highly recommend for any vehicle owner.",
      author: "Novák Balázs",
      designation: "Co-Founder, WoCommerce",
      rating: 4.8,
    },
    {
      text: "With Camio PPF, my car looks stunning every day. The high gloss finish and self-healing properties make it a fantastic investment for any luxury vehicle.",
      author: "Orosz Boldizsár",
      designation: "Founder, Okta",
      rating: 4.8,
    },
    {
      text: "This website exceeded my expectations! The high gloss finish is beautiful, and the self-healing technology keeps my car looking new!",
      author: "Floyd Miles",
      designation: "Co-Founder, Slack",
      rating: 4.8,
    },
    {
      text: "I'm thrilled with Camio PPF! The glossy shine enhances my vehicle's appearance, and the protection it offers is top-notch. It's a must-have for any car enthusiast.",
      author: "Darrell Steward",
      designation: "Co-Founder, Heroes Digital",
      rating: 4.8,
    },
    {
      text: "My car looks stunning with its high gloss finish. The self-healing feature is fantastic, making it the perfect choice for everyday protection!",
      author: "Devon Lane",
      designation: "Marketing, Google",
      rating: 4.8,
    },
  ];

  return (
    <Box maxW="1200px" mx={{base:"14px", lg:'auto'}} py={10} px={4} bgGradient="linear(96.56deg, rgba(158, 194, 194, 0.3) 27.8%, rgba(213, 203, 159, 0.3) 53.91%)" borderRadius={'24px'} mt={10}>
      
        <Button
        bg={"white"}
        marginX={{ base: "auto", lg: 'auto' }}
        borderStyle={"solid"}
        borderRadius={"full"}
        fontWeight={500}
        fontSize={{ base: "12px", md: "16px" }} // Responsive font size
        _hover={{ bg: "white" }}
        borderWidth={"1px"}
        borderColor={"#E2E2E2"}
        display={"flex"}
        alignItems={"center"}
        height={'30px'}
        my={8}
        py={5}
      >
        <Text pb={{base:0, lg:0}}>Testimonial</Text> <FiChevronRight />
      </Button>
    
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        What Our Customers Are Saying About CAMIO PPF
      </Text>
      <Flex wrap="wrap" justify="center" gap={6}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            maxW="320px"
            bg="white"
            shadow="lg"
            borderRadius="lg"
            p={6}
            textAlign="left"
          >
            <VStack spacing={4} align="flex-start">
              <HStack>
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon
                    as={FaStar}
                    key={i}
                    color={i < Math.floor(review.rating) ? 'yellow.400' : 'gray.300'}
                  />
                ))}
                <Text>{review.rating}</Text>
              </HStack>
              <Text fontWeight={'semibold'} minH={'144px'}>&quot;{review.text}&quot;</Text>
              <HStack spacing={3}>
                <Avatar name={review.author} />
                <VStack spacing={0} align="flex-start">
                  <Text fontWeight="bold">{review.author}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {review.designation}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Reviews2;
