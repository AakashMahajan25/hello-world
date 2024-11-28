import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import topPicks1 from "../../assets/topPicks1.png";
import topPicks2 from "../../assets/topPicks2.png";
import topPicks3 from "../../assets/topPicks3.png";
import topPicks4 from "../../assets/topPicks4.png";
import topPicks5 from "../../assets/topPicks5.png";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import Button2 from "../props/Button";
import Link from "next/link";
// import AnimButton from "../components/props/Button";
import tpuMatte from "@/assets/products/newImages/tpuMatte.jpg"
import tphMatte from "@/assets/products/newImages/tphMatte.jpg"


const PremiumProtection = () => {
  return (
    <Box py={16} pt={{ base: 20, lg: 40 }}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 2, lg: 8 }} align="stretch">
          <Box textAlign={"center"}>
            <Button
              bg={"transparent"}
              margin={{ base: "auto", lg: 0 }}
              borderStyle={"solid"}
              borderRadius={"full"}
              fontWeight={500}
              fontSize={{ base: "12px", md: "14px" }} // Responsive font size
              _hover={{ bg: "transparent" }}
              borderWidth={"1px"}
              borderColor={"#E2E2E2"}
              cursor={"default"}
            >
              <Text pb={{ base: 0, lg: 0 }}>Unmatched Protection & Finish</Text>{" "}
              
            </Button>

            <Heading
              fontFamily=""
              fontSize={{ base: "30px", lg: "45px" }}
              fontWeight={600}
              mb={{ base: 2, lg: 4 }}
              mt={{ base: 2, lg:6 }}
              color="#010205"
            >
              Top Picks for Premium Protection
            </Heading>

            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              fontWeight={400}
              color="#000000"
              mb={6}
            >
              Explore our best-selling CAMIO PPF products, trusted for their
              unmatched protection and flawless finish.
            </Text>
          </Box>

          <Grid
            bgGradient="linear(96.56deg, rgba(158, 194, 194, 0.3) 27.8%, rgba(213, 203, 159, 0.3) 53.91%)"
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            p={{ base: 6, lg: 12 }}
            mb={10}
            borderRadius="3xl"
          >
            {/* First Product Card */}
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }}>
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight={600}
                    color="#111928"
                    pb={2}
                  >
                    CAMIO TPU Clear Gloss
                  </Text>

                  <Box
                    width="100%"
                    height="auto"
                    borderRadius="10px 0px 0px 0px"
                    overflow="hidden"
                  >
                    <Image
                      src={topPicks1}
                      alt="CAMIO TPU CLEAR GLOSS"
                      width="100%"
                      height="auto"
                      layout="responsive" // Ensures responsive behavior
                      objectFit="cover"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight={400}
                    color="#111928"
                    pt={4}
                    pb={6}
                  >
                    High gloss finish with self-healing protection—perfect for a
                    pristine look.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Second Product Card */}
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }}>
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight={600}
                    color="#111928"
                    pb={2}
                  >
                    CAMIO TPU Black Gloss
                  </Text>
                  <Box
                    width="100%"
                    height="auto"
                    borderRadius="10px 10px 10px 10px"
                    overflow="hidden"
                  >
                    <Image
                      src={topPicks2}
                      alt="CAMIO TPU Black Gloss"
                      width="100%"
                      height="auto"
                      layout="responsive" // Ensures responsive behavior
                      objectFit="cover"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight={400}
                    color="#111928"
                    pt={4}
                    pb={6}
                  >
                    Glossy black finish with top protection, ideal for standout
                    sports cars
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Third Product Card */}
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }}>
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight={600}
                    color="#111928"
                    pb={2}
                  >
                    CAMIO TPU Matte
                  </Text>
                  <Box
                    width="100%"
                    height="auto"
                    borderRadius="10px 10px 10px 10px"
                    overflow="hidden"
                  >
                    <Image
                      src={topPicks3}
                      alt="CAMIO TPU Matte"
                      width="100%"
                      height="auto"
                      layout="responsive" // Ensures responsive behavior
                      objectFit="cover"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight={400}
                    color="#111928"
                    pt={4}
                    pb={6}
                  >
                    Matte finish with self-healing, non-yellowing features,
                    ideal for luxury vehicles.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card
              bg="white"
              zIndex={'0'}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }} className=" lg:flex hidden justify-center items-center">
                <Link href={"/products"}>
                  <Button2>Find the Right PPF for You</Button2>
                </Link>
              </CardBody>
            </Card>

            {/* Fourth Product Card */}
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }}>
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight={600}
                    color="#111928"
                    pb={2}
                  >
                    CAMIO TPH Gloss
                  </Text>
                  <Box
                    width="100%"
                    height="auto"
                    borderRadius="10px 10px 10px 10px"
                    overflow="hidden"
                  >
                    <Image
                      src={topPicks4}
                      alt="CAMIO TPH Gloss"
                      width="100%"
                      height="auto"
                      layout="responsive" // Ensures responsive behavior
                      objectFit="cover"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight={400}
                    color="#111928"
                    pt={4}
                    pb={6}
                  >
                    Affordable gloss finish with 3-year warranty, great
                    protection for everyday vehicles.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Fifth Product Card */}
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={{ base: "15px", md: "25px", lg: "30px" }}>
                <VStack align="start" spacing={2}>
                  <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight={600}
                    color="#111928"
                    pb={2}
                  >
                    CAMIO TPH Matte
                  </Text>
                  <Box
                    width="100%"
                    height="auto"
                    borderRadius="10px 10px 10px 10px"
                    overflow="hidden"
                  >
                    <Image
                      src={topPicks5}
                      alt="CAMIO TPU Clear Gloss"
                      width="100%"
                      height="auto"
                      layout="responsive" // Ensures responsive behavior
                      objectFit="cover"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight={400}
                    color="#111928"
                    pt={4}
                    pb={6}
                  >
                    Subtle, durable protection with a sleek, matte finish.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </Grid>
        </VStack>
      </Container>
      <Box
        display={{ base: "flex", md: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
      >
        <Link href={"/products"}>
          <Button2>Find the Right PPF for You</Button2>
        </Link>
      </Box>
    </Box>
  );
};

export default PremiumProtection;
