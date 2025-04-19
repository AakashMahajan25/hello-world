"use client";
import React, { useState } from 'react';
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

const WarrantyDetails = () => {
  const params = useParams();
  const router = useRouter();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const cancelRef = React.useRef();
  
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

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetchWithAuth(
        `/api/warranty/delete?warrantyId=${warranty._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete warranty');
      }

      toast({
        title: 'Warranty deleted successfully',
        status: 'success',
        duration: 3000,
      });

      router.push('/admin/warranties');
    } catch (error) {
      toast({
        title: 'Error deleting warranty',
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
          Delete Warranty
        </Button>
      </Box>
      
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Warranty
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this warranty? This action cannot be undone.
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

export default WarrantyDetails;