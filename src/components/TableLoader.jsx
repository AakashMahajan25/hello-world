import { Box, Spinner } from "@chakra-ui/react";

const TableLoader = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      w="100%" 
      p={8}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.700"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default TableLoader; 