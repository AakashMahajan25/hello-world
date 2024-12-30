import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading
} from "@chakra-ui/react";

const ComparisonTable = () => {
  return (
    <Box >
      <Heading
        as="h4"
        maxWidth={{base:"800px", lg:'1000px'}}
        mx={{base:"14px", lg:'auto'}}
     
        textAlign="center"
        fontSize={{ base: "xl", md: "3xl" }}
        color="gray.700"
        fontWeight="bold"
      >
        Not sure which CAMIO PPF is right for you? Use our comparison chart to find the best fit for your vehicle.
      </Heading>
      <TableContainer m={{base:2, lg:10}} maxW={{base:'100vw',lg:'98vw'}}>
        <Table variant="striped" >
          <Thead bg="gray">
            <Tr>
              <Th color="white">Feature</Th>
              <Th color="white">TPU Clear Gloss</Th>
              <Th color="white">TPU Black Gloss</Th>
              <Th color="white">TPU Clear Matte</Th>
              <Th color="white">TPU Black Matte</Th>
              <Th color="white">TPH Clear Gloss</Th>
              <Th color="white">TPH Clear Matte</Th>
              <Th color="white">TPH Black Gloss</Th>
              <Th color="white">TPH Color Gloss</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr bg="white">
              <Td fontWeight={"semibold"}>Finish Type</Td>
              <Td>High Gloss</Td>
              <Td>High Gloss</Td>
              <Td>Matte</Td>
              <Td>Matte</Td>
              <Td>High Gloss</Td>
              <Td>Matte</Td>
              <Td>High Gloss</Td>
              <Td>Gloss + Color</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Self-Healing Technology</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr bg="white">
              <Td fontWeight={"semibold"}>Hydrophobic Properties</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Total Film Thickness</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>160 microns</Td>
            </Tr>
            <Tr bg="white">
              <Td fontWeight={"semibold"}>Film Specification</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Durability</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>UV & Weather Resistance</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Stain Resistance</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Good</Td>
              <Td>Good</Td>
              <Td>Good</Td>
              <Td>Good</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>
                Elongation Rate at Break of Coating
              </Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Elongation Rate at Break</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Warranty</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Anti-Yellowing Guarantee</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Peeling Force</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Tensile Strength</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Ideal for Application</Td>
              <Td>Luxury, High-end</Td>
              <Td>Luxury, High-end</Td>
              <Td>Modern, Stealthy</Td>
              <Td>Bold, Modern</Td>
              <Td>Budget-friendly</Td>
              <Td>Budget-friendly</Td>
              <Td>Budget-friendly</Td>
              <Td>Stylish, Personalized</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComparisonTable;
