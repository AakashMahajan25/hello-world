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
          <Thead bg="gray.200">
            <Tr>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>Feature</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPU Clear Gloss</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPU Black Gloss</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPU Clear Matte</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPU Black Matte</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPH Clear Gloss</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPH Clear Matte</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPH Black Gloss</Th>
              <Th color="black" fontSize={{lg:""}} py={{lg:4}}>TPH Color Gloss</Th>
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
            <Tr bg="white" >
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
            {/* <Tr bg="gray.50">
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
            </Tr> */}
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Elongation Rate at Break <span>(%)</span></Td>
              <Td>135(+-10)</Td>
              <Td>115(+-10)</Td>
              <Td>125(+-10)</Td>
              <Td>115(+-10)</Td>
              <Td>115(+-10)</Td>
              <Td>105(+-10)</Td>
              <Td>115(+-10)</Td>
              <Td>115(+-10)</Td>
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
              <Td fontWeight={"semibold"}>Peeling Force <span>(kgf/inch)</span> </Td>
              <Td>1.6(+-0.2)</Td>
              <Td>1.6(+-0.2)</Td>
              <Td>1.5(+-0.2)</Td>
              <Td>1.5(+-0.2)</Td>
              <Td>1.4(+-0.2)</Td>
              <Td>1.4(+-0.2)</Td>
              <Td>1.4(+-0.2)</Td>
              <Td>1.4(+-0.2)</Td>
            </Tr>
            <Tr bg="gray.50">
              <Td fontWeight={"semibold"}>Tensile Strength (kgf/inch) </Td>
              <Td>3.0(+-0.3)</Td>
              <Td>2.5(+-0.3)</Td>
              <Td>2.9(+-0.3)</Td>
              <Td>2.5(+-0.3)</Td>
              <Td>1.8(+-0.3)</Td>
              <Td>1.6(+-0.3)</Td>
              <Td>2.5(+-0.3)</Td>
              <Td>2.5(+-0.3)</Td>
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
