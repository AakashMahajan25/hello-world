"use client";
import React, { useEffect, useState } from "react";
import { 
  Table, Thead, Tbody, Tr, Th, Td, TableContainer, 
  Box, Button, Input, Spinner, Text, Heading
} from "@chakra-ui/react";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const fetchData = async (currentPage = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/inquiries?page=${currentPage}&search=${searchQuery}`
      );
      if (searchQuery) {
        const filteredData = response.data.data.filter(item => 
          Object.values(item).some(value => 
            value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setData(filteredData);
        setTotalPages(Math.ceil(filteredData.length / 10));
      } else {
        setData(response.data.data);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, search);
  }, [page, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <Box p={4} color={'white'}>
      <Heading mb={6} color="gray.100">Inquiries</Heading>
      <Input 
        placeholder="Search anything..." 
        value={search} 
        onChange={handleSearch} 
        mb={4} 
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Phone</Th>
                  <Th>Email</Th>
                  <Th>Purpose</Th>
                  <Th>Business Name</Th>
                  <Th>Location</Th>
                  <Th>Message</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((inquiry) => (
                  <Tr key={inquiry._id}>
                    <Td>{inquiry.name}</Td>
                    <Td>{inquiry.phone}</Td>
                    <Td>{inquiry.email}</Td>
                    <Td>{inquiry.purpose}</Td>
                    <Td>{inquiry.businessName}</Td>
                    <Td>{inquiry.location}</Td>
                    <Td>{inquiry.inquiryMessage}</Td>
                    <Td>{new Date(inquiry.createdAt).toLocaleString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
            <Button onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </Button>
            <Text>Page {page} of {totalPages}</Text>
            <Button onClick={handleNextPage} disabled={page === totalPages}>
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Page;
