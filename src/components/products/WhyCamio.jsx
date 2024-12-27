import React from "react";
import ProductProp from "../props/ProductProp";
import Image from "next/image";
import {
  Box,
  Heading,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import tpuClearGlossCrop from "@/assets/tpuClearGlossCrop.jpg"
import tpuBlackGlossCrop from "@/assets/tpuBlackGlossCrop.jpg"
import tpuClearMatteCrop from "@/assets/tpuClearMatteCrop.jpg"
import tpuBlackMatteCrop from "@/assets/tpuBlackMatteCrop.jpg"
import tphClearGlossCrop from "@/assets/tphClearGlossCrop.jpg"
import tphClearMatteCrop from "@/assets/tpuClearMatteCrop.jpg"
import tphBlackGlossCrop from "@/assets/tpuBlackGlossCrop.jpg"
import tphColorGlossCrop from "@/assets/tphColorGlossCrop.jpg"

const WhyCamio = () => {
  // TPU Series Features
  const featuresTPU = [
    {
      number: 1,
      title: "Superior durability",
      description:
        "Best-in-class durability and flexibility for top-tier protection.",
    },
    {
      number: 2,
      title: "Corrosion-resistant",
      description:
        "High resistance to environmental damage and chemical corrosion.",
    },
    {
      number: 3,
      title: "Super Quality",
      description:
        "Ideal for luxury and high-end vehicles where aesthetics and protection matter equally.",
    },
  ];

  // TPH Series Features
  const featuresTPH = [
    {
      number: 1,
      title: "Cost-Effective",
      description:
        "Excellent value for customers seeking cost-effective protection.",
    },
    {
      number: 2,
      title: "Corrosion Shield",
      description:
        "Offers great performance with premium features like self-healing and hydrophobicity.",
    },
    {
      number: 3,
      title: "Reliable Quality",
      description:
        "Ideal for daily drivers or budget-conscious customers looking for reliable paint protection.",
    },
  ];

  // TPU Series Products
  const productsTpu = [
    {
      name: "Camio TPU Clear Gloss",
      image: tpuClearGlossCrop,
      id: 1,
      details:
        "This ultra-gloss film provides enhanced shine, self-healing, and water repellency. With a non-yellowing formula and 5-year warranty, it's ideal for luxury vehicles and easy to install on large surfaces.",
    },
    {
      name: "CAMIO TPU Black Gloss",
      image: tpuBlackGlossCrop,
      id: 2,
      details:
        "This high-gloss black film offers a bold finish, self-healing, and hydrophobic properties. With stain resistance, a non-yellowing formula, and a 5-year warranty, it’s ideal for dark or luxury vehicles and easy to apply to large areas.",
    },
    {
      name: "CAMIO TPU Clear Matte",
      image: tpuClearMatteCrop,
      id: 3,
      details:
        "This matte film provides a stealthy, non-reflective look with self-healing, hydrophobic, and non-yellowing properties. It offers long-lasting durability with a 5-year warranty, ideal for a modern, low-gloss aesthetic and large coverage areas.",
    },
    {
      name: "CAMIO TPU Black Matte",
      image: tpuBlackMatteCrop,
      id: 4,
      details:
        "This matte black film offers a sophisticated, non-reflective finish with self-healing and hydrophobic properties. It provides durable, non-yellowing protection with a 5-year warranty, ideal for a bold, modern appearance on high-end dark vehicles.",
    },
  ];

  // TPH Series Products
  const productsTph = [
    {
      name: "Camio TPH Clear Gloss",
      image: tphClearGlossCrop,
      id: 1,
      details:
        "Cost-effective gloss film with hydrophobic and durable properties for budget-conscious customers.",
    },
    {
      name: "CAMIO TPH Black Gloss",
      image: tphBlackGlossCrop,
      id: 2,
      details:
        "High-gloss black film with superior aesthetics and reliable protection at an affordable price.",
    },
    {
      name: "CAMIO TPH Color Gloss",
      image: tphColorGlossCrop,
      id: 3,
      details:
        "Add vibrant colors and gloss with this durable, cost-effective paint protection film.",
    },
    {
      name: "CAMIO TPH Clear Matte",
      image: tphClearMatteCrop,
      id: 4,
      details:
        "A matte finish offering a sleek, non-reflective look with excellent protection and durability.",
    }
    
  ];

  // Function to render the products
  const renderProducts = (products) => (
    <Flex justify="center" wrap="wrap" gap={0} p={1} maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
      {products.map((product) => (
        <Box
          key={product.id}
          width={{ base: "95%", sm: "45%", lg: "22%" }}
          height={{ base: "400px", lg: "355px" }}
          borderWidth="1px"
          borderRadius="20px"
          overflow="hidden"
          bg="#FFFFFF"
          transition="box-shadow 0.3s"
          m={2}
        >
          <Flex direction="column" height="100%">
            <Box className="overflow-hidden p-5 rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-2xl"
              />
            </Box>
            <Box minH="48px" px={5} mb={2} align="start" flex="1">
              <Heading fontSize="24px" fontWeight="600" m={0}>
                {product.name}
              </Heading>
            </Box>
            <Popover>
              <PopoverTrigger>
                <Flex justify="center" pb={4}>
                  <Button
                    variant="outline"
                    borderRadius="50px"
                    colorScheme="gray"
                    width="262px"
                    rightIcon={<HiChevronDown />}
                  >
                    See Details
                  </Button>
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{product.name}</PopoverHeader>
                <PopoverBody>{product.details}</PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
      ))}
    </Flex>
  );

  return (
    <Box width="100vw"px={{ base: 0, lg: 32 }} maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
      {/* TPU Series Section */}
      <Flex direction="column" align="center" justify="center" >
        <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }} >
          <ProductProp
            imageSrc={tpuClearGlossCrop}
            title="CAMIO Elite TPU Protection Series"
            description="When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF stands out as the ultimate solution."
            features={featuresTPU}
            flexDirection="flex"
          />
        </Box>

        <Box
          width="100%"
          p={4}
      
          // my={{ base: 0, lg: 12 }}
          py={{ base: 0, lg: 12 }}
          bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
          position="relative"
          borderRadius={14}
        >
          <Heading as="h1" size="xl" textAlign="center" mb={8} mt={4}>
            Available Products in TPU Series
          </Heading>
          {renderProducts(productsTpu)}
        </Box>
      </Flex>

      {/* TPH Series Section */}
      <Flex direction="column" align="center" justify="center" minHeight="80vh">
        <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
          <ProductProp
            imageSrc={tphClearGlossCrop}
            title="CAMIO Elite TPH Protection Series"
            description="For the ultimate protection of your vehicle's paintwork, CAMIO PPF is the standout choice."
            features={featuresTPH}
            flexDirection="flex"
          />
        </Box>

        <Box
          width="100%"
          p={4}
          my={{ base: 0, lg: 0 }}
          py={{ base: 0, lg: 12 }}
          bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
          position="relative"
          borderRadius={14}
        >
          <Heading as="h1" size="xl" textAlign="center" mb={8} mt={4}>
            Available Products in TPH Series
          </Heading>
          {renderProducts(productsTph)}
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyCamio;
