import React from "react";
import { Box, Text, Heading, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const TermsAndWarrantyPage = () => {
  return (
    <Box p={8} maxW="800px" mx="auto" bg="gray.50" borderRadius="lg" boxShadow="lg" mb={{base:0, lg:'120px'}} mt={{base:0, lg:'40px'}}>
      {/* Header */}
      <VStack spacing={4} mb={8}>
        <Heading as="h1" size="lg" color="yellow.600">
          Terms and Warranty Policies
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Please read our policies carefully to understand your rights and obligations.
        </Text>
      </VStack>

      {/* Warranty Policies */}
      <VStack spacing={6} align="start">
        <Heading as="h2" size="md" color="yellow.500">
          Warranty Policies
        </Heading>

        <Text>
          <b>Warranty Coverage:</b> CAMIO PPF ensures the highest quality standards and offers the following protections
          through the authorized dealer or installer:
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- <b>Durability:</b> Film will not crack, peel, or bubble under proper maintenance.</Text>
          <Text>- <b>Adhesion:</b> No blistering, bubbling, or delaminating under normal conditions.</Text>
          <Text>- <b>Appearance:</b> Protection against discoloration or staining over time.</Text>
        </VStack>

        <Text>
          <b>Warranty Period:</b>
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- TPU Series: 5 years from the installation date.</Text>
          <Text>- TPH Series: 3 years from the installation date.</Text>
        </VStack>

        <Text>
          <b>Conditions for Validity:</b> Warranty is non-transferable and applicable only to the original purchaser.
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Coverage is valid only for installations on OEM-painted surfaces.</Text>
          <Text>- Warranty is void if the vehicle surface is repainted or if the film is removed, tampered with, or abused.</Text>
          <Text>
            - CAMIO PPF must be installed by a certified professional using recommended techniques and stored
            appropriately before application.
          </Text>
        </VStack>

        <Text>
          <b>Liability for Warranty Claims:</b>
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- CAMIO PPF, as a brand, is not directly liable for warranty claims.</Text>
          <Text>
            - The authorized dealer or installer who applied the film is fully responsible for addressing and resolving
            warranty claims.
          </Text>
          <Text>
            - Any material or product replacement due to defects will be handled by the dealer or installer. Labour
            costs or additional warranties offered by dealers are not covered under this policy.
          </Text>
        </VStack>

        <Text>
          <b>What Is Covered:</b>
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Staining, or fading due to environmental exposure.</Text>
          <Text>- Delamination, blistering, or bubbling due to material failure.</Text>
          <Text>- Cracks or crazing caused by manufacturing defects.</Text>
        </VStack>

        <Text>
          <b>What Is Not Covered:</b>
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Damage caused by improper care, accidents, or misuse (e.g., sandstorms, hail, falling objects).</Text>
          <Text>- Scratches, dents, or wear resulting from collisions, vandalism, or negligence.</Text>
          <Text>- Use of abrasive cleaners, chemicals, or caustic materials.</Text>
          <Text>- Damage from extreme thermal conditions or non-automotive applications.</Text>
          <Text>- Water spots or minor aesthetic imperfections like stains or rail dust.</Text>
          <Text>- Installations on non-OEM surfaces or by unauthorized professionals.</Text>
        </VStack>

        <Text>
          <b>Claim Process:</b>
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Claims must be initiated through the authorized CAMIO PPF installer or dealer.</Text>
          <Text>- Submit proof of purchase, warranty certificate, and installation details.</Text>
          <Text>
            - Upon verification, the authorized dealer will replace the defective material (labour costs not included).
          </Text>
          <Text>
            - CAMIO PPF will not entertain claims directly and is not responsible for any additional warranties offered
            by dealers or installers.
          </Text>
        </VStack>

        <Text>
          <b>Limitation of Liability:</b> CAMIO PPF’s liability is limited to providing the product. The company is not
          responsible for:
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Labour costs associated with removal or reinstallation.</Text>
          <Text>- Consequential damages, loss of use, or any incidental losses.</Text>
          <Text>- Claims arising from improper installation or maintenance.</Text>
        </VStack>

        <Text>
          <b>Warranty Disclaimer:</b> CAMIO PPF does not authorize modifications or extensions to this warranty. Any
          misuse, intentional or unintentional damage, or failure to follow recommended care instructions voids the
          warranty.
        </Text>

        <Text>
          <b>Care Instructions:</b> To maintain the warranty, follow proper care guidelines:
        </Text>
        <VStack pl={4} spacing={2} align="start">
          <Text>- Clean the film with non-abrasive, pH-neutral products.</Text>
          <Text>- Avoid harsh chemicals, solvents, or excessive pressure during washing.</Text>
          <Text>- Protect the film from sharp objects and intentional damage.</Text>
        </VStack>

      
      </VStack>
    </Box>
  );
};

export default TermsAndWarrantyPage;
