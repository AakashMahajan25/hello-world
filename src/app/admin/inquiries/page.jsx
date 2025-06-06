'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner
} from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import TableLoader from '@/components/TableLoader';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

const Page = () => {
  const router = useRouter();
  const [inquiries, setInquiries] = useState([]);
  const [sorting, setSorting] = useState([{ id: 'createdAt', desc: true }]); // Changed to sort by createdAt descending
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async (page = 1, limit = 10) => {
      try {
        setLoading(true);
        const response = await fetchWithAuth(`/api/inquiries?page=${page}&limit=${limit}`);
        if (!response.ok) throw new Error('Failed to fetch inquiries');
        const data = await response.json();
        // Sort data by createdAt in descending order
        const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setInquiries(sortedData);
      } catch (error) {
        console.error('Error:', error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="font-medium text-gray-200 max-w-[150px] truncate">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => (
        <div className="px-2 py-1 rounded-md bg-green-900 text-green-200 inline-block max-w-[130px] truncate">
          {row.getValue("phone")}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("email")}
        </div>
      ),
    },
    {
      accessorKey: "purpose",
      header: "Purpose",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("purpose")}
        </div>
      ),
    },
    {
      accessorKey: "businessName",
      header: "Business Name",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("businessName")}
        </div>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("location")}
        </div>
      ),
    },
    {
      accessorKey: "inquiryMessage",
      header: "Message",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("inquiryMessage")}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => (
        <div className="text-sm text-gray-400 max-w-[150px] truncate">
          {new Date(row.getValue("createdAt")).toLocaleDateString()}
        </div>
      ),
    },
    {
      accessorKey: "_id",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => {
            const inquiry = row.original;
            const encodedData = encodeURIComponent(JSON.stringify(inquiry));
            router.push(`/admin/inquiries/${encodedData}`);
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: inquiries,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const searchValue = filterValue.toLowerCase();
      const values = Object.values(row.original)
        .map(val => val?.toString().toLowerCase() || '');
      return values.some(val => val.includes(searchValue));
    },
  });

  if (loading) return (
    <Box p={8} bg="gray.900">
      <Heading mb={6} color="gray.100">Inquiries</Heading>
      <TableLoader />
    </Box>
  );

  if (error) return (
    <Box p={8} bg="gray.900">
      <Heading color="red.500">{error}</Heading>
    </Box>
  );

  return (
    <Box p={8} bg="gray.900">
      <Heading mb={6} color="gray.100">Inquiries</Heading>

      <div className="flex items-center py-4">
        <Input
          placeholder="Search all fields..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
          color="gray.200"
          bg="gray.800"
          borderColor="gray.600"
          _hover={{ borderColor: "gray.500" }}
          _focus={{ borderColor: "blue.400", boxShadow: "none" }}
        />
        <Menu>
          <MenuButton as={Button} variant="outline" className="ml-auto" color="blue.500" borderColor="gray.600" _hover={{ bg: "blue.500", color: "white" }}>
            Columns
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.600">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <MenuItem
                  key={column.id}
                  className="capitalize"
                  onClick={() => column.toggleVisibility(!column.getIsVisible())}
                  color="gray.200"
                  _hover={{ bg: "gray.700" }}
                  bg="gray.800"
                >
                  <input
                    type="checkbox"
                    checked={column.getIsVisible()}
                    onChange={() => {}}
                    className='mr-2'
                  />
                  {column.id}
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
      </div>

      <div className="rounded-md border border-gray-700 overflow-x-scroll">
        <ChakraTable variant="simple">
          <Thead bg="gray.800">
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th 
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                    color="gray.200"
                    borderColor="gray.600"
                    _hover={{ bg: "gray.700" }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted()] ?? null}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id} _hover={{ bg: "gray.700" }} bg="gray.800">
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} borderColor="gray.600">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-300">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            color="gray.200"
            bg="gray.800"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize} style={{backgroundColor: '#1A202C', color: '#E2E8F0'}}>
                {pageSize}
              </option>
            ))}
          </Select>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          color="gray.200"
          borderColor="gray.600"
          _hover={{ bg: "gray.700" }}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          color="gray.200"
          borderColor="gray.600"
          _hover={{ bg: "gray.700" }}
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default Page;
