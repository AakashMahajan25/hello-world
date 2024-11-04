import React from 'react';
import { Flex, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

// Define the values in an array of objects
const valuesData = [
  {
    title: 'Quality',
    description: 'We are committed to offering only the highest quality products, rigorously tested to ensure they meet our exacting standards.',
  },
  {
    title: 'Innovation',
    description: 'Innovation drives us. We continually invest in research and development to bring you the latest in paint protection technology.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with our clients to provide exceptional service and products tailored to their needs.',
  },
  {
    title: 'Integrity',
    description: 'We believe in transparency and honesty in all our dealings, ensuring you can trust CAMIO PPF to protect your investment.',
  },
];

const Values = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Heading
              fontFamily="" pb={{base:8, lg:0}} py={{base:0, lg:16}} fontSize={{base:'3xl', lg:"5xl"}} fontWeight="700" lineHeight="37px">
        Our Values
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 4 }} w="100%" spacing={6}>
        {valuesData.map((value, index) => (
          <Box
            key={index}
            textAlign="center"
            px={{base:2, lg:4}}
            py={4}
            position="relative"
            borderBottom={{ base: index < valuesData.length - 1 ? '3px solid' : 'none', lg: 'none' }}
            borderColor={{ base: 'transparent', lg: 'transparent' }}
            _before={
              index < valuesData.length - 1 && {
                content: '""',
                position: 'absolute',
                height: { base: '3px', lg: '100%' },
                width: { base: '0', lg: '3px' },
                top: { base: 'auto', lg: 0 },
                bottom: { base: 0, lg: 'auto' },
                right: { base: 'auto', lg: 0 },
                left: { base: 0, lg: 'auto' },
                bgGradient: {
                  base: 'transparent',
                  lg: 'linear(to-b, rgba(76, 111, 255, 0) 0%, #4C6FFF 50%, rgba(76, 111, 255, 0) 100%)',
                },
              }
            }
          >
            <Heading
              fontFamily="" fontSize="20px" fontWeight="700" lineHeight="21.78px" mb={2}>
              {value.title}
            </Heading>
            <Text fontSize="18px" fontWeight="400" lineHeight="21.78px">
              {value.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Values;

