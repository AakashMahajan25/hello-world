"use client";
import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Heading,
  Text,
  useToast,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Progress,
  Badge,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function WarrantyStatus() {
  const [warrantyId, setWarrantyId] = useState('');
  const [warrantyDetails, setWarrantyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSearch = async () => {
    if (!warrantyId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a warranty ID",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/warranty/status?warrantyId=${warrantyId}`);
      const data = await response.json();

      if (data.success) {
        setWarrantyDetails(data.warranty);
      } else {
        toast({
          title: "Not Found",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setWarrantyDetails(null);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch warranty details",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading textAlign="center">Check Warranty Status</Heading>
        
        <Box w="full">
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Enter Warranty ID"
              value={warrantyId}
              onChange={(e) => setWarrantyId(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </InputGroup>
          <Button
            mt={4}
            colorScheme="yellow"
            bg="#FFBB4E"
            size="lg"
            width="full"
            onClick={handleSearch}
            isLoading={isLoading}
          >
            Check Status
          </Button>
        </Box>

        {warrantyDetails && (
          <Card w="full" variant="outline">
            <CardHeader>
              <Heading size="md">
                Warranty Details
                <Badge
                  ml={2}
                  colorScheme={
                    warrantyDetails.status === 'APPROVED' ? 'green' :
                    warrantyDetails.status === 'REJECTED' ? 'red' :
                    warrantyDetails.status === 'PENDING' ? 'yellow' : 'gray'
                  }
                >
                  {warrantyDetails.status}
                </Badge>
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing={4}>
                <Box>
                  <Text fontSize="sm" color="gray.500">Warranty Status</Text>
                  <Progress
                    mt={2}
                    value={Math.min((warrantyDetails.yearsLeft / 5) * 100, 100)}
                    colorScheme={
                      warrantyDetails.status === 'APPROVED' ? 'green' :
                      warrantyDetails.status === 'REJECTED' ? 'red' :
                      warrantyDetails.status === 'PENDING' ? 'yellow' : 'gray'
                    }
                    borderRadius="full"
                  />
                  <Text mt={2} fontWeight="bold">
                    {warrantyDetails.status === 'REJECTED' 
                      ? 'Warranty has been rejected'
                      : warrantyDetails.status === 'PENDING'
                      ? 'Approval pending from Admin'
                      : warrantyDetails.isExpired 
                        ? 'Warranty has expired'
                        : `${warrantyDetails.yearsLeft} years remaining`
                    }
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500">Customer Details</Text>
                  <Text fontWeight="bold">{warrantyDetails.customerName}</Text>
                  <Text>{warrantyDetails.phoneNumber}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500">Vehicle Details</Text>
                  <Text>Car Number: {warrantyDetails.carNumber}</Text>
                  <Text>Chassis Number: {warrantyDetails.chassisNumber}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500">PPF Details</Text>
                  <Text>Category: {warrantyDetails.ppfCategory}</Text>
                  <Text>Roll Code: {warrantyDetails.camioRollCode}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500">Important Dates</Text>
                  <Text>Registration Date: {formatDate(warrantyDetails.createdAt)}</Text>
                  <Text>Expiry Date: {formatDate(warrantyDetails.expiryDate)}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500">Installation Details</Text>
                  <Text>Studio: {warrantyDetails.detailerStudioName}</Text>
                  <Text>Location: {warrantyDetails.location}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        )}
      </VStack>
    </Container>
  );
}
