import React from "react";
import { Box, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";


const NotFound = () => {
  return (
    <Box
      textAlign="center"
      py={24}
      px={6}
      minH="100vh"
     
      display="flex"
      justifyContent="center"
    //   alignItems="center"
    >
      <VStack spacing={6} maxW="md">
        
        <Heading as="h1" size="4xl" color="yellow.600">
          404
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </Text>
        <Text color="gray.500" fontSize="sm">
          You may have mistyped the address or the page might have moved.
        </Text>
        <Link href={'/'}>
          <Button
            leftIcon={<FiArrowLeft />}
            colorScheme="yellow"
            variant="solid"
            mt={6}
          >
            Back to Home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound;
