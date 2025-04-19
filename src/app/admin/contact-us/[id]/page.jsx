"use client";
import React, { useState } from 'react';
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

const ContactDetail = () => {
  const params = useParams();
  const router = useRouter();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const cancelRef = React.useRef();
  
  const contact = JSON.parse(decodeURIComponent(params.id));

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetchWithAuth(
        `/api/contact-us/delete?contactId=${contact._id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      toast({
        title: 'Contact deleted successfully',
        status: 'success',
        duration: 3000,
      });

      router.push('/admin/contact-us');
    } catch (error) {
      toast({
        title: 'Error deleting contact',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

  return (
    <Box p={8}>
      <Box mb={6} display="flex" justifyContent="space-between">
        <Button 
          onClick={() => router.back()}
          colorScheme="blue"
        >
          Back to List
        </Button>
        <Button
          colorScheme="red"
          onClick={() => setIsOpen(true)}
          isLoading={isDeleting}
        >
          Delete Contact
        </Button>
      </Box>
      
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Contact
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this contact? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3} isLoading={isDeleting}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ContactDetail;
