'use client';
import React from 'react';
import { Box, Text, VStack, HStack, Button } from '@chakra-ui/react';

const Reviews2 = () => {
  const reviews = [
    {
      text: "The CAMIO TPU Clear Gloss has completely transformed my car’s look. It adds an incredible mirror-like shine that catches everyone’s attention. Plus, it protects the paint perfectly—worth every bit!",
      author: "Amit P.",
      rating: 5,
    },
    {
      text: "I tried the TPH Clear Gloss on my SUV, and it’s exactly what I needed. It’s protective, easy to clean, and has a nice shine. Perfect for everyday use!",
      author: "Rajesh K.",
      rating: 5,
    },
    {
      text: "I got the CAMIO TPU Black Gloss, and I’m thrilled with the self-healing feature. Minor scratches disappear with a little warmth, and the glossy finish makes the car shine. Highly recommended.",
      author: "Arjun M.",
      rating: 5,
    },
    {
      text: "I’ve had the CAMIO TPU Clear Gloss on my car for months now, and it’s still as glossy as day one. It’s incredibly durable and has held up even in rough weather conditions. Super satisfied!",
      author: "Priyanka S.",
      rating: 5,
    },
    {
      text: "The CAMIO TPH Matte was exactly what I was looking for. It has a great matte finish, and the protection is noticeable. I feel like I got a premium product without the premium price tag!",
      author: "Karan P.",
      rating: 5,
    },
    {
      text: "With CAMIO’s TPU series, I don’t worry about scratches or fading. The hydrophobic layer works wonders, especially during the rainy season. My car always looks polished.",
      author: "Vishal T.",
      rating: 4,
    },
  ];

  return (
    <Box
      maxW="1200px"
      mx={{ base: "14px", lg: "auto" }}
      py={10}
      px={4}
      bgGradient="linear(96.56deg, rgba(158, 194, 194, 0.3) 27.8%, rgba(213, 203, 159, 0.3) 53.91%)"
      borderRadius="24px"
      mt={{base:10, lg:'120px'}}
    >
      <Button
        bg="white"
        marginX={{ base: "auto", lg: "auto" }}
        borderStyle="solid"
        borderRadius="full"
        fontWeight={500}
        fontSize={{ base: "12px", md: "16px" }}
        _hover={{ bg: "white" }}
        borderWidth="1px"
        borderColor="#E2E2E2"
        display="flex"
        alignItems="center"
        height="30px"
        my={8}
        py={5}
      >
        <Text>Testimonial</Text>
      </Button>

      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        What Our Customers Are Saying About CAMIO PPF
      </Text>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={6}
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <VStack align="start" spacing={4}>
              <HStack>
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.884a1 1 0 00-1.176 0l-3.973 2.884c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L.98 9.401c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </HStack>
              <Text fontSize="lg">{review.text}</Text>
            </VStack>
            <Text mt={4} fontWeight="bold" color="gray.500">
              @{review.author}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews2;
