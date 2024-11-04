import React from 'react';
import { Box, Heading, Text, Flex, Container, Stack, Circle } from '@chakra-ui/react';
import Image from 'next/image';
import carimg from '@/assets/carimage.png'
import Button3 from '../props/Button3';



const WhyChoose = () => {
  const features = [
    {
      number: 1,
      title: "Superior durability",
      description: "Best-in-class durability and flexibility for top-tier protection."
    },
    {
      number: 2,
      title: "Corrosion-resistant",
      description: "High resistance to environmental damage and chemical corrosion."
    },
    {
      number: 3,
      title: "Super Quality",
      description: "Ideal for luxury and high-end vehicles where aesthetics and protection matter equally."
    }
  ];

  return (
    <Container maxW="7xl" py={12}>
      <Box position="relative">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={8}
          align="center"
        >
          {/* Image Section */}
          <Box flex="1" position="relative">
            <Box
              bg="navy.900"
              position="absolute"
              top={4}
              left={4}
              px={4}
              py={2}
              borderRadius="md"
              zIndex={1}
            >
              <Button3 >
                Why Choose CAMIO TPU
              </Button3>
            </Box>
            <Image
              src={carimg}
              alt="Blue SUV"
              width={900}
              height={700}
              borderRadius="lg"

            />
          </Box>

          {/* Features Section */}
          <Stack flex="1" spacing={{ base: 6, lg: 8 }} transform={{ base: "translateX(0px)", lg: "translateX(-50px)" }} pt={{ base: 0, lg: 6 }}>
            {features.map((feature) => (
              <Flex key={feature.number} gap={{ base: 0, lg: 4 }} align="flex-start">
                <Circle
                  size="40px"
                  bg="#FFD700"
                  color="black"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  {feature.number}
                </Circle>
                <Box px={10}>
                  <Heading
              fontFamily="" size="lg" mb={{ base: 0, lg: 2 }}>
                    {feature.title}
                  </Heading>
                  <Text color="gray.600" minH={42}>
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default WhyChoose;