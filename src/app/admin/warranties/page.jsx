'use client';
import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
} from '@chakra-ui/react';

export default function WarrantiesPage() {
  const [warranties, setWarranties] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalWarranties, setTotalWarranties] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchWarranties = async () => {
    try {
      const queryParams = new URLSearchParams({
        page,
        limit,
        search: searchQuery,
        sortField: 'createdAt',
        sortOrder: 'desc',
      });

      const response = await fetch(`/api/warranty/get?${queryParams}`);
      const data = await response.json();

      setWarranties(data.data);
      setTotalWarranties(data.total);
    } catch (error) {
      console.error('Error fetching warranties:', error);
    }
  };

  useEffect(() => {
    fetchWarranties();
  }, [page, limit, searchQuery]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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

  return (
    <Box p={4}>
      <Box mb={6}>
        <Heading as="h1" size="lg" mb={4}>
          Warranties
        </Heading>
        <Input
          placeholder="Search warranties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          maxW="320px"
        />
      </Box>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Warranty ID</Th>
              <Th>Customer Name</Th>
              <Th>Phone Number</Th>
              <Th>Car Number</Th>
              <Th>Detailer Studio</Th>
              <Th>Status</Th>
              <Th>Created At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {warranties.map((warranty) => (
              <Tr key={warranty._id}>
                <Td fontWeight="medium">{warranty.warrantyId}</Td>
                <Td>{warranty.customerName}</Td>
                <Td>{warranty.phoneNumber}</Td>
                <Td>{warranty.carNumber}</Td>
                <Td>{warranty.detailerStudioName}</Td>
                <Td>{getStatusBadge(warranty.status)}</Td>
                <Td>{new Date(warranty.createdAt).toLocaleDateString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack justify="space-between" mt={4} p={4}>
        <HStack spacing={4}>
          <Button
            onClick={() => handlePageChange(page - 1)}
            isDisabled={page === 1}
            size="sm"
          >
            Previous
          </Button>
          <Text>
            Page {page} of {Math.ceil(totalWarranties / limit)}
          </Text>
          <Button
            onClick={() => handlePageChange(page + 1)}
            isDisabled={warranties.length < limit}
            size="sm"
          >
            Next
          </Button>
        </HStack>
        <Text fontSize="sm">
          Total entries: {totalWarranties}
        </Text>
      </HStack>
    </Box>
  );
} 