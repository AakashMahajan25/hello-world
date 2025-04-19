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
  Badge
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
  const [warranties, setWarranties] = useState([]);
  const [sorting, setSorting] = useState([{ id: 'createdAt', desc: true }]); // Set default sorting
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWarranties = async () => {
      try {
        setLoading(true);
        const response = await fetchWithAuth('/api/warranty/get');
        if (!response.ok) throw new Error('Failed to fetch warranties');
        const data = await response.json();
        setWarranties(data.data || []);
      } catch (error) {
        console.error('Error:', error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchWarranties();
  }, []);

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

  const columns = [
    {
      accessorKey: "warrantyId",
      header: "Warranty ID",
      cell: ({ row }) => (
        <div className="font-medium text-gray-200 max-w-[150px] truncate">
          {row.getValue("warrantyId")}
        </div>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("customerName")}
        </div>
      ),
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => (
        <div className="px-2 py-1 rounded-md bg-green-900 text-green-200 inline-block max-w-[130px] truncate">
          {row.getValue("phoneNumber")}
        </div>
      ),
    },
    {
      accessorKey: "carNumber",
      header: "Car Number",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[120px] truncate">
          {row.getValue("carNumber")}
        </div>
      ),
    },
    {
      accessorKey: "detailerStudioName",
      header: "Detailer Studio",
      cell: ({ row }) => (
        <div className="text-gray-300 max-w-[150px] truncate">
          {row.getValue("detailerStudioName")}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="max-w-[100px] truncate">
          {getStatusBadge(row.getValue("status"))}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
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
            const warranty = row.original;
            const encodedData = encodeURIComponent(JSON.stringify(warranty));
            router.push(`/admin/warranties/${encodedData}`);
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: warranties,
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
    <Box p={8}>
      <Heading mb={6} color="gray.100">Warranties</Heading>
      <TableLoader />
    </Box>
  );

  if (error) return (
    <Box p={8}>
      <Heading color="red.500">{error}</Heading>
    </Box>
  );

  return (
    <Box p={8}>
      <Heading mb={6} color="gray.100">Warranties</Heading>

      <div className="flex items-center py-4">
        <Input
          placeholder="Search all fields..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
          color="gray.200"
        />
        <Menu>
          <MenuButton as={Button} variant="outline" className="ml-auto" color="gray.200">
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
                  />
                  {column.id}
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
      </div>

      <div className="rounded-md border border-gray-700 overflow-x-scroll">
        <ChakraTable>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th 
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                    color="gray.200"
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
              <Tr key={row.id} _hover={{ bg: "gray.800" }}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
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
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
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
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          color="gray.200"
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default Page; 