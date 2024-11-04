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

const ContactDetail = () => {
  const params = useParams();
  const router = useRouter();
  const contact = JSON.parse(decodeURIComponent(params.id));

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
              <Text pt={2} color="gray.200">{contact.name}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Email</Heading>
              <Text pt={2} color="blue.300">{contact.email}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Phone Number</Heading>
              <Text pt={2} color="green.200">{contact.phoneNumber}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Subject</Heading>
              <Text pt={2} color="gray.200">{contact.subject}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Message</Heading>
              <Text pt={2} color="gray.300">{contact.message}</Text>
            </Box>
            <Box>
              <Heading size="xs" color="gray.400">Timestamp</Heading>
              <Text pt={2} color="gray.400">
                {new Date(contact.timestamp).toLocaleString()}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ContactDetail;
