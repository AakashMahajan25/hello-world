"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Badge,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

const WarrantyDetails = () => {
  const params = useParams();
  const router = useRouter();
  const warranty = JSON.parse(decodeURIComponent(params.id));

  const getStatusBadge = (status) => {
    const statusProps = {
      active: { colorScheme: 'green' },
      expired: { colorScheme: 'red' },
      default: { colorScheme: 'gray' },
    };

    return (
      <Badge {...(statusProps[status] || statusProps.default)}>
        {status}
      </Badge>
    );
  };

  const fetchWarrantyDetails = async (warrantyId) => {
    try {
      const response = await fetchWithAuth(`/api/warranty/get?warrantyId=${warrantyId}`);
      if (!response.ok) throw new Error('Failed to fetch warranty details');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <Box p={8}>
      <Button 
        mb={6} 
        onClick={() => router.back()}
        colorScheme="blue"
      >
        Back to List
      </Button>
      
      <Card bg="gray.800" borderColor="gray.700">
        <CardBody>
          <Stack divider={<StackDivider borderColor="gray.700" />} spacing={4}>
            <Box>
              <Heading size="xs" color="gray.400">Warranty ID</Heading>
              <Text pt={2} color="gray.200">{warranty.warrantyId}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Customer Name</Heading>
              <Text pt={2} color="gray.200">{warranty.customerName}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Phone Number</Heading>
              <Text pt={2} color="green.200">{warranty.phoneNumber}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Car Number</Heading>
              <Text pt={2} color="gray.200">{warranty.carNumber}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Detailer Studio</Heading>
              <Text pt={2} color="gray.200">{warranty.detailerStudioName}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Status</Heading>
              <Box pt={2}>
                {getStatusBadge(warranty.status)}
              </Box>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Created At</Heading>
              <Text pt={2} color="gray.400">
                {new Date(warranty.createdAt).toLocaleString()}
              </Text>
            </Box>
            {warranty.expiryDate && (
              <Box>
                <Heading size="xs" color="gray.400">Expiry Date</Heading>
                <Text pt={2} color="gray.400">
                  {new Date(warranty.expiryDate).toLocaleString()}
                </Text>
              </Box>
            )}
            {warranty.description && (
              <Box>
                <Heading size="xs" color="gray.400">Description</Heading>
                <Text pt={2} color="gray.300">{warranty.description}</Text>
              </Box>
            )}
            <Box>
              <Heading size="xs" color="gray.400">Car Image</Heading>
              {warranty.carImageUrl ? (
                <Image 
                  src={warranty.carImageUrl}
                  alt="Car Image"
                  maxW="400px"
                  mt={2}
                  borderRadius="md"
                />
              ) : (
                <Text pt={2} color="gray.500" fontStyle="italic">No car image available</Text>
              )}
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">RC Image</Heading>
              {warranty.rcImage ? (
                <Image 
                  src={warranty.rcImage}
                  alt="RC Image"
                  maxW="400px"
                  mt={2}
                  borderRadius="md"
                />
              ) : (
                <Text pt={2} color="gray.500" fontStyle="italic">No RC image available</Text>
              )}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default WarrantyDetails; 