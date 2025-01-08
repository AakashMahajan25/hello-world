"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const InquiryDetail = () => {
  const params = useParams();
  const router = useRouter();
  const inquiry = JSON.parse(decodeURIComponent(params.id));

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
              <Heading size="xs" color="gray.400">Name</Heading>
              <Text pt={2} color="gray.200">{inquiry.name}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Email</Heading>
              <Text pt={2} color="blue.300">{inquiry.email}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Phone</Heading>
              <Text pt={2} color="green.200">{inquiry.phone}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Purpose</Heading>
              <Text pt={2} color="gray.200">{inquiry.purpose}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Business Name</Heading>
              <Text pt={2} color="gray.200">{inquiry.businessName}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Location</Heading>
              <Text pt={2} color="gray.200">{inquiry.location}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Message</Heading>
              <Text pt={2} color="gray.300">{inquiry.inquiryMessage}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Date</Heading>
              <Text pt={2} color="gray.400">
                {new Date(inquiry.createdAt).toLocaleString()}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default InquiryDetail; 