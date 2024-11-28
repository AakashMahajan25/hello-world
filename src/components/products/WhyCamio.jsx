import React from "react";
import ProductProp from "../props/ProductProp";
import Image from "next/image";
import {
  Box,
  Heading,
  Button,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import whycamio1 from "../../assets/whyCamio1.png";
import eliteTpu from "@/assets/products/newImages/eliteTpu.jpg";
import eliteTph from "@/assets/products/newImages/eliteTph.jpg";

const WhyCamio = ({ products }) => {
  const features = [
    {
      title: "Superior Protection, Stunning Finish",
      description:
        "Engineered to shield and elevate your vehicle's appearance effortlessly.",
    },
    {
      title: "Precision-Crafted for Maximum Durability",
      description:
        "CAMIO PPF ensures lasting protection and an impeccable look for every journey.",
    },
  ];

  return (
    <Box
      width="100vw"
      height="auto"
      px={{ base: 0, lg: 32 }}
      maxW={{ "2xl": "1500px" }}
      mx={{ "2xl": "auto" }}
    >
      <Flex direction="column" align="center" justify="center" minHeight="90vh">
        <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
          <ProductProp
            imageSrc={eliteTpu}
            title="CAMIO Elite TPU Protection Series"
            description="When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF stands out as the ultimate solution."
            features={features}
            flexDirection="flex"
          />
        </Box>

        <Box
          width="100%"
          p={4}
          my={{ base: 0, lg: 12 }}
          py={{ base: 0, lg: 12 }}
          bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
          position="relative"
          borderRadius={14}
        >
          <Heading
            fontFamily=""
            as="h1"
            size="xl"
            textAlign="center"
            mb={8}
            mt={4}
          >
            Available Products in TPU Series
          </Heading>

          <Flex
            justify="center"
            wrap="wrap"
            gap={0}
            p={1}
            maxW={{ "2xl": "1500px" }}
            mx={{ "2xl": "auto" }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                width={{ base: "95%", sm: "45%", lg: "22%" }}
                height={{ base: "400px", lg: "355px" }}
                borderWidth="1px"
                borderRadius="20px 20px 20px 20px"
                overflow="hidden"
                bg="#FFFFFF"
                transition="box-shadow 0.3s"
                m={2}
              >
                <Flex direction="column" height="100%">
                  <Box className=" overflow-hidden p-5 rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="rounded-2xl"
                    />
                  </Box>

                  <Box minH="48px" px={5} mb={2} align="start" flex="1">
                    <Heading
                      fontFamily=""
                      fontSize="24px"
                      fontWeight="600"
                      m={0}
                    >
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
                      <PopoverFooter>
                        {/* <Button variant="outline" colorScheme="blue" width="full">
          Close
        </Button> */}
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>

      <Flex direction="column" align="center" justify="center" minHeight="80vh">
        <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
          <ProductProp
            imageSrc={eliteTph}
            title="CAMIO Elite TPU Protection Series"
            description="When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF stands out as the ultimate solution."
            features={features}
            flexDirection="flex"
          />
        </Box>

        <Box
          width="100%"
          p={4}
          my={{ base: 0, lg: 12 }}
          py={{ base: 0, lg: 12 }}
          bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
          position="relative"
          borderRadius={14}
        >
          <Heading
            fontFamily=""
            as="h1"
            size="xl"
            textAlign="center"
            mb={8}
            mt={4}
          >
            Available Products in TPU Series
          </Heading>

          <Flex
            justify="center"
            wrap="wrap"
            gap={0}
            p={1}
            maxW={{ "2xl": "1500px" }}
            mx={{ "2xl": "auto" }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                width={{ base: "95%", sm: "45%", lg: "22%" }}
                height={{ base: "400px", lg: "355px" }}
                borderWidth="1px"
                borderRadius="20px 20px 20px 20px"
                overflow="hidden"
                bg="#FFFFFF"
                transition="box-shadow 0.3s"
                m={2}
              >
                <Flex direction="column" height="100%">
                  <Box className="overflow-hidden p-5" borderRadius="2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="rounded-2xl" // Ensure the image gets the rounded corners
                    />
                  </Box>

                  <Box minH="48px" px={5} mb={2} align="start" flex="1">
                    <Heading
                      fontFamily=""
                      fontSize="24px"
                      fontWeight="600"
                      m={0}
                    >
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
                      <PopoverFooter>
                        {/* <Button variant="outline" colorScheme="blue" width="full">
          Close
        </Button> */}
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyCamio;
